export interface FriendType {
	userIdx: number;
	name: string;
	email: string;
}


export interface friendRequest {
	friendReqIdx: number,
	email: string,
	name: string,
	userIdx: number
}

export interface FriendRequestListType {
	friendRequestedList: Array<undefined | friendRequest>,
	friendRequestingList: Array<undefined | friendRequest>
}
