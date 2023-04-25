import {
	Box,
	Card,
	CardBody,
	CardFooter,
	HStack,
	Heading,
	Stack,
	Text,
} from "@chakra-ui/react";
import Link from "next/link";
import TagPills from "./TagPill";
import { getStrapiMedia } from "../../lib/media";
import Image from "next/image";

export type tag = {
	attributes: {
		Name: string;
		Color: string;
		image: any;
	};
};

export type BlogTileProps = {
	heading: string;
	excerpt: string;
	tags: tag[];
	imageObj: any;
	link: string;
};

const BlogTile: React.FC<BlogTileProps> = ({
	heading,
	excerpt,
	tags,
	imageObj,
	link,
}) => {
	return (
		<Card maxW="sm" minWidth={{ base: "100%", md: "40%", lg: "30%" }}>
			<Link href={`/blog/${link}`}>
				<CardBody>
					<Box position={"relative"} width={"100%"} height={"220px"}>
						<Image
							src={getStrapiMedia(imageObj)}
							alt="Green double couch with wooden legs"
							fill
						/>
					</Box>
					<Stack mt="6" spacing="3">
						<Heading size="md">{heading}</Heading>
						<Text noOfLines={3}>{excerpt}</Text>
					</Stack>
				</CardBody>
			</Link>
			<CardFooter>
				<HStack spacing={2}>
					{tags.length > 0 &&
						tags.map((tag: tag, id: any) => <TagPills tag={tag} key={id} />)}
				</HStack>
			</CardFooter>
		</Card>
	);
};

export default BlogTile;
