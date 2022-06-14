import { useMutation, useQuery } from "react-query";
import { AddFriendAPI, replyToFriendRequest } from "API/Friend";

export const useGetRequestFriendList = () => {
	return useQuery
}

export const useAddFriend = () => {
	return useMutation(AddFriendAPI, {
		onSuccess: () => {
			return alert("* 친구가 신청되었어요");
		}
	})
}

export const useReplyFriendRequest = () => {
	return useMutation(replyToFriendRequest, {
		onSuccess: () => {
			//친구 신청 목록 조작


			//xx님과 친구가 되었어요가 되도록 바꾸기
			return alert("* 친구가 되었어요");
		}
	})
}