import styles from "./style.module.css";
import { useRouter } from "next/navigation";
import { VoiceInputIcon } from "@/components/shared/ui-elements/icons/VoiceInputIcon";
import { VoiceInputStopIcon } from "@/components/shared/ui-elements/icons/VoiceInputStopIcon";

type VoiceInputButtonProps = {
  isRecording: boolean;
  handleToggleRecording: () => void;
};

export const VoiceInputToggleButton = ({
  isRecording,
  handleToggleRecording,
}: VoiceInputButtonProps): JSX.Element => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {isRecording ? (
        // Button for stopping recording
        <button
          onClick={() => {
            handleToggleRecording();
          }}
          className={styles.stop}
        >
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <VoiceInputStopIcon />
          </span>
        </button>
      ) : (
        // Button for starting recording
        <button
          onClick={() => handleToggleRecording()}
          className={styles.start}
        >
          <VoiceInputIcon />
        </button>
      )}
    </div>
  );
};
