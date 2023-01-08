import './App.css';
import { DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, UncontrolledDropdown } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeer } from '@fortawesome/free-solid-svg-icons'
import FavBeer from './components/FavBeer';
import BeerList from './components/BeerList';

function App() {
  const brand = 'We Love Beer';

  return (
    <div className="App">
      <Navbar color='light'>
        <NavbarBrand href="/">
          <FontAwesomeIcon icon={faBeer} className='me-2 text-warning' />
          {brand}
        </NavbarBrand>
        <Nav>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>My account</DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Gift Table</DropdownItem>
              <DropdownItem>Wish List</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Create a list</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Navbar>
      <FavBeer />
      <BeerList />
    </div>
  );
}

export default App;
