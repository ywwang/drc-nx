import { createTheme } from '@mui/material/styles';
import { gray, white, primary } from '../colors';

export const optionsDrcTheme = {
  palette: {
    primary: {
      main: primary.blue,
      contrastText: white,
    },
    action: {
      activatedOpacity: 0.16,
      disabled: gray[100],
    },
  },
  overrides: {
    MuiTableSortLabel: {
      root: {
        '&$active': {
          color: gray[700],
        },
      },
    },
    PrivateTabIndicator: {
      colorPrimary: {
        height: 3,
      },
      colorSecondary: {
        height: 3,
      },
    },
  },
};

const defaultTheme = createTheme(optionsDrcTheme);

export const muiThemes = {
  default: defaultTheme,
};

export default defaultTheme;
