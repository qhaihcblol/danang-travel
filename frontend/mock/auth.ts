// Mock user data for authentication testing
// In production, this would be replaced with actual backend API calls

import type { AuthResponse, User } from "@/types/auth";

interface MockAccount {
  user: User;
  password: string;
}

// Mock users database
const MOCK_USERS: Record<string, MockAccount> = {
  "user@example.com": {
    user: {
      id: "user-001",
      email: "user@example.com",
      fullName: "Nguyễn Văn A",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      role: "user",
      createdAt: "2024-01-15T10:30:00Z",
      preferences: {
        language: "vi",
        newsletter: true,
        notifications: true,
      },
    },
    password: "123456",
  },
  "demo@anshin.jp": {
    user: {
      id: "user-002",
      email: "demo@anshin.jp",
      fullName: "田中太郎",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      role: "user",
      createdAt: "2024-02-20T14:45:00Z",
      preferences: {
        language: "jp",
        newsletter: true,
        notifications: false,
      },
    },
    password: "123456",
  },
};

// Mock login
export async function mockLogin(
  email: string,
  password: string,
): Promise<AuthResponse> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const account = MOCK_USERS[email];

      if (account && account.password === password) {
        resolve({
          success: true,
          user: account.user,
          token: `token_${email}_${Date.now()}`,
        });
      } else {
        resolve({
          success: false,
          error: "Email hoặc mật khẩu không đúng",
        });
      }
    }, 800);
  });
}

// Mock register
export async function mockRegister(
  fullName: string,
  email: string,
  password: string,
): Promise<AuthResponse> {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (MOCK_USERS[email]) {
        resolve({
          success: false,
          error: "Email đã được đăng ký",
        });
      } else {
        const newUser: User = {
          id: `user-${Date.now()}`,
          email,
          fullName,
          role: "user",
          createdAt: new Date().toISOString(),
          preferences: {
            language: "vi",
            newsletter: false,
            notifications: true,
          },
        };
        MOCK_USERS[email] = {
          user: newUser,
          password,
        };
        resolve({
          success: true,
          user: newUser,
          token: `token_${email}_${Date.now()}`,
        });
      }
    }, 800);
  });
}

// Mock password reset request
export async function mockForgotPassword(email: string): Promise<AuthResponse> {
  void email;
  return new Promise((resolve) => {
    setTimeout(() => {
      // Always return success to prevent email enumeration attacks
      resolve({
        success: true,
        error: undefined,
      });
    }, 600);
  });
}

// Mock get current user (from token)
export async function mockGetCurrentUser(token?: string): Promise<User | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (token) {
        // Extract email from token (format: token_email_timestamp)
        const emailMatch = token.match(/token_(.+?)_\d+/);
        if (emailMatch && emailMatch[1]) {
          const account = MOCK_USERS[emailMatch[1]];
          resolve(account?.user || null);
        } else {
          resolve(null);
        }
      } else {
        resolve(null);
      }
    }, 400);
  });
}

// Mock logout (client-side: clear token from localStorage)
export async function mockLogout(): Promise<AuthResponse> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
      });
    }, 300);
  });
}

// Mock update user profile
export async function mockUpdateUserProfile(
  userId: string,
  updates: Partial<User>,
): Promise<AuthResponse> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const accountEntry = Object.entries(MOCK_USERS).find(
        ([, account]) => account.user.id === userId,
      );
      if (accountEntry) {
        const [email, account] = accountEntry;
        const updatedUser = { ...account.user, ...updates };
        MOCK_USERS[email] = {
          ...account,
          user: updatedUser,
        };
        resolve({
          success: true,
          user: updatedUser,
        });
      } else {
        resolve({
          success: false,
          error: "Người dùng không tìm thấy",
        });
      }
    }, 600);
  });
}

const authMockService = {
  mockLogin,
  mockRegister,
  mockForgotPassword,
  mockGetCurrentUser,
  mockLogout,
  mockUpdateUserProfile,
};

export default authMockService;
