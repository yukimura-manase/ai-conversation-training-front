"use client";
import { useEffect, useRef } from "react";
import { RibbonIcon } from "@/components/shared/ui-elements/icons/RibbonIcon";
import { CSSProperties } from "react";
import { useProxy } from "valtio/utils";
import { talkStates } from "@/stores/talkLog";
import { Loading } from "@/components/shared/ui-elements/loading/Loading";

interface KimeraAnswerCardProps {
  kimeraName: string;
  answerText: string;
  wrapperStyles?: CSSProperties;
}

export const KimeraAnswerCard = ({
  kimeraName,
  answerText,
  wrapperStyles,
}: KimeraAnswerCardProps) => {
  // 会話の結果(質問と回答)
  const talkStatesProxy = useProxy(talkStates);

  // 音声再生用の ref
  const audioRef = useRef(null);
  useEffect(() => {
    console.log("audioData Updated");
    console.log("audioRef", audioRef);

    if (talkStatesProxy.audioData && audioRef.current) {
      console.log("音声ファイルを再生する");

      // 音声ファイルを再生する
      // @ts-ignore
      audioRef.current.play();
    }
  }, [talkStatesProxy.audioData]);

  return (
    <div
      className="w-[300px] h-[342px] p-[20px] bg-[#f2f2f2] rounded-[20px] shadow-md transition-transform duration-200 ease-in-out transform hover:scale-105"
      style={wrapperStyles ? wrapperStyles : undefined}
    >
      {/* リボン & タイトル・サブタイトル */}
      <div
        style={{
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
          }}
        >
          <RibbonIcon />
        </div>

        {/* タイトル & サブタイトル */}
        <div
          style={{
            position: "absolute",
            top: "5px",
            left: "5px",
            display: "flex",
            gap: "8px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h3
            style={{
              fontSize: "24px",
              color: "#fff",
              fontWeight: 700,
            }}
          >
            {`回答`}
          </h3>
          <h4
            style={{
              fontSize: "16px",
              color: "#fff",
              fontWeight: 700,
            }}
          >
            {`${kimeraName}`}
          </h4>
        </div>
      </div>

      {/* 回答文 */}
      <div
        style={{
          marginTop: "70px",
        }}
      >
        {answerText}
      </div>

      {/* 音声再生用の Audio タグ */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {talkStatesProxy.audioData ? (
          <audio
            // ref={audioRef}
            controls
            src={
              talkStatesProxy.audioUrl ? talkStatesProxy.audioUrl : undefined
            }
            style={
              {
                // display: "none",
              }
            }
          >
            {/* <source src={audioUrl ?? undefined} type="audio/mpeg" /> */}
          </audio>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};
