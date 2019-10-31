import React from "react"
import { Box, Text, ThemeProvider, CSSReset, ColorModeProvider, useColorMode, IconButton } from "@chakra-ui/core"

const Layout = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <ThemeProvider>
      <IconButton
        aria-label="Search database"
        icon={colorMode === "light" ? "sun" : "moon"}
        onClick={toggleColorMode}
        position="fixed"
        top="0"
        right="0"
        zIndex="20"
        m="6"
      />
      <CSSReset />
      <ColorModeProvider>
        <Box>{children}</Box>
      </ColorModeProvider>
    </ThemeProvider>
  )
}

export default Layout
