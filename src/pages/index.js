import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ul>
      {data.allStrapiCategory.edges.map(document => (
        <li key={document.node.id}>
          <h2>
            <Link to={`${document.node.id}`}>{document.node.name}</Link>
          </h2>
        </li>
      ))}
    </ul>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiCategory {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`
