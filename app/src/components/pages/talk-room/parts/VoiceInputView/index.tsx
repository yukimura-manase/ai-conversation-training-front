import styles from "./style.module.css";

type VoiceInputViewProps = {
  isRecording: boolean;
  recordingComplete: boolean;
  transcript: string;
};

export const VoiceInputView = ({
  isRecording,
  recordingComplete,
  transcript,
}: VoiceInputViewProps): JSX.Element => {
  return (
    <>
      {(isRecording || transcript) && (
        <div className={styles.container}>
          <div className={styles.messageOuter}>
            <div className={styles.messageInner}>
              <p className={styles.recordingMessage}>
                {recordingComplete ? "録音終了" : "録音中..."}
              </p>
              <p className={styles.recordingMessage + "text-muted-foreground"}>
                {recordingComplete ? "意味を解読中..." : "準備OKです。"}
              </p>
            </div>
            {isRecording && (
              // i can't use animation in css modules
              <div className="rounded-full w-4 h-4 bg-red-400 animate-pulse" />
            )}
          </div>

          {transcript && (
            <div className={styles.transcript}>
              <p className="mb-0">{transcript}</p>
            </div>
          )}
        </div>
      )}
    </>
  );
};
