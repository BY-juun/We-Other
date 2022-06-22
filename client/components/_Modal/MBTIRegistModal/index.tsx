import React from "react";
import Modal from "../../../Utils/Modal";
import { AdditionalInfoModalContent, MBTISelector, SubmitBtn } from "./styles";

const MBTIRegistModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <Modal title="MBTI 등록" onClose={onClose}>
      <AdditionalInfoModalContent>
        <div>
          <MBTISelector>
            {MBTIINFO.map((area, idx) => {
              return (
                <select key={idx + 1000}>
                  {area.map((v, idx) => {
                    return <option key={idx + 500}>{v.text}</option>;
                  })}
                </select>
              );
            })}
          </MBTISelector>
        </div>
        <SubmitBtn>완료</SubmitBtn>
      </AdditionalInfoModalContent>
    </Modal>
  );
};

const MBTIINFO = [
  [
    { text: "E", value: 0 },
    { text: "I", value: 1 },
  ],
  [
    { text: "N", value: 0 },
    { text: "S", value: 1 },
  ],
  [
    { text: "F", value: 0 },
    { text: "T", value: 1 },
  ],
  [
    { text: "P", value: 0 },
    { text: "J", value: 1 },
  ],
];

export default MBTIRegistModal;
