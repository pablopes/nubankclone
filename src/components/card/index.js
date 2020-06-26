import React from 'react';
import { Annotation, CardContent, CardFooter, CardHeader, Container, Description, Title } from './styles';
import { Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PanGestureHandler } from 'react-native-gesture-handler';

export default function Card({translateY, animatedEvent, onHandlerStateChanged}) {

  return (

    <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChanged}
        >
      <Container style={{
        transform: [{translateY: translateY.interpolate({
          inputRange: [-200, 0, 350],
          outputRange: [-50, 0, 350],
          extrapolate: 'clamp'
        })}]
      }}>
        <CardHeader>
          <Icon name="attach-money" size={28} color="666" />
          <Icon name="visibility-off" size={28} color="666" />

        </CardHeader>
        <CardContent>
          <Title>Saldo Disponível</Title>
          <Description>R$ 25,00</Description>
        </CardContent>
        <CardFooter>
          <Annotation>
            Transferência de R$15,00 recebida de Ana Paula hoje às 18:00h.
        </Annotation>
        </CardFooter>
      </Container>
      </PanGestureHandler>
  );
}
