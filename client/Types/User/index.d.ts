export interface SignUpData {
  email: string;
  passwd: string;
  userName: string;
  department: string;
  sex: string;
  admission: string;
}

export interface LoginData {
  email: string;
  passwd: string;
}

export interface LoginResponse {
  isSuccess: boolean;
  code: number;
  message: string;
  result: {
    accessToken: string;
    userIdx: number;
    useName: string;
  };
}

export interface UserInfo {
  email: string;
  userName: string;
  department: string;
  sex: string;
  admission: string;
}

export interface UserDetailInfo extends UserInfo {
  mbti: null | string;
  introduce: null | string;
  favorite: null | string[];
  [key: string]: string | null | number | string[];
}

export interface FindIdResponse {
  isSuccess: boolean;
  code: number;
  message: string;
  result: {
    email: string;
  };
}
