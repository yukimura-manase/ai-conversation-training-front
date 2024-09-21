// キメラ
export interface KimeraEntity {
  kimera_id: string;
  talk_theme_id: string;
  talk_theme_group_id: string;
  persona_id: string;
  name: string;
  description: string;
  /** 性格 */
  personality: string;
  /** 性癖 */
  quirks: string;
  /** 趣味 */
  hobbies: string;
  image_url: string;
  like: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}
