import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

export const PageContainer: React.FC<ContainerProps> = ({ children }) => {
  return (
    <>
      <div className="p-8 mt-6 bg-white rounded-lg">{children}</div>
    </>
  );
};
