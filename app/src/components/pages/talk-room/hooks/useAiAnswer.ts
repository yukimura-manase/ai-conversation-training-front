import { useEffect, useState } from "react";
import { synthesizeSpeech } from "@/lib/voiceVoxClient";
import { ChatChainLLM } from "@/lib/openAiLangChain";

/**
 * AIの回答を生成するカスタムフック
 *
 * 1. ユーザーの入力に対して、AIが回答を生成する(文章生成)
 * 2. 生成された回答を音声合成して、音声ファイルを生成する(音声生成)
 */
export const useAiAnswer = () => {
  // ローディング中かどうか (画像生成, 音声生成が終わるまでの間、ローディング)
  // Default: true
  const [isAiAnswerLoading, setIsAiAnswerLoading] = useState(true);

  const [aiAnswer, setAiAnswer] = useState<string>("");

  // AIによる回答を生成する (文章生成)
  const generateAiAnswerTest = async (text: string) => {
    console.log("generateDescription", text);
    console.log(
      "process.env.NEXT_PUBLIC_OPEN_AI_API_KEY",
      process.env.NEXT_PUBLIC_OPEN_AI_API_KEY
    );

    try {
      // const service = createWordMeaningService(
      //   process.env.NEXT_PUBLIC_OPEN_AI_API_KEY ?? ""
      // );
      // const meaning = await service.getMeaning(text);
      // setAiAnswer(meaning.value);
      // return meaning;
    } catch (error) {
      console.error("Error generating description", error);
    }
  };

  // 音声ファイル Blob, URL
  const [audioData, setAudioData] = useState<Blob | undefined>(undefined);
  const [audioUrl, setAudioUrl] = useState<string>("");

  // 音声を生成する (音声生成)
  const generateAudio = async (description: string) => {
    try {
      const audioBlob = await synthesizeSpeech(description);
      setAudioData(audioBlob);
      const url = URL.createObjectURL(audioBlob);
      setAudioUrl(url);
    } catch (error) {
      console.error("Error generating audio", error);
    }
  };

  // 画像生成, 音声生成は、並列・非同期で実行
  const generateAll = async (word: string, description: string) => {
    // setIsLoading(true);
    // await Promise.all([generateImage(word), generateAudio(description)]);
    // setIsLoading(false);
  };
  // 初回レンダリング時に、まずは文章生成を実行する
  // 文章生成が終わったら、画像生成, 音声生成を実行する
  // useEffect(() => {
  //   generateDescription(transcript).then((meaning) => {
  //     console.log("meaning", meaning);
  //     meaning && generateAll(meaning.word, meaning.value);
  //   });
  // }, []);

  return {
    isAiAnswerLoading,
    audioData,
    audioUrl,
  };
};
