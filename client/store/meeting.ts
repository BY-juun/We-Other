import { atom } from "recoil";

export const MeetMate = atom<number[]>({
	key: "MeetMate",
	default: []
})

export const filterCapacity = atom<number>({
	key: "filterCapacity",
	default: 0
})

export const filterSex = atom<string>({
	key: "filterSex",
	default: "전체"
})