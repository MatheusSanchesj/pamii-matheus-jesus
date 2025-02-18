import React from "react";
import { View, StyleSheet } from "react-native";
import botaoProps from './components/BotaoProps';

const App = () => {
  const handlePress = () => {
    console.log('Botão pressionado!');
  };

  const teste = () => {
    console.log('Segundo teste');
  };

  return( 
    <View style={styles.container}>
      <botaoProps label="Clique aqui" corFundo="pink" onPress={handlePress} />
      <botaoProps label="Clique agora" corFundo="purple" onPress={teste} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
  },
});

export default App;
