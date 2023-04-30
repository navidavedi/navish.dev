import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const ErrorPage = () => {
	return (
		<Flex height={"90vh"} justifyContent={"center"} alignItems={"center"}>
			<Text>Something went wrong.</Text>
		</Flex>
	);
};

export default ErrorPage;
