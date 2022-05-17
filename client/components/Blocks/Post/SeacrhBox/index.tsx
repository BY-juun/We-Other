import Image from 'next/image';
import React, { useCallback, useRef } from 'react'
import useOpenBox from '../../../../Utils/Hooks/useOpenBox';
import { CustomInput } from '../../../Atoms/CustomInput/styles';
import { OverLay, SlidingBoxTop, SlidingBoxWrapper } from '../../../Atoms/SlidingBox/styles';
import { SearchFormWrapper } from './styles'

interface Props {
	openSearch: boolean;
	setOpenSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchBox = ({ openSearch, setOpenSearch }: Props) => {
	const boxRef = useRef<HTMLDivElement>(null)

	useOpenBox(openSearch, boxRef);

	const closeSearchBox = useCallback(() => {
		setOpenSearch(false);
	}, [])


	return (
		<>
			{openSearch && <OverLay onClick={closeSearchBox}></OverLay>}
			<SlidingBoxWrapper ref={boxRef} >
				<SlidingBoxTop>
					<span>검색</span>
					<button onClick={closeSearchBox}><Image src="/close_btn.png" width={35} height={35} /></button>
				</SlidingBoxTop>
				<SearchFormWrapper>
					<CustomInput placeholder='* 검색어를 입력해주세요.' />
					<button>검색</button>
				</SearchFormWrapper>
			</SlidingBoxWrapper>
		</>
	)
}

export default SearchBox