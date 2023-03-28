import bamdol from '../../img/bamdol.svg';
import Menubar from '../Menubar/Menubar';

const Header = () => {
  return (
    <div className='white-bar'>
      <div className='information-bar'>
        <img src={bamdol} className='bamdol' />
        <Menubar />
      </div>
    </div>
  )
};

export default Header;