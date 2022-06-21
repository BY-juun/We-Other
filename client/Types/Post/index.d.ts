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
	likeCount: number;
	commentCount: number;
}

export interface PostType {
	userIdx: number;
	postIdx: number;
	title: string;
	content: string;
	imageArray: Array<string | null>;
	updatedAt: Date;
	CommentOfPost: Array<CommentType>;
	likeCount: number;
	commentCount: number;
}


export interface GetImageType {
	insertId: number;
	url: string;
}

export interface CommentType {
	commentIdx: number
	content: string
	createdAt: Date
	orderOfComment: number
	userIdx: number
	commentOfComment: undefined | Array<CommentOfCommentType>
}

export interface CommentOfCommentType {
	commentIdx: number;
	content: string;
	createdAt: Date;
	orderOfComment: number;
	userIdx: number;
}
