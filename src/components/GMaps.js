import React from "react"

import { Box, Text, Flex, Image, Grid, PseudoBox } from "@chakra-ui/core"
import Container from "../components/Container"

import { FiInstagram, FiFacebook, FiMail, FiMapPin, FiPhone } from "react-icons/fi"

const GoogleMap = () => (
  <Flex flexDir="column" width="full">
    <Box
      as="iframe"
      mt="20"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2339.234152657635!2d23.756115951605395!3d54.10505268004749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e096a90d1ca70d%3A0x3791eae736d710bf!2sEmilijos%20Sodyba!5e0!3m2!1sen!2sau!4v1572339605827!5m2!1sen!2sau"
      width="full"
      height="400px"
      frameborder="0"
    />
    <Container>
      <Flex align="center" mt="10" width="full" flexDir={["column", "row"]}>
        <MapInfoBox
          pointerIcon
          icon={FiMapPin}
          size="55px"
          text="Samanio g.12, Sadziunu k., Veisieju sen., Lazdiju r.sav."
        />
        <MapInfoBox icon={FiMail} size="55px" text="e.sodyba@gmail.com" />
        <MapInfoBox icon={FiPhone} size="55px" text="+370 111 111 11" />
      </Flex>
    </Container>
  </Flex>
)

const MapInfoBox = ({ pointerIcon, icon, text, size, ...rest }) => (
  <Flex height="20" {...rest} width={["full", "33.33%"]} align="center" justifyContent={["start", "center"]}>
    <Flex width="45px">
      <Box ml={pointerIcon ? "-3px" : 0} as={icon} size={size} />
    </Flex>
    <Text fontSize="lg" fontWeight="medium" mx="4" ml="6">
      {text}
    </Text>
  </Flex>
)

export default GoogleMap
