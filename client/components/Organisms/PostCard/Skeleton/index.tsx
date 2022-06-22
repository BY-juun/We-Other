import React from 'react'
import { EtcArea, PostCardRoot } from '../styles'
import { IdSkeleton, MobileDateSkeleton, PostContentSkeleton, PostDateSkeleton, PostEtcSkeleton, PostTitleSkeleton, SkeletonWrapper } from './styles'

const PostCardSkeleton = () => {
	return (
		<PostCardRoot>
			<SkeletonWrapper>
				<IdSkeleton></IdSkeleton>
				<PostTitleSkeleton></PostTitleSkeleton>
				<PostContentSkeleton></PostContentSkeleton>
				<MobileDateSkeleton></MobileDateSkeleton>
			</SkeletonWrapper>
			<EtcArea>
				<PostDateSkeleton></PostDateSkeleton>
				<PostEtcSkeleton></PostEtcSkeleton>
				<PostEtcSkeleton></PostEtcSkeleton>
			</EtcArea>
		</PostCardRoot>
	)
}

export default PostCardSkeleton