import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {getServerSession} from "next-auth";
import SessionProvider from "@/lib/session.provider";
import QueryClientProvider from "@/lib/query-client-provider"
import Navbar from "@/app/_common/components/navbar";
import {ThemeProvider} from "@/app/_common/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
                                           children,
                                         }: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession()
  return (
      <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
      >
          <QueryClientProvider

          >
              <SessionProvider session={session}>
                  <main className="min-h-screen dark:bg-blend-darken">
                      <Navbar  />
                      {children}
                  </main>
              </SessionProvider>
          </QueryClientProvider>
      </ThemeProvider>

      </body>
      </html>
  );
}
