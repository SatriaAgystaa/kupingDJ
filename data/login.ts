// data/login.ts
export interface AuthData {
  username: string;
  password: string;
  isLoggedIn: boolean;
}

export const authData: AuthData = {
  username: "AnganaPutra123",
  password: "password123", // Hanya untuk demo
  isLoggedIn: false
};