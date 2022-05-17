import Image from 'next/image';
import React, { useCallback, useRef } from 'react'
import useOpenBox from '../../../../Utils/Hooks/useOpenBox';
import { OverLay, SlidingBoxTop, SlidingBoxWrapper } from '../../../Atoms/SlidingBox/styles';

interface Props {
	openReport: boolean;
	setOpenReport: React.Dispatch<React.SetStateAction<boolean>>;
}

const ReportBox = ({ openReport, setOpenReport }: Props) => {
	const boxRef = useRef<HTMLDivElement>(null);
	useOpenBox(openReport, boxRef);

	const closeBox = useCallback(() => {
		setOpenReport(false);
	}, [])
	return (
		<>
			{openReport && <OverLay onClick={closeBox}></OverLay>}
			<SlidingBoxWrapper ref={boxRef}>
				<SlidingBoxTop>
					<span>신고</span>
					<button onClick={closeBox}>
						<Image src="/close_btn.png" width={35} height={35} />
					</button>
				</SlidingBoxTop>
			</SlidingBoxWrapper>
		</>
	)
}

export default ReportBox