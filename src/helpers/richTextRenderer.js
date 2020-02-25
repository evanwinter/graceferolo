import React from "react"
import get from "lodash/get"
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const defaultOptions = {
	renderNode: {
		[BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
		[BLOCKS.EMBEDDED_ASSET]: (node, children) => {
			const file = get(node, "data.target.fields.file")
			if (file["en-US"].contentType == "image/webp") {
				return <img src={file["en-US"].url} />
			} else if (file["en-US"].contentType == "video/mp4") {
				return (
					<div className="embedded-asset">
						<video controls>
							<source src={file["en-US"].url} type="video/mp4" />
							<p>Your browser doesnt support HTML5 video.</p>
						</video>
					</div>
				)
			}
		},
	},
}

export const RTR = (json, options = defaultOptions) => {
	return documentToReactComponents(json, options)
}
