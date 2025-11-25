import { defineConfig, type DefaultTheme } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Sukon Discord Bot",
	description: "Kon kon kitsune 🤘🦊🤘 Sukon-desu !! Sukon Bot is a multipurpose discord bot focus on utilities for your server",
	head: [
		["link", { rel: "icon", href: "https://ap.foob.dev/api/files/pbc_3907721444/2t6223o54n097bq/picsart_25_08_28_14_34_57_341_hd0b6yge8k.png?token=" }],
		["meta", { name: "description", content: "Sukon bot is a multipurpose discord bot focus on utilities for your server" }],
		["meta", { property: "og:title", content: "Sukon Discord Bot" }],
		["meta", { property: "og:description", content: "Sukon bot is a multipurpose discord bot focus on utilities for your server" }],
		["meta", { property: "og:type", content: "website" }],
		["meta", { property: "og:url", content: "https://sukon.foob.dev/" }],
		["meta", { property: "og:image", content: "https://ap.foob.dev/api/files/pbc_3907721444/2t6223o54n097bq/picsart_25_08_28_14_34_57_341_hd0b6yge8k.png?token=" }],
		["meta", { name: "twitter:card", content: "summary" }],
		["meta", { name: "twitter:title", content: "Sukon Discord Bot" }],
		["meta", { name: "twitter:description", content: "Sukon bot is a multipurpose discord bot focus on utilities for your server" }],
		["meta", { name: "twitter:image", content: "https://ap.foob.dev/api/files/pbc_3907721444/2t6223o54n097bq/picsart_25_08_28_14_34_57_341_hd0b6yge8k.png?token=" }],
		["meta", { name: "twitter:alt", content: "Sukon Discord Bot" }],
		// GA
		['script', { async: 'true', src: 'https://www.googletagmanager.com/gtag/js?id=G-TXT8F5WY5B' }],
		['script', {}, "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-TXT8F5WY5B');"],
	],
	sitemap: {
		hostname: 'https://sukon.foob.dev/'
		// If deploying to a different domain, update the hostname above
		// Example: hostname: 'https://your-new-domain.com/'
	},
	locales: {
		root: {
			label: 'English',
			lang: 'en',
			themeConfig: {
				nav: [
					{
						text: 'Legal',
						items: [
							{ text: 'Terms of Service', link: '/tos/' },
							{ text: 'Privacy Policy', link: '/privacy-policy/' }
						]
					}
				]
			}
		},
		vi: {
			label: 'Tiếng Việt',
			lang: 'vi',
			themeConfig: {
				nav: [
					{
						text: 'Pháp Lý',
						items: [
							{ text: 'Điều Khoản Sử Dụng', link: '/vi/tos/' },
							{ text: 'Chính Sách Bảo Mật', link: '/vi/privacy-policy/' }
						]
					}
				]
			}
		}
	},
	metaChunk: true,
	srcDir: './src',
	outDir: './dist',
	// Vite configuration for development server
	vite: {
		server: {
			allowedHosts: ['sukon.foob.dev']
		}
	},
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		logo: { src: 'https://ap.foob.dev/api/files/pbc_3907721444/2t6223o54n097bq/picsart_25_08_28_14_34_57_341_hd0b6yge8k.png?token=', width: 24, height: 24 },
		sidebar: {
			"/": [
				{
					text: 'General',
					collapsed: false,
					items: [
						{ text: 'FAQ', link: '/faq/' }
					]
				},
				{
					text: 'Utility Commands',
					collapsed: false,
					items: [
						{
							text: 'Backup Server',
							collapsed: true,
							items: [
								{ text: 'Backup', link: '/utility-commands/backup-server/backup/' }
							]
						},
						{
							text: 'Information',
							collapsed: true,
							items: [
								{ text: 'Avatar', link: '/utility-commands/information/avatar/' },
								{ text: 'Google', link: '/utility-commands/information/google/' },
								{ text: 'Guild Info', link: '/utility-commands/information/guild/' },
								{ text: 'Help', link: '/utility-commands/information/help/' },
								{ text: 'Invite', link: '/utility-commands/information/invite/' },
								{ text: 'NPM Package', link: '/utility-commands/information/npmjs/' },
								{ text: 'Ping', link: '/utility-commands/information/ping/' },
								{ text: 'Website Screenshot', link: '/utility-commands/information/websc/' },
								{ text: 'Wikipedia', link: '/utility-commands/information/wikipedia/' },
								{ text: 'YouTube Info', link: '/utility-commands/information/youtube-info/' }
							]
						},
						{
							text: 'Context Menu',
							collapsed: true,
							items: [
								{ text: 'Google Search', link: '/utility-commands/context-menu/google-search/' },
								{ text: 'Translate', link: '/utility-commands/context-menu/translate/' },
								{ text: 'Wikipedia Search', link: '/utility-commands/context-menu/wikipedia-search/' }
							]
						},
						{
							text: 'Moderator',
							collapsed: true,
							items: [
								{ text: 'Ban', link: '/utility-commands/moderator/ban/' },
								{ text: 'Ban ID', link: '/utility-commands/moderator/banid/' },
								{ text: 'Language', link: '/utility-commands/moderator/language/' },
								{ text: 'Mute', link: '/utility-commands/moderator/mute/' },
								{ text: 'Nuke', link: '/utility-commands/moderator/nuke/' },
								{ text: 'Purge', link: '/utility-commands/moderator/purge/' },
								{ text: 'Setting', link: '/utility-commands/moderator/setting/' },
								{ text: 'Slowmode', link: '/utility-commands/moderator/slowmode/' },
								{ text: 'Snipe', link: '/utility-commands/moderator/snipe/' },
								{ text: 'Unban', link: '/utility-commands/moderator/unban/' }
							]
						},
						{
							text: 'Setup',
							collapsed: true,
							items: [
								{ text: 'Join to Create', link: '/utility-commands/setup/jtc/' },
								{ text: 'YouTube Notify', link: '/utility-commands/setup/youtube-notify/' }
							]
						},
						{
							text: 'User',
							collapsed: true,
							items: [
								{ text: 'AFK', link: '/utility-commands/user/afk/' },
								{ text: 'Issue', link: '/utility-commands/user/issue/' },
								{ text: 'Media Embed', link: '/utility-commands/user/media-embed/' },
								{ text: 'Say', link: '/utility-commands/user/say/' },
								{ text: 'Text to Speech', link: '/utility-commands/user/tts/' },
								{ text: 'Voice', link: '/utility-commands/user/voice/' }
							]
						}
					]
				},
				{
					text: 'Music System Commands',
					collapsed: false,
					items: [
						{
							text: 'Play Music',
							collapsed: true,
							items: [
								{ text: 'Play', link: '/music-system/play-music/play/' },
								{ text: 'Queue', link: '/music-system/play-music/queue/' },
								{ text: 'Now Playing', link: '/music-system/play-music/nowplaying/' },
								{ text: 'Autoplay', link: '/music-system/play-music/autoplay/' },
								{ text: 'Clear Queue', link: '/music-system/play-music/clearqueue/' },
								{ text: 'Control', link: '/music-system/play-music/control/' },
								{ text: 'Grab', link: '/music-system/play-music/grab/' },
								{ text: 'Join', link: '/music-system/play-music/join/' },
								{ text: 'Leave', link: '/music-system/play-music/leave/' },
								{ text: 'Loop', link: '/music-system/play-music/loop/' },
								{ text: 'Lyrics', link: '/music-system/play-music/lyrics/' },
								{ text: 'Pause', link: '/music-system/play-music/pause/' },
								{ text: 'Remove', link: '/music-system/play-music/remove/' },
								{ text: 'Resume', link: '/music-system/play-music/resume/' },
								{ text: 'Seek', link: '/music-system/play-music/seek/' },
								{ text: 'Shuffle', link: '/music-system/play-music/shuffle/' },
								{ text: 'Skip', link: '/music-system/play-music/skip/' },
								{ text: 'Stop', link: '/music-system/play-music/stop/' },
								{ text: 'Volume', link: '/music-system/play-music/volume/' }
							]
						},
						{
							text: 'Playlist',
							collapsed: true,
							items: [
								{ text: 'Create', link: '/en/music-system/playlist/create/' },
								{ text: 'Delete', link: '/en/music-system/playlist/delete/' },
								{ text: 'Load', link: '/en/music-system/playlist/load/' },
								{ text: 'Save Current', link: '/en/music-system/playlist/savecurrent/' },
								{ text: 'Save Queue', link: '/en/music-system/playlist/savequeue/' },
								{ text: 'List', link: '/en/music-system/playlist/list/' },
								{ text: 'Info', link: '/en/music-system/playlist/info/' },
								{ text: 'Remove Track', link: '/en/music-system/playlist/removetrack/' },
							]
						}
					]
				},
				{
					text: 'Anime Commands',
					collapsed: false,
					items: [
						{
							text: 'NSFW',
							collapsed: true,
							items: [
								{ text: 'Hentai', link: '/anime-commands/nsfw/hentai/' }
							]
						}
					]
				}
			],
			'/vi/': [
				{
					text: 'Chung',
					collapsed: false,
					items: [
						{ text: 'Câu hỏi thường gặp', link: '/vi/faq/' }
					]
				},
				{
					text: 'Các lệnh tiện ích',
					collapsed: false,
					items: [
						{
							text: 'Sao lưu máy chủ',
							collapsed: true,
							items: [
								{ text: 'backup', link: '/vi/utility-commands/backup-server/backup/' }
							]
						},
						{
							text: 'Thông tin',
							collapsed: true,
							items: [
								{ text: 'avatar', link: '/vi/utility-commands/information/avatar/' },
								{ text: 'google', link: '/vi/utility-commands/information/google/' },
								{ text: 'guild', link: '/vi/utility-commands/information/guild/' },
								{ text: 'help', link: '/vi/utility-commands/information/help/' },
								{ text: 'invite', link: '/vi/utility-commands/information/invite/' },
								{ text: 'npmjs', link: '/vi/utility-commands/information/npmjs/' },
								{ text: 'ping', link: '/vi/utility-commands/information/ping/' },
								{ text: 'websc', link: '/vi/utility-commands/information/websc/' },
								{ text: 'wikipedia', link: '/vi/utility-commands/information/wikipedia/' },
								{ text: 'youtube-info', link: '/vi/utility-commands/information/youtube-info/' }
							]
						},
						{
							text: 'Menu ngữ cảnh',
							collapsed: true,
							items: [
								{ text: 'Google', link: '/vi/utility-commands/context-menu/google-search/' },
								{ text: 'Translate', link: '/vi/utility-commands/context-menu/translate/' },
								{ text: 'Wikipedia', link: '/vi/utility-commands/context-menu/wikipedia-search/' }
							]
						},
						{
							text: 'Lệnh quản trị',
							collapsed: true,
							items: [
								{ text: 'Ban', link: '/vi/utility-commands/moderator/ban/' },
								{ text: 'Banid', link: '/vi/utility-commands/moderator/banid/' },
								{ text: 'Language', link: '/vi/utility-commands/moderator/language/' },
								{ text: 'Mute', link: '/vi/utility-commands/moderator/mute/' },
								{ text: 'Nuke', link: '/vi/utility-commands/moderator/nuke/' },
								{ text: 'Purge', link: '/vi/utility-commands/moderator/purge/' },
								{ text: 'Setting', link: '/vi/utility-commands/moderator/setting/' },
								{ text: 'Slowmode', link: '/vi/utility-commands/moderator/slowmode/' },
								{ text: 'Snipe', link: '/vi/utility-commands/moderator/snipe/' },
								{ text: 'Unban', link: '/vi/utility-commands/moderator/unban/' }
							]
						},
						{
							text: 'Thiết lập',
							collapsed: true,
							items: [
								{ text: 'Tự động tạo voice', link: '/vi/utility-commands/setup/jtc/' },
								{ text: 'Thông báo Youtube', link: '/vi/utility-commands/setup/youtube-notify/' }
							]
						},
						{
							text: 'Người dùng',
							collapsed: true,
							items: [
								{ text: 'Afk', link: '/vi/utility-commands/user/afk/' },
								{ text: 'Report Issue', link: '/vi/utility-commands/user/issue/' },
								{ text: 'Media Embed', link: '/vi/utility-commands/user/media-embed/' },
								{ text: 'Say', link: '/vi/utility-commands/user/say/' },
								{ text: 'Tts', link: '/vi/utility-commands/user/tts/' },
								{ text: 'Voice', link: '/vi/utility-commands/user/voice/' }
							]
						}
					]
				},
				{
					text: 'Các lệnh Music system',
					collapsed: false,
					items: [
						{
							text: 'Quản lý phát nhạc',
							collapsed: true,
							items: [
								{ text: 'play', link: '/vi/music-system/play-music/play/' },
								{ text: 'queue', link: '/vi/music-system/play-music/queue/' },
								{ text: 'nowplaying', link: '/vi/music-system/play-music/nowplaying/' },
								{ text: 'autoplay', link: '/vi/music-system/play-music/autoplay/' },
								{ text: 'clearqueue', link: '/vi/music-system/play-music/clearqueue/' },
								{ text: 'control', link: '/vi/music-system/play-music/control/' },
								{ text: 'grab', link: '/vi/music-system/play-music/grab/' },
								{ text: 'join', link: '/vi/music-system/play-music/join/' },
								{ text: 'leave', link: '/vi/music-system/play-music/leave/' },
								{ text: 'loop', link: '/vi/music-system/play-music/loop/' },
								{ text: 'lyrics', link: '/vi/music-system/play-music/lyrics/' },
								{ text: 'pause', link: '/vi/music-system/play-music/pause/' },
								{ text: 'remove', link: '/vi/music-system/play-music/remove/' },
								{ text: 'resume', link: '/vi/music-system/play-music/resume/' },
								{ text: 'seek', link: '/vi/music-system/play-music/seek/' },
								{ text: 'shuffle', link: '/vi/music-system/play-music/shuffle/' },
								{ text: 'skip', link: '/vi/music-system/play-music/skip/' },
								{ text: 'stop', link: '/vi/music-system/play-music/stop/' },
								{ text: 'volume', link: '/vi/music-system/play-music/volume/' }
							]
						},
						{
							text: 'Quản lý danh sách phát',
							collapsed: true,
							items: [
								{ text: 'Create', link: '/vi/music-system/playlist/create/' },
								{ text: 'Delete', link: '/vi/music-system/playlist/delete/' },
								{ text: 'Load', link: '/vi/music-system/playlist/load/' },
								{ text: 'Save Current', link: '/vi/music-system/playlist/savecurrent/' },
								{ text: 'Save Queue', link: '/vi/music-system/playlist/savequeue/' },
								{ text: 'List', link: '/vi/music-system/playlist/list/' },
								{ text: 'Info', link: '/vi/music-system/playlist/info/' },
								{ text: 'Remove Track', link: '/vi/music-system/playlist/removetrack/' },
							]
						}
					]
				},
				{
					text: 'Các lệnh về Anime',
					collapsed: false,
					items: [
						{
							text: 'NSFW',
							collapsed: true,
							items: [
								{ text: 'hentai', link: '/vi/anime-commands/nsfw/hentai/' }
							]
						}
					]
				}
			]
		},
		socialLinks: [
			{ icon: 'discord', link: 'https://discord.gg/4avukvUBFM' },
			{ icon: 'github', link: 'https://github.com/foobab0510' }
		],
		search: {
			provider: 'local'
		},
		footer: {
			copyright: 'Copyright © 2021-present foob.dev'
		}
	}
});
