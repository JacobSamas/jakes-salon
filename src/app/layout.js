import "../styles/globals.scss";

export const metadata = {
  title: "Jake's Salon",
  description: "Experience luxury salon services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
