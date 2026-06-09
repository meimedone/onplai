import "./globals.css";

export const metadata = {
  title: "ONplAI",
  description: "AI Event Operations Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
