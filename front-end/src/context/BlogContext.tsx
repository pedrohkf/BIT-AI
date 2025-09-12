'use client';

import { createContext, useState, useContext } from 'react';

const BlogContext = createContext<{
    posts: string;
    setPosts: (value: string) => void;
    userId: string;
    setUserId: (value: string) => void;
} | null>(null);

export function BlogProvider({ children }: { children: React.ReactNode }) {
    const [posts, setPosts] = useState<string>('');
    const [userId, setUserId] = useState<string>('');
    return (
        <BlogContext.Provider value={{posts, setPosts, userId, setUserId}}>
            {children}
        </BlogContext.Provider>
    )
};

export function useBlogContext() {
    const context = useContext(BlogContext);

    if (!context) {
        throw new Error('useBlogContext must be used within a BlogProvider');
    }
    return context;
}