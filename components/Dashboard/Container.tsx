import * as React from 'react'

interface ContainerProps {
    children: React.ReactNode
}

export const Container: React.FC<ContainerProps> = ({
    children
}) => {
    return (
        <div className="bg-white rounded-md mt-4 w-full h-full py-4 px-8">
            { children }
        </div>
    )
}
