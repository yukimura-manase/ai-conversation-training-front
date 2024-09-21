import { CSSProperties } from "react";

/** Propsの型定義 */
interface PropsType {
  style?: CSSProperties;
  color?: string;
}

export const RibbonIcon = (props: PropsType) => {
  return (
    <svg
      width="203"
      height="41"
      viewBox="0 0 203 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={props.style ? props.style : undefined}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M202.464 0L180 20.5L202.464 41H0V0H202.464Z"
        fill={props.color ? props.color : "#FABE00"}
      />
    </svg>
  );
};
