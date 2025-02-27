/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import Footer from './footer'

import './layout.css'

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            <div>
                <main>{children}</main>
            </div>
            <Footer />
        </React.Fragment>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
