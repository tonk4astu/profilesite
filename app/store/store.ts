import { create } from "zustand";

type ContentStore = {
  contentType: string;
  setContent: (content: string) => void;
};

export const useContentStore = create<ContentStore>((set) => ({
  contentType: "0",
  setContent: (contentType: string) => set({ contentType }),
}));
