// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

const colors = {
	brand: {
		900: "#1a365d",
		800: "#153e75",
		700: "#2a69ac",
	},
};

const fonts = {
	heading: `Montserrat, sans-serif`,
	body: `Open Sans, sans-serif`,
};

export const theme = extendTheme({
	colors,
	fonts,
});
