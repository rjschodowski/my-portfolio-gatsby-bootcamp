import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const About = () => {
    return (
        <Layout>
            <h1> About Me</h1>
            <p>I am a React front-end developer currently learning about and creating excellent user experiences with 
                React, Gatsby, Tailwind CSS, and other modern technologies. Currently seeking full-time employment at a 
                people-focused company where I can contribute my skills and continue to grow.
</p>
<p><Link to="/contact">WAnt to work with me? Reach out</Link>.</p>
        </Layout>
    )
}

export default About