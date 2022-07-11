import React, { FC } from 'react';
import './Header.scss';
import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface IHeader {
  title: string,
  showLogOutButton: boolean
}

const Header: FC<IHeader> = ({ title, showLogOutButton, ...props }) => {
  return (
    <header className="header">
      <nav className='header-nav'>
        <div className='h2-title'>
          <h2>{'Учебный центр АПТЭК'}</h2>
          <ChevronRightIcon fontSize='small' />
        </div>

        {
          showLogOutButton
            ?
            <IconButton color='primary' aria-label="logout">
              <LogoutIcon />
            </IconButton>
            :
            <></>
        }

      </nav>
      <h1>{title}</h1>

      <hr />
    </header>
  );
}

export default Header;