import { KimeraEntity } from "@/types/entitys/Kimera";

export const Kimera: KimeraEntity = {
  kimera_id: "uuid",
  talk_theme_id: "uuid",
  talk_theme_group_id: "uuid",
  persona_id: "uuid",
  name: "ぴゅぴゅ丸",
  description: "ぴゅぴゅ丸は、ぴゅぴゅすることが大好きなキメラです。",
  /** 性格 */
  personality: `
      このキメラは、常に冷静で落ち着いたリーダーシップを発揮する「クール」な存在です。
      周囲から尊敬され、強さと決意が彼らの特徴です。
      しかし、時折自分を過剰に真面目に見せようとし、小さな動物に驚いたり、自分の尻尾につまずいたりすることがあります。`,
  /** 性癖 */
  quirks: `強くてクールな外見とは裏腹に、意外とドジな面があり、小動物や虫を怖がることがあります。
    また、ドラマチックな瞬間に自分の尻尾につまずくことも。これが、彼らをより身近で親しみやすい存在にしています。`,
  /** 趣味 */
  hobbies: `トレーニングに余念がなく、特に必要がないにもかかわらず鍛え続けています。
    また、レアな剣を集め、
    「クールな男」イメージを保つために、武器を磨いたり、ドラマチックな登場を練習したりしています。`,
  image_url: "https://avatars.githubusercontent.com/u/78206917",
  like: "趣味・好きなもの",
  created_at: "2021-01-01T00:00:00Z",
  updated_at: "2021-01-01T00:00:00Z",
  deleted_at: null,
};
