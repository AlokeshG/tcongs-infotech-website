import "./globals.css";

export const metadata = {
  title: "Tcongs Infotech | Custom Software Development",
  description:
    "Tcongs Infotech builds custom software, web and mobile applications for growing businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}