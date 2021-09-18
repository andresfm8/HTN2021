module.exports = {
	purge    : [ './src/**/*.{js,jsx,ts,tsx}', './public/index.html' ],
	darkMode : false, // or 'media' or 'class'
	theme    : {
		extend : {
			outline: {
				white: '2px solid #FFFFFF'
			}
		},
		colors : {
			green : {
				spotify : '#1DB954'
			},
			blue  : {
				light : '#0D1A8E',
				dark  : '#13043F'
			},
			white : '#FFFFFF'
		}
	},
	variants : {
		extend : {}
	},
	plugins  : []
};
