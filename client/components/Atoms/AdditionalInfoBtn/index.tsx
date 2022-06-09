import React, { useCallback, useState } from 'react'
import { MyInfoBtn } from '../../Blocks/MyPage/MyInfo/styles';
import AdditionalInfoModal from '../../Blocks/_Modal/AdditionalInfoModal';

const AdditionalInfoBtn = () => {
	const [openRegistUserInfoModal, setOpenRegistUserInfoModal] = useState(false);

	const openModal = useCallback(() => {
		setOpenRegistUserInfoModal(true);
	}, [setOpenRegistUserInfoModal])

	const closeModal = useCallback(() => {
		setOpenRegistUserInfoModal(false);
	}, [setOpenRegistUserInfoModal])
	return (
		<>
			<MyInfoBtn onClick={openModal}>등록하기</MyInfoBtn>
			{openRegistUserInfoModal && <AdditionalInfoModal onClose={closeModal} />}
		</>
	)
}

export default AdditionalInfoBtn