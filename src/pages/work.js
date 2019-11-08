import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"

const Work = (props) => {
	return (
		<Layout location={props.location}>
        <div>
          <div>Work</div>
          <div className="wrapper">
            <h2 className="section-headline">My work</h2>
          </div>
        </div>
      </Layout>
	)
}

export default Work