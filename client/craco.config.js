// craco.config.js
module.exports = {
	style : {
		postcss : {
			plugins : [ require('tailwindcss'), require('autoprefixer') ]
		}
	},
	theme : {
		colors: {
			blue: {
				light: '#0D1A8E',
				dark: '#13043F',
				button: '#4244E0',
			},
		},
	}	
};
