import { Avatar, Tag, TagLabel } from "@chakra-ui/react";
import { getStrapiMedia } from "../../lib/media";
import { tag } from "./BlogTile";

type tagProps = { tag: tag };

const TagPills: React.FC<tagProps> = ({ tag }) => {
	return (
		<Tag
			size={"md"}
			backgroundColor={tag.attributes.Color}
			color={"white"}
			px={3}
			borderRadius="full"
		>
			<Avatar
				src={getStrapiMedia(tag.attributes.image)}
				size="sm"
				name={tag.attributes.image.data.attributes.alternativeText}
				ml={-1}
				mr={2}
			/>
			<TagLabel>{tag.attributes.Name}</TagLabel>
		</Tag>
	);
};

export default TagPills;
