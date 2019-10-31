import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import Features from "../components/Features"
import BlogRoll from "../components/BlogRoll"
import Container from "../components/Container"
import Header from "../components/Header"
import VideoBox from "../components/VideoBox"
import GoogleMap from "../components/GMaps"
import Footer from "../components/Footer"
import { FiInstagram, FiFacebook, FiMail, FiMapPin, FiPhone } from "react-icons/fi"
import { Box, Text, Flex, Image, Grid, PseudoBox, Badge, Stack } from "@chakra-ui/core"

const ItemGrid = ({ intro, ...rest }) => (
  <Grid
    {...rest}
    gridGap="6"
    gridTemplateColumns={["repeat(auto-fill, minmax(280px, 1fr))", "repeat(auto-fill, minmax(350px, 1fr))"]}
  >
    {intro.blurbs.map(({ image, text }) => {
      return (
        <Box mt="2">
          <PseudoBox
            as="div"
            overflow="hidden"
            borderRadius="lg"
            boxShadow="lg"
            bg="white"
            _hover={{ transform: "scale(1.025)", transition: "all 0.2s linear", boxShadow: "lg" }}
          >
            <Image objectFit="cover" width="full" height="64" src={image.childImageSharp.fluid.src} />
          </PseudoBox>
          <Text fontSize="2xl" mt="2" fontWeight="bold">
            Namelio pavadinimas
          </Text>
          <Flex>
            <Stack isInline>
              <Badge variantColor="green">30 € /para</Badge>
              <Badge variantColor="blue">max 10 zm</Badge>
              <Badge variantColor="purple">6 lovos</Badge>
            </Stack>
          </Flex>
        </Box>
      )
    })}
  </Grid>
)

const PrimaryContent = ({ mainpitch, ...rest }) => (
  <Flex {...rest} flexDir={["column", "row"]} mx={["-1rem", 0]}>
    <Box width={["full", "50%"]} order={[2, 1]}>
      <VideoBox />
    </Box>
    <Box width={["full", "50%"]} pl="6" pr={[4, 0]} order={[1, 2]} mb={[8, 0]}>
      <Text fontSize="xl" fontWeight="semibold" mb="2">
        {mainpitch.title}
      </Text>
      <Text>{mainpitch.description}</Text>
    </Box>
  </Flex>
)

export const IndexPageTemplate = ({ image, title, heading, subheading, mainpitch, description, intro, helloworld }) => (
  <Box>
    <Header image={image.childImageSharp} title={title} subheading={subheading} />
    <Container minHeight="100vh">
      <PrimaryContent py={[8, 24]} mainpitch={mainpitch} />
      <ItemGrid pb={[8, 24]} intro={intro} />
    </Container>
    <GoogleMap />
    <Footer py={[8, 24]} />
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
