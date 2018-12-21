import React from 'react'
import './App.css';

//Stateless Functional Component
const Footer = (props) => {
    return (
         <footer id='footer-wrapper' role='contentinfo'>          
            <p className="copyright"> 2018.Udacity-FEND.
                Made with ❤ by 
            <a id='footer-link' 
                target='_blank' 
                rel="noopener noreferrer" 
                href='https://www.linkedin.com/in/dianavile/'> Diana Vilé
            </a>.
            Map:
            <a href='https://developers.google.com/maps/documentation/' 
               target="_blank" 
               rel="noopener noreferrer"> Google Maps.
            </a> 

            Data:
            <a href='https://developer.foursquare.com/'> Foursquare API
            </a>

            Icons:
            <a href="https://www.freepik.com/" title="Freepik">Freepik </a> 
            from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com
            </a>
            </p>
        </footer>
        )    
}

export default Footer
