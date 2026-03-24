'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { forgotPassword } from '@/services/auth';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    await forgotPassword(email);
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
    }, 400);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-background via-primary/5 to-background flex items-center justify-center p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-linear-to-br from-primary via-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-primary-foreground font-bold text-xl">A</span>
            </div>
          </Link>
          <h1 className="text-3xl font-bold text-foreground mb-2">Quên mật khẩu?</h1>
          <p className="text-muted-foreground">Nhập email của bạn để nhận liên kết đặt lại</p>
        </div>

        {/* Card */}
        <Card className="border border-border/40 shadow-2xl">
          <CardContent className="p-8">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
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

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 active:scale-95 h-12 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg"
                >
                  {isLoading ? 'Đang gửi...' : 'Gửi liên kết đặt lại'}
                </Button>

                {/* Back to Login */}
                <Link
                  href="/auth/login"
                  className="flex items-center justify-center gap-2 text-primary hover:underline transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Quay lại đăng nhập
                </Link>
              </form>
            ) : (
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground">Kiểm tra email của bạn</h2>
                <p className="text-muted-foreground">
                  Chúng tôi đã gửi liên kết đặt lại mật khẩu đến <span className="font-semibold text-foreground">{email}</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  Vui lòng kiểm tra hộp thư của bạn (hoặc thư rác) trong vòng 24 giờ.
                </p>

                {/* Back to Login Button */}
                <Button
                  asChild
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 rounded-lg font-semibold mt-6"
                >
                  <Link href="/auth/login">Quay lại đăng nhập</Link>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
