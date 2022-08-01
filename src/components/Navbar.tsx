import { Link } from 'react-router-dom';
import { CgProfile} from 'react-icons/cg';
export function Navbar() {
    return (
      <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#news">News</a></li>
      <li><a href="#contact">Contact</a></li>
      <li className='f'><a className="active" href="#about">About</a></li>
    </ul>
     
    )}