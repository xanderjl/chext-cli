import { Container, Heading } from "@chakra-ui/react"
import Layout from "@components/Layout"

const Home = () => {
  return (
    <Layout>
      <Container maxW="container.lg" px={5}>
        <Heading>Hello!</Heading>
      </Container>
    </Layout>
  )
}

export default Home
