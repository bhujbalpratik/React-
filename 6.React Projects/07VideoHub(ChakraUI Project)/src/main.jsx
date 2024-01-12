import React from "react"
import { ChakraProvider, theme } from "@chakra-ui/react"
import ReactDOM from "react-dom/client"
import App from "./App"
import ColorSwitcher from "./ColorSwitcher"

const rootElement = document.getElementById("root")
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorSwitcher />
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
