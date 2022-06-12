import React, { useCallback, useEffect, useRef, useState } from 'react'
import Modal from '../../../../Utils/Modal'
import { CustomInput } from '../../../Atoms/CustomInput/styles'
import { AdditionalInfoModalContent, InterestItem, IntersetForm, MBTISelector, SubmitBtn } from './styles'

const AdditionalInfoModal = ({ onClose }: { onClose: () => void }) => {
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
		<Modal title="추가정보 등록" onClose={onClose} >
			<AdditionalInfoModalContent>
				<div>
					<span>MBTI</span>
					<MBTISelector>
						{MBTIINFO.map((area, idx) => {
							return (
								<select key={idx + 1000}>
									{area.map((v, idx) => {
										return (
											<option key={idx + 500}>
												{v.text}
											</option>
										)
									})}
								</select>
							)
						})}
					</MBTISelector>
				</div>
				<div>
					<span>간단한 자기소개</span>
					<CustomInput />
				</div>
				<div>
					<span>관심사 (최대5개 등록)</span>
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

const MBTIINFO = [
	[
		{ text: "E", value: 0 },
		{ text: "I", value: 1 },
	], [
		{ text: "N", value: 0 },
		{ text: "S", value: 1 },
	], [
		{ text: "F", value: 0 },
		{ text: "T", value: 1 },
	], [
		{ text: "P", value: 0 },
		{ text: "J", value: 1 },
	]
]

export default AdditionalInfoModal