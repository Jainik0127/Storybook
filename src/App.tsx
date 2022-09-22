import { ChakraProvider, theme } from "@chakra-ui/react"
import Layout from "./layout"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Layout />
  </ChakraProvider>
)
