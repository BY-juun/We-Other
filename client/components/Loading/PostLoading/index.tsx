import React from 'react'
import Loading from '../../../Utils/Loading/Loading'
import { PostContentWrapper } from '../../Blocks/Post/PostContent/styles'

const PostLoading = ({ loading }: { loading: boolean }) => {
	return (
		<PostContentWrapper style={{ height: "150px" }}>
			{Loading(loading, 40)}
		</PostContentWrapper>
	)
}

export default PostLoading