import React from 'react'
import Loading from '../../../Utils/Loading/Loading'
import { PostCardRoot } from '../../Blocks/PostCard/styles'


interface Loading {
	loading: boolean
}

const PostCardLoading = ({ loading }: Loading) => {
	return (
		<PostCardRoot>
			{Loading(loading, 25)}
		</PostCardRoot>
	)
}

export default PostCardLoading