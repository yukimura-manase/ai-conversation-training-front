// "use client";
// // import { voiceInputActions } from "@/store/voiceInput";
// import { useState, useEffect, useRef } from "react";

// export type SpeechRecognitionHookReturn = {
//   isRecording: boolean;
//   recordingComplete: boolean;
//   transcript: string;
//   handleToggleRecording: () => void;
// };

// const useSpeechRecognition = (): SpeechRecognitionHookReturn => {
//   // State variables to manage recording status, completion, and transcript
//   const [isRecording, setIsRecording] = useState(false);
//   const [recordingComplete, setRecordingComplete] = useState(false);
//   const [transcript, setTranscript] = useState("");

//   // Reference to store the SpeechRecognition instance
//   const recognitionRef = useRef<any>(null);

//   // Function to start recording
//   const startRecording = () => {
//     setIsRecording(true);
//     // Create a new SpeechRecognition instance and configure it
//     const speech = new window.webkitSpeechRecognition();
//     speech.lang = "ja-JP";
//     recognitionRef.current = speech;
//     recognitionRef.current.continuous = true;
//     recognitionRef.current.interimResults = true;

//     // Event handler for speech recognition results
//     recognitionRef.current.onresult = (event: any) => {
//       const { transcript } = event.results[event.results.length - 1][0];

//       // Log the recognition results and update the transcript state
//       console.log(event.results);
//       setTranscript(transcript);
//       // Store
//       // voiceInputActions.setTranscript(transcript);
//     };

//     // Start the speech recognition
//     recognitionRef.current.start();
//   };

//   // Cleanup effect when the component unmounts
//   useEffect(() => {
//     return () => {
//       // Stop the speech recognition if it's active
//       if (recognitionRef.current) {
//         recognitionRef.current.stop();
//       }
//     };
//   }, []);

//   // Function to stop recording
//   const stopRecording = () => {
//     if (recognitionRef.current) {
//       // Stop the speech recognition and mark recording as complete
//       recognitionRef.current.stop();
//       setRecordingComplete(true);
//     }
//   };

//   // Toggle recording state and manage recording actions
//   const handleToggleRecording = () => {
//     setIsRecording(!isRecording);
//     if (!isRecording) {
//       startRecording();
//     } else {
//       stopRecording();
//     }
//   };

//   return {
//     isRecording,
//     recordingComplete,
//     transcript,
//     handleToggleRecording,
//   };
// };

// export default useSpeechRecognition;
