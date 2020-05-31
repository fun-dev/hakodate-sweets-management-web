import { createMuiTheme } from '@material-ui/core/styles';
import 'styled-components';

export const theme = createMuiTheme({
  spacing: 8,
});

export type AppTheme = typeof theme;

declare module 'styled-components' {
  interface DefaultTheme extends AppTheme {}
}
