import { queryCachingOption } from './../../Utils/queryOption';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from "react-query"
import { getMeetingListAPI, registMeetingAPI } from "../../API/Meeting"
import { QueryKey } from '../../Utils/QueryKey';
import { MeetingType } from '../../Types/Meeting';

export const useGetMeetingList = () => {
	return useQuery<MeetingType[]>([QueryKey.Meeting], () => getMeetingListAPI(), queryCachingOption)
}

export const useRegistMeeting = () => {
	const { push } = useRouter();
	return useMutation(registMeetingAPI, {
		onSuccess: (res) => {
			if (!res.isSuccess) return alert(res.message);
			alert("* 게시글이 등록되었어요.");
			return push('/Meeting');
		}
	})
}