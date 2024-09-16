import { Link } from 'react-router-dom';
export function Navbar() {


 
    return (
      <ul className='nav'>
        
        

        <li className='logo-nav'><Link to={'/'}> <img src="ICast.png" alt="logo"  height="40"/></Link></li>
      <li><Link to={'/library'}>المكتبة</Link></li>
      <li><Link to={'/prodcast'}>برودكاست</Link></li>
      <li><Link to={'/'}>الأخبار</Link></li>

      <li className='search-nav'><input type="text"  placeholder="البحث"className='input'/></li>
    </ul>
      
    )}