/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const fs = require("fs")

const { SitemapStream, streamToPromise } = require("sitemap")
const { createGzip } = require("zlib")
const { Readable } = require("stream")


let sitemap
var links = [
	{
		url: "/",
		changefreq: "daily",
		priority: 1,
	},
	{ url: "/Shreesh_Kulkarni-Resume.pdf", changefreq: "monthly", priority: 0.8 },
	{ url: "/LOS-sigmatenant.pdf", changefreq: "monthly", priority: 0.8 },
]

try {
	const smStream = new SitemapStream({
		hostname: "https://www.codekulkarni.com",
	})
	const pipeline = smStream.pipe(createGzip())

	streamToPromise(Readable.from(links).pipe(smStream)).then((data) => {
		streamToPromise(pipeline).then((sm) => (sitemap = sm))
		//  console.log(data.toString())
		fs.unlink("../sitemap.xml", (err) => {
			if (
				err &&
        err.message !==
          "ENOENT: no such file or directory, unlink './sitemap.xml'"
			) {
				console.error(err)
			}
		})
		fs.writeFile("../sitemap.xml", data.toString(), function (err) {
			if (err) {
				console.error(err)
			}
			console.log("xml generation successful!")
		})
		return data.toString()
	})
} catch (e) {
	console.error(e)
}
