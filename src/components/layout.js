import React from "react"
import PropTypes from 'prop-types';
import { Link } from "gatsby"

import { AppBar, Box, Button, CssBaseline, Tab, Tabs, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { rhythm } from "../utils/typography"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    boxShadow: 'none',
    color: 'inherit',
    fontStyle: 'normal',
  },
  centerTitle: {
    flexGrow: 1,
    textAlign: 'center',
    boxShadow: 'none',
    color: 'inherit',
    textDecoration: 'none',
  },
  toolbar: {
    alignItems: 'flex-start',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let header

  if (location.pathname === rootPath) {
    header = (
      <AppBar position="static" color="transparent">
        <Toolbar className={classes.toolbar}>
          <Link
            className={classes.centerTitle}
            activeClassName={classes.centerTitle}
            to={`/`}
          >
            <Typography variant="h5" >
            {title}
            </Typography>            
          </Link>
        </Toolbar>
      </AppBar>
    );
  } else {
    header = (
      <AppBar position="static" color="transparent">
        <Toolbar variant="dense">
          <Link
            className={classes.title}
            to={`/`}
          >
            <Typography variant="h6" >
            {title}
            </Typography>            
          </Link>
          <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" centered>
            <Tab label="Item One" {...a11yProps(0)} />
            <Tab label="Item Two" {...a11yProps(1)} />
            <Tab label="Item Three" {...a11yProps(2)} />
          </Tabs>
        </Toolbar>
        
      </AppBar>
    );
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <header>{header}</header>
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        
        <main>{children}</main>
        <footer>
          © M&P's Travel Blog {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </div>
  )
}

export default Layout
