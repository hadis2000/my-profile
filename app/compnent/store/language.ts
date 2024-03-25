import { create } from "zustand";

type langType = "fa" | "en";

type languageType = {
  lang: langType;
  setLan: () => void;
};

export const useLanguage = create<languageType>()((set) => ({
  lang: "en",
  setLan: () => set((state) => ({ lang: state.lang == "en" ? "fa" : "en" })),
}));
