'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Heart, Clock, LogOut, User as UserIcon, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  type Locale,
  getMessages,
  setLocale,
} from '@/lib/i18n';
import { useAppLocale } from '@/hooks/use-app-locale';
import { AUTH_CHANGED_EVENT, getCurrentUser, logout } from '@/services/auth';
import type { User } from '@/mock';

interface HeaderProps {
  isLoggedIn?: boolean;
  userName?: string;
  avatarUrl?: string;
}

export function Header({ isLoggedIn, userName, avatarUrl }: HeaderProps) {
  const router = useRouter();
  const language = useAppLocale();
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadCurrentUser = async () => {
      const user = await getCurrentUser();
      if (isMounted) {
        setCurrentUser(user);
      }
    };

    const handleAuthChanged = () => {
      loadCurrentUser();
    };

    loadCurrentUser();
    window.addEventListener(AUTH_CHANGED_EVENT, handleAuthChanged);

    return () => {
      isMounted = false;
      window.removeEventListener(AUTH_CHANGED_EVENT, handleAuthChanged);
    };
  }, []);

  const isUserLoggedIn = isLoggedIn ?? !!currentUser;
  const displayName = userName ?? currentUser?.fullName ?? 'User';
  const displayAvatar = avatarUrl ?? currentUser?.avatar;
  const t = getMessages(language).header;

  const handleLanguageChange = (locale: Locale) => {
    if (locale === language) {
      return;
    }

    setLocale(locale);
    router.refresh();
  };

  const handleLogout = async () => {
    await logout();
    setCurrentUser(null);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur-sm border-b border-border/60 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-linear-to-br from-primary via-primary to-secondary rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
              <span className="text-primary-foreground font-bold text-lg">A</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-lg text-foreground leading-tight group-hover:text-primary transition-colors">AnshinDanang</div>
              <div className="text-xs text-primary font-semibold">.jp</div>
            </div>
            <div className="sm:hidden font-bold text-foreground group-hover:text-primary transition-colors">AnshinDanang</div>
          </Link>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 sm:gap-6">
            {/* Language Selector */}
            <div className="flex items-center gap-0.5 border border-border/50 rounded-full px-1 py-0.5 bg-muted/50 hover:bg-muted/70 transition-all duration-300">
              <button
                onClick={() => handleLanguageChange('vi')}
                className={`px-3 py-1.5 text-sm font-semibold rounded-full transition-all duration-200 transform hover:scale-105 ${
                  language === 'vi'
                    ? 'bg-white text-primary shadow-md'
                    : 'text-foreground/60 hover:text-foreground hover:bg-white/40'
                }`}
              >
                VN
              </button>
              <button
                onClick={() => handleLanguageChange('ja')}
                className={`px-3 py-1.5 text-sm font-semibold rounded-full transition-all duration-200 transform hover:scale-105 ${
                  language === 'ja'
                    ? 'bg-white text-primary shadow-md'
                    : 'text-foreground/60 hover:text-foreground hover:bg-white/40'
                }`}
              >
                JP
              </button>
            </div>

            {/* Recently Viewed */}
            <button 
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-foreground/60 hover:text-primary hover:bg-primary/8 rounded-lg transition-all duration-300 hover:shadow-sm" 
              title={t.recentlyViewed}
            >
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">{t.recentlyViewed}</span>
            </button>

            {isUserLoggedIn ? (
              <>
                {/* Favorites */}
                <button 
                  className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-foreground/60 hover:text-accent hover:bg-accent/8 rounded-lg transition-all duration-300 hover:shadow-sm" 
                  title={t.favorites}
                >
                  <Heart className="w-4 h-4" />
                  <span className="text-sm font-medium">{t.favorites}</span>
                </button>

                {/* User Menu */}
                <div className="flex items-center gap-3 pl-4 border-l border-border/50">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        className="rounded-full ring-2 ring-primary/20 hover:ring-primary/40 transition-all"
                        title={t.openAccountMenu}
                      >
                        <Avatar className="size-9">
                          <AvatarImage src={displayAvatar} alt={displayName} />
                          <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                            {displayName.slice(0, 1).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-52">
                      <DropdownMenuItem asChild>
                        <Link href="/profile" className="cursor-pointer">
                          <UserIcon className="w-4 h-4" />
                          {t.profile}
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/orders" className="cursor-pointer">
                          <Package className="w-4 h-4" />
                          {t.orders}
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        onClick={handleLogout}
                        variant="destructive"
                        className="cursor-pointer"
                      >
                        <LogOut className="w-4 h-4" />
                        {t.logout}
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <div className="hidden sm:block">
                    <p className="text-sm font-medium text-foreground">{displayName}</p>
                    <p className="text-xs text-muted-foreground">{t.traveler}</p>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Login and Register */}
                <Link href="/auth/login">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hidden sm:inline text-foreground/60 hover:text-foreground hover:bg-muted/50 rounded-lg font-medium transition-all duration-300"
                  >
                    {t.login}
                  </Button>
                </Link>
                <Link href="/auth/register">
                  <Button
                    size="sm"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 active:scale-95 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    {t.register}
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
