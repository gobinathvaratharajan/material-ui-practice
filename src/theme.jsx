import { createTheme } from "@mui/material";
import { green, lightGreen, purple, red } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
        primary: {
            main: purple[500],
            light: '#98420'
        },
        secondary: {
            main: green[300],
            light: '#fff89',
        },
        otherColor: {
            main: red[400],
        }
    }
})
