"use client"
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { link } from "fs";
const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();


  return (
    <div>
      {navLinks.map((link) => {
          const isActive = pathname.startsWith(link.href) //agar link active h //to use path name ko trigger kro like /register in url path  after this we add condition
        return (
          <>
            <h1>active link part</h1>
            <Link href={link.href} key={link.name} className={`${isActive? "text-red-400 font-bold" : "text-green-300 italic"}`}>
              {link.name}
            </Link>
          </>
        );
      })}
      {children}
    </div>
  );
}
