import type { Metadata } from "next";
import {Inter , Poppins} from "next/font/google";
import "./globals.css";
import {getServerSession} from "next-auth";
import SessionProvider from "@/lib/session.provider";
import QueryClientProvider from "@/lib/query-client-provider"
import Navbar from "@/app/_common/components/navbar";
import {ThemeProvider} from "@/app/_common/components/theme-provider";
import NavBarWrapper from "@/app/_common/components/Nav_ar_wraper";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });


const poppins = Poppins({subsets: ["latin"], weight:"300"})

export const metadata: Metadata = {
  title: "Miray App",
  description: "",
};

export default async function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
  const session = await getServerSession()
  return (
      <html lang="en">
      <body className={poppins.className}>
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
                      <NavBarWrapper/>
                      {children}
                  </main>
              </SessionProvider>
          </QueryClientProvider>
      </ThemeProvider>

      </body>
      </html>
  );
}
