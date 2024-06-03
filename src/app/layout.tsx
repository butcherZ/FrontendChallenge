"use client";
import { inter, lustiana } from "@/ui/fonts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import "./globals.css";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <body className={`${inter.variable} ${lustiana.variable} antialiased`}>
          <Toaster position="top-right" />
          <div className="flex h-screen justify-center flex-col md:flex-row bg-gradient-to-r from-background to-backgroundDark">
            {children}
          </div>
        </body>
      </QueryClientProvider>
    </html>
  );
}
