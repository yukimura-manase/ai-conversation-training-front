"use client";
import { voiceInputActions } from "@/stores/voiceInput";
import { useState, useEffect, useRef } from "react";

// Declare a global interface to add the webkitSpeechRecognition property to the Window object
declare global {
  interface Window {
    webkitSpeechRecognition: any;
  }
}

export type SpeechRecognitionHookReturn = {
  isRecording: boolean;
  recordingComplete: boolean;
  transcript: string;
  handleToggleRecording: () => void;
};

/**
 * User の音声入力情報を管理するカスタムフック
 */
export const useSpeechRecognition = (): SpeechRecognitionHookReturn => {
  // 録音中かどうか
  const [isRecording, setIsRecording] = useState(false);
  // 録音が完了したかどうか
  const [recordingComplete, setRecordingComplete] = useState(false);
  // 録音結果
  const [transcript, setTranscript] = useState("");

  // Reference to store the SpeechRecognition instance
  const recognitionRef = useRef<any>(null);

  // Function to start recording
  const startRecording = () => {
    setIsRecording(true);
    // Create a new SpeechRecognition instance and configure it
    const speech = new window.webkitSpeechRecognition();
    speech.lang = "ja-JP";
    recognitionRef.current = speech;
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = true;

    // Event handler for speech recognition results
    recognitionRef.current.onresult = (event: any) => {
      const { transcript } = event.results[event.results.length - 1][0];

      // Log the recognition results and update the transcript state
      console.log(event.results);
      setTranscript(transcript);
      // Store
      voiceInputActions.setTranscript(transcript);
    };

    // Start the speech recognition
    recognitionRef.current.start();
  };

  // Cleanup effect when the component unmounts
  useEffect(() => {
    return () => {
      // Stop the speech recognition if it's active
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  // Function to stop recording
  const stopRecording = () => {
    if (recognitionRef.current) {
      // Stop the speech recognition and mark recording as complete
      recognitionRef.current.stop();
      setRecordingComplete(true);
    }
  };

  // Toggle recording state and manage recording actions
  const handleToggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      startRecording();
    } else {
      stopRecording();
    }
  };

  return {
    isRecording,
    recordingComplete,
    transcript,
    handleToggleRecording,
  };
};
