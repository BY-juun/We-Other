export interface SubmitPostReqData {
	title: string;
	content: string;
	imageIdx: Array<number>;
}

export interface PostArrayType {
	userIdx: number;
	postIdx: number;
	title: string;
	content: string;
	url: string;
	updatedAt: Date;
}

export interface PostType {
	userIdx: number;
	postIdx: number;
	title: string;
	content: string;
	imageArray: Array<string | null>;
	updatedAt: Date;
}


export interface GetImageType {
	insertId: number;
	url: string;
}