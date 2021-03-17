import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const About = () => {
    return (
        <Layout>
            <h2>Wielder of Technology for the Good of Humanity</h2>
            <p>Hey, I'm R.J.! I am a social-minded web developer who gets major fulfillment in coding projects that positively impact people of all walks of life.</p>
            <p>It was my curiosity of coding languages paired with my social work background and drive to get resources and information to people in need that led me to web development. From my first line of code to my first constructed web page, I immediately discovered a new passion: building web technology with the purpose of improving people’s lives.
</p>
            <p>I am a React front-end developer currently learning about and creating excellent user experiences with 
                React, Gatsby.js and other modern technologies. Currently seeking full-time employment at a 
                people-focused company where I can contribute my skills and continue to grow.</p>
<p><Link to="/contact">Want to work with me? Reach out</Link>.</p>
        </Layout>
    )
}

export default About