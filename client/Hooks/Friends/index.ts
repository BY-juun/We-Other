import { QueryKey } from 'Utils/QueryKey';
import { getFriendList, getRequestedFriendListLength } from 'API/Friend/index';
import { deleteFriendRequest, getFriendRequestList } from 'API/Friend/index';
import { useMutation, useQuery, useQueryClient } from "react-query";
import { AddFriendAPI, replyToFriendRequest } from "API/Friend";
import { FriendRequestListType, FriendType } from 'Types/Friend';
import { queryCachingOption } from '../../Utils/queryOption';

export const useGetFriendList = () => {
	return useQuery<Array<FriendType | undefined>>([QueryKey.Friend, "FriendList"], () => getFriendList(), queryCachingOption)
}

export const useGetRequestedFriendListLength = () => {
	return useQuery<{ count: null | number }>([QueryKey.Friend, "RequestedFriendListLength"], () => getRequestedFriendListLength(), queryCachingOption);
}

export const useGetRequestFriendList = () => {
	return useQuery<FriendRequestListType>([QueryKey.Friend, "FriendRequestList"], () => getFriendRequestList(), queryCachingOption);
}

export const useAddFriend = (onSuccess: () => void) => {
	const queryClient = useQueryClient();
	return useMutation(AddFriendAPI, {
		onSuccess: (res) => {
			if (res === "성공") {
				queryClient.invalidateQueries([QueryKey.Friend, "FriendRequestList"]);
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
			queryClient.setQueryData([QueryKey.Friend, "RequestedFriendListLength"], (prevData: any) => { return { count: prevData.count - 1 } })
			if (params.answer === "수락") {
				queryClient.invalidateQueries([QueryKey.Friend, "FriendList"]);
				queryClient.invalidateQueries([QueryKey.Friend, "FriendRequestList"]);
				return alert(`* ${params.name}님과 친구가 되었어요`);
			}
			else {
				queryClient.invalidateQueries([QueryKey.Friend, "FriendRequestList"]);
				return alert(`* ${params.name}님의 요청이 거절되었어요`);
			}
		}
	})
}

export const useDeleteFriendRequest = () => {
	const queryClient = useQueryClient();
	return useMutation(deleteFriendRequest, {
		onSuccess: () => {
			queryClient.invalidateQueries([QueryKey.Friend, "FriendRequestList"]);
		}
	})
}