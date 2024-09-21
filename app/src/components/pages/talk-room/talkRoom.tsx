"use client";
import { useParams } from "next/navigation";
import { Loading } from "@/components/shared/ui-elements/loading/Loading";
import { Kimera } from "@/store/mock-data/kimera";
import { KimeraAvatar } from "./parts/KimeraAvatar";
import { KimeraProfileCard } from "./parts/KimeraProfileCard";
import talkRoomTitleStyles from "./talkRoom.module.css";
import { VoiceInputIcon } from "@/components/shared/ui-elements/icons/VoiceInputIcon";
import { BarIcon } from "@/components/shared/ui-elements/icons/BarIcon";

export const TalkRoomPage = () => {
  const params = useParams();
  console.log("params", params);

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
          <VoiceInputIcon />
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
