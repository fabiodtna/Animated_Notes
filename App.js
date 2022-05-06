import React, { useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';


export default function App() {

  const larAnimation = useRef(new Animated.Value(35)).current;
  const altAnimation = useRef(new Animated.Value(10)).current;


  useEffect(()=> {

    // tipos de animação 
    // Animated.parallel(animações juntas executando no mesmo tempo)
    // Animated.sequence(animação em sequencia uma finaliza outra começa)
    // Animated.timing(animação e o tempo que ira durar)

    Animated.sequence([

          Animated.timing(larAnimation,{
            toValue:100,
            duration:2000,
            useNativeDriver: false
          }),

          Animated.timing(altAnimation,{
            toValue:100,
            duration:3000,
            useNativeDriver:false
          })

    ]).start(() => alert("Hello There"));
     

  },[])

  let porcentagemaltura = altAnimation.interpolate({
    inputRange:[0,100],
    outputRange:['0%', '100%']
  })

  let porcentagemlargura = larAnimation.interpolate({
    inputRange:[0, 100],
    outputRange: ['0%', '100%']
  })

  return (
    <View style={styles.container}>
        <Animated.View
          style={{
            width:porcentagemlargura,
            height:porcentagemaltura,
            backgroundColor:'#4169e1',
            justifyContent:'center'      
          }}
        >
            <Text style={{
              textAlign:'center', fontSize:20, color:'#fff'
            }}>Carregando...</Text>
        </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
