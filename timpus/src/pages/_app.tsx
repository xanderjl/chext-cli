import { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import { DefaultSeo } from "next-seo"

import theme from "@theme/index"

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <DefaultSeo
        title="A Spicy Title 🔥"
        titleTemplate="%s | Your New Site"
        description="A lovely description of this new site you've made."
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://www.url.ie/",
          site_name: "SiteName",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
