import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair'
});

export const metadata = {
  title: "Le Siège | Salon de Coiffure de Luxe à Kénitra",
  description: "Le Siège - Salon de coiffure de luxe à Kénitra. Excellence, créativité et savoir-faire au service de votre beauté. Réservez votre rendez-vous avec nos coiffeurs professionnels.",
  keywords: [
    "salon de coiffure Kénitra",
    "Le Siège Kénitra", 
    "coiffeur Kénitra",
    "barbier Kénitra",
    "coiffure homme Kénitra",
    "barbe Kénitra",
    "salon de coiffure luxe",
    "coiffeur professionnel Maroc",
    "réservation coiffeur en ligne"
  ],
  authors: [{ name: "Le Siège" }],
  creator: "Le Siège - Salon de Coiffure",
  publisher: "Le Siège Kénitra",
  openGraph: {
    title: "Le Siège | Salon de Coiffure de Luxe à Kénitra",
    description: "Excellence, créativité et savoir-faire au service de votre beauté. Le meilleur salon de coiffure à Kénitra.",
    url: "https://lesiege-kenitra.com",
    siteName: "Le Siège - Salon de Coiffure",
    images: [
      {
        url: "https://res.cloudinary.com/dylpck2et/image/upload/v1759200666/logo_siege_ur5mjl.svg",
        width: 1200,
        height: 630,
        alt: "Le Siège - Salon de Coiffure Luxe Kénitra",
      },
    ],
    locale: "fr_MA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Le Siège | Salon de Coiffure de Luxe à Kénitra",
    description: "Excellence, créativité et savoir-faire au service de votre beauté.",
    images: ["https://res.cloudinary.com/dylpck2et/image/upload/v1759200666/logo_siege_ur5mjl.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://lesiege-kenitra.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="https://res.cloudinary.com/dylpck2et/image/upload/v1759200666/logo_siege_ur5mjl.svg" />
        <link rel="apple-touch-icon" href="https://res.cloudinary.com/dylpck2et/image/upload/v1759200666/logo_siege_ur5mjl.svg" />
        
        {/* Meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#D4AF37" />
        
        {/* Local Business Schema for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HairSalon",
              "name": "Le Siège - Salon de Coiffure",
              "image": "https://res.cloudinary.com/dylpck2et/image/upload/v1759200666/logo_siege_ur5mjl.svg",
              "description": "Salon de coiffure de luxe à Kénitra offrant des services de coiffure professionnels pour hommes",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "RUE HOUMANE EL FATOUAKI IMMEUBLE 49",
                "addressLocality": "Kénitra",
                "addressCountry": "MA"
              },
              "telephone": "+212-XXX-XXXXXX",
              "url": "https://lesiege-kenitra.com",
              "openingHours": [
                "Mo-Sa 10:00-22:00",
                "Su 10:00-22:00"
              ],
              "priceRange": "20-600 MAD",
              "paymentAccepted": "Cash, Credit Card",
              "hasMap": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3297.442603512447!2d-6.595275024274479!3d34.26276407307847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7597efa83cacf%3A0x744818700c59461!2sLe%20Si%C3%A8ge%20%7C%20Salon%20de%20coiffure!5e0!3m2!1sen!2sma!4v1759200648461!5m2!1sen!2sma",
              "sameAs": [
                "https://www.instagram.com/le_siege_kenitra/"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}