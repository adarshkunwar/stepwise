export interface AuthState {
  token?: string | null;
  user?: string | null;
  hasProfile?: boolean;
  isAuthenticated?: boolean;
}
