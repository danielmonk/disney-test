import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import logo from '../assets/images/disney-logo.png'
import { Grid, Cell, Button } from 'react-foundation';
import Menu from '../components/menu'

const Header = (props) => (
  <div data-sticky-container>
    <header id="header" className="alt sticky" data-sticky data-options="marginTop:0;">
          <Grid className="display align-middle">
            <Cell small={2} large={1}><h1 className="hidden" >Disney</h1><Link to="/" className="logo"><img src={logo} alt="Disney Logo" /></Link></Cell>
            <Cell small={4} large={6}><nav><Menu /></nav></Cell>
            <Cell className="align-right large-offset-3" small={6} large={2}><button className="button button--round button--login" type="button">Login / Register</button></Cell>
        </Grid>
    </header>
  </div>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
