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


export const metadata = {
  title: "Happy Birthday Prity ❤️",
  description: "A special birthday surprise made with love.",
  icons: {
    icon: '/heart.jpg',
    type: "image/jpeg"
  },
}

export default function RootLayout({ children }) {
  const horizontalHearts = Array(35).fill("❤️");
  const verticalHearts = Array(18).fill("❤️");


  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}

    >
      <body className="relative min-h-screen overflow-x-hidden bg-linear-to-br from-pink-200 via-rose-50 to-pink-200">

        {/* Top Border */}
        <div className="fixed top-2 left-0 w-full flex justify-center gap-1 text-xl z-50 pointer-events-none select-none">
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

        {/* Bottom Border */}
        <div className="fixed bottom-2 left-0 w-full flex justify-center gap-1 text-xl z-50 pointer-events-none select-none">
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

        {/* Left Border */}
        <div className="fixed left-2 top-14 h-[90vh] flex flex-col justify-between text-xl z-50 pointer-events-none select-none">
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

        {/* Right Border */}
        <div className="fixed right-2 top-14 h-[90vh] flex flex-col justify-between text-xl z-50 pointer-events-none select-none">
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
        <main className="relative z-10 flex-1 px-12 py-12">
          {children}

        </main>

      </body>
    </html>
  );
}