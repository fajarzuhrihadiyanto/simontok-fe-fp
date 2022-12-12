import * as React from "react";

interface ContentProps {
    children: React.ReactNode
}

export const Content: React.FC<ContentProps> = ({
    children
}) => {
    return (
        <>
            <div className="fixed left-72 right-80 px-8 pt-8 pb-16 bg-gray-50 h-screen flex flex-col space-y-4">
                { children }
            </div>
        </>

    )
}
