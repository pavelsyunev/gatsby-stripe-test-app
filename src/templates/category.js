import React from "react"
import Link from "gatsby-link"
import Layout from "../components/layout"

const CategoryTemplate = ({ data }) => (
  <Layout>
    <div>
      <h1>{data.strapiCategory.name}</h1>
      <ul>
        {data.strapiCategory.products.map(product => (
          <li key={product.id}>
            <h5>
              <Link to={`/Product_${product.id}`}>{product.title}</Link>
            </h5>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
)

export default CategoryTemplate

export const query = graphql`
  query CategoryTemplate($id: String!) {
    strapiCategory(id: { eq: $id }) {
      id
      name
      products {
        title
        id
      }
    }
  }
`
