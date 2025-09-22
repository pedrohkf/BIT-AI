'use client';

import { createContext, useState, useContext } from 'react';

const EbookContext = createContext<{
    posts: string;
    setPosts: (value: string) => void;
    userId: string;
    setUserId: (value: string) => void;
} | null>(null);

export function EbookProvider({ children }: { children: React.ReactNode }) {
    const [posts, setPosts] = useState<string>('');
    const [userId, setUserId] = useState<string>('');
    return (
        <EbookContext.Provider value={{posts, setPosts, userId, setUserId}}>
            {children}
        </EbookContext.Provider>
    )
};

export function useEbookContext() {
    const context = useContext(EbookContext);

    if (!context) {
        throw new Error('useEbookContext must be used within a EbookProvider');
    }
    return context;
}