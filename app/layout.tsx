// app/layout.tsx
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";
import "./globals.css"; // Tailwind styles

export const metadata: Metadata = {
  title: "Sarower's portfolio",
  description: " portfolio description",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
    
          <div className="flex h-screen">
            {/* Navbar */}
            <Navbar/>

            {/* Main Content */}
            <div className="flex-1">
              {children}
            </div>
          </div>
      
      </body>
    </html>
  );
}
