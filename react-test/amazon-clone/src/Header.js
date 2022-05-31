import React from 'react';
import './Header.css'
import { Search, ShoppingBasket } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';


const Header = () => {

  const [ {basket}, dispatch] = useStateValue();

  return (
    <div className='header'>
      <Link to='/'>
        <img className='header_logo' src='/amazon-logo.png' alt='~'/>
      </Link>
        <div className='header_search'>
          <input className='header_searchInput' type='text'/>
          <Search className='header_searchIcon' />
        </div>

      <div className='header_nav'>
      
        <div className='header_options'>
          <span className='header_optionsLineOne'>안녕하세요</span>
          <span className='header_optionsLineTwo'>로그인하기</span>
        </div>

        <div className='header_options'>
          <span className='header_optionsLineOne'>돌아가기</span>
          <span className='header_optionsLineTwo'>주문내역</span>
        </div>

        <div className='header_options'>
          <span className='header_optionsLineOne'>반가워요</span>
          <span className='header_optionsLineTwo'>구독과 좋아요</span>
        </div>
        <Link to='/checkout'>
          <div className='header_optionsBasket'>
            <ShoppingBasket/>
            <span className='header_optionsLineTowheaer_basket'>
              {basket?.length}
            </span>
          </div>
      </Link>  
    </div>
    </div>
  );
};

export default Header;