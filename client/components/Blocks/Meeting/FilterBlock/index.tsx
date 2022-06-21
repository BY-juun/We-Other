import React from 'react'
import MeetingFilter from '../../../Atoms/MeetingFilter'
import { FilterBlockWrapper } from './styles'

const FilterBlock = () => {
	return (
		<FilterBlockWrapper>
			{filterOption.map((option) => (
				<MeetingFilter title={option.title} options={option.options} />
			))}
		</FilterBlockWrapper>
	)
}

const filterOption = [
	{
		title: "인원", options: [
			{ text: "전체", value: 0 },
			{ text: "2명", value: 2 },
			{ text: "3명", value: 3 },
			{ text: "4명", value: 4 }

		]
	},
	{
		title: "성별", options: [
			{ text: "전체", value: "전체" },
			{ text: "남", value: "M" },
			{ text: "여", value: "W" },
		]
	},
]

export default FilterBlock