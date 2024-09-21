"use client";
import { useParams } from "next/navigation";
import { Loading } from "@/components/shared/ui-elements/loading/Loading";
import { Kimera } from "@/store/mock-data/kimera";
import { KimeraAvatar } from "./parts/KimeraAvatar";
import { KimeraProfileCard } from "./parts/KimeraProfileCard";
import talkRoomTitleStyles from "./talkRoom.module.css";
import { VoiceInputIcon } from "@/components/shared/ui-elements/icons/VoiceInputIcon";
import { BarIcon } from "@/components/shared/ui-elements/icons/BarIcon";
import { VoiceInputToggleButton } from "./parts/VoiceInputToggleButton";
import { useSpeechRecognition } from "./hooks/useSpeechRecognition";
import { VoiceInputView } from "./parts/VoiceInputView";
import { BasicButton } from "@/components/shared/ui-elements/buttons/BasicButton";

export const TalkRoomPage = () => {
  const params = useParams();
  console.log("params", params);

  const { isRecording, recordingComplete, transcript, handleToggleRecording } =
    useSpeechRecognition();

  // Client Side Routing でパラメータを取得する
  if (!params) {
    return <Loading />;
  }

  const kimeraId = params.kimeraId;
  console.log("kimeraId", kimeraId);

  return (
    <div>
      {/* Talk Room Main Container */}
      <div className={talkRoomTitleStyles.talkRoomMainWrapper}>
        {/* キメラの名前 & BarIcon & アバター */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            alignItems: "center",
          }}
        >
          <h1 className={talkRoomTitleStyles.talkRoomTitle}>
            {Kimera.name} とのトークルーム
          </h1>
          <BarIcon />

          {/* キメラ・アバター */}
          <KimeraAvatar name={Kimera.name} image_url={Kimera.image_url} />
        </div>

        {/* 音声入力 Block */}
        <div
          style={{
            position: "absolute",
            bottom: "50px",
          }}
        >
          {/* 音声入力内容 表示項目 */}
          <VoiceInputView
            isRecording={isRecording}
            recordingComplete={recordingComplete}
            transcript={transcript}
          />

          {/* 音声入力ボタン */}
          <VoiceInputToggleButton
            isRecording={isRecording}
            handleToggleRecording={handleToggleRecording}
          />

          {/* AIに質問する */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <BasicButton
              btnId={"askAI"}
              text={`${Kimera.name}に質問する`}
              callBack={() => {
                console.log("AIに質問を実行する");
                // TODO: AIに質問を実行する処理を実装する
              }}
            />
          </div>
        </div>
      </div>

      {/* キメラの 性格, 性癖, 趣味 */}
      <KimeraProfileCard
        cardType={"personality"}
        description={Kimera.personality}
        wrapperStyles={{ position: "absolute", top: "100px", left: "100px" }}
      />
      <KimeraProfileCard
        cardType={"quirks"}
        description={Kimera.quirks}
        wrapperStyles={{ position: "absolute", bottom: "100px", left: "100px" }}
      />
      <KimeraProfileCard
        cardType={"hobbies"}
        description={Kimera.hobbies}
        wrapperStyles={{
          position: "absolute",
          bottom: "100px",
          right: "100px",
        }}
      />
    </div>
  );
};
