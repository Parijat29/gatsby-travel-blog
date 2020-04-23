import React from "react"
import PropTypes from 'prop-types';
import { Link, graphql } from "gatsby"

import { Box, Typography, Divider } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';

import Image from 'material-ui-image'

// import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const useStyles = makeStyles(theme => ({
  root: {
    ...theme.typography.body1,
    color: theme.palette.text.primary,
    textAlign: 'justify',
    wordBreak: 'break-word',
    '& .anchor-link': {
      marginTop: -96, // Offset for the anchor.
      position: 'absolute',
    },
    '& pre': {
      margin: theme.spacing(3, 0),
      padding: theme.spacing(2),
      backgroundColor: '#272c34',
      direction: 'ltr',
      borderRadius: theme.shape.borderRadius,
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch', // iOS momentum scrolling.
      maxWidth: 'calc(100vw - 32px)',
      [theme.breakpoints.up('md')]: {
        maxWidth: 'calc(100vw - 32px - 16px)',
      },
    },
    '& code': {
      lineHeight: 1.4,
      display: 'inline-block',
      fontFamily: 'Consolas, "Liberation Mono", Menlo, Courier, monospace',
      WebkitFontSmoothing: 'subpixel-antialiased',
      padding: '0 3px',
      color: theme.palette.text.primary,
      backgroundColor:
        theme.palette.type === 'light' ? 'rgba(255, 229, 100, 0.2)' : 'rgba(255, 229, 100, 0.2)',
      fontSize: 14,
      borderRadius: 2,
    },
    '& code[class*="language-"]': {
      backgroundColor: '#272c34',
      color: '#fff',
      // Avoid layout jump after hydration (style injected by prism)
      lineHeight: 1.5,
    },
    '& p code, & ul code, & pre code': {
      fontSize: 14,
    },
    '& .token.operator': {
      background: 'transparent',
    },
    '& h1': {
      ...theme.typography.h3,
      fontSize: 40,
      margin: '16px 0',
    },
    '& .description': {
      ...theme.typography.h5,
      margin: '0 0 40px',
    },
    '& h2': {
      ...theme.typography.h4,
      fontSize: 30,
      margin: '40px 0 16px',
    },
    '& h3': {
      ...theme.typography.h5,
      margin: '40px 0 16px',
    },
    '& h4': {
      ...theme.typography.h6,
      margin: '32px 0 16px',
    },
    '& h5': {
      ...theme.typography.subtitle2,
      margin: '32px 0 16px',
    },
    '& p, & ul, & ol': {
      marginTop: 0,
      marginBottom: 16,
    },
    '& ul': {
      paddingLeft: 30,
    },
    '& h1, & h2, & h3, & h4': {
      '& code': {
        fontSize: 'inherit',
        lineHeight: 'inherit',
        // Remove scroll on small screens.
        wordBreak: 'break-all',
      },
      '& .anchor-link-style': {
        // To prevent the link to get the focus.
        display: 'none',
      },
      '&:hover .anchor-link-style': {
        display: 'inline-block',
        padding: '0 8px',
        color: theme.palette.text.secondary,
        '&:hover': {
          color: theme.palette.text.primary,
        },
        '& svg': {
          width: '0.7em',
          height: '0.7em',
          fill: 'currentColor',
        },
      },
    },
    '& table': {
      // Trade display table for scroll overflow
      display: 'block',
      wordBreak: 'normal',
      width: '100%',
      overflowX: 'auto',
      WebkitOverflowScrolling: 'touch', // iOS momentum scrolling.
      borderCollapse: 'collapse',
      marginBottom: '16px',
      borderSpacing: 0,
      overflow: 'hidden',
      '& .prop-name': {
        fontSize: 13,
        fontFamily: 'Consolas, "Liberation Mono", Menlo, monospace',
      },
      '& .required': {
        color: theme.palette.type === 'light' ? '#006500' : '#a5ffa5',
      },
      '& .prop-type': {
        fontSize: 13,
        fontFamily: 'Consolas, "Liberation Mono", Menlo, monospace',
        color: theme.palette.type === 'light' ? '#932981' : '#ffb6ec',
      },
      '& .prop-default': {
        fontSize: 13,
        fontFamily: 'Consolas, "Liberation Mono", Menlo, monospace',
        borderBottom: `1px dotted ${theme.palette.divider}`,
      },
    },
    '& td': {
      ...theme.typography.body2,
      borderBottom: `1px solid ${theme.palette.divider}`,
      padding: 16,
      color: theme.palette.text.primary,
    },
    '& td code': {
      fontSize: 13,
      lineHeight: 1.6,
    },
    '& th': {
      fontSize: 14,
      lineHeight: theme.typography.pxToRem(24),
      fontWeight: theme.typography.fontWeightMedium,
      color: theme.palette.text.primary,
      whiteSpace: 'pre',
      borderBottom: `1px solid ${theme.palette.divider}`,
      padding: 16,
    },
    '& blockquote': {
      borderLeft: '5px solid #ffe564',
      backgroundColor: 'rgba(255,229,100,0.2)',
      padding: '4px 24px',
      margin: '24px 0',
      '& p': {
        marginTop: '16px',
      },
    },
    '& a, & a code': {
      // Style taken from the Link component
      color: theme.palette.secondary.main,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
    '& img, video': {
      maxWidth: '100%',
    },
    '& hr': {
      height: 1,
      margin: theme.spacing(6, 0),
      border: 'none',
      flexShrink: 0,
      backgroundColor: theme.palette.divider,
    },
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

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext
  const classes = useStyles();

  const [tabsList] = React.useState({"Experience":0, "itinerary":1, "Budget":2});
  const [value, setValue] = React.useState(0);
  
  return (
    <Layout location={location} title={siteTitle} tabs={tabsList} setTab={setValue} postTitle={post.frontmatter.title}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <TabPanel value={value} index={tabsList["Experience"]}>
        <article>
          <header>
            <div>
              <Image aspectRatio={(16/9)}
                src="https://picsum.photos/1600/900"
              />
            </div>
            <br/>
            <Typography variant="h3">
              {post.frontmatter.title}
            </Typography>
            <Typography variant="subtitle1">
              {post.frontmatter.date}
            </Typography>
          </header>
          <br/>
          <section className={classes.root} dangerouslySetInnerHTML={{ __html: post.html }} />
          <Divider />
          {/* <footer>
            <Bio />
          </footer> */}
        </article>
      </TabPanel>
      <TabPanel value={value} index={tabsList["itinerary"]}>
        <article>
          <section className={classes.root} dangerouslySetInnerHTML={{ __html: post.frontmatter.itinerary }} />
          <Divider />

          {/* <footer>
            <Bio />
          </footer> */}
        </article>
      </TabPanel>
      <TabPanel value={value} index={tabsList["Budget"]}>
        <article>
          <section className={classes.root} dangerouslySetInnerHTML={{ __html: post.frontmatter.budget }} />
          <Divider />

          {/* <footer>
            <Bio />
          </footer> */}
        </article>
      </TabPanel>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        itinerary
        budget
      }
    }
  }
`
