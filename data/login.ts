// data/login.ts
export interface AuthData {
  email: string;
  username: string;
  password: string;
  isLoggedIn: boolean;
}

export const authData: AuthData = {
  email: "AnganaPutra123@gmail.com",
  username: "AnganaPutra123",
  password: "password123", // Hanya untuk demo
  isLoggedIn: false
};