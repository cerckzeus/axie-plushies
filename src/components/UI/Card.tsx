import React from 'react'
import StyledCard from '../styles/Card.styled';

const Card: React.FC = (props) => {
  return (
    <StyledCard>{props.children}</StyledCard>
  )
}

export default Card