import { ColorModeScript } from "@chakra-ui/react";
import { Html, Head, Main, NextScript } from "next/document";
import { theme } from "../../theme";
import Script from "next/script";

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body>
				<ColorModeScript initialColorMode={theme.config.initialColorMode} />
				<Main />
				<NextScript />
				<Script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-98ZGL6CXK4"
					strategy="afterInteractive"
				/>
				<Script id="google-analytics" strategy="afterInteractive">
					{` window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());

						gtag('config', 'G-98ZGL6CXK4');
					`}
				</Script>
			</body>
		</Html>
	);
}
