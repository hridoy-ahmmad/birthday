import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// এখানে icons প্রোপার্টি যুক্ত করা হয়েছে
export const metadata = {
  title: "Happy Birthday Prity 💖",
  description: "A special birthday surprise made with love.",
  icons: {
    icon: "/heart.png",
  },
};

export default function RootLayout({ children }) {
  const horizontalHearts = Array(35).fill("💖");
  const verticalHearts = Array(18).fill("💖");

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative min-h-screen overflow-x-hidden bg-linear-to-br from-gray-950 via-gray-900 to-pink-950 text-pink-50">

        <div className="fixed top-2 left-0 w-full flex justify-center gap-1 text-xl z-50 pointer-events-none select-none drop-shadow-[0_0_8px_rgba(236,72,153,0.8)]">
          {horizontalHearts.map((heart, index) => (
            <span
              key={`top-${index}`}
              className="animate-pulse"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {heart}
            </span>
          ))}
        </div>

        {/* Bottom Border with Neon Glow effect */}
        <div className="fixed bottom-2 left-0 w-full flex justify-center gap-1 text-xl z-50 pointer-events-none select-none drop-shadow-[0_0_8px_rgba(236,72,153,0.8)]">
          {horizontalHearts.map((heart, index) => (
            <span
              key={`bottom-${index}`}
              className="animate-pulse"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {heart}
            </span>
          ))}
        </div>

        {/* Left Border with Neon Glow effect */}
        <div className="fixed left-2 top-14 h-[90vh] flex flex-col justify-between text-xl z-50 pointer-events-none select-none drop-shadow-[0_0_8px_rgba(236,72,153,0.8)]">
          {verticalHearts.map((heart, index) => (
            <span
              key={`left-${index}`}
              className="animate-bounce"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationDuration: "2.5s",
              }}
            >
              {heart}
            </span>
          ))}
        </div>

        {/* Right Border with Neon Glow effect */}
        <div className="fixed right-2 top-14 min-h-screen flex flex-col justify-between text-xl z-50 pointer-events-none select-none drop-shadow-[0_0_8px_rgba(236,72,153,0.8)]">
          {verticalHearts.map((heart, index) => (
            <span
              key={`right-${index}`}
              className="animate-bounce"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationDuration: "2.5s",
              }}
            >
              {heart}
            </span>
          ))}
        </div>

        {/* Main Content */}
        <main className="relative z-10 flex-1 px-6">
          {children}
        </main>

      </body>
    </html>
  );
}