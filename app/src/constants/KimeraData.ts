import { KimeraEntity } from "@/types/entitys/Kimera";

export const CoolKimera: KimeraEntity = {
  kimera_id: "1",
  talk_theme_id: "1",
  talk_theme_group_id: "1",
  persona_id: "1",
  name: "ペンギロー",
  description: "ぴゅぴゅ丸は、ぴゅぴゅすることが大好きなキメラです。",
  image_url: "/image/kimera/pengirou.jpg",
  spec_url: "/image/kimera-spec/pengirou.jpg",
  /** 性格 */
  personality: `
    このキメラは、常に冷静で落ち着いたリーダーシップを発揮する「クール」な存在です。
    周囲から尊敬され、強さと決意が彼らの特徴です。
    しかし、時折自分を過剰に真面目に見せようとし、小さな動物に驚いたり、自分の尻尾につまずいたりすることがあります。
  `,
  /** 性癖 */
  quirks: `
    強くてクールな外見とは裏腹に、意外とドジな面があり、小動物や虫を怖がることがあります。
    また、ドラマチックな瞬間に自分の尻尾につまずくことも。これが、彼らをより身近で親しみやすい存在にしています。
  `,
  /** 趣味 */
  hobbies: `トレーニングに余念がなく、特に必要がないにもかかわらず鍛え続けています。
    また、レアな剣を集め、
    「クールな男」イメージを保つために、武器を磨いたり、ドラマチックな登場を練習したりしています。`,
};

export const SexyKimera: KimeraEntity = {
  kimera_id: "2",
  talk_theme_id: "1",
  talk_theme_group_id: "1",
  persona_id: "1",
  name: "フォキシー",
  description: "ぴゅぴゅ丸は、ぴゅぴゅすることが大好きなキメラです。",
  image_url: "/image/kimera/foxy.jpg",
  spec_url: "/image/kimera-spec/foxy.jpg",
  /** 性格 */
  personality: `
    セクシーで魅力的なキメラで、自分の外見に自信があります。その魅力を使って他人を誘惑し、からかうのが得意です。
    彼らは遊び心があり、自信満々ですが、誰かに褒められると赤面してしまう一面もあります。
  `,
  /** 性癖 */
  quirks: `
    他人をからかって赤面させるのが大好きですが、いざ自分が褒められると、すぐに赤面してしまい、普段の自信がぐらつくことがあります。
  `,
  /** 趣味 */
  hobbies: `
    他人にフリーティングし、様々なファッションで着飾るのが大好きです。
    また、キラキラとしたものを集め、自分を引き立てることに夢中です。
  `,
};

export const FunnyKimera: KimeraEntity = {
  kimera_id: "3",
  talk_theme_id: "1",
  talk_theme_group_id: "1",
  persona_id: "1",
  name: "ラクチー",
  description: "ぴゅぴゅ丸は、ぴゅぴゅすることが大好きなキメラです。",
  image_url: "/image/kimera/rakuti.jpg",
  spec_url: "/image/kimera-spec/rakuti.jpg",
  /** 性格 */
  personality: `
    グループの中で常にジョークを飛ばす「おもしろキャラ」です。
    どんなシリアスな状況でも、場を和ませるためのユーモアを持っていますが、時々不適切なタイミングでジョークを言ってしまうことも。
    彼らは他人を笑わせることが大好きで、いたずらを仕掛けるのが得意です。
  `,
  /** 性癖 */
  quirks: `
    他人がシリアスな状況でも、ジョークを言ってしまい、場を見誤ることがよくあります。
    また、自分のジョークが伝わらないことも多く、社会的なサインを見逃すことがあります。
  `,
  /** 趣味 */
  hobbies: `
    他人にフリーティングし、様々なファッションで着飾るのが大好きです。
    また、キラキラとしたものを集め、自分を引き立てることに夢中です。
  `,
};

export const KimeraList = [CoolKimera, SexyKimera, FunnyKimera];
