import { atom } from 'recoil';

export const SignUpEmail = atom<string>({
	key: "SignUpEmail",
	default: "",
})

export const CheckDuplicate = atom<boolean>({
	key: "CheckDuplicate",
	default: false,
})

export const SignUpPassword = atom<string>({
	key: "SignUpPassword",
	default: "",
})

export const SignUpUserName = atom<string>({
	key: "SignUpUserName",
	default: "",
})

export const SignUpAdmission = atom<string>({
	key: "SignUpAdmission",
	default: "",
})
export const SignUpDepartment = atom<string>({
	key: "SignUpDepartment",
	default: "",
})

export const SignUpSex = atom<string>({
	key: "SignUpSex",
	default: "",
})

export const SignUpStep = atom<number>({
	key: "SignUpStep",
	default: 1,
})