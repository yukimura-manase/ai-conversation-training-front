"use client";
import { useParams } from "next/navigation";
import { Loading } from "@/components/shared/ui-elements/loading/Loading";
import { Kimera } from "@/store/mock-data/kimera";

export const TalkRoomPage = () => {
  const params = useParams();
  console.log("params", params);

  // Client Side Routing でパラメータを取得する
  if (!params) {
    return <Loading />;
  }

  const kimeraId = params.kimeraId;
  console.log("kimeraId", kimeraId);

  // TODO: キメラ情報を取得する処理を実装する

  return (
    <div>
      <h1>
        {kimeraId}
        のキメラとの会話
      </h1>
    </div>
  );
};
