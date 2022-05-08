export interface SubmitPostReqData {
  title: string;
  content: string;
  imgIdx: Array<number>;
}

export interface PostArrayType {
  postIdx: number;
  userIdx: number;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface PostType {
  userIdx: number;
  title: string;
  content: string;
  imageIdx: number;
  url: Array<string>;
  createdAt: Date;
}
