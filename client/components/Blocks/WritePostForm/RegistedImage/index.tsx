import React, { useCallback } from "react";

interface Props {
  fileImage: Array<string>;
  setFileImage: React.Dispatch<React.SetStateAction<string[]>>;
  setSubmitImageIdx: React.Dispatch<React.SetStateAction<number[]>>;
}

const RegistedImage = ({ fileImage, setFileImage, setSubmitImageIdx }: Props) => {
  const filterImg = useCallback((file) => {
    setFileImage((prev) => prev?.filter((prevFile) => prevFile !== file));
  }, []);

  return (
    <>
      {fileImage.map((file) => {
        return (
          <div>
            <img key={file} alt="sample" src={file} />
            <button onClick={() => filterImg(file)}>삭제</button>
          </div>
        );
      })}
    </>
  );
};

export default RegistedImage;
