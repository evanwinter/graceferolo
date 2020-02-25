import React from "react"
import get from "lodash/get"
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const locale = "en-US"

const detectImage = (file) => {
	return file[locale].contentType == "image/webp"
}

const detectVideo = (file) => {
	return file[locale].contentType == "video/mp4"
}

const defaultOptions = {
	renderNode: {
		[BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
		[BLOCKS.EMBEDDED_ASSET]: (node, children) => {
			const file = get(node, "data.target.fields.file")
			const { url } = file[locale]
			if (detectImage(file)) {
				return <img src={url} />
			} else if (detectVideo(file)) {
				return (
					<div className="embedded-asset">
						<video controls>
							<source src={url} type="video/mp4" />
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
