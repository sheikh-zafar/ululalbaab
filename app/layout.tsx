import type { Metadata } from "next"
import { Geist, Geist_Mono,Aref_Ruqaa } from "next/font/google"
import "./globals.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Footer from "@/components/footer"
import Navbar from "@/components/nav"
import Script from "next/script"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})
const arefRuqaa = Aref_Ruqaa({
  subsets: ["arabic"], // or ["latin", "arabic"] if you want both
  weight: ["400", "700"], // available weights
  variable: "--font-aref-ruqaa",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#2563eb'
};

export const metadata:Metadata = {
  title:
    'فضيلة الشيخ ظفر الحسن مدني حفظه اللّه | zafarulhasan.com' ,
  description:
    'Urdu Lectures | Listen and Download |Zafar ul hasan madani ',
  metadataBase: new URL('https://zafarulhasan.com'),
  manifest: 'https://zafarulhasan.com/manifest.json',
  alternates: {
    canonical: 'https://zafarulhasan.com'
  },
  verification: {
    google: 'AkxGbeUiN14LV567z1U8sIVKZEfNYwrC20ftAaq5CcA',
    yahoo: 'yahoo',
    other: {
      me: ['audios.shkzafars@gmail.com', 'https://zafarulhasan.com']
    }
  },
  openGraph: {
  title: 'فضيلة الشيخ ظفر الحسن مدني حفظه اللّه | zafarulhasan.com',
  description: 'Urdu Lectures | Listen and Download |Zafar ul hasan madani ',
  url: 'https://zafarulhasan.com',
  siteName: 'Urdu Lectures of Sheikh Zafarulhasan Madani',
  images: [
    {
      url: 'https://zafarulhasan.com/favicon.png',
      width: 48,
      height: 48,
    },
    {
      url: 'https://zafarulhasan.com/icon-192x192.png',
      width: 192,
      height: 192
    },
    {
      url: 'https://zafarulhasan.com/icons/icon-512x512.png',
      width: 512,
      height: 512,
      alt: 'urdu bayan'
    }
  ],
  locale: 'en_US',
  type: 'website',
  
},

  twitter: {
    card: 'summary_large_image',
    title: 'Urdu Lectures',
    description:
      'Zafar ul hasan madani - Listen and Download the Lectures',
    images: ['https://zafarulhasan.com/favicon.png']
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/icons/icon-96x96.png',
    apple: '/logo192.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/icons/icon-152x152.png'
    }
  },
  category: 'urdu lectures',
  keywords:
    'urdu lectures, salafi urdu lectures, '
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={`${arefRuqaa.variable}`}>
      <head>
        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=UA-188974269-1"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-188974269-1');
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MB2K3JZ');
          `}
        </Script>

        {/* Google Analytics (analytics.js) */}
        <Script id="ga-init" strategy="afterInteractive">
          {`
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

            ga('create', 'G-27JVX6PYD2', 'auto');
            ga('send', 'pageview');
          `}
        </Script>
      </head>
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
