import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Keffy - Your Personal Travel Concierge",
  description: "Experience the world through the eyes of a luxury travel consultant, powered by artificial intelligence. Above all is the experience.",
  keywords: ["travel", "concierge", "AI", "luxury travel", "travel planning", "vacation planning"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script data-noptimize="1" data-cfasync="false" data-wpfc-render="false">
  (function () {
      var script = document.createElement("script");
      script.async = 1;
      script.src = 'https://emrldtp.cc/NDkwODg3.js?t=490887';
      document.head.appendChild(script);
  })();
</script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&text=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{__html: `
          .keffy-logo {
            font-family: 'Great Vibes', cursive !important;
            font-weight: 400;
            font-style: normal;
          }
        `}} />
      </head>
      <body>{children}</body>
    </html>
  );
}
