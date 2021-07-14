import React from 'react'
const propTypes = require('prop-types');
const { StaticQuery, graphql } = require('gatsby');
const Helmet = require('react-helmet');

const Layout = ({ children, location }) => {
  let content;

  if (location && location.pathname === '/') {
    content = (
      <div>
        {children}
      </div>
    )
  } else {
    content = (
      <div id="wrapper" className="page">
        <div>
          {children}
        </div>
      </div>
    )
  }

  return (
    <StaticQuery
      query={graphql`
              query MyQuery {
                site {
                  siteMetaData {
                    title
                  }
                }
              }
            `}
      render={data => {
        <>
          <Helmet
            title={data.site.siteMetaData.title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          >
            <html lang='en' />
          </Helmet>
          {content}
        </>
      }}
    />
  )
}

Layout.propTypes = {
  children: propTypes.node.isRequired,
}

export default Layout;
