import React from "react"
import PropTypes from 'prop-types';
import { Link } from "gatsby"

import { AppBar, Box, CssBaseline, Tab, Tabs, Toolbar, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Copyright from "./copyright"

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    boxShadow: 'none',
    color: 'inherit',
    textDecoration: 'none',
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
  offset: theme.mixins.toolbar,
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    alignContent: 'center',
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
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
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

const Layout = ({ location, title, tabs={}, setTab, postTitle="", children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setTab(newValue);
  };

  let header

  if (location.pathname === rootPath) {
    header = (
      <AppBar position="fixed">
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
      <React.Fragment>
        <AppBar position="fixed">
          <Toolbar variant="dense">
            <Link
              className={classes.title}
              activeClassName={classes.title}
              to={`/`}
            >
              <Typography variant="h6" display="inline" >
              {title} | {' '}
              </Typography>  
              <Typography variant="subtitle2" display="inline" >
              {postTitle}
              </Typography>          
            </Link>
            <Tabs value={value} onChange={handleChange} >
            {Object.keys(tabs).map((tab) => 
              <Tab label={tab} {...a11yProps(tabs[tab])} key={tabs[tab]} />
            )} 
            </Tabs>
          </Toolbar>
          
        </AppBar>
        {/* <div className={classes.offset} /> */}
      </React.Fragment>
    );
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <header>{header}</header>
      <Container maxWidth="md" className={classes.main} component="main">
        {/* <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel> */}
        {children}
      </Container>
      
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </footer>
    </div>
  )
}

export default Layout
