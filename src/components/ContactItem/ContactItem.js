import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import {
  rollIn,
  fadeInRight,
  fadeInDown
} from 'react-animations';
import './ContactItem.scss';

const RollInAnimation = styled.div`animation: 1s ${keyframes`${rollIn}`}`;
const FadeInRightAnimation = styled.div`animation: 1s ${keyframes`${fadeInRight}`}`;
const FadeInDownAnimation = styled.div`animation: 1s ${keyframes`${fadeInDown}`}`;

const ContactItem = (props) => {
  const {
    name,
    href,
    newTab,
    text1,
    text2,
    img
  } = props;

  return (
    <div className="contacts_item">
      <RollInAnimation>
        <a className="contacts_item_link" href={href} target={newTab ? '_blank' : undefined} rel="noopener noreferrer">
          <img src={img} alt={name} />
        </a>
      </RollInAnimation>

      <FadeInRightAnimation>
        <div className="contacts_item_text1">{text1}</div>
      </FadeInRightAnimation>

      <FadeInDownAnimation>
        <span className="contacts_item_text2">{text2}</span>
      </FadeInDownAnimation>
    </div>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  newTab: PropTypes.bool.isRequired,
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};

export default ContactItem;
