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
  MBTI: string;
  shortDescription: string;
  intereset: Array<string>;
}

export interface FindIdResponse {
  data: {
    isSuccess: boolean;
    code: number;
    message: string;
    result: {
      email: string;
    };
  };
}
export interface FriendType {
  userIdx: number;
  name: string;
  age: number;
  email: string;
}
