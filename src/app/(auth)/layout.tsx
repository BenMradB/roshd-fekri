import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header className="rounded-none mb-4" />
      <div className="py-4">{children}</div>
      <Footer />
    </>
  );
};

export default AuthLayout;
