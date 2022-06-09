import React, { useCallback, useState } from 'react'
import { MyInfoBtn } from '../../Blocks/MyPage/MyInfo/styles';
import CheckPwdModal from '../../Blocks/_Modal/CheckPwdModal';

const ResetBtn = ({ email }: { email: string }) => {

	const [openCheckPwdModal, setOpenCheckPwdModal] = useState(false);
	const gotoResetPasswd = useCallback(() => {
		setOpenCheckPwdModal(true);
	}, [])

	const closeModal = useCallback(() => {
		setOpenCheckPwdModal(false);
	}, [])

	return (
		<>
			<MyInfoBtn onClick={gotoResetPasswd}>재설정</MyInfoBtn>
			{openCheckPwdModal && <CheckPwdModal email={email} onClose={closeModal} />}
		</>
	)
}

export default ResetBtn