// data/auth.ts

export interface RegisterForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  isFacebookLinked: boolean;
  facebookUsername: string;
}

export const authData: { registerForm: RegisterForm } = {
  registerForm: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    isFacebookLinked: false,
    facebookUsername: ".AnganaPutra123",
  }
};
