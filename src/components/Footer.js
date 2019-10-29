import React from "react"
import { Link } from "gatsby"
import { Box, Text, Flex, FormLabel, Input, FormHelperText, FormControl, Textarea, Button } from "@chakra-ui/core"
import Container from "./Container"
// import logo from "../img/logo.svg"
// import facebook from "../img/social/facebook.svg"
// import instagram from "../img/social/instagram.svg"
// import twitter from "../img/social/twitter.svg"
// import vimeo from "../img/social/vimeo.svg"

const Footer = () => (
  <Box as="footer" py="20" bg="gray.800" color="gray.100">
    <Container>
      <Flex>
        <Box width="50%">
          <Text fontWeight="bold" fontSize="xl" textTransform="uppercase" mb="4">
            Kontaktai
          </Text>
          <Flex>
            <Box whiteSpace="nowrap" fontWeight="semibold" fontSize="lg">
              <Text mb="2">Nuomotoja</Text>
              <Text mb="2">El. pastas</Text>
              <Text mb="2">Saskaitos nr.</Text>
              <Text mb="2">Adresas</Text>
            </Box>
            <Box ml="6" fontSize="lg">
              <Text mb="2">Roma Stulgiene</Text>
              <Text mb="2">e.sodyba@gmail.com</Text>
              <Text mb="2">LT 000 000 000</Text>
              <Text mb="2">Samanio g.12, Sadziunu k., Veisieju sen., Lazdiju r.sav.</Text>
            </Box>
          </Flex>
        </Box>
        <Box width="50%">
          <FormControl mb="4">
            <FormLabel fontWeight="bold" textTransform="uppercase" htmlFor="email">
              Vardas
            </FormLabel>
            <Input type="email" id="email" aria-describedby="email-helper-text" />
          </FormControl>
          <FormControl mb="4">
            <FormLabel fontWeight="bold" textTransform="uppercase" htmlFor="email">
              El. pastas
            </FormLabel>
            <Input type="email" id="email" aria-describedby="email-helper-text" />
          </FormControl>
          <FormControl mb="6">
            <FormLabel fontWeight="bold" textTransform="uppercase" htmlFor="email">
              Zinute
            </FormLabel>
            <Textarea
              // value={value}
              // onChange={handleInputChange}
              fontSize="base"
              placeholder="Laba diena"
              size="sm"
            />
          </FormControl>
          <Button
            leftIcon="email"
            variantColor="blue"
            variant="outline"
            height="12"
            fontWeight="bold"
            textTransform="uppercase"
            width="full"
          >
            Siusti
          </Button>
        </Box>
      </Flex>
    </Container>
  </Box>
)

export default Footer
