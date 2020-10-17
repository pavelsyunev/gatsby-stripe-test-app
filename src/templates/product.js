import React from "react"
// import Link from "gatsby-link"
import Layout from "../components/layout"

const ProductTemplate = ({ data }) => (
  <Layout>
    <div>
      <h1>{data.strapiProduct.title}</h1>
      <p>{data.strapiProduct.description}</p>
      <span>{data.strapiProduct.price}</span>
      <span>{data.strapiProduct.size}</span>
    </div>
  </Layout>
)

export default ProductTemplate

export const query = graphql`
  query ProductTemplate($id: String!) {
    strapiProduct(id: { eq: $id }) {
      id
      title
      description
      price
      size
    }
  }
`
