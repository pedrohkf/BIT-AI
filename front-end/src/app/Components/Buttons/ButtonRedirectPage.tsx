import Link from 'next/link'
import React, {ReactNode} from 'react'

interface ButtonRedirectPageProps {
    pageRedirect: string;
    children: ReactNode;
}

export const ButtonRedirectPage = ({ pageRedirect, children }: ButtonRedirectPageProps) => {
    return (
        <Link href={pageRedirect}>
            <button>{children}</button>
        </Link>
    )
}
