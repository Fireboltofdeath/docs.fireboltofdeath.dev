/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
	title: 'fireboltofdeath.dev',
	tagline: 'Official documentation for my projects.',
	url: 'https://docs.fireboltofdeath.dev/',
	baseUrl: '/',
	onBrokenLinks: 'ignore',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	organizationName: 'Fireboltofdeath',
	projectName: 'fireboltofdeath.dev',
	themeConfig: {
		announcementBar: {
			id: 'flamework',
			content:
				'This is documentation for Flamework v1.0.0-beta. You can find the v1.0.0 documentation at <a target="_blank" rel="noopener noreferrer" href="https://flamework.fireboltofdeath.dev/">flamework.fireboltofdeath.dev</a>',
			backgroundColor: '#ffffff',
			textColor: '#242526',
			isCloseable: true,
		},
		colorMode: {
			defaultMode: 'dark',
		},
		prism: {
			theme: require('prism-react-renderer/themes/vsDark'),
		},
		navbar: {
			title: 'fireboltofdeath.dev',
			items: [
				{
					to: 'docs/flamework',
					activeBasePath: 'docs/flamework',
					label: 'Flamework',
					position: 'left',
				},
				{
					to: 'docs/packages/priority-map',
					activeBasePath: 'docs/packages',
					label: 'Packages',
					position: 'left',
				},
				{
					href: 'https://github.com/Fireboltofdeath',
					label: 'GitHub',
					position: 'right',
				},
				{
					href: 'https://twitter.com/OneToFire',
					label: 'Twitter',
					position: 'right',
				},
			],
		},
		footer: {
			copyright: `Copyright © ${new Date().getFullYear()} Fireboltofdeath`,
			links: [
				{
					title: 'Projects',
					items: [
						{
							label: 'Flamework',
							to: 'docs/flamework',
						},
					],
				},
				{
					title: 'Social',
					items: [
						{
							html: `
							<a href="https://twitter.com/OneToFire" target="_blank">
								<img id="twitter-social" width=32 height=32/>
							</a>
							`
						},
						{
							html: `
							<a href="https://github.com/Fireboltofdeath" target="_blank">
								<img id="github-social" src="/static/img/github.png" width=32 height=32/>
							</a>
							`
						},
						{
							html: `
							<a href="https://www.roblox.com/users/49352468/profile" target="_blank">
								<img id="roblox-social" src="/static/img/roblox.png" width=32 height=32 />
							</a>
							`
						}
					],
				},
				{
					title: 'Packages',
					items: [
						{
							label: '@rbxts/priority-map',
							to: 'docs/packages/priority-map',
						},
					],
				},
			]
		},
	},
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					editUrl:
						'https://github.com/Fireboltofdeath/docs.fireboltofdeath.dev/tree/master/',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			},
		],
	],
	"plugins": [
		[
			'@docusaurus/plugin-content-blog',
			{
				id: 'blog-flamework',
				routeBasePath: 'blog/flamework',
				path: './blogs/flamework',
			},
		],
	]
};
