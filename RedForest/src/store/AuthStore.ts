import { create } from 'zustand';

type State = {
    token: string;
    sessionState: string;
    code: string;
}

type Action = {
    setToken: (token: string) => void;
    setSessionState: (sstate: string) => void;
    setCode: (code: string) => void;
}

const useAuthStore = create<State & Action>((set) => ({
    token: '',
    sessionState: '',
    code: '',
    setSessionState: (sessionState: string) => set(() => ({ sessionState: sessionState })),
    setToken: (token: string) => set(() => ({ token: token })),
    setCode: (code: string) => set(() => ({ code: code }))
}));

export default useAuthStore;