import React from 'react';
import {
  Sidebar,
  ProfilePic,
  ProfilePicContainer,
  ProfilePicture,
  FullName,
  TabContainer,
  Tab,
  SidebarLogo,
  SidebarLogoContainer,
} from './SidebarStyled';
import logo1 from '../../assets/images/Logo1.svg';
import profile from '../../assets/images/profile.jpg';
import brush from '../../assets/icons/brush.svg';
import coronavirus from '../../assets/icons/coronavirus.svg';
import calendar from '../../assets/icons/calendar.svg';
import account from '../../assets/icons/account.svg';
import settings from '../../assets/icons/settings.svg';

import { Link } from 'react-router-dom';

const InputField = (props) => {
  return (
    <Sidebar>
      <ProfilePicContainer>
        <ProfilePic>
          <ProfilePicture src={profile} alt='profile' />
        </ProfilePic>
      </ProfilePicContainer>
      <FullName>Lana Viendra</FullName>
      <TabContainer>
        <Link to='/'>
          <Tab>
            <img src={brush} alt='icon' />
            <p>New Cleaning</p>
          </Tab>
        </Link>
        <Link to='/'>
          <Tab>
            <img src={coronavirus} alt='icon' />
            <p>New Disinfection</p>
          </Tab>
        </Link>
        <Link to=''>
          <Tab>
            <img src={calendar} alt='icon' />
            <p>All Apointments</p>
          </Tab>
        </Link>
        <Link to='/'>
          <Tab>
            <img src={account} alt='icon' />
            <p>Profile</p>
          </Tab>
        </Link>

        <Link to='/'>
          <Tab>
            <img src={settings} alt='icon' />
            <p>Settings</p>
          </Tab>
        </Link>
      </TabContainer>
      <SidebarLogoContainer>
        <SidebarLogo>
          <img src={logo1} alt='logo' />
        </SidebarLogo>
      </SidebarLogoContainer>
    </Sidebar>
  );
};

export default InputField;
