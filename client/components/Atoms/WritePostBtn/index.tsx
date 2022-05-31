import Cookies from 'js-cookie'
import Image from 'next/image'
import React, { useCallback, useState } from 'react'
import WriteModal from '../../Blocks/_Modal/WriteModal'
import { WritePostBtnRoot } from './styles'

const WritePostBtn = () => {
	const [openWrite, setOpenWrite] = useState(false);

	const onClickBtn = useCallback(() => {
		const userIdx = Cookies.get("userIdx");
		if (!userIdx) return alert("*로그인 후 글을 작성할 수 있습니다");
		setOpenWrite(true);
	}, [])

	return (
		<>
			<WritePostBtnRoot onClick={onClickBtn}>
				<Image src="/write.png" alt="글쓰기" width={25} height={25} />
			</WritePostBtnRoot>
			{openWrite && <WriteModal onClose={() => setOpenWrite(false)} />}
		</>
	)
}

export default WritePostBtn