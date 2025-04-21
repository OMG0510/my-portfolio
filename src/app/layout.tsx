import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "@/styles/globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Om Gaikwad | Software Developer",
  description:
    "Personal portfolio of Om Gaikwad, an aspiring software developer based in Pune, Maharashtra specializing in web development and machine learning applications.",
  keywords: [
    "Om Gaikwad",
    "Software Developer",
    "Web Development",
    "Machine Learning",
    "Portfolio",
    "Pune",
    "India",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Om Gaikwad | Software Developer" />
        <meta
          property="og:description"
          content="Personal portfolio of Om Gaikwad, an aspiring software developer based in Pune"
        />
        <meta property="og:image" content="/og-image.jpg" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
