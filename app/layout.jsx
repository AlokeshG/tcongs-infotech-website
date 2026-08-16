import "./globals.css";
const metadataBase = new URL("http://localhost:3000");

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Tcongs Infotech",
  description:
    "Tcongs Infotech builds custom software, web and mobile applications for growing businesses.",
};

export const metadata = {
  metadataBase,
  title: {
    default: "Tcongs Infotech | Custom Software Development",
    template: "%s | Tcongs Infotech",
  },

  description:
    "Tcongs Infotech builds custom software, web and mobile applications for growing businesses.",

  keywords: [
    "Tcongs Infotech",
    "custom software development",
    "web development",
    "mobile app development",
    "software development",
  ],

  authors: [
    {
      name: "Tcongs Infotech",
    },
  ],

  creator: "Tcongs Infotech",
  publisher: "Tcongs Infotech",

  icons: {
  icon: [
    {
      url: "/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png",
    },
    {
      url: "/favicon-16x16.png",
      sizes: "16x16",
      type: "image/png",
    },
  ],

  apple: "/apple-touch-icon.png",
},
  manifest: "/site.webmanifest",

 openGraph: {
  title: "Tcongs Infotech | Custom Software Development",
  description:
    "Tcongs Infotech builds custom software, web and mobile applications for growing businesses.",
  type: "website",
  siteName: "Tcongs Infotech",
  locale: "en_US",
  images: [
    {
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Tcongs Infotech - Custom Software Development",
    },
  ],
},

twitter: {
  card: "summary_large_image",
  title: "Tcongs Infotech | Custom Software Development",
  description:
    "Tcongs Infotech builds custom software, web and mobile applications for growing businesses.",
  images: ["/og-image.png"],
},

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </body>
    </html>
  );
}