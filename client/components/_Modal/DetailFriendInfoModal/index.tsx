import DetailFriendInfo from "components/Molecules/Friends/DetailFriendInfo";
import { useGetUserDetailInfo } from "Hooks/User";
import React from "react";
import { UserDetailInfo } from "Types/User";
import Modal from "../../../Utils/Modal";

const DetailFriendInfoModal = ({ userIdx, onClose }: { userIdx: number; onClose: () => void }) => {
  const { data: detailInfo, isLoading } = useGetUserDetailInfo(userIdx);
  console.log(detailInfo);
  return (
    <Modal title="상세 정보" onClose={onClose}>
      <>{!isLoading ? <DetailFriendInfo friendInfo={detailInfo as UserDetailInfo} /> : <div>...Loading</div>}</>
    </Modal>
  );
};

export default DetailFriendInfoModal;
