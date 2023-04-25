import { Box, Center, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
	return (
		<Flex
			position={"absolute"}
			justifyContent={"center"}
			width={"100%"}
			height={"36px"}
			backgroundColor={"white"}
			bottom={0}
		>
			<Center>
				<Text>made with ❤️</Text>
			</Center>
		</Flex>
	);
};

export default Footer;
