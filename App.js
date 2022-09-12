mport React from 'react';
import {
  StyleSheet, Image,
  View,
  Text,
 ScrollView, SafeAreaView} from 'react-native';

const App = () => {

  
  return (
   <View style={styles.container}>
    
      <Image source={ require("./assets/image/Rectangle.png")} style={styles.rectangle}/>
        <Image style={styles.back} source= {require('./assets/image/back.png')}></Image>
      <Image style={styles.not} source={require('./assets/image/not.png')} ></Image> 
      
      
       <SafeAreaView><ScrollView> 
       
        <Image style={styles.digitus} source={require('./assets/image/DigitusLogo.png')}/>
       
        <Image source={require('./assets/image/image.png')} style={styles.image1} />
     <Text style={styles.text1}>Enim ad minim </Text>
     <Text style={styles.t2}>Duis aute</Text>
     <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
     {'\n'}sed do eiusmod tempor incididunt ut labore et dolore
    {'\n'}magna aliqua. Ut enim ad minim veniam, quis nostrud
    {'\n'}exercitation ullamco laboris nisi ut aliquip ex ea
    {'\n'}commodo consequat. Duis aute irure dolor in
    {'\n'}reprehenderit in voluptate velit esse cillum dolore eu  
    {'\n'}fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    {'\n'}non proident, sunt in culpa qui officia deserunt mollit
    {'\n'}anim id est laborum.  
    {'\n\n'}Lorem ipsum dolor sit amet, consectetur adipiscing elit,
     {'\n'}sed do eiusmod tempor incididunt ut labore et dolore
     {'\n'}magna aliqua. Ut enim ad minim veniam, quis nostrud
     {'\n'}exercitation ullamco laboris nisi ut aliquip ex ea
      {'\n'}commodo consequat. Duis aute irure dolor in
       {'\n'}reprehenderit in voluptate velit esse cillum dolore eu
       {'\n'}fugiat nulla pariatur. Excepteur sint occaecat cupidatat
        {'\n'}non proident, sunt in culpa qui officia deserunt mollit
         {'\n'}anim id est laborum.
       {'\n\n'}Lorem ipsum dolor sit amet, consectetur adipiscing elit, </Text>
      </ScrollView></SafeAreaView>
      </View>
  );
}

const styles = StyleSheet.create({
  background:{
  
    width:300,
    heigth:80,
    backgroundColor:'#c9caca',
    
    top:50,
  },
  container: {
    flex: 10,
    backgroundColor: 'black',
   marginTop:-115,
   marginBottom:0,
   paddingBottom:85,
   
  },
  image1: {
    flex: 5,
    width:410,
    height: 325,
    margin:10,
    top:116,
    marginBottom: 95,
    left:-10,
    resizeMode: 'contain',
    zIndex:-1,
    
  },
  back: {
    flex:1,
    width:25,
    marginTop:340,
    marginBottom:-230,
    height: 5,
    bottom:0,
    right:0,
    top:-115,
    paddingBottom:10,
    paddingTop:10,
    left:20,
    position:'absolute',
    zIndex:1,
},
  digitus: {
    width: 115,
    height: 60,
    top:65,
    left:140,
    resizeMode: 'cover',
    position:'absolute',
    
  },
  rectangle: {
    width: 435,
    height: 100,
    bottom:720,
    resizeMode: 'cover',
    position:'absolute',
    zIndex:0,
    },
  text: {
    zIndex:-2,
    flex: 20,
    backgroundColor: 'white',
    borderBottomWidth: 2,
    borderTopWidth:2,
    borderLeftWidth: 20,
    borderRightWidth: 2,
    fontSize: 14,
    lineHeight: 21,
    color: '#050505',
    top:200,
    justifyContent: 'center',
     marginRight:-10,
     marginLeft:1,
   left:-1,
   paddingLeft:10,
   paddingRight:5,
   
  },
  text1: {
    flex: 5,
    borderRadius:25,
    zIndex:-1,
    backgroundColor: 'white',
    borderBottomWidth: 75,
    borderTopWidth:30,
    borderLeftWidth: 30,
    borderRightWidth: 180,
    marginTop: -125,
    marginBottom:-145,
    fontSize: 23,
    top:121,
    color: '#2f662c',
    fontWeight: 'bold',
    overflow: 'hidden',
},
t2: {
  margin:5,
  marginTop: 15, 
  marginBottom: 10,
  flex: 10,
    borderRadius:12,
    borderColor: '#c3d8c8',
    borderWidth:1.2,
   borderRightWidth:10,
   borderLeftWidth:15,
    paddingLeft:12,
    paddingTop:2,
    paddingBottom:2,
    paddingRight:20,
    marginRight:240,
    marginLeft:60,
    top:192,
    left:-30,
    fontSize: 12,
    zIndex:-1,
    color: '#2d703c',
    alignContent:'center',
    justifyContent: 'center',
    overflow: 'hidden',
},
not: {
  flex:2,
  width:435,
    height: 50,
  resizeMode:'contain',
    top:828,
    zIndex:1,
    left:-10,
},

});
export default App;
