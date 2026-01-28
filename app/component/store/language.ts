import { create } from "zustand";

export type langType = "fa" | "en";

type languageType = {
  lang: langType;
  setLan: () => void;
};

export const useLanguage = create<languageType>()((set) => ({
  lang: "fa",
  setLan: () => set((state) => ({ lang: state.lang == "en" ? "fa" : "en" })),
}));
