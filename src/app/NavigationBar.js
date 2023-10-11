import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import styles from './NavigationBar.module.css';

const NavigationBar = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand>
          <Link to="/" className={styles.linktext}>Just A Board</Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/" className={styles.linktext}>Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/features" className={styles.linktext}>Features</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/pricing" className={styles.linktext}>Pricing</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;