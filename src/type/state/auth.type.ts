
export interface AuthState {
    user: null | { id: string; name: string };
    token: string | null;
}