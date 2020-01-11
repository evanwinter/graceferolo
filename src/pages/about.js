import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import get from "lodash/get"

const About = (props) => {
  const siteTitle = get(props, "data.site.siteMetadata.title")
  return (
    <>
      <Helmet title={"About - " + siteTitle} />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem mollis aliquam
        ut porttitor leo. Venenatis cras sed felis eget velit aliquet. Elit
        ullamcorper dignissim cras tincidunt lobortis feugiat. Diam ut venenatis
        tellus in metus vulputate eu scelerisque. Dignissim cras tincidunt
        lobortis feugiat vivamus at augue eget arcu. Et molestie ac feugiat sed
        lectus vestibulum. Mauris cursus mattis molestie a iaculis at. At risus
        viverra adipiscing at in tellus integer feugiat. Etiam sit amet nisl
        purus in mollis nunc sed. Et pharetra pharetra massa massa. Cras
        tincidunt lobortis feugiat vivamus. Nulla pellentesque dignissim enim
        sit amet venenatis urna cursus eget. Blandit massa enim nec dui nunc
        mattis enim ut. 
      </p>
      <p>
        Blandit aliquam etiam erat velit scelerisque in. Ante in
        nibh mauris cursus mattis. Sed risus ultricies tristique nulla. Sagittis
        vitae et Leo duis ut. Condimentum id venenatis a condimentum vitae
        sapien. Commodo ullamcorper a lacus vestibulum sed arcu. Egestas quis
        ipsum suspendisse ultrices gravida dictum fusce ut. Dui faucibus in
        ornare quam viverra. Neque egestas congue quisque egestas diam in. Arcu
        ac tortor dignissim convallis aenean et tortor at. Aliquet sagittis id
        consectetur purus ut faucibus. Dictumst quisque sagittis purus sit amet
        volutpat consequat mauris nunc. Vel risus commodo viverra maecenas
        accumsan lacus vel facilisis. Vulputate ut pharetra sit amet aliquam id
        diam maecenas ultricies. Viverra orci sagittis eu volutpat odio
        facilisis mauris. Pretium vulputate sapien nec sagittis aliquam
        malesuada bibendum arcu. Laoreet non curabitur gravida arcu ac tortor.
        Pellentesque habitant morbi tristique senectus et netus et malesuada.
        Urna duis convallis convallis tellus id interdum. Bibendum enim
        facilisis gravida neque convallis. Condimentum lacinia quis vel eros
        donec ac odio. Sed pulvinar proin gravida hendrerit.
      </p>
    </>
  )
}

export default About

export const pageQuery = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
