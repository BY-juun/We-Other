import React from "react";
import WritePostBtn from "components/Atoms/WritePostBtn";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "react-query";
import { QueryKey } from "../../Utils/QueryKey";
import axios from "axios";
import { ServerURL } from "../../Utils/ServerURL";
import FilterBlock from "../../components/Blocks/Meeting/FilterBlock";
import { MeetingPageWrapper } from "./styles";
import MeetingListBlock from "../../components/Blocks/Meeting/MeetingListBlock";

const Meeting = () => {
	return (
		<MeetingPageWrapper>
			<FilterBlock />
			<MeetingListBlock />
			<WritePostBtn mode="Meeting" />
		</MeetingPageWrapper>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const queryClient = new QueryClient();
	await queryClient.prefetchQuery([QueryKey.Meeting], () => axios.get(`${ServerURL}/api/meet/room`).then((response) => response.data.result));
	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
}

export default Meeting;
