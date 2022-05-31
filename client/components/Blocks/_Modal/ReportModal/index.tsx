import Image from 'next/image';
import React, { useCallback, useRef, useState } from 'react'
import Modal from '../../../../Utils/Modal';
import { ReportReasons, ReportTitle } from './styles';
interface Props {
	setOpenReport: React.Dispatch<React.SetStateAction<boolean>>;
}

const ReportModal = ({ setOpenReport }: Props) => {
	const [clickedReason, setClickedReason] = useState(-1);
	const closeBox = useCallback(() => {
		setOpenReport(false);
	}, [])

	const onClickReason = useCallback((value: number) => () => {
		setClickedReason(value);
	}, [])

	return (
		<>
			<Modal title="신고하기" onClose={closeBox}>
				<div>
					<ReportTitle><span>사유 선택</span></ReportTitle>
					<ReportReasons>
						{reasons.map((reason) => {
							return (
								<div>
									<button onClick={onClickReason(reason.value)} style={makeClickedStyle(clickedReason, reason.value)}>
										{reason.content}
									</button>
								</div>
							)
						})}
					</ReportReasons>
				</div>
			</Modal>
		</>
	)
}

const makeClickedStyle = (clickedIdx: number, idx: number) => {
	if (clickedIdx === idx) return { color: "white", background: "#393939" };
	else return;
}

const reasons = [
	{ content: "유출/사칭/사기", value: 0 },
	{ content: "상업적 광고 및 판매", value: 1 },
	{ content: "게시판 성격에 부적절함", value: 2 },
	{ content: "낚시/놀람/도배", value: 3 },
	{ content: "욕설/비하", value: 4 },
	{ content: "음란물/불건전한 만남 및 대화", value: 5 },
	{ content: "정당/정치인 비하 및 선거운동", value: 6 },
]

export default ReportModal