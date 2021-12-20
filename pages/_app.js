import '../styles/globals.css'
import { MoralisProvider } from "react-moralis";
function MyApp({ Component, pageProps }) {
  return(
    <MoralisProvider appId="tyLFC1fmpdQY3I6rDFkvoGqwlEUQXgkcQxSrhft7" serverUrl="https://wvall52zxfp2.usemoralis.com:2053/server">

  <Component {...pageProps} />
  </MoralisProvider>
  )
}

export default MyApp
