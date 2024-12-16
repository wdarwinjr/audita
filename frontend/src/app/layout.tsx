import "../styles/globals.css";

// import type { AppProps } from "next/app";

// export default function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }

export default function MyAppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}