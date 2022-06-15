import { CustomInput } from "components/Atoms/CustomInput/styles";
import React, { useCallback, useRef } from "react";
import Modal from "Utils/Modal";
import { useAddFriend } from "Hooks/Friends";
import { ModalContent, ModalDescription } from "./styles";

const AddFriendModal = ({ onClose }: { onClose: () => void }) => {
	const friendEmail = useRef<HTMLInputElement>(null);
	const addfriendMutation = useAddFriend(onClose);

	const submit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!friendEmail.current) return;
		addfriendMutation.mutate({ email: friendEmail.current.value });
	}, [])

	return (
		<Modal title="친구 추가하기" onClose={onClose}>
			<>
				<ModalDescription>* 친구의 이메일을 입력해주세요!</ModalDescription>
				<ModalContent onSubmit={submit}>
					<CustomInput ref={friendEmail} />
					<button>추가</button>
				</ModalContent>
			</>
		</Modal>
	);
};

export default AddFriendModal;
