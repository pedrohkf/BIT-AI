import React from "react";

export default async function LoginLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <div>{children}</div>
        </div>
    )
}