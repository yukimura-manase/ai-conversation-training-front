import { RibbonIcon } from "@/components/shared/ui-elements/icons/RibbonIcon";
import { CSSProperties } from "react";

interface KimeraCardProps {
  cardType: "personality" | "quirks" | "hobbies";
  description: string;
  wrapperStyles?: CSSProperties;
}

export const KimeraProfileCard = ({
  description,
  cardType,
  wrapperStyles,
}: KimeraCardProps) => {
  let title = "";
  let subTitle = "";
  switch (cardType) {
    case "personality":
      title = "性格";
      subTitle = "PERSONALITY";
      break;
    case "quirks":
      title = "性癖";
      subTitle = "QUIRKS";
      break;
    case "hobbies":
      title = "趣味";
      subTitle = "HOBBIES";
      break;
  }

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
            display: "flex",
            gap: "8px",
            alignItems: "flex-end",
          }}
        >
          <h3
            style={{
              fontSize: "24px",
              color: "#fff",
              fontWeight: 700,
            }}
          >
            {title}
          </h3>
          <h4
            style={{
              fontSize: "16px",
              color: "#fff",
              fontWeight: 700,
            }}
          >
            {subTitle}
          </h4>
        </div>
      </div>

      {/* 説明文 */}
      <div
        style={{
          marginTop: "40px",
        }}
      >
        {description}
      </div>
    </div>
  );
};
