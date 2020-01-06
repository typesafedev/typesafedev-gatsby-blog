import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

interface Props {
  data: {
    allMarkdownRemark: any
    site: {
      siteMetadata: {
        title: string
      }
    }
    location: Location
  }
}

const BlogIndex = ({ data }: Props) => {
  // // Dynamic data demo
  // let state = {
  //   loading: true,
  //   error: false,
  //   fetchedData: [],
  // }

  // componentDidMount() {
  //   fetch("https://swapi.co/api/people")
  //     .then(response => {
  //       return response.json()
  //     })
  //     .then(json => {
  //       this.setState({
  //         fetchedData: json.results,
  //         loading: false,
  //       })
  //     })
  // }
  //const { loading, fetchedData } = this.state

  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={data.location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
      {/* {loading ? (
          <p>LOADING...</p>
        ) : (
          fetchedData.map(character => (
            <p key={character.name}>{character.name}</p>
          ))
        )}
        <div> ++++++++++++ </div> */}
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
