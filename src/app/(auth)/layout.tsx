import Header from "@/components/Header";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-screen h-screen">
      <Header className="rounded-none mb-4" />
      {children}
    </div>
  );
};

export default AuthLayout;
