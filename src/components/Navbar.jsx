import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <ul>
          <li>
            <NavLink to='/'>All movies</NavLink>
          </li>
          <li>
            <NavLink to='comedy'>Comedy</NavLink>
          </li>
          <li>
            <NavLink to='scifi'>Sci-fi</NavLink>
          </li>
          <li>
            <NavLink to='animation'>Animation</NavLink>
          </li>
          <li>
            <NavLink to='action'>Action</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
