// キメラ
export interface KimeraEntity {
  kimeraId: string;
  talk_theme_id: string;
  talk_theme_group_id: string;
  persona_id: string;
  name: string;
  image_url: string;
  spec_url: string;
  description: string;
  /** 性格 */
  personality: string;
  /** 性癖 */
  quirks: string;
  /** 趣味 */
  hobbies: string;
}
