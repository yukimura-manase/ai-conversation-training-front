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

const data = [
  { subject: "笑顔度", A: 120, fullMark: 150 },
  { subject: "コミュニケーションの明確さ", A: 98, fullMark: 150 },
  { subject: "流れのスムーズさ", A: 86, fullMark: 150 },
  { subject: "会話のトーンとマナー", A: 99, fullMark: 150 },
  {
    subject: "相互理解・仲良くなれたScore(AIによる好感度)",
    A: 85,
    fullMark: 150,
  },
];
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
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" style={style.graph_text} />
                <PolarRadiusAxis angle={30} domain={[0, 150]} />
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
        <div>
          説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト
        </div>
      </div>
      <div className="flex">
        <div style={style.bottom_text}>相互理解・仲良くなれたScore</div>
        <div style={style.percent}>1</div>
        <div style={style.percent}>%</div>
      </div>
    </div>
  );
};
