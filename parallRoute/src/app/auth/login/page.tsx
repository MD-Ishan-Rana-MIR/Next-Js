'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage: React.FC = () => {
    const router = useRouter();
    const isLogin = false;

    useEffect(() => {
        if (isLogin) {
            router.push('/dashboard');
        } else {
            router.push('/login');
        }
    }, [isLogin, router]);

    return <div>Redirecting...</div>;
};

export default LoginPage;
