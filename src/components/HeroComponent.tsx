import { Avatar, Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import {
	FaLinkedinIn,
	FaInstagram,
	FaStackOverflow,
	FaGithub,
} from "react-icons/fa";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { imageLoader } from "../../lib/media";

export const HeroComponent = () => {
	return (
		<Box>
			<Flex
				backgroundColor={"#04395E"}
				height={{ base: "450px", lg: "300px" }}
				width={"100%"}
				alignItems={"end"}
			>
				<Flex
					backgroundColor={"#031D44"}
					alignItems={"center"}
					width={"100%"}
					height={{ base: "100%", lg: "120px" }}
				>
					<Container maxW={"container.xl"}>
						<Flex
							zIndex={999}
							alignItems={{ base: "center", lg: "flex-start" }}
							flexDirection={"column-reverse"}
							position={"relative"}
							justifyContent={"center"}
							gap={5}
						>
							<Box
								ml={{ base: "0", lg: "50px" }}
								position={{ base: "relative", lg: "absolute" }}
								width={250}
								height={250}
								overflow={"hidden"}
								borderRadius={"100%"}
							>
								<Image
									loader={imageLoader}
									src={"/navish_davedi_th.jpeg"}
									alt={"Navish Davedi"}
									fill
								/>
								{/* <Box
									backgroundColor={"#62937C"}
									height={{ base: "20px", lg: "50px" }}
									width={{ base: "20px", lg: "50px" }}
									borderRadius={"100%"}
									position={"absolute"}
									bottom={0}
									right={"10px"}
									zIndex={9999}
									// boxShadow={"-2px -2px 5px white"}
								></Box> */}
							</Box>
							{/* <Avatar
								ml={{ base: "0", lg: "50px" }}
								position={{ base: "relative", lg: "absolute" }}
								src={"navish_davedi_th.jpeg"}
								height={{ base: "150px", lg: "250px" }}
								width={{ base: "150px", lg: "250px" }}
							>
								
							</Avatar> */}
							<Flex>
								<Flex
									flexDirection={"column"}
									marginLeft={{ base: "0", lg: "320px" }}
									align={{ base: "center", lg: "flex-start" }}
									textAlign={"center"}
									color={"white"}
								>
									<Heading size={"xl"}>Navish Davedi | Technical Blog</Heading>
									<Text>
										Welcome to my blog. I write about my experiences and
										learnings. I hope you find it useful.
									</Text>
									<Flex my={2} gap={3} fontSize={"25px"}>
										<Link
											href={"https://github.com/navidavedi"}
											target="_blank"
										>
											<FaGithub />
										</Link>
										<Link
											href={"https://stackoverflow.com/users/5442402/navish"}
											target="_blank"
										>
											<FaStackOverflow />
										</Link>
										<Link
											href={"https://www.linkedin.com/in/navishdavedi/"}
											target="_blank"
										>
											<FaLinkedinIn />
										</Link>
										<Link
											href={"https://www.instagram.com/_navish/"}
											target="_blank"
										>
											<FaInstagram />
										</Link>
									</Flex>
								</Flex>
							</Flex>
						</Flex>
					</Container>
				</Flex>
			</Flex>
		</Box>
	);
};

export default HeroComponent;
