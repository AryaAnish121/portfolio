import "./globals.css";

export const metadata = {
  title: "Arya Anish's Portfolio",
  description: "Arya Anish's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
