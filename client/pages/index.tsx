import type { NextPage } from "next";
import { ContentWrapper } from "components/Layouts/Content/styles";
import { HomeDescription, HomeLeft, HomeWrapper, LinkCardWrapper, Title } from "./styles";
import LoginBlock from "components/Blocks/Home/LoginBlock";
import MainContent from "components/Blocks/MainContent";
import LinkCard from "components/Atoms/LinkCard";
import { useGetUserInfo } from "Hooks/User";

const Home: NextPage = () => {
	const { data, isLoading } = useGetUserInfo();
	return (
		<>
			<ContentWrapper>
				<HomeWrapper>
					<HomeLeft>
						<Title>WeOther</Title>
						<HomeDescription>아주대학교 흥신소 프로젝트</HomeDescription>
						{!isLoading && <>{data?.userName ? <MainContent userName={data?.userName} /> : <LoginBlock />}</>}
					</HomeLeft>
					<LinkCardWrapper>
						{contents.map((content, idx) => {
							return <LinkCard key={content.title} content={content} />;
						})}
					</LinkCardWrapper>
				</HomeWrapper>
			</ContentWrapper>
		</>
	);
};

const contents = [
	{ title: "흥신소", description: "사람을 찾아요!", url: "/Posts" },
	{ title: "미팅", description: "우리랑 미팅하실분?", url: "/Meeting" },
	{ title: "게임", description: "미팅에서 이 게임 해보는건 어떠세요?", url: "/" },
	{ title: "추후 추가 컨텐츠", description: "* 추후 추가 예정입니다", url: "/" },
];

export default Home;
