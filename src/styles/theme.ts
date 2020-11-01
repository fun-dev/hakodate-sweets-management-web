import { createMuiTheme } from '@material-ui/core/styles';
import 'styled-components';

const defaultTheme = createMuiTheme();

export const theme = createMuiTheme({
  spacing: 8,
  overrides: {
    MuiFormControl: {
      root: {
        width: '100%',
      },
    },
  },
});

export type AppTheme = typeof theme;

declare module 'styled-components' {
  interface DefaultTheme extends AppTheme {}
}
