import { create } from "zustand";

export const useUserStore = create((set) => ({
  userId: localStorage.getItem("user-id") || "",
  updateUserId: (newUserId: string) => set({ userId: newUserId }),
}));
