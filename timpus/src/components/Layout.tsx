import { Flex, Box } from "@chakra-ui/react"
import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <Flex direction="column" minH="100vh" w="100%">
      <Navbar />
      <Box flex={1}>{children}</Box>
      <Footer />
    </Flex>
  )
}

export default Layout
