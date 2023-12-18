import Container from "react-bootstrap/Container";
import {
  Navbar,
  Nav,
  Dropdown,
  DropdownButton,
  ButtonGroup,
} from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
      className="bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand href="Home" className="navbar-brand">
          Personal Webpage of Vasili Nashvilli
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="Home">Home</Nav.Link>
            <Nav.Link href="About">About</Nav.Link>
            <Nav.Link
              href="https://github.com/Vasili2797/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/vasili-nashvilli-08bb95140/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Nav.Link>
            <Nav.Link href="MyProjects">MyProjects</Nav.Link>
            <DropdownButton
              as={ButtonGroup}
              key={"Secondary"}
              id={`dropdown-variants-Primary`}
              variant={"Secondary".toLowerCase()}
              title={"Resume"}
            >
              <Dropdown.Item
                href="https://drive.google.com/file/d/1SbdxKqy4sT_Xih89vMHgVXDRR87Jm7qp/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </Dropdown.Item>
            </DropdownButton>
            <Nav.Link href="Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
