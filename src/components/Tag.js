import React from "react"

const TagClose = () => {
	return <span>x</span>
}

const Tag = ({ tag, active }) => {
	return (
		<a className="Tag" data-active={active} data-tag={tag}>
			{tag}
			{active && <TagClose />}
		</a>
	)
}

export default Tag
