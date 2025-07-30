'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import Button from '@/components/ui/Button/Button';
import styles from './dashboard.module.scss';
import SideBar from '@/components/ui/Sidebar/Sidebar';
import WelcomeBox from '@/components/pages/WelcomeBox/WelcomeBox';
import DashboardHeader from './Header';

export default function DashboardPage() {
  const { user, logout, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/auth');
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return <div className={styles.loading}>در حال بارگذاری...</div>;
  }

  if (!user) {
    return null;
  }

  const handleLogout = () => {
    logout();
    router.push('/auth');
  };

  return (
    <div className={styles.container}>
        <DashboardHeader handleLogout={handleLogout} />
        <SideBar />
        <div className={`${styles.section} ld:w-10/12 w-full`} >
            <WelcomeBox user={user} />
        </div>
    </div>
  );
}