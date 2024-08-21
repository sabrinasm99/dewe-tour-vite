import { create } from "zustand";

export const useSearchTripStore = create((set) => ({
  search: "",
  updateSearch: (value: string) => set({ search: value }),
}));
