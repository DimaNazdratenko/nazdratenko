import React from 'react';
import './Footer.scss';
import linkedIn from './img/linkedin.svg';
import github from './img/github.svg';
import facebook from './img/facebook.svg';
import instagram from './img/instagram.svg';

const Footer = () => {
  const social = [
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/dima-nazdratenko-55340888',
      img: linkedIn
    },
    {
      name: 'GitHub',
      link: 'https://github.com/DimaNazdratenko/nazdratenko',
      img: github
    },
    {
      name: 'Facebook',
      link: 'https://www.facebook.com/DimaNazdratenko',
      img: facebook
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/hitman333',
      img: instagram
    }
  ];

  const listSocial = social.map((item) => {
    return (
      <a href={item.link} target="_blank" rel="noopener noreferrer" key={item.name}>
        <img src={item.img} alt={item.name} />
      </a>
    );
  });

  return (
    <footer className="footer">
      <div className="footer_social">{listSocial}</div>
      <div className="footer_copyright">© Dima Nazdratenko, 2017 - 2020</div>
    </footer>
  );
};

export default Footer;
