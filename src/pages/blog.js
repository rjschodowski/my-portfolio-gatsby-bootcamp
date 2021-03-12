import React from 'react'
import Layout from '../components/layout'
import { graphql, useStaticQuery } from 'gatsby'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                    }
                }
            }
        }
    `)

    console.log(data)

    return (
        <Layout>
            <h1> Posts will show up here later on.</h1>
        </Layout>
    )
}

export default BlogPage