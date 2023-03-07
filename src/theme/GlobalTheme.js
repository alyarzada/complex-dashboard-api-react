import { useMemo } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { useSelector } from 'react-redux';

const getDesignTokens = (mode) => ({
	palette: {
		mode,
		...(mode === 'dark'
			? {
					primary: {
						main: '#256D85',
					},
					success: {
						main: '#14B1AB',
					},
			  }
			: {
					primary: {
						main: '#47B5FF',
					},
			  }),
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 425,
			md: 768,
			lg: 1024,
			xl: 1536,
		},
	},
	// components: {
	//   MuiSvgIcon: {
	//     styleOverrides: {
	//       root: {
	//         color: mode === "light" && "#007a53",
	//       },
	//     },
	//   },
	// },
});

const GlobalTheme = ({ children }) => {
	const { light } = useSelector((state) => state.themes);

	const theme = useMemo(
		() => createTheme(getDesignTokens(light ? 'light' : 'dark')),
		[light],
	);

	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default GlobalTheme;
