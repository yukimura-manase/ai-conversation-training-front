import { CSSProperties } from "react";

/** Propsの型定義 */
interface PropsType {
  style?: CSSProperties;
  color?: string;
}

export const BarIcon = (props: PropsType) => {
  return (
    <svg
      width="120"
      height="10"
      viewBox="0 0 120 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={props.style ? props.style : undefined}
    >
      <rect
        width="120"
        height="10"
        fill={props.color ? props.color : "#FABE00"}
      />
    </svg>
  );
};
