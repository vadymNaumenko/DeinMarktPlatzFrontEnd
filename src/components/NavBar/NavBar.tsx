// eslint-disable-next-line import/no-extraneous-dependencies
// import { Form, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// import style from './navBar.module.css';
export default function NavBar(): JSX.Element {
	// 	<nav class="navbar navbar-dark bg-dark">
	//   <!-- Navbar content -->
	// </nav>

	return (
		<Navbar expand="lg" className="navbar navbar-dark bg-dark">
			<Container fluid>
				<Navbar.Brand href="#/products">product</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="me-auto my-2 my-lg-0"
						style={{ maxHeight: '100px' }}
						navbarScroll
					>
						<Nav.Link href="#/">Home</Nav.Link>
						<Nav.Link href="#/users">Link</Nav.Link>
						<NavDropdown title="Category" id="navbarScrollingDropdown">
							<NavDropdown.Item href="#/category3">Category1</NavDropdown.Item>
							<NavDropdown.Item href="#/category4">Category2</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action5">
								Something else here
							</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link href="#" disabled>
							Link
						</Nav.Link>
					</Nav>
					<Form className="d-flex">
						<Form.Control
							type="search"
							placeholder="Search"
							className="me-2"
							aria-label="Search"
						/>
						<Button variant="outline-success">Search</Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

// <nav className="navbar navbar-dark bg-dark">
// 			<span className={style.spanButton}>
// 				<NavLink className={style.navLinkText} to="products">
// 					Products
// 				</NavLink>
// 			</span>
// 			<span className={style.spanButton}>
// 				<NavLink className={style.navLinkText} to="posts">
// 					Posts
// 				</NavLink>
// 			</span>
// 			<span className={style.spanButton}>
// 				<NavLink className={style.navLinkText} to="users">
// 					Users
// 				</NavLink>
// 			</span>
// 			<span className={style.spanButton}>
// 				<NavLink className={style.navLinkText} to="weather">
// 					Weather
// 				</NavLink>
// 			</span>
// 			<span className={style.spanButton}>
// 				<NavLink className={style.navLinkText} to="/">
// 					Home
// 				</NavLink>
// 			</span>
// 		</nav>
