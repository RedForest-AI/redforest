import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const useAuthStore = create(
    persist(
        (set) => ({
            isAuthenticated: false,
            token: '',
            decodedToken: {},
            sessionState: '',
            code: '',
            setAuth: (token: string, decodedToken: any, sessionState: string, code: string) => set(() => ({ token: token, decodedToken: decodedToken, sessionState: sessionState, code: code, isAuthenticated: true })),
        }),
        {
            name: 'auth-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);

export default useAuthStore;