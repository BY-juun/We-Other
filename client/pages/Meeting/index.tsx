import React from "react";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "react-query";
import { QueryKey } from "Utils/QueryKey";
import axios from "axios";
import { ServerURL } from "Utils/ServerUrl";
import { MeetingPageWrapper } from "./styles";
import MeetingTemplate from "components/Templates/Meeting";

const Meeting = () => {
  return (
    <MeetingPageWrapper>
      <MeetingTemplate />
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
};

export default Meeting;
