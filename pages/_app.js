import "../styles/globals.css";
import { ClerkProvider } from "@clerk/clerk-react";

function MyApp({ Component, pageProps }) {
  return (
    <ClerkProvider frontendApi="clerk.b1mvy.zxnpf.lcl.dev">
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

export default MyApp;
