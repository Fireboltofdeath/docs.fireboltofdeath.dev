module.exports = {
	packages: [
		{
			type: 'category',
			label: 'Packages',
			items: [
				{
					type: 'category',
					label: '@rbxts/priority-map',
					items: [
						"packages/priority-map/installation",
					]
				},
			]
		}
	],
	flamework: [
		"flamework/introduction",
		"flamework/installation",
		// "flamework/migration",
		'flamework/frequently-asked',
		{
			type: 'category',
			label: 'Guides',
			items: [
				'flamework/guides/creating-a-singleton',
				'flamework/guides/dependencies',
				'flamework/guides/lifecycle-events',
				'flamework/guides/utility-macros',
				'flamework/guides/ignition',
			]
		},
		{
			type: 'category',
			label: 'Modules',
			collapsed: false,
			items: [
				{
					type: 'category',
					label: 'Networking',
					items: [
						// 'flamework/additional-modules/networking/creating-events',
						// 'flamework/additional-modules/networking/client-events',
						// 'flamework/additional-modules/networking/server-events',
						// 'flamework/additional-modules/networking/middleware'
						'flamework/additional-modules/networking/introduction',
						'flamework/additional-modules/networking/remote-events',
						'flamework/additional-modules/networking/remote-functions',
						'flamework/additional-modules/networking/middleware',
					],
				},
				{
					type: 'category',
					label: 'Components',
					items: [
						'flamework/additional-modules/components/creating-a-component',
						'flamework/additional-modules/components/scripting-api',
						'flamework/additional-modules/components/attributes',
						'flamework/additional-modules/components/inheritance',
						'flamework/additional-modules/components/configuration'
					],
				},
			]
		},
		{
			type: 'category',
			label: 'Modding',
			items: [
				'flamework/modding/introduction',
				'flamework/modding/metadata',
				'flamework/modding/reflection',
				{
					type: 'category',
					label: 'Guides',
					collapsed: false,
					items: [
						'flamework/modding/guides/listeners',
						'flamework/modding/guides/lifecycle-events',
						'flamework/modding/guides/decorators',
						'flamework/modding/guides/singletons',
						'flamework/modding/guides/dependency-resolution',
						'flamework/modding/guides/user-macros',
					]
				},
			]
		}
	]
};
