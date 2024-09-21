import { proxy } from "valtio";

interface VoiceInputStateType {
  isRecording: boolean;
  recordingComplete: boolean;
  transcript: string;
}

export const voiceInputStates = proxy<VoiceInputStateType>({
  isRecording: false,
  recordingComplete: false,
  // 録音結果
  transcript: "",
});

export const voiceInputActions = {
  setIsRecording: (isRecording: boolean) => {
    voiceInputStates.isRecording = isRecording;
  },
  setRecordingComplete: (recordingComplete: boolean) => {
    voiceInputStates.recordingComplete = recordingComplete;
  },
  setTranscript: (transcript: string) => {
    voiceInputStates.transcript = transcript;
  },
};
