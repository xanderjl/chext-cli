import { Box, Container, Stack } from "@chakra-ui/react"
import routes from "@util/routes.json"
import Link from "./Link"

const Footer = () => {
  return (
    <Container maxW="container.lg">
      <Stack>
        <Stack
          as="ul"
          direction={{ base: "column", md: "row" }}
          justify="center"
          spacing={4}
        >
          {routes.map((route, i) => {
            const { slug, title, active } = route
            return (
              active && (
                <Box key={i} as="li" listStyleType="none">
                  <Link href={slug}>{title}</Link>
                </Box>
              )
            )
          })}
        </Stack>
        <Box as="span" textAlign="center">
          &copy; Brand {new Date().getFullYear()}
        </Box>
      </Stack>
    </Container>
  )
}

export default Footer
