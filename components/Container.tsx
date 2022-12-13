import React from "react";

interface ContainerProps {
    children: React.ReactNode
}

export const PageContainer: React.FC<ContainerProps> = ({ children }) => {
    return (
        <>
            <div className="bg-white rounded-lg p-8 mt-6">
                { children }
            </div>
        </>
    )
}
