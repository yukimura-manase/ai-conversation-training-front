import { useParams } from "next/navigation";

export const TalkRoomPage = () => {
  const params = useParams();
  console.log("params", params);

  // const kimeraId = params.kimeraId;
  // console.log("kimeraId", kimeraId);

  return (
    <div>
      <h1>
        {/* {kimeraId} */}
        のキメラとの会話
      </h1>
    </div>
  );
};
