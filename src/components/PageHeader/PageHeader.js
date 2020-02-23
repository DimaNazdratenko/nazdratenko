import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import {
  tada
} from 'react-animations';
import './PageHeader.scss';

const TadaAnimation = styled.div`animation: 1s ${keyframes`${tada}`}`;

const PageHeader = (props) => {
  const {
    text
  } = props;

  return (
    <TadaAnimation>
      <h1 className="page_header">{text}</h1>
    </TadaAnimation>
  );
};

PageHeader.propTypes = {
  text: PropTypes.string.isRequired
};

export default PageHeader;
