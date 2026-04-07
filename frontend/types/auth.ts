export interface User {
  id: string;
  email: string;
  fullName: string;
  avatar?: string;
  role: "user" | "admin";
  createdAt: string;
  preferences: {
    language: "vi" | "jp";
    newsletter: boolean;
    notifications: boolean;
  };
}

export interface AuthResponse {
  success: boolean;
  user?: User;
  token?: string;
  accessToken?: string;
  refreshToken?: string;
  expiresIn?: number;
  message?: string;
  error?: string;
}
