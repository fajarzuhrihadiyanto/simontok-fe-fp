import * as React from "react";

interface ContentProps {
  children: React.ReactNode;
}

export const PageContent: React.FC<ContentProps> = ({ children }) => {
  return (
    <>
      <div className="ml-72 w-auto p-8 bg-gray-50 h-screen overflow-y-auto">
        {children}
      </div>
    </>
  );
};
