// .storybook/preview.js

import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { muiThemes } from '@drc-nx/ui';

const muiThemeDecorator = (Story) => {
  return (
    <MuiThemeProvider theme={muiThemes.default}>
        {Story()}
    </MuiThemeProvider>
  );
};

export const decorators = [muiThemeDecorator];
