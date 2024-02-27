import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'
import Main from './common-layout/main'

interface PageProps {
  // Define the type of pageProps
  // Example: You can define it as an object with certain properties
  // Adjust according to your actual pageProps type
  prop1: string;
  prop2: number;
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Main>
      <Component {...pageProps} />
    </ Main>
    )
}
