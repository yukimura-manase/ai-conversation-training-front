"use client";
import { Fragment } from "react";
import { useParams } from "next/navigation";
import { Loading } from "@/components/shared/ui-elements/loading/Loading";
import { KimeraAvatar } from "./parts/KimeraAvatar";
import { KimeraProfileCard } from "./parts/KimeraProfileCard";
import talkRoomTitleStyles from "./talkRoom.module.css";
import { BarIcon } from "@/components/shared/ui-elements/icons/BarIcon";
import { VoiceInputToggleButton } from "./parts/VoiceInputToggleButton";
import { useSpeechRecognition } from "./hooks/useSpeechRecognition";
import { VoiceInputView } from "./parts/VoiceInputView";
import { BasicButton } from "@/components/shared/ui-elements/buttons/BasicButton";
import { KimeraList } from "@/constants/KimeraData";
import { useProxy } from "valtio/utils";
import { voiceInputStates } from "@/stores/voiceInput";
import { talkStates, talkActions } from "@/stores/talkLog";
import { KimeraAnswerCard } from "./parts/KimeraAnswerCard";

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
  // console.log("kimeraId", kimeraId);

  // キメラの情報を取得する
  const Kimera = KimeraList.find((kimera) => kimera.kimeraId === kimeraId);

  // 音声入力のState
  const voiceInputStatesProxy = useProxy(voiceInputStates);

  // 会話の結果(質問と回答)
  const talkStatesProxy = useProxy(talkStates);

  return (
    <Fragment>
      {Kimera ? (
        <div>
          {/* Talk Room Main Container */}
          <div className={talkRoomTitleStyles.talkRoomMainWrapper}>
            {/* キメラの名前 & BarIcon & アバター */}
            <div
              style={{
                marginTop: "20px",
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
            </div>

            {/* キメラ・アバター */}
            <div className={talkRoomTitleStyles.kimeraCenter}>
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

              {/* AIに質問する & 会話を採点してもらう Button */}
              <div
                style={{
                  marginTop: "20px",
                  display: "flex",
                  justifyContent: "center",
                  gap: "20px",
                }}
              >
                <BasicButton
                  btnId={"askAI"}
                  text={`${Kimera.name}に質問する`}
                  btnColor={
                    voiceInputStatesProxy.transcript !== ""
                      ? "#59B9C6"
                      : "#d3dbe2"
                  }
                  callBack={() => {
                    console.log(`${Kimera.name}に質問する`);
                    talkActions.generateAiAnswer(
                      Kimera.kimeraId,
                      voiceInputStatesProxy.transcript
                    );
                  }}
                />

                <BasicButton
                  btnId={"askAI"}
                  text={`会話を採点してもらう`}
                  btnColor={
                    talkStatesProxy.talkLogs.length > 0 ? "#EA5408" : "#d3dbe2"
                  }
                  callBack={() => {
                    console.log("AIに会話を採点してもらう！");
                    // TODO: AIに会話を採点してもらう処理を実装する
                  }}
                />
              </div>
            </div>
          </div>

          {/* キメラの 性格, 性癖, 趣味 */}
          <KimeraProfileCard
            cardType={"personality"}
            description={Kimera.personality}
            wrapperStyles={{
              position: "absolute",
              top: "50px",
              left: "100px",
            }}
          />
          <KimeraProfileCard
            cardType={"quirks"}
            description={Kimera.quirks}
            wrapperStyles={{
              position: "absolute",
              bottom: "100px",
              left: "100px",
            }}
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

          {/* AIの回答 */}
          {talkStatesProxy.aiAnswer !== "" ? (
            <KimeraAnswerCard
              kimeraName={Kimera.name}
              answerText={talkStatesProxy.aiAnswer}
              wrapperStyles={{
                position: "absolute",
                top: "50px",
                right: "100px",
              }}
            />
          ) : (
            <div>
              {/* キメラのSpec を表示する */}
              <img
                src={Kimera.spec_url}
                alt={`${Kimera.name}のスペック`}
                style={{
                  position: "absolute",
                  top: "50px",
                  right: "100px",
                }}
              />
            </div>
          )}
        </div>
      ) : (
        <div>キメラが見つかりません</div>
      )}
    </Fragment>
  );
};
