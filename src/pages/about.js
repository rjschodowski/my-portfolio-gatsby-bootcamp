import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const About = () => {
    return (
        <Layout>
            <h1>Wielder of Technology for the Good of Humanity</h1>
            <p>Hey there, I'm R.J.! I get major fulfillment in coding projects that have a positive impact on people and people groups.</p>
            <p>I am a React front-end developer currently learning about and creating excellent user experiences with 
                React, Gatsby, Tailwind CSS, and other modern technologies. Currently seeking full-time employment at a 
                people-focused company where I can contribute my skills and continue to grow.</p>
<p><Link to="/contact">Want to work with me? Reach out</Link>.</p>
        </Layout>
    )
}

export default About