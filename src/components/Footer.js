import React from "react"
import { Link } from "gatsby"
import { Box, Text, Flex, FormLabel, Input, FormHelperText, FormControl, Textarea, Button, Icon } from "@chakra-ui/core"
import Container from "./Container"
import { FaFacebookSquare, FaPaperPlane, FaRegEnvelope, FaInstagram } from "react-icons/fa"
// import logo from "../img/logo.svg"
// import facebook from "../img/social/facebook.svg"
// import instagram from "../img/social/instagram.svg"
// import twitter from "../img/social/twitter.svg"
// import vimeo from "../img/social/vimeo.svg"

const Footer = () => (
  <Box as="footer" py="20">
    <Container>
      <Flex flexDir={["column", "row"]}>
        <Flex flexDir="column" width={["full", "50%"]} pr={["0", "8"]}>
          <Text fontWeight="black" fontSize="xl" textTransform="uppercase" mb="8">
            Kontaktai
          </Text>
          <Box>
            <ContactItem title="Nuomotoja" text="Roma Stulgiene" />
            <ContactItem title="Tel. nr." text="+370 111 111 11" />
            <ContactItem title="El. pastas" text="e.sodyba@gmail.com" />
            <ContactItem title="Saskaitos nr." text="LT 000 000 000" />
            <ContactItem title="Adresas" text="Samanio g.12, Sadziunu k., Veisieju sen., Lazdiju r.sav." />
          </Box>
          <Flex alignItems="center" mt="auto">
            <Box as={FaFacebookSquare} size="40px" />
            <Box as={FaInstagram} size="42px" mx="4" />
            <Box as={FaRegEnvelope} size="45px" />
          </Flex>
        </Flex>
        <Box width={["full", "50%"]} mt={[8, 0]}>
          <Text fontWeight="black" fontSize="xl" textTransform="uppercase" mb="8">
            Susisiekite
          </Text>
          <InputBox label="Vardas" type="text" input="input" />
          <InputBox label="El. pastas" type="email" input="input" />
          <InputBox label="Zinute" type="text" />

          <Button
            leftIcon={FaPaperPlane}
            borderColor="gray.900"
            border="2px"
            // color="white"
            // variantColor="dark"
            // variant="solid"
            height="12"
            fontWeight="bold"
            textTransform="uppercase"
            width="full"
            _hover={{
              border: "none",
              bg: "gray.900",
              color: "white"
            }}
          >
            Siusti
          </Button>
        </Box>
      </Flex>
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
