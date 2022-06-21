import React from 'react'
import { MeetingType } from '../../../Types/Meeting'
import { ContentBox, ImgBox, MeetingCardWrapper } from './styles'

const MeetingCard = ({ meeting }: { meeting: MeetingType }) => {
	return (
		<MeetingCardWrapper>
			<ImgBox />
			<ContentBox>
				<div>
					<h4>{meeting.title}</h4>
				</div>
				<div>
					<h5>{meeting.roomIntro}</h5>
				</div>
				<div>
					<span>성별 : {meeting.sexInfo === "M" ? "남자" : "여자"}</span>
					<span>인원 : {meeting.capacity}명</span>
				</div>
			</ContentBox>
		</MeetingCardWrapper>
	)
}

export default MeetingCard