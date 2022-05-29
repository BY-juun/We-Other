import { Title } from "pages/styles";
import React from "react";
import SyncLoader from "react-spinners/SyncLoader";
import { PageLoaderWrapper } from "./styles";

const PageLoading = (loading: boolean) => {
  return (
    <>
      <PageLoaderWrapper>
        <div>
          <Title>WeOther</Title>
        </div>
        <SyncLoader loading={loading} size={13} color="#fc96a5"></SyncLoader>
      </PageLoaderWrapper>
    </>
  );
};

export default PageLoading;
