'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { login } from '@/services/auth';

const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#1877F2">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const LineIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#00B900">
    <path d="M12 0C5.4 0 0 4.1 0 9.3c0 4 2.9 7.4 7 8.4v3.7c0 .4.3.8.7.8.2 0 .4 0 .6-.2l3.8-2.4c1.3.3 2.7.4 4.1.4 6.6 0 12-4.1 12-9.3C24 4.1 18.6 0 12 0zm-3-4.5h1.5v5h-1.5zm3 0h1.5v5h-1.5zm4 0h1.5v5h-1.5z"/>
  </svg>
);

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (!email || !password) {
      setError('Vui lòng nhập email và mật khẩu');
      setIsLoading(false);
      return;
    }

    try {
      const response = await login(email, password);
      if (response.success) {
        router.push('/');
        return;
      }

      setError(response.error || 'Đăng nhập thất bại');
    } catch {
      setError('Đã có lỗi xảy ra. Vui lòng thử lại.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Side - Illustration */}
      <div className="hidden lg:flex lg:w-1/2 bg-linear-to-br from-primary/20 via-secondary/10 to-accent/20 items-center justify-center p-8 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-md">
          <div className="w-24 h-24 bg-linear-to-br from-primary via-primary to-secondary rounded-2xl flex items-center justify-center shadow-2xl mx-auto mb-8">
            <span className="text-white font-bold text-5xl">A</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">Khám phá Đà Nẵng</h2>
          <p className="text-lg text-muted-foreground mb-8">Chuyến du lịch hoàn hảo đang chờ bạn</p>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary text-lg">✓</span>
              </div>
              <span>Khách sạn tuyệt vời</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary text-lg">✓</span>
              </div>
              <span>Tour độc quyền</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary text-lg">✓</span>
              </div>
              <span>Hỗ trợ 24/7</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-8">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-linear-to-br from-primary via-primary to-secondary rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
                <span className="text-primary-foreground font-bold text-xl">A</span>
              </div>
            </Link>
            <h1 className="text-3xl font-bold text-foreground mb-2">Đăng nhập</h1>
            <p className="text-muted-foreground">Chào mừng trở lại AnshinDanang</p>
          </div>

          {/* Login Form Card */}
          <div className="bg-card rounded-2xl border border-border/40 shadow-2xl p-8">
            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-destructive/10 border border-destructive/30 rounded-lg text-destructive text-sm">
                {error}
              </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-5">
              {/* Email Input */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/60" />
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-12 h-12 rounded-lg border-border/50 bg-muted/30 focus:bg-white focus:border-primary transition-all"
                    required
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">Mật khẩu</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/60" />
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-12 pr-12 h-12 rounded-lg border-border/50 bg-muted/30 focus:bg-white focus:border-primary transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-primary/60 hover:text-primary transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Forgot Password Link */}
              <div className="flex justify-end">
                <Link
                  href="/auth/forgot-password"
                  className="text-sm text-primary hover:underline transition-colors"
                >
                  Quên mật khẩu?
                </Link>
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 active:scale-95 h-12 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg"
              >
                {isLoading ? 'Đang đăng nhập...' : 'Đăng nhập'}
              </Button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 h-px bg-border/50"></div>
              <span className="text-sm text-muted-foreground">Hoặc</span>
              <div className="flex-1 h-px bg-border/50"></div>
            </div>

            {/* Social Login Buttons */}
            <div className="grid grid-cols-3 gap-3">
              {/* Google Login */}
              <button
                type="button"
                className="h-12 rounded-lg border border-border/40 hover:border-[#4285F4]/40 bg-white hover:bg-[#4285F4]/5 transition-all flex items-center justify-center gap-2 font-medium text-foreground/70 hover:text-foreground group"
                title="Đăng nhập bằng Google"
              >
                <GoogleIcon />
              </button>

              {/* Facebook Login */}
              <button
                type="button"
                className="h-12 rounded-lg border border-border/40 hover:border-[#1877F2]/40 bg-white hover:bg-[#1877F2]/5 transition-all flex items-center justify-center gap-2 font-medium text-foreground/70 hover:text-foreground group"
                title="Đăng nhập bằng Facebook"
              >
                <FacebookIcon />
              </button>

              {/* LINE Login */}
              <button
                type="button"
                className="h-12 rounded-lg border border-border/40 hover:border-[#00B900]/40 bg-white hover:bg-[#00B900]/5 transition-all flex items-center justify-center gap-2 font-medium text-foreground/70 hover:text-foreground group"
                title="Đăng nhập bằng LINE"
              >
                <LineIcon />
              </button>
            </div>
          </div>

          {/* Sign Up Link */}
          <div className="text-center mt-6">
            <p className="text-muted-foreground">
              Chưa có tài khoản?{' '}
              <Link href="/auth/register" className="text-primary font-semibold hover:underline transition-colors">
                Đăng ký ngay
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
