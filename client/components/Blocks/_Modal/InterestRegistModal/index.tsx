import React, { useCallback, useRef, useState } from 'react'
import Modal from '../../../../Utils/Modal'
import { CustomInput } from '../../../Atoms/CustomInput/styles'
import { AdditionalInfoModalContent, InterestItem, IntersetForm, SubmitBtn } from './styles'

const InterestRegistModal = ({ onClose }: { onClose: () => void }) => {
	const [interest, setInterest] = useState([""]);
	const interestRef = useRef<HTMLInputElement>(null);

	const SubmitInterest = useCallback((e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!interestRef.current) return;
		if (interestRef.current.value === "") return alert("* 내용을 입력해주세요");
		const value = String(interestRef.current.value)
		interestRef.current.value = "";
		if (interest.filter((v) => v === value).length > 0) return alert("* 이미 등록되어있어요.");
		setInterest((prev) => [...prev, value]);
	}, [interest])

	return (
		<Modal title="관심사 등록" onClose={onClose} >
			<AdditionalInfoModalContent>
				<div>
					<span>최대5개 등록</span>
					<IntersetForm onSubmit={SubmitInterest}>
						<CustomInput ref={interestRef} />
						<button>등록</button>
					</IntersetForm>
				</div>
				<InterestItem>
					{interest.slice(1).map((i) => {
						return <span key={i}>{i}</span>
					})}
				</InterestItem>
				<SubmitBtn>완료</SubmitBtn>
			</AdditionalInfoModalContent>
		</Modal>
	)
}


export default InterestRegistModal