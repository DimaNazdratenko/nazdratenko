import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import PageHeader from '../PageHeader/PageHeader';
import './Contacts.scss';

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
      <PageHeader text="Contact me" />

      {listItems}
    </div>
  );
};

export default Contacts;
