import React from "react"
import { Link } from "gatsby"
import { Box, Text, Flex, FormLabel, Input, FormHelperText, FormControl, Textarea, Button, Icon } from "@chakra-ui/core"
import Container from "./Container"
// import { FaFacebookSquare, FaPaperPlane, FaRegEnvelope, FaInstagram } from "react-icons/fa"
import { FiSend } from "react-icons/fi"

// import logo from "../img/logo.svg"
// import facebook from "../img/social/facebook.svg"
// import instagram from "../img/social/instagram.svg"
// import twitter from "../img/social/twitter.svg"
// import vimeo from "../img/social/vimeo.svg"

const Footer = () => (
  <Box as="footer" py="20">
    <Container>
      <Text fontWeight="semibold" fontSize="4xl" mb="8">
        Susisiekite
      </Text>
      <Flex justifyContent={["initial", "space-between"]} flexDir={["column", "row"]}>
        <Box width={["full", "48%"]}>
          <FormControl mb={[8, 0]}>
            <FormLabel fontSize="sm" color="gray.600" htmlFor="name">
              Vardas
            </FormLabel>
            <Input
              height="12"
              borderColor="gray.500"
              border="2px"
              type="text"
              id="name"
              aria-describedby={`name-helper-text`}
              bg="gray.100"
              _hover={{
                border: "2px",
                borderColor: "gray.500"
              }}
            />
          </FormControl>
        </Box>
        <Box width={["full", "48%"]}>
          <FormControl>
            <FormLabel fontSize="sm" color="gray.600" htmlFor="email">
              El. pastas
            </FormLabel>
            <Input
              height="12"
              borderColor="gray.500"
              border="2px"
              type="email"
              id="name"
              aria-describedby={`email-helper-text`}
              bg="gray.100"
              _hover={{
                border: "2px",
                borderColor: "gray.500"
              }}
            />
          </FormControl>
        </Box>
      </Flex>
      <FormControl mt="8">
        <FormLabel fontSize="sm" color="gray.600" htmlFor="zinute">
          Zinute
        </FormLabel>
        <Textarea
          borderColor="gray.500"
          border="2px"
          type="text"
          id="zinute"
          aria-describedby={`zinute-helper-text`}
          bg="gray.100"
          _hover={{
            border: "2px",
            borderColor: "gray.500"
          }}
        />
      </FormControl>
      <Button
        mt="8"
        leftIcon={FiSend}
        border="none"
        bg="gray.900"
        color="white"
        height="12"
        fontWeight="black"
        textTransform="uppercase"
        width={["full", "25%"]}
        _hover={{
          borderColor: "gray.900",
          border: "2px",
          bg: "gray.100",
          color: "gray.900"
        }}
      >
        Siusti
      </Button>
    </Container>
  </Box>
)

const ContactItem = ({ title, text }) => (
  <Flex fontSize="lg" mb="4">
    <Text width="40%" fontWeight="semibold">
      {title}:
    </Text>
    <Text width="60%" wordBreak="break-word">
      {text}
    </Text>
  </Flex>
)

const InputBox = ({ label, type, input }) => (
  <FormControl mb="4">
    <FormLabel fontWeight="bold" textTransform="uppercase" htmlFor={label}>
      {label}
    </FormLabel>
    {input === "input" ? (
      <Input type={type} id={label} aria-describedby={`${label}-helper-text`} bg="gray.100" />
    ) : (
      <Textarea
        id={label}
        // value={value}
        // onChange={handleInputChange}
        fontSize="base"
        placeholder="Laba diena..."
        size="sm"
        bg="gray.100"
      />
    )}
  </FormControl>
)

export default Footer
