import React from 'react';
import {StyleSheet, Image,View,Text,FlatList} from 'react-native';
import { Header } from 'react-native-elements';

const DATA = [
  
  {
    id: '1',img1: require('./assets/image/DigitusLogo.png'),
    img: require('./assets/image/image.png'),
    title: 'Enim ad minim',
    tit:'Duis aute',
    text:['Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    '\nsed do eiusmod tempor incididunt ut labore et dolore',
   '\nmagna aliqua. Ut enim ad minim veniam, quis nostrud',
   '\nexercitation ullamco laboris nisi ut aliquip ex ea',
   '\ncommodo consequat. Duis aute irure dolor in',
   '\nreprehenderit in voluptate velit esse cillum dolore eu',  
   '\nfugiat nulla pariatur. Excepteur sint occaecat cupidatat',
   '\nnon proident, sunt in culpa qui officia deserunt mollit',
   '\nanim id est laborum.', 
   '\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit,',
    '\nsed do eiusmod tempor incididunt ut labore et dolore',
    '\nmagna aliqua. Ut enim ad minim veniam, quis nostrud',
    '\nexercitation ullamco laboris nisi ut aliquip ex ea',
     '\ncommodo consequat. Duis aute irure dolor in',
      '\nreprehenderit in voluptate velit esse cillum dolore eu',
      '\nfugiat nulla pariatur. Excepteur sint occaecat cupidatat',
       '\nnon proident, sunt in culpa qui officia deserunt mollit',
        '\nanim id est laborum.',
      '\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit,']
    
  },
 
  ];


  

const Item = ({img1,img,title,tit,text}) => (
  <View style={styles.item}> 
  
  <Image style={styles.digitus} source={img1}/>
    <Image style={styles.image1} source={img}/>
    <Text style={styles.text1}>{title}</Text>
    <Text style={styles.t2}>{tit}</Text>
    <Text style={styles.text}>{text}</Text>
  </View>
);



const App = () => {
  const renderItem = ({ item }) => (
    <View>
    <Item img1={item.img1} img={item.img} title={item.title} tit={item.tit} text={item.text} />
    
   </View>
  );
  
  return (
   <View style={styles.container}>
     
        <Image style={styles.not} source={require('./assets/image/not.png')} ></Image>
      
      <Header
      
      leftComponent={<Image style={styles.back} source= {require('./assets/image/back.png')}></Image>}
    
      containerStyle={{
        backgroundColor: '#ffffff',
        justifyContent: 'space-around',
        height:80,
       top:108,
       
      }}/>
      
       <View style={styles.background}>
       </View>
       <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        pagingEnabled
     showsVerticalScrollIndicator={false}
      />
      </View>
  );
}

const styles = StyleSheet.create({
  background:{
    top:150,
    width:420,
    height:80,
    backgroundColor:'white',
    left:0,
  position:'absolute',
 zIndex:-1,
  },
  ImageHeaderScrollView:{
 marginBottom:-300,
    backgroundColor:'black',
  
  zIndex:2,
  },
  container: {
    flex:1,
    backgroundColor: 'black',
    top:-50,
   
  },
 
  image1: {
    flex: 5,
    width:410,
    height: 325,
    margin:10,
    top:80,
    marginTop:-15,
    left:-10,
    resizeMode: 'contain',
    zIndex:-1,
    
  },
  back: {
    flex:1,
    width:25,
    
   
    height: 5,
    bottom:0,
    right:0,
    top:-50,
    paddingBottom:10,
    paddingTop:10,
    left:20,
    position:'absolute',
    zIndex:1,
},
  digitus: {
    width: 115,
    height: 60,
    zIndex:1,
    resizeMode: 'cover',
    position:'absolute',
    top:0,
    left:140,
  },
 
  
  text: {
    elevation:3,
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
