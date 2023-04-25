import axios from "axios";
import qs from "qs";

export function getStrapiURL(path = "") {
	return `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${path}`;
}

export async function fetchAPI(
	path: string,
	urlParamsObject = {},
	options = {}
) {
	const mergedOptions = {
		headers: {
			"Content-Type": "application/json",
		},
		...options,
	};

	const queryString = qs.stringify(urlParamsObject);
	const requestUrl = `${getStrapiURL(
		`/api${path}${queryString ? `?${queryString}` : ""}`
	)}`;

	const response = await axios(requestUrl, mergedOptions);

	if (!response.data) {
		console.error(response.statusText);
		throw new Error(`An error occured please try again`);
	}
	const data = await response.data;
	return data;
}
