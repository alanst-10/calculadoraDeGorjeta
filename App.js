import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components/native';
import Corinthians from './src/components/Corinthians'

const Page = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

const HeaderText = styled.Text`
  font-size: 25px;
  margin: 40px 0;
  font-weight: bold;
`;

const Input = styled.TextInput`
  height: 50px;
  width: 90%;
  font-size: 18px;
  background-color: #EEE;
  border-radius: 10px;
  padding: 10px
`;

const ResultArea = styled.View`
  width: 100%;  
  margin-top: 30px;
  background-color: #EEE;
  padding: 20px;
  justify-content: center;
  align-items: center
`;

const ResultItemTitle = styled.Text`
  font-size: 18px;
  font-weight: bold
`;

const ResultItem = styled.Text`
  font-size: 15px;
  margin-bottom: 10px;
`;

const PctArea = styled.View`
  flex-direction: row;
  margin: 20px;
`;

const PctItem = styled.Button`
  
`;

export default () => {
  const [ conta, setConta ] = useState('');
  const [ gorjeta, setGorjeta ] = useState(0);
  const [ pct, setPct ] = useState(10);

  const numeroInput = (texto) => {
    setConta(texto)
  }

  const calc = () => {
    let numConta = parseFloat(conta);
    if(numConta) {
      setGorjeta( (pct/100) * numConta )
    }
  }

  useEffect(()=>{
    calc()
  }, [pct, conta]);

  return (
    <Page>
      <HeaderText>Calculadora de Gorjeta</HeaderText>
      <Input placeholder="Valor total da conta" keyboardType="numeric" value={conta} onChangeText={numeroInput}/>
      <PctArea>
        <PctItem title="5%" color="green" onPress={() => setPct(5)} />
        <PctItem title="10%" color="green" onPress={() => setPct(10)} />
        <PctItem title="15%" color="green" onPress={() => setPct(15)} />
        <PctItem title="20%" color="green" onPress={() => setPct(20)} />
      </PctArea>
      { gorjeta > 0 && 
        <ResultArea>
          <ResultItemTitle>Valor da conta</ResultItemTitle>
          <ResultItem>R$ {parseFloat(conta).toFixed(2)}</ResultItem>
          <ResultItemTitle>Valor da gorjeta</ResultItemTitle>
          <ResultItem>R$ {gorjeta.toFixed(2)} ({pct}%)</ResultItem>
          <ResultItemTitle>Valor total</ResultItemTitle>
          <ResultItem>R$ {(parseFloat(conta) + gorjeta).toFixed(2)}</ResultItem>
        </ResultArea>
      }
    </Page>
  );
}