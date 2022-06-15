
import { getFriendList, getRequestedFriendListLength } from './../../API/Friend/index';
import { deleteFriendRequest, getFriendRequestList } from 'API/Friend/index';
import { useMutation, useQuery, useQueryClient } from "react-query";
import { AddFriendAPI, replyToFriendRequest } from "API/Friend";
import { FriendRequestListType, FriendType } from 'Types/Friend';

export const useGetFriendList = () => {
	return useQuery<Array<FriendType | undefined>>(["FriendList"], () => getFriendList())
}

export const useGetRequestedFriendListLength = () => {
	return useQuery<{ count: null | number }>(["RequestedFriendListLength"], () => getRequestedFriendListLength());
}

export const useGetRequestFriendList = () => {
	return useQuery<FriendRequestListType>(["FriendRequestList"], () => getFriendRequestList());
}

export const useAddFriend = (onSuccess: () => void) => {
	const queryClient = useQueryClient();
	return useMutation(AddFriendAPI, {
		onSuccess: (res) => {
			if (res.isSuccess) {
				queryClient.invalidateQueries(["FriendRequestList"]);
				onSuccess();
				return alert("* 친구가 신청되었어요");
			} else {
				return alert(res.message);
			}
		}
	})
}

export const useReplyFriendRequest = () => {
	const queryClient = useQueryClient();
	return useMutation(replyToFriendRequest, {
		onSuccess: (_, params) => {
			//친구 신청 목록 조작
			if (params.answer === "수락") {
				queryClient.invalidateQueries(["FriendList"]);
				queryClient.invalidateQueries(["FriendRequestList"]);
				return alert(`* ${params.name}님과 친구가 되었어요`);
			}
			else {
				queryClient.invalidateQueries(["FriendRequestList"]);
				return alert(`* ${params.name}님의 요청이 거절되었어요`);
			}
		}
	})
}

export const useDeleteFriendRequest = () => {
	const queryClient = useQueryClient();
	return useMutation(deleteFriendRequest, {
		onSuccess: () => {
			queryClient.invalidateQueries(["FriendRequestList"]);
		}
	})
}