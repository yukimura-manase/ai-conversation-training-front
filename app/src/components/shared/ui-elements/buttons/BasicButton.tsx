import { CSSProperties } from "react";

/** Propsの型定義 */
interface PropsType {
  /** label タグと連携して Click 判定領域を拡張するための id */
  btnId: string;
  /** ボタンの表示 Text・ラベル */
  text: string;
  callBack: () => void;
  wrapperStyle?: CSSProperties;
  textStyle?: CSSProperties;
  btnStyle?: CSSProperties;
  btnColor?: string;
  /** SVG_Icon は JSX.Element として Component 定義したものを想定しています */
  svgIcon?: JSX.Element;
  /** Icon の Position は Default で左なので、右の場合は、こちらを true にする */
  isIconPositionRight?: boolean;
  width?: string;
  height?: string;
  textColor?: string;
  opacity?: string;
  addStyles?: CSSProperties;
  addTestStyles?: CSSProperties;
}

export const BasicButton = (props: PropsType) => {
  const {
    btnId,
    text,
    callBack,
    wrapperStyle,
    btnStyle,
    textStyle,
    btnColor,
    svgIcon,
    isIconPositionRight,
    width,
    height,
    textColor,
    addStyles,
    addTestStyles,
  } = props;

  /** Default の Btn Style */
  const defaultWrapperStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "5px",
    width: width ? width : "260px",
    height: height ? height : "60px",
    backgroundColor: btnColor ? btnColor : "#59B9C6",
    borderRadius: "20px",
    color: textColor ? textColor : "#fff",
    fontWeight: "600",
    cursor: "pointer",
    opacity: "1",
    ...addStyles,
  } as CSSProperties;

  /** Default の Btn Style */
  const defaultBtnStyle = {
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    outline: "none",
    padding: "0",
    appearance: "none",
  } as CSSProperties;

  /** Default の Text Style */
  const defaultTextStyle = {
    color: "white",
    fontWeight: "bold",
    ...addTestStyles,
  } as CSSProperties;

  return (
    <label
      htmlFor={btnId}
      style={wrapperStyle ? wrapperStyle : defaultWrapperStyle}
      onClick={() => callBack()}
      onKeyUp={() => callBack()}
    >
      {/* 左側_Iconの場合 */}
      {!isIconPositionRight && svgIcon && svgIcon}
      <button id={btnId} style={btnStyle ? btnStyle : defaultBtnStyle}>
        <span style={textStyle ? textStyle : defaultTextStyle}>{text}</span>
      </button>
      {/* 右側_Iconの場合 */}
      {isIconPositionRight && svgIcon && svgIcon}
    </label>
  );
};
