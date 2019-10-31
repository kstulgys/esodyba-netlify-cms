import React from "react"
import { Box, Text, Flex } from "@chakra-ui/core"

const VideoBox = props => (
  <Box {...props} overflow="hidden" pt="56.25%" position="relative" boxShadow="lg">
    <Box
      borderRadius={["none", "lg"]}
      border="0"
      left=" 0"
      position="absolute"
      top="0"
      allowFullScreen={true}
      width="full"
      height="full"
      as="iframe"
      title="sodyba-video"
      src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F1123021504414978%2Fvideos%2F1836175046432950%2F"
      frameBorder="0"
    />
  </Box>
)

export default VideoBox
