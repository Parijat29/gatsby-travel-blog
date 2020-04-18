import React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="/">
      M&P's Travel Blog
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {' - Built with'}
      {` `}
      <MuiLink color="inherit" href="https://www.gatsbyjs.org">
      Gatsby
      </MuiLink>
    </Typography>
  );
}