import React, {useState, useEffect  } from 'react';
import { 
  Text, 
  View, 
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated
} from 'react-native';

export default function App() {

  const [offset]=useState( new Animated.ValueXY ({x:0, y:80})) 
  
  useEffect(() => {
 Animated.spring(offset.y, {
   toValue: 0,
   speed: 4,
   bounciness: 40,
 }).start();
    }, []);

  return (
    <KeyboardAvoidingView style={styles.background}>
<View style={styles.logo}>
<Image 
source={require('./assets/rcapellano.png')}
/>
</View>
< Animated.View style=
{[ 
  styles.container,
{
transform: [
  {
    translateY: offset.y
  }
]
}
]}>
<TextInput 
style={styles.input}
placeholder="Email"
autoCorrect={false}
onChange={()=> {}}
/>

<TextInput 
style={styles.input}
placeholder="Senha"
autoCorrect={false}
onChange={()=> {}}
/>

<TouchableOpacity style={styles.btnSubmit}>
  <Text style={styles.btnSubmitText}>Acessar</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.btnCreate}>
  <Text style={styles.btnCreateText}>Criar conta</Text>
</TouchableOpacity>

</Animated.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
background: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#191919'
},

logo: {
  flex: 1,
  alignContent: 'center',
  marginTop: 30,

},

container: {
flex: 1,
alignItems: 'center',
justifyContent: 'center',
width: '90%',
paddingBottom: 50
},

input: {
backgroundColor: '#FFF',  
width: '90%',
marginBottom: 15,
color: '#222',
fontSize: 17,
borderRadius: 7,
padding: 10, 
},

btnSubmit: {
  backgroundColor: '#35AAFF',
  width: '90%',
  height: 45,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 7,
 
},
btnSubmitText: {
color: '#FFF',
fontSize: 18,
},
btnCreate: {
  marginTop: 10,
  backgroundColor: '#35AAFF',
  width: '90%',
  height: 45,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 7,
},
btnCreateText: {
  color: '#FFF',
  fontSize: 18,
},

});

