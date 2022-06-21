import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import React, { useCallback, useRef } from 'react'
import Modal from '../../../../Utils/Modal'
import { request } from '../../../../Utils/request'
import { CustomInput } from '../../../Atoms/CustomInput/styles'
import { CheckPwdModalContent } from './styles'

const CheckPwdModal = ({ email, onClose }: { email: string, onClose: () => void }) => {
	const pwdRef = useRef<HTMLInputElement>(null);
	const { push } = useRouter();

	const SubmitPwd = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!pwdRef.current) return;
		const data = await request("GET", `/user/passwd/verify?email=${email}&passwd=${pwdRef.current.value}`)
		if (data.isSuccess) push(`/passwd/reset/${Cookies.get('userIdx')}`);
		else alert("* 비밀번호가 일치하지 않아요.");
	}, [])

	return (
		<Modal title="비밀번호 확인" onClose={onClose}>
			<CheckPwdModalContent>
				<span>* 현재 비밀번호를 입력해주세요</span>
				<form onSubmit={SubmitPwd}>
					<CustomInput type="password" ref={pwdRef} />
					<button>확인</button>
				</form>
			</CheckPwdModalContent>
		</Modal>
	)
}

export default CheckPwdModal