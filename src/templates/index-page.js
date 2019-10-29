import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import Features from "../components/Features"
import BlogRoll from "../components/BlogRoll"
import { Box, Text, Flex, Image, Grid, PseudoBox } from "@chakra-ui/core"
import Container from "../components/Container"

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
        textTransform="uppercase"
        px="10"
        py="6"
        textShadow="0 5px 10px rgba(0,0,0,1)"
        bg="rgba(0,0,0,.5)"
        boxShadow="xl"
        position="relative"
        fontSize="6xl"
        fontWeight="semibold"
        color="gray.200"
      >
        {title}
      </Text>
      <Text
        mt="4"
        px="10"
        py="6"
        textShadow="0 5px 10px rgba(0,0,0,1)"
        bg="rgba(0,0,0,.6)"
        boxShadow="xl"
        position="relative"
        fontSize="6xl"
        fontWeight="medium"
        color="gray.200"
        fontSize="4xl"
        mb="10%"
      >
        {subheading}
      </Text>
    </Flex>
  </Flex>
)

const VideoBox = props => (
  <Box overflow="hidden" pt="56.25%" position="relative">
    <Box
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

export const IndexPageTemplate = ({ image, title, heading, subheading, mainpitch, description, intro, helloworld }) => (
  <Box>
    <Header image={image.childImageSharp} title={title} subheading={subheading} />
    <Container minHeight="100vh">
      <Flex pt="20">
        <Box width="50%" p="4" pl="0">
          <VideoBox />
        </Box>
        <Box width="50%" p="4" pr="0">
          <Text fontSize="xl" fontWeight="semibold" mb="2">
            {mainpitch.title}
          </Text>
          <Text>{mainpitch.description}</Text>
        </Box>
      </Flex>
      <Box mt="20">
        <Grid gridGap="6" gridTemplateColumns="repeat(auto-fill, minmax(400px, 1fr) ) ">
          {intro.blurbs.map(({ image, text }) => {
            return (
              <PseudoBox
                as="div"
                border="1px solid"
                borderColor="gray.300"
                borderRadius="lg"
                boxShadow="sm"
                bg="white"
                _hover={{ transform: "scale(1.025)", transition: "all 0.2s linear", boxShadow: "lg" }}
              >
                <Image width="full" height="64" src={image.childImageSharp.fluid.src} />
              </PseudoBox>
            )
          })}
        </Grid>
      </Box>
    </Container>
    <Box
      mt="20"
      as="iframe"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2339.234152657635!2d23.756115951605395!3d54.10505268004749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e096a90d1ca70d%3A0x3791eae736d710bf!2sEmilijos%20Sodyba!5e0!3m2!1sen!2sau!4v1572339605827!5m2!1sen!2sau"
      width="full"
      height="300px"
      frameborder="0"
    />
  </Box>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  }),
  helloworld: PropTypes.string
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        helloworld={frontmatter.helloworld}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        helloworld
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            text
          }
        }
      }
    }
  }
`
