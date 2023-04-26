import { getStrapiURL } from "./api";

const getStrapiMedia = (media: any) => {
	const { url } = media.data.attributes;
	const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
	return imageUrl;
};

const imageLoader = ({ src }: { src: string }) => {
	return src;
};

export { getStrapiMedia, imageLoader };
