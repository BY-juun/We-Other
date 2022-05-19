import Image from "next/image";
import React, { ReactChild, ReactChildren, useCallback } from "react";
import { CommentFormTitle, ModalContent, ModalRoot, OverLay } from "./styles";

interface Props {
	children: ReactChild | ReactChildren;
	onClose: () => void;
	title: string
}

const Modal = ({ children, onClose, title }: Props) => {

	return (
		<ModalRoot>
			<OverLay onClick={onClose}></OverLay>
			<ModalContent>
				<CommentFormTitle>
					<span>{title}</span>
					<button onClick={onClose}>
						<Image src="/close_btn.png" width={30} height={30} />
					</button>
				</CommentFormTitle>
				{children}
			</ModalContent>
		</ModalRoot>
	);
};

export default Modal;