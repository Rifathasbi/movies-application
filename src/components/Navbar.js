import { Navbar, Container, Nav, NavbarBrand }  from 'react-bootstrap'


const NavigationBar = () => {
    return(
       <Navbar variant='dark'>
            <Container>
                <NavbarBrand href='/' >APP FILM</NavbarBrand>
                <Nav>
                    <Nav.Link href='#trending'>TRENDING</Nav.Link>
                    <Nav.Link href='#superhero'>SUPER HERO</Nav.Link>
                </Nav>
            </Container>
       </Navbar>
    )
} 

export default NavigationBar