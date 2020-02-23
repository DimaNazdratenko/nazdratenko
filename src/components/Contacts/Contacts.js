import React from 'react';
import styled, { keyframes } from 'styled-components';
import {
  tada,
} from 'react-animations';
import ContactItem from '../ContactItem/ContactItem';
import './Contacts.scss';

const TadaAnimation = styled.div`animation: 1s ${keyframes`${tada}`}`;

const Contacts = () => {
  const itemsInfo = [
    {
      name: 'location',
      href: 'https://www.google.com.ua/maps/place/Kiev',
      newTab: true,
      text1: 'Location:',
      text2: 'Kiev'
    },
    {
      name: 'phone',
      href: 'tel:+380638419651',
      newTab: false,
      text1: 'Phone:',
      text2: '+380 (63) 841 96 51'
    },
    {
      name: 'mail',
      href: 'mailto: dima.nazdratenko@gmail.com',
      newTab: false,
      text1: 'Mail:',
      text2: 'dima.nazdratenko@gmail.com'
    },
    {
      name: 'skype',
      href: 'skype:hitman3322?chat',
      newTab: false,
      text1: 'Skype:',
      text2: 'hitman3322'
    },
    {
      name: 'telegram',
      href: 'https://telegram.me/DimaNazdratenko',
      newTab: true,
      text1: 'Telegram:',
      text2: '@DimaNazdratenko'
    },
    {
      name: 'messenger',
      href: 'https://www.messenger.com/t/DimaNazdratenko',
      newTab: true,
      text1: 'Messenger:',
      text2: 'DimaNazdratenko'
    }
  ];

  const listItems = itemsInfo.map((item) => {
    return (
      <ContactItem
        key={item.name}
        name={item.name}
        href={item.href}
        newTab={item.newTab}
        text1={item.text1}
        text2={item.text2}
      />
    );
  });

  return (
    <div className="contacts">
      <TadaAnimation>
        <h1 className="contacts_title">Contact me</h1>
      </TadaAnimation>

      {listItems}
    </div>
  );
};

export default Contacts;
