import React from "react";
import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { Container } from "@chakra-ui/react";
import HeroComponent from "@/components/HeroComponent";

const inter = Inter({ subsets: ["latin"] });

type LayoutProps = {
	children: React.ReactNode;
	seo: any;
	slug: string;
};

const Layout: React.FC<LayoutProps> = ({ children, seo, slug }) => {
	return (
		<>
			<Seo data={seo} slug={slug} />
			<header>
				<HeroComponent />
			</header>
			<main className={`${styles.main} ${inter.className}`}>
				<Container maxWidth={"container.lg"} pt={"100px"} position={"relative"}>
					{children}
				</Container>
			</main>
			<Footer />
		</>
	);
};

export default Layout;
