"use client";

import type React from "react";

import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <footer className="w-full  h-[200px] bg-[url(/images/prayer.jpg)] bg-no-repeat bg-cover"></footer>
  );
}
