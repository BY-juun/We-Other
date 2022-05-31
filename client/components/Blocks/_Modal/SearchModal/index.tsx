import Image from 'next/image';
import React, { useCallback } from 'react'
import Modal from '../../../../Utils/Modal';
import { CustomInput } from '../../../Atoms/CustomInput/styles';
import { SearchFormWrapper } from './styles';
interface Props {
	setOpenSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchModal = ({ setOpenSearch }: Props) => {

	const closeSearchBox = useCallback(() => {
		setOpenSearch(false);
	}, [])


	return (
		<>
			<Modal onClose={closeSearchBox} title="검색">
				<>
					<SearchFormWrapper>
						<CustomInput placeholder='검색어를 입력해주세요.' />
						<button>검색</button>
					</SearchFormWrapper>
				</>
			</Modal>
		</>
	)
}

export default SearchModal