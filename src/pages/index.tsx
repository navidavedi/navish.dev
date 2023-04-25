import {
	Avatar,
	AvatarBadge,
	Box,
	Flex,
	Heading,
	Text,
} from "@chakra-ui/react";
import { fetchAPI } from "../../lib/api";
import BlogTile from "@/components/BlogTile";
import Layout from "@/containers/layout";
import {
	FaFacebookSquare,
	FaInstagram,
	FaStackOverflow,
	FaGithub,
} from "react-icons/fa";
import Link from "next/link";

type HomeProps = {
	blogs: any;
};

export async function getServerSideProps() {
	const data = await fetchAPI("/blogs", {
		populate: ["tags.image", "Image"],
	});
	return {
		props: {
			blogs: data.data || [],
		},
	};
}

const Home: React.FC<HomeProps> = ({ blogs }) => {
	return (
		<>
			<Layout seo={{}} slug="/">
				<Flex gap={6} wrap={"wrap"} width={"100%"} justifyContent={"center"}>
					{blogs.length > 0 &&
						blogs.map((blog: any) => (
							<BlogTile
								key={blog.id}
								heading={blog?.attributes?.Heading || ""}
								excerpt={blog?.attributes?.Excerpt || ""}
								tags={blog?.attributes?.tags?.data || []}
								imageObj={blog?.attributes?.Image || {}}
								link={blog?.attributes?.Slug || ""}
							/>
						))}
				</Flex>
			</Layout>
		</>
	);
};

export default Home;
