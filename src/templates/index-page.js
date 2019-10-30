import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import Features from "../components/Features"
import BlogRoll from "../components/BlogRoll"
import { Box, Text, Flex, Image, Grid, PseudoBox } from "@chakra-ui/core"
import Container from "../components/Container"
import Header from "../components/Header"
import VideoBox from "../components/VideoBox"

export const IndexPageTemplate = ({ image, title, heading, subheading, mainpitch, description, intro, helloworld }) => (
  <Box>
    <Header image={image.childImageSharp} title={title} subheading={subheading} />
    <Container minHeight="100vh">
      <Flex pt={[8, 20]} flexDir={["column", "row"]} mx={["-1rem", 0]}>
        <Box width={["full", "50%"]} order={[2, 1]}>
          <VideoBox />
        </Box>
        <Box width={["full", "50%"]} pl={[4]} pr={[4, 0]} order={[1, 2]} mb={[8, 0]}>
          <Text fontSize="xl" fontWeight="semibold" mb="2">
            {mainpitch.title}
          </Text>
          <Text>{mainpitch.description}</Text>
        </Box>
      </Flex>
      <Box mt="20">
        <Grid
          gridGap="6"
          gridTemplateColumns={["repeat(auto-fill, minmax(280px, 1fr))", "repeat(auto-fill, minmax(350px, 1fr))"]}
        >
          {intro.blurbs.map(({ image, text }) => {
            return (
              <Box>
                <PseudoBox
                  overflow="hidden"
                  as="div"
                  border="1px solid"
                  borderColor="gray.300"
                  borderRadius="md"
                  boxShadow="sm"
                  bg="white"
                  _hover={{ transform: "scale(1.025)", transition: "all 0.2s linear", boxShadow: "lg" }}
                >
                  <Image objectFit="cover" width="full" height="64" src={image.childImageSharp.fluid.src} />
                </PseudoBox>
                <Text fontSize="lg" mt="2" fontWeight="bold" textTransform="uppercase">
                  Namelio pavadinimas
                </Text>
                <Text fontSize="lg">30 € /para | max 10 zm | 6 lovos</Text>
              </Box>
            )
          })}
        </Grid>
      </Box>
    </Container>

    <Box
      as="iframe"
      mt="20"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2339.234152657635!2d23.756115951605395!3d54.10505268004749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e096a90d1ca70d%3A0x3791eae736d710bf!2sEmilijos%20Sodyba!5e0!3m2!1sen!2sau!4v1572339605827!5m2!1sen!2sau"
      width="full"
      height="400px"
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
