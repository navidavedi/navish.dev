import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Box, Container, Heading } from "@chakra-ui/react";

import { fetchAPI } from "../../../lib/api";
import { useRouter } from "next/router";
import Image from "next/image";
import { getStrapiMedia, imageLoader } from "../../../lib/media";
import Layout from "@/containers/Layout";
import { FaArrowCircleLeft } from "react-icons/fa";
import Link from "next/link";
// import { imageLoader } from "../../../loader";

export type metaSocial = {
	socialNetwork: "Twitter" | "Facebook";
	description: string;
	title: string;
	image: any;
};

export type seo = {
	metaTitle: string;
	metaDescription: string;
	keywords: string;
	slug: string;
	metaSocial: metaSocial[];
};

type BlogProps = {
	content: string;
	heading: string;
	image: any;
	seo: seo;
};

export async function getStaticPaths() {
	const blogsRes = await fetchAPI("/blogs", {
		fields: ["Slug"],
	});

	return {
		paths: blogsRes.data.map((blog: any) => ({
			params: {
				id: blog.attributes.Slug,
			},
		})),
		fallback: false,
	};
}

export async function getStaticProps({ params }: any) {
	const data = await fetchAPI("/blogs", {
		filters: {
			Slug: params.id,
		},
		populate: ["seo.metaSocial.image", "tags.image", "Image"],
	});

	return {
		props: {
			heading: data?.data?.[0]?.attributes?.Heading || "",
			content: data?.data?.[0]?.attributes?.Content || "",
			image: data?.data?.[0]?.attributes?.Image || {},
			seo: data?.data?.[0]?.attributes?.seo || {
				metaTitle: "",
				metaDescription: "",
				keywords: "",
				metaSocial: [],
			},
		},
	};
}

const Blog: React.FC<BlogProps> = ({ content, heading, seo, image }) => {
	const router = useRouter();

	return (
		<Layout seo={seo} slug={router.asPath}>
			<Link href={"/"}>
				<Box
					fontSize={"60px"}
					color={"#04395E"}
					backgroundColor={"white"}
					// boxShadow={"2px 2px 5px #fff"}
					borderRadius={"100%"}
					p={3}
					zIndex={999}
					position={"absolute"}
					right={"50px"}
					top={"140px"}
				>
					<FaArrowCircleLeft />
				</Box>
			</Link>
			<Box backgroundColor={"white"} p={4}>
				<Box height={"300px"} width={"100%"} position={"relative"}>
					<Image
						fill
						loader={imageLoader}
						src={getStrapiMedia(image)}
						alt={image?.data?.attributes?.alternativeText || ""}
					/>
				</Box>
				<Heading as={"h1"} fontSize={{ base: "5xl", lg: "7xl" }}>
					{heading}
				</Heading>
				<ReactMarkdown components={ChakraUIRenderer()} skipHtml>
					{content}
				</ReactMarkdown>
			</Box>
		</Layout>
	);
};

export default Blog;
