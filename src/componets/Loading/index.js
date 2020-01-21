import React from 'react';

import { Container } from './styles';
import loading from '../../assets/images/loading.svg';

export default function Loading({ size }) {
  return (
    <Container>
      <img src={loading} width={size} height={size} alt="" />
    </Container>
  );
}
