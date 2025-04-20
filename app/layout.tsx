import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'KeySmart | Smart Key Organizers & EDC Tools',
  description: 'Organize your keys with KeySmart, the revolutionary key organizer. Eliminate key bulge, pocket noise, and scratches with our premium key organizers and EDC tools.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}