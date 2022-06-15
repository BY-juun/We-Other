import React, { useCallback } from "react";
import { GetImageType } from "../../../../Types/Post";
import { ServerURL } from "../../../../Utils/ServerURL";

interface Props {
	fileImage: Array<GetImageType>;
	setFileImage: React.Dispatch<React.SetStateAction<GetImageType[]>>;
	setSubmitImageIdx: React.Dispatch<React.SetStateAction<number[]>>;
}

const RegistedImage = ({ fileImage, setFileImage, setSubmitImageIdx }: Props) => {

	const filterImg = useCallback((file) => {
		setFileImage((prev) => prev?.filter((prevFile) => prevFile !== file));
		setSubmitImageIdx((prev) => prev?.filter((prevFile) => prevFile !== file.insertId));
	}, []);

	return (
		<>
			{fileImage.map((file) => {
				return (
					<div key={file.url}>
						<img key={file.url} alt="sample" src={`${ServerURL}/${file.url}`} />
						<button onClick={() => filterImg(file)}>삭제</button>
					</div>
				);
			})}
		</>
	);
};

export default RegistedImage;
