import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { fetchAPI } from "../../lib/api";
import BlogTile from "@/components/BlogTile";
import Layout from "@/containers/Layout";

type HomeProps = {
	blogs: any;
};

export async function getStaticProps() {
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
							<motion.div
								key={blog.id}
								animate={{ x: 0, opacity: 1 }}
								initial={{ x: +50, opacity: 0 }}
								transition={{
									type: "spring",
									stiffness: 700,
									damping: 30,
								}}
							>
								<BlogTile
									heading={blog?.attributes?.Heading || ""}
									excerpt={blog?.attributes?.Excerpt || ""}
									tags={blog?.attributes?.tags?.data || []}
									imageObj={blog?.attributes?.Image || {}}
									link={blog?.attributes?.Slug || ""}
								/>
							</motion.div>
						))}
				</Flex>
			</Layout>
		</>
	);
};

export default Home;
