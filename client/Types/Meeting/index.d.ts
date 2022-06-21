export interface MeetingType extends RegistMeetingData {
	roomIdx: number,
	memberInfoList: Array<meetMate>
}

export interface meetMate {
	userIdx: number;
	userName: string;
	department: string;
	admission: number;
}

export interface RegistMeetingData {
	title: string;
	sexInfo: string;
	roomIntro: string;
	capacity: number;
	meetMateList: number[];
}