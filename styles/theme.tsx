import { createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#3f51b5',
        },
        secondary: {
            main: '#ff4081',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#ffffff',
        },
    },
});

export default theme;
