import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"

const About = (props) => {
	return (
		<Layout location={props.location}>
        <div>
          <div>About</div>
          <div className="wrapper">
            <h2 className="section-headline">About me</h2>
          </div>
        </div>
      </Layout>
	)
}

export default About