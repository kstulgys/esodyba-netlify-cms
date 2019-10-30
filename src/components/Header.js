import React from "react"
import { Box, Text, Flex } from "@chakra-ui/core"

const Header = ({ image, title, subheading }) => (
  <Flex
    backgroundImage={`url(https://images.unsplash.com/photo-1505526484636-f0a465cf6d19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=80)`}
    height="100vh"
    backgroundPosition="center"
    backgroundRepeat="no-repeat"
    backgroundSize="cover"
    position="relative"
  >
    <Flex flex="1" justify="center" align="center" flexDir="column">
      <Text
        mb="10%"
        textTransform="uppercase"
        px="10"
        py="6"
        textShadow="0 5px 10px rgba(0,0,0,1)"
        bg="rgba(0,0,0,.5)"
        boxShadow="xl"
        position="relative"
        fontSize={["3xl", "6xl"]}
        fontWeight="semibold"
        color="gray.200"
        textAlign="center"
      >
        {title}
      </Text>
      {/* <Text
        mt="4"
        px="10"
        py="6"
        textShadow="0 5px 10px rgba(0,0,0,1)"
        bg="rgba(0,0,0,.6)"
        boxShadow="xl"
        position="relative"
        fontWeight="medium"
        color="gray.200"
        fontSize={["lg", "4xl"]}
        mb="10%"
        textAlign="center"
      >
        {subheading}
      </Text> */}
    </Flex>
  </Flex>
)

export default Header
