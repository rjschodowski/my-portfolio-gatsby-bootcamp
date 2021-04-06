import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const Projects = () => {
    return (
        <Layout>
            <Head title="Projects"/>
            <h1>SOS Lansing</h1>
            <p>For now this is the space where a description of SOS Lansing will be.</p>
<p><Link to="/contact">Want to work with me? Reach out</Link>.</p>
        </Layout>
    )
}

export default Projects