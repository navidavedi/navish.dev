import Head from "next/head";
import React from "react";
import { getStrapiMedia } from "../../lib/media";
import { metaSocial, seo } from "@/pages/blog/[id]";

type SeoProps = {
	slug: string;
	data: seo;
};

const Seo: React.FC<SeoProps> = ({
	data: { metaTitle, metaDescription, keywords, metaSocial },
	slug,
}) => {
	const twitterTags: metaSocial[] =
		metaSocial?.length > 0
			? metaSocial.filter((item: metaSocial) => {
					return item.socialNetwork === "Twitter";
			  })
			: [];
	const facebookTags: metaSocial[] =
		metaSocial?.length > 0
			? metaSocial.filter((item: any) => {
					return item.socialNetwork === "Facebook";
			  })
			: [];

	return (
		<Head>
			<link rel="icon" href="/favicon.ico" />
			<title>{metaTitle || "Navish Davedi's Blog"}</title>

			<meta name="description" content={metaDescription || "Technical Blog"} />
			<meta name="keywords" content={keywords} />
			<meta name="author" content="Navish Davedi" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />

			<meta name="twitter:title" content={twitterTags?.[0]?.title} />
			<meta
				name="twitter:description"
				content={twitterTags?.[0]?.description}
			/>
			{twitterTags?.[0]?.image && (
				<meta
					name="twitter:image"
					content={getStrapiMedia(twitterTags[0].image)}
				/>
			)}
			<meta name="twitter:card" content={twitterTags?.[0]?.description} />

			<meta property="og:title" content={facebookTags?.[0]?.title} />
			<meta property="og:type" content={facebookTags?.[0]?.description} />
			<meta property="og:url" content={slug} />
			{facebookTags?.[0]?.image && (
				<meta
					property="og:image"
					content={getStrapiMedia(facebookTags[0].image)}
				/>
			)}
			<meta property="fb:app_id" content="1660835241102940" />
			<meta name="twitter:site" content="@navish_davedi" />
		</Head>
	);
};

export default Seo;
