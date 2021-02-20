import React from 'react';
import {View, StatusBar} from 'react-native';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#312e28" />
      <View style={{flex: 1, backgroundColor: '#312e28'}} />
    </>
  );
};

export default App;
