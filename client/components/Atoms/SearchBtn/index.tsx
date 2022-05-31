import Image from 'next/image'
import React, { useCallback, useState } from 'react'
import SearchModal from '../../Blocks/_Modal/SearchModal';
import { SerachOpenBtn } from './styles'

const SearchBtn = () => {
	const [openSearch, setOpenSearch] = useState(false);
	const openSearchModal = useCallback(() => {
		setOpenSearch(true);
	}, [])
	return (
		<>
			<SerachOpenBtn onClick={openSearchModal}>
				<Image src="/searchOpen.png" alt="검색열기" width={25} height={25} />
			</SerachOpenBtn>
			{openSearch && <SearchModal setOpenSearch={setOpenSearch} />}

		</>
	)
}

export default SearchBtn