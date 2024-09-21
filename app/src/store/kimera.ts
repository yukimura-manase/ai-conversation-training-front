import { proxy } from "valtio";
import { KimeraEntity } from "@/types/entitys/Kimera";

interface KimeraStateType {
  kimeras: KimeraEntity[];
  selectedKimera: KimeraEntity | null;
}

export const kimeraStates = proxy<KimeraStateType>({
  kimeras: [],
  selectedKimera: null,
});
