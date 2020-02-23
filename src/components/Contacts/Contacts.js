import React from 'react';
import styled, { keyframes } from 'styled-components';
import {
  tada,
  rollIn,
  fadeInRight,
  fadeInDown
} from 'react-animations';
import './Contacts.scss';

const TadaAnimation = styled.div`animation: 1s ${keyframes`${tada}`}`;
const RollInAnimation = styled.div`animation: 1s ${keyframes`${rollIn}`}`;
const FadeInRightAnimation = styled.div`animation: 1s ${keyframes`${fadeInRight}`}`;
const FadeInDownAnimation = styled.div`animation: 1s ${keyframes`${fadeInDown}`}`;

const Contacts = () => {
  return (
    <div className="contacts">
      <TadaAnimation>
        <h1 className="contacts_title">Contact me</h1>
      </TadaAnimation>

      <div className="contacts_item">
        <RollInAnimation>
          <a className="contacts_item_link" href="https://www.google.com.ua/maps/place/Kiev" target="_blank" rel="noopener noreferrer">
            <img src="assets/site/social_icons/location.svg" alt="location" />
          </a>
        </RollInAnimation>

        <FadeInRightAnimation>
          <div className="contacts_item_text1">Location:</div>
        </FadeInRightAnimation>

        <FadeInDownAnimation>
          <span className="contacts_item_text2">Kiev</span>
        </FadeInDownAnimation>
      </div>

      <div className="contacts_item">
        <RollInAnimation>
          <a className="contacts_item_link" href="tel:+380638419651">
            <img src="assets/site/social_icons/phone.svg" alt="phone" />
          </a>
        </RollInAnimation>

        <FadeInRightAnimation>
          <div className="contacts_item_text1">Phone:</div>
        </FadeInRightAnimation>

        <FadeInDownAnimation>
          <span className="contacts_item_text2">+380 (63) 841 96 51</span>
        </FadeInDownAnimation>
      </div>

      <div className="contacts_item">
        <RollInAnimation>
          <a className="contacts_item_link" href="mailto: dima.nazdratenko@gmail.com">
            <img src="assets/site/social_icons/mail.svg" alt="mail" />
          </a>
        </RollInAnimation>

        <FadeInRightAnimation>
          <div className="contacts_item_text1">Mail:</div>
        </FadeInRightAnimation>

        <FadeInDownAnimation>
          <span className="contacts_item_text2">dima.nazdratenko@gmail.com</span>
        </FadeInDownAnimation>
      </div>

      <div className="contacts_item">
        <RollInAnimation>
          <a className="contacts_item_link" href="skype:hitman3322?chat">
            <img src="assets/site/social_icons/skype.svg" alt="skype" />
          </a>
        </RollInAnimation>

        <FadeInRightAnimation>
          <div className="contacts_item_text1">Skype:</div>
        </FadeInRightAnimation>

        <FadeInDownAnimation>
          <span className="contacts_item_text2">hitman3322</span>
        </FadeInDownAnimation>
      </div>

      <div className="contacts_item">
        <RollInAnimation>
          <a className="contacts_item_link" href="https://telegram.me/DimaNazdratenko" target="_blank" rel="noopener noreferrer">
            <img src="assets/site/social_icons/telegram.svg" alt="telegram" />
          </a>
        </RollInAnimation>

        <FadeInRightAnimation>
          <div className="contacts_item_text1">Telegram:</div>
        </FadeInRightAnimation>

        <FadeInDownAnimation>
          <span className="contacts_item_text2">@DimaNazdratenko</span>
        </FadeInDownAnimation>
      </div>

      <div className="contacts_item">
        <RollInAnimation>
          <a className="contacts_item_link" href="https://www.messenger.com/t/DimaNazdratenko" target="_blank" rel="noopener noreferrer">
            <img src="assets/site/social_icons/messenger.svg" alt="messenger" />
          </a>
        </RollInAnimation>

        <FadeInRightAnimation>
          <div className="contacts_item_text1">Messenger:</div>
        </FadeInRightAnimation>

        <FadeInDownAnimation>
          <span className="contacts_item_text2">DimaNazdratenko</span>
        </FadeInDownAnimation>
      </div>
    </div>
  );
};

export default Contacts;
