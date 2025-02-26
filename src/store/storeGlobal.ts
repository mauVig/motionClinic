import { create } from 'zustand'


interface StoreState {
    myLang: boolean;
    loading: boolean;
    changeLanguage: () => void;
    getLanguage: () => boolean;
    changeLoading: () => void;
    getLoading: () => boolean;
}

export const useStore = create<StoreState>((set, get) => ({
    myLang: false,
    loading: true,
    changeLanguage: () => set((state: { myLang: boolean }) => ({ myLang: !state.myLang })),
    getLanguage: () => get().myLang,
    changeLoading: () => set((state: { loading: boolean }) => ({ loading: !state.loading })),
    getLoading: () => get().loading,
}))