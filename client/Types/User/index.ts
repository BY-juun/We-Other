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
