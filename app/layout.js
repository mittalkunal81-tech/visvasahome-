import "./globals.css";

export const metadata = {
  title: "Visavasa Website ",
  description: "Admin Login System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
