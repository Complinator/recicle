import React, { useState, useEffect } from 'react';
import { 
  Smartphone, 
  Tv, 
  Battery, 
  Refrigerator,
  Drill,
  CircuitBoard
} from 'lucide-react';
import styled, { keyframes } from 'styled-components';

const rotateAnimation = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(-30deg); }
  75% { transform: rotate(30deg); }
  100% { transform: rotate(0deg); }
`;

const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Container = styled.div`
  text-align: center;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 10px;
  max-width: 400px;
  margin: 2rem auto;
`;

const Title = styled.h2`
  color: #black;
  margin-bottom: 2rem;
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const IconWrapper = styled.div`
  animation: ${rotateAnimation} 3s infinite ease-in-out;
  animation-delay: ${props => props.delay}s;
`;

const CounterContainer = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: #00A19B;
  position: relative;
  height: 4rem;
  overflow: hidden;
`;

const Number = styled.span`
  display: inline-block;
  animation: ${slideUp} 0.5s ease-out;
`;

const Unit = styled.span`
  font-size: 2rem;
  color: #00A19B;
  margin-left: 0.5rem;
`;

const Counter = () => {
  const [count, setCount] = useState(696650);
  const icons = [
    { Component: Tv, delay: 0 },
    { Component: Smartphone, delay: 0.5 },
    { Component: Battery, delay: 1 },
    { Component: Refrigerator, delay: 1.5 },
    { Component: Drill, delay: 2 },
    { Component: CircuitBoard, delay: 2.5 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const increment = Math.floor(Math.random() * 10) + 1;
      setCount(prevCount => prevCount + increment);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
    <Container>
      <Title>Residuos electronicos reciclados en el año</Title>
      <IconsContainer>
        {icons.map((Icon, index) => (
          <IconWrapper key={index} delay={Icon.delay}>
            <Icon.Component size={24} color="#8EC5C0" />
          </IconWrapper>
        ))}
      </IconsContainer>
      <CounterContainer>
        <Number key={count}>
          {formatNumber(count)}
        </Number>
        <Unit>Kg</Unit>
      </CounterContainer>
    </Container>
  );
};

export default Counter;