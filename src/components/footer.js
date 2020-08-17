import React from 'react'
import { Grid, Cell } from 'react-foundation';
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faSpotify, faInstagram } from '@fortawesome/free-brands-svg-icons'


const Footer = (props) => (
    <footer id="footer" className="footer">
      <div className="footer__main">
        <Grid className="grid-container grid-margin-y">
          <Cell small={6} medium={"auto"} className="auto">
              <h5><Link to="#">Movies</Link></h5>
              <ul>
                <li><Link to="#">Lorem ipsum</Link></li>
                <li><Link to="#">Excepteur sint occaecat Cupidatat non proident</Link></li>
                <li><Link to="#">Sunt in</Link></li>
                <li><Link to="#">Culpa qui officia deserunt</Link></li>
                <li><Link to="#">Mollit anim id est laborum</Link></li>
              </ul>
          </Cell>
          <Cell small={6} medium={"auto"} className="auto">
              <h5><Link to="#">Series</Link></h5>
              <ul>
                <li><Link to="#">Lorem ipsum</Link></li>
                <li><Link to="#">Excepteur sint occaecat Cupidatat non proident</Link></li>
                <li><Link to="#">Sunt in</Link></li>
                <li><Link to="#">Culpa qui officia deserunt</Link></li>
                <li><Link to="#">Mollit anim id est laborum</Link></li>
              </ul>
          </Cell>
          <Cell small={6} medium={"auto"} className="auto">
              <h5><Link to="#">DisneyLife</Link></h5>
              <ul>
                <li><Link to="#">Lorem ipsum</Link></li>
                <li><Link to="#">Excepteur sint occaecat Cupidatat non proident</Link></li>
                <li><Link to="#">Sunt in</Link></li>
                <li><Link to="#">Mollit anim id est laborum</Link></li>
              </ul>
          </Cell>
          <Cell small={6} medium={"auto"} className="auto">
              <h5><Link to="#">Holidays</Link></h5>
              <ul>
                <li><Link to="#">Lorem ipsum</Link></li>
                <li><Link to="#">Excepteur sint occaecat Cupidatat non proident</Link></li>
                <li><Link to="#">Sunt in</Link></li>
                <li><Link to="#">Mollit anim id est laborum</Link></li>
              </ul>
          </Cell>
          <Cell small={12} medium={"auto"} className="auto">
              <h5><Link to="#">Company</Link></h5>
              <ul>
                <li><Link to="tel:020622223364">0206 222 3364</Link></li>
                <li><Link to="mailto:hello@disneylife.com">hello@disneylife.com</Link></li>
                <li><Link to="mailto:press@disney.com">press@disney.com</Link></li>
                <ul className="socials">
                  <li className="insta"><Link target="_blank" to="https://instagram.com"><FontAwesomeIcon icon={faInstagram} /></Link></li>
                  <li className="spotify"><Link target="_blank" to="https://spotify.com"><FontAwesomeIcon icon={faSpotify} /></Link></li>
                  <li className="twitter"><Link target="_blank" to="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /></Link></li>
                </ul>
              </ul>
          </Cell>
        </Grid>
      </div>
        <div className="footer__bottom">
          <Grid className="grid-container grid-margin-y align-middle align-center">
            <Cell small={"auto"}>
              <p>Copyright 2020 - All rights reserved Disney</p>
            </Cell>
          </Grid>
        </div>
    </footer>
)

export default Footer