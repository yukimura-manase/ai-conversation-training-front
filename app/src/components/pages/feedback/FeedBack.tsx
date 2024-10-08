import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/shared/ui/card";

import { useProxy } from "valtio/utils";
import { voiceInputStates } from "@/stores/voiceInput";
import { talkStates, talkActions } from "@/stores/talkLog";
import { Loading } from "@/components/shared/ui-elements/loading/Loading";
import { useEffect, useState } from "react";

const style = {
  title_text: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "66px",
    lineHeight: "150%",
    letterSpacing: "-0.022em",
    color: "#171B1D",
  },
  sub_text: {
    fontFamily: "Noto Sans",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "30px",
    lineHeight: "150%",
    letterSpacing: "-0.022em",
    color: "#171B1D",
  },
  graph_text: {
    fontFamily: "Noto Sans",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "20px",
    lineHeight: "150%",
    letterSpacing: "-0.022em",
    color: "#1E1E1E",
  },
  bottom_text: {
    fontFamily: "Noto Sans",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "33px",
    lineHeight: "150%",
    letterSpacing: "-0.022em",
    color: " #1E1E1E",
    marginRight: "10px",
  },
  percent: {
    fontFamily: "Noto Sans",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "33px",
    lineHeight: "150%",
    letterSpacing: "-0.022em",
    color: "#E65408",
  },
};

export const FeedBackPage = () => {
  const talkStatesProxy = useProxy(talkStates);
  const aiTalkFeedBack = talkStatesProxy.aiTalkFeedBack;

  console.log("aiTalkFeedBack", aiTalkFeedBack);

  // グラフ表示用のデータ
  const [graphDataSet, setGraphDataSet] = useState<any>([]);

  useEffect(() => {
    // フィードバックデータがある場合は、グラフデータを作成する
    if (Object.keys(aiTalkFeedBack).length > 0) {
      console.log("aiTalkFeedBack", aiTalkFeedBack);
      setGraphDataSet([
        {
          subject: "コミュニケーションの明確さ",
          A: aiTalkFeedBack.clearConversationRating,
          fullMark: 100,
        },
        {
          subject: "流れのスムーズさ",
          A: aiTalkFeedBack.smoothRating,
          fullMark: 100,
        },
        {
          subject: "会話のトーンとマナー",
          A: aiTalkFeedBack.mannerRating,
          fullMark: 100,
        },
        { subject: "笑顔度", A: aiTalkFeedBack.smileRating, fullMark: 100 },
        {
          subject: "AIによる好感度",
          A: aiTalkFeedBack.likeRating,
          fullMark: 100,
        },
      ]);
      console.log("graphDataSet", graphDataSet);
    }
  }, [aiTalkFeedBack]);

  //後で正しく型定義し直します。
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const CustomTick = (props: any) => {
    const { payload, x, y, textAnchor } = props;

    if (graphDataSet.length > 0) {
      const score = graphDataSet[payload.index].A;
      return (
        <g transform={`translate(${x},${y})`}>
          <text x={0} y={0} dy={-10} textAnchor={textAnchor} fill="#666">
            {payload.value}
          </text>
          <text x={0} y={10} dy={0} textAnchor={textAnchor} fill="#666">
            {`${score}%`}
          </text>
        </g>
      );
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-8">
      <div className="text-center">
        <div style={style.title_text}>YOUR COMMUNICATION</div>
        <div style={style.sub_text}>コミュニケーション評価</div>
        <div className="inline-block">
          <svg
            width="120"
            height="10"
            viewBox="0 0 120 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="120" height="10" fill="#FABE00" />
          </svg>
        </div>
      </div>

      <div>
        {aiTalkFeedBack && graphDataSet.length > 0 ? (
          <div>
            <Card>
              <CardHeader>
                <CardTitle>総合評価</CardTitle>
                <CardDescription>
                  あなたの会話力を５つの観点から評価します。
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart
                      cx="50%"
                      cy="50%"
                      outerRadius="80%"
                      data={graphDataSet}
                    >
                      <PolarGrid />
                      {graphDataSet.length > 0 && (
                        <PolarAngleAxis
                          dataKey="subject"
                          style={style.graph_text}
                          tick={<CustomTick />}
                        />
                      )}

                      <PolarRadiusAxis angle={30} domain={[0, 100]} />
                      <Radar
                        name="Ratings"
                        dataKey="A"
                        stroke="#8884d8"
                        fill="#8884d8"
                        fillOpacity={0.6}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            <div>
              <CardHeader>
                <CardTitle>AIのフィードバック:</CardTitle>
              </CardHeader>
              <div>{aiTalkFeedBack.feedback}</div>
            </div>
            <div className="flex">
              <div style={style.bottom_text}>相互理解・仲良くなれたScore</div>
              <div style={style.percent}>{aiTalkFeedBack.likeRating}</div>
              <div style={style.percent}>%</div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <Loading />
          </div>
        )}
      </div>
    </div>
  );
};
