import { Grid, Box } from '@material-ui/core';

const paperSpacing = 2;

export const Wrapper: React.FC = ({ children }) => (
  <Box height="100%" clone>
    <Grid container spacing={paperSpacing}>
      {children}
    </Grid>
  </Box>
);

export const LeftItem: React.FC = ({ children }) => (
  <Grid item xs={8}>
    <Box height="100%" clone>
      {children}
    </Box>
  </Grid>
);

export const RightContainer: React.FC = ({ children }) => (
  <Grid item xs={4}>
    <Box height="100%" clone>
      <Grid container>{children}</Grid>
    </Box>
  </Grid>
);

export const TopRightItem: React.FC = ({ children }) => (
  <Box paddingBottom={paperSpacing / 2} clone>
    <Grid item xs={12}>
      <Box height="100%" clone>
        {children}
      </Box>
    </Grid>
  </Box>
);

export const BottomRightItem: React.FC = ({ children }) => (
  <Box paddingTop={paperSpacing / 2} clone>
    <Grid item xs={12}>
      <Box height="100%" clone>
        {children}
      </Box>
    </Grid>
  </Box>
);
