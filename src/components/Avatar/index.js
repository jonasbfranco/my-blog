import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"


const Avatar = () => {
    const { avatarImage } = useStaticQuery (
        graphql`
            query {
                avatarImage: file(relativePath: { eq: "profile-photo.jpg"}) {
                    childImageSharp {
                        fluid(maxWidth: 60, maxHeight: 60) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `
    )

    return <Img fluid={avatarImage.childImageSharp.fluid} className="foo" style={{width: "60px"}} />
}

export default Avatar