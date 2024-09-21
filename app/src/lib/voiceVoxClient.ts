import axios, { AxiosResponse } from "axios";

// 音声合成に必要なデータ(クエリ)を作成する
export async function generateAudioQuery(text: string) {
  const response = await axios.post(
    "http://localhost:50021/audio_query",
    null,
    {
      params: {
        text: text,
        speaker: 1,
      },
      headers: {
        accept: "application/json",
      },
    }
  );
  console.log("response", response);
  return { audioQuery: response.data };
}

/**
 * 音声合成
 */
export async function synthesizeSpeech(text: string): Promise<Blob> {
  const { audioQuery } = await generateAudioQuery(text);

  // 音声合成をリクエストする
  const synthesisResponse = await axios.post(
    "http://localhost:50021/synthesis?speaker=1&enable_interrogative_upspeak=true",
    audioQuery,
    {
      headers: {
        "Content-Type": "application/json",
      },
      responseType: "arraybuffer",
    }
  );
  console.log("synthesisResponse", synthesisResponse);
  return new Blob([synthesisResponse.data], { type: "audio/wav" });
}
