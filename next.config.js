const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	output: "export",
	distDir: "dist",
	images: {
		loader: "custom",
		domains: ["images.unsplash.com", "res.cloudinary.com", "localhost"],
	},
	sassOptions: {
		includePaths: [path.join(__dirname, "src/styles")],
	},
};

module.exports = nextConfig;
