import { proxy } from "valtio";
import { voiceInputStates } from "./voiceInput";
import { synthesizeSpeech } from "@/lib/voiceVoxClient";
import { ChatChainLLM } from "@/lib/openAiLangChain";
import { KimeraList } from "@/constants/KimeraData";
import axios, { AxiosResponse } from "axios";

// 会話ログの型定義
interface talkLogType {
  chatRoomId: number;
  userTalk: string;
  aiTalk: string;
}

// AIによる会話の総合評価・フィードバック
interface AiFeedBackType {
  feedback: string;
  smileRating: number;
  clearConversationRating: number;
  smoothRating: number;
  mannerRating: number;
  likeRating: number;
}

interface AnswerStateType {
  aiAnswer: string;
  isAiAnswerLoading: boolean;
  talkLogs: talkLogType[];
  audioData: Blob | undefined;
  audioUrl: string;
  aiTalkFeedBack: AiFeedBackType;
}

export const talkStates = proxy<AnswerStateType>({
  aiAnswer: "",
  isAiAnswerLoading: false,
  talkLogs: [],
  audioData: undefined,
  audioUrl: "",
  aiTalkFeedBack: {} as AiFeedBackType,
});

export const talkActions = {
  // ユーザーの入力に対して、AIが回答を生成する(文章生成)
  generateAiAnswer: async (kimeraId: string, userTalk: string) => {
    try {
      // Loading開始
      talkStates.isAiAnswerLoading = true;

      // AIによる回答を生成する (文章生成)
      const chatLLMAnswer = await ChatChainLLM(
        voiceInputStates.transcript,
        talkActions.generateCustomPrompt(kimeraId)
      );
      console.log("chatLLMAnswer", chatLLMAnswer);

      // AIの回答をセットする
      talkStates.aiAnswer = chatLLMAnswer;

      // 会話ログを保存するAPIをCallする
      await axios.post(
        "http://localhost:3000/talk_logs",
        {
          chatRoomId: Number(kimeraId), // キメラID を Number 化したものを ChatRoomID とする
          userTalk,
          aiTalk: chatLLMAnswer,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // 会話ログを保存する
      talkStates.talkLogs.push({
        chatRoomId: Number(kimeraId), // キメラID を Number 化したものを ChatRoomID とする
        userTalk: userTalk,
        aiTalk: chatLLMAnswer,
      });

      // 生成された回答を音声合成して、音声ファイルを生成する(音声生成)
      talkActions.generateAudio(chatLLMAnswer);

      // Loading終了
      talkStates.isAiAnswerLoading = false;
    } catch (error) {
      console.error("Error generating description", error);
    }
  },

  // キメラの情報を元に、カスタムプロンプトを生成する
  generateCustomPrompt: (kimeraId: string) => {
    // ターゲット・キメラの情報を取得する
    const targetKimera = KimeraList.find(
      (kimera) => kimera.kimeraId === kimeraId
    );
    if (targetKimera) {
      const customPrompt = `あなたは、${targetKimera.name}という人物です。
        プロの会話コーチとして、ユーザーからの質問に答えることや、話すことが得意です。
        ユーザーの質問や会話に対して、適切な回答を提供することができます。
        また、あなたは、次のような特徴を持っています。
        ・性格：${targetKimera.personality}
        ・性癖：${targetKimera.quirks}
        ・趣味：${targetKimera.hobbies}
        ・100文字以内で、回答を作成します。
      `;
      return customPrompt;
    }
    return `
      あなたは、プロの会話コーチとして、ユーザーからの質問に答えることや、話すことが得意です。
      ユーザーの質問や会話に対して、100文字以内で、適切な回答を提供することができます。
    `;
  },

  // 生成された回答を音声合成して、音声ファイルを生成する(音声生成)
  generateAudio: async (description: string) => {
    try {
      const audioBlob = await synthesizeSpeech(description);
      talkStates.audioData = audioBlob;
      const url = URL.createObjectURL(audioBlob);
      talkStates.audioUrl = url;
    } catch (error) {
      console.error("Error generating audio", error);
    }
  },

  // AIが作成するフィードバックの解析
  parseDataString: (dataString: string) => {
    // 改行を削除
    dataString = dataString.replace(/\n/g, "");
    // 先頭と末尾の空白を削除
    dataString = dataString.trim();
    // キーに引用符を追加
    dataString = dataString.replace(/([a-zA-Z0-9_]+)\s*:/g, '"$1":');
    // 有効なJSONとしてパース
    let obj = JSON.parse(dataString);
    return obj;
  },

  // AIによる会話の総合評価・フィードバックを取得する
  getAiTalkFeedBack: async (chatRoomId: number) => {
    try {
      // TODO: 総合評価APIを叩く処理を実装する
      const response = await axios.get(
        `http://localhost:3000/ai_feedback/${chatRoomId}`
      );

      console.group("AIによる会話の総合評価・フィードバックを取得する");
      console.log("response", response);
      console.log("response.data", response.data);
      console.log("response.data.feedback", response.data.feedback);
      console.groupEnd();

      const parseResult = talkActions.parseDataString(response.data.feedback);
      console.log("parseResult", parseResult);

      talkStates.aiTalkFeedBack = parseResult;
    } catch (error) {
      console.error("Error getAiTalkFeedBack", error);
    }
  },
};
