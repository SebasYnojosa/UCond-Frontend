import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../assets/img/logoCircular.svg';

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    
    useEffect(() => { 
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            }else {
                setScrolled(false);
            }
        }
        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);
  
  const onUpdateActiveLink = (value) => {
      setActiveLink(value);
  }
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt= "Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className='navbar-toggler-icon'> </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onclick= {()=> onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#pricing" className={activeLink ==='skills' ? 'active navbar-link': 'navbar-link'}onclick= {()=> onUpdateActiveLink('home')}>Pricing</Nav.Link>  
                      <Nav.Link href="#about" className={activeLink === '#about' ? 'active navbar-link' : 'navbar-link'} onclick={() => onUpdateActiveLink('home')}>About</Nav.Link>
            </Nav>
              <span className='navbar-text'>
            <button className='vvd' onClick={() => console.log('connect')}><span>log in</span></button>
            <button className='vvd' onClick={()=> console.log('connect')}><span>Register</span></button>
                    </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;