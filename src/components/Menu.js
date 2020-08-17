import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
        <ul className="menu">
            <li><Link onClick={props.onToggleMenu} to="#">TV</Link></li>
            <li><Link onClick={props.onToggleMenu} to="#">Movies</Link></li>
            <li><Link onClick={props.onToggleMenu} to="#">Store</Link></li>
            <li><Link onClick={props.onToggleMenu} to="#">Games</Link></li>
            <li><Link onClick={props.onToggleMenu} to="#">Video</Link></li>
            <li><Link onClick={props.onToggleMenu} to="#">Win</Link></li>
            <li><Link onClick={props.onToggleMenu} to="#">Holidays</Link></li>
            <li><Link onClick={props.onToggleMenu} to="#">Disneylife</Link></li>
        </ul>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
