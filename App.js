import React from 'react';
import {
  StyleSheet, Image,
  View,
  Text,
   useWindowDimensions,FlatList, ImageBackground
} from 'react-native';

const INTRO_DATA = [
  {
    key: '1',
    img: require('./assets/image/DigitusLogo.png'),
    
    image: require('./assets/image/image.png'),
    title: 'Enim ad minim',
    title1:'Duis aute',
    description:
       ['Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
        '\nsed do eiusmod tempor incididunt ut labore et dolore ' ,
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
          '\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit,'],
       
  }
];

const App = () => {
  const { width } = useWindowDimensions();
  const renderItem = React.useCallback( 
 
    ({ item }) => {
  return (
    <View style={[styles.itemContainer, { width: width - 80 }]}>

    <Image source={item.img} style={styles.digitus}/>
    
    <Image source={item.image} style={styles.image3} />
     <Text style={styles.text1}>{item.title} </Text>
     <Text style={styles.t2}>{item.title1} </Text>
     <Text style={styles.text}>{item.description} </Text>
       
    
   
     
    </View>
    
        );
        
}, [width],
  );
  const keyExtractor = React.useCallback((item) => item.key, []);
    
  return (
   
    
    <View style={[styles.container]}> 
    <FlatList
    data={INTRO_DATA}
    keyExtractor={keyExtractor}
    
    style={styles.flatList}
        pagingEnabled
        vertical
        showsVerticalScrollIndicator={false}
        
        decelerationRate={'normal'}
        scrollEventThrottle={16}
        renderItem={renderItem}
        
      />
      <Image style={styles.back} source= {require('./assets/image/back1.jpg')}></Image>
      <Image style={styles.not} source={require('./assets/image/not.png')} ></Image> 
      </View>
    );}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   marginBottom:170,
   marginTop:-215,
paddingBottom:10,
paddingTop:10,
    alignItems: 'center',
 
    justifyContent: 'center',
  },
  image3: {
    flex: 5,
    width:410,
    height: 325,
    margin:10,
    marginTop: -25,
    marginLeft:-35,
    top:-125,
    marginBottom: 95,
    left:20,
    resizeMode: 'contain',
    
  },
  back: {
    flex:2,
    width:415,
    marginTop:340,
    marginBottom:-230,
    height: 50,
    bottom:0,
    right:0,
    top:-45,
    paddingBottom:20,
    paddingTop:10,
    left:0,
    zIndex:-1,
    position:'absolute',
    
    
    
    
  
},

  digitus: {
    width: 115,
    height: 60,
    margin:10,
    marginTop: -255,
    marginBottom: 200,
    marginLeft: 40,
   top:50,
   left:60,
    resizeMode: 'cover',
    position:'absolute',
    
    zIndex:1,
    
    
    
  },
  text: {
    
    flex: 20,
    margin:10,
    marginTop: 8,
    marginBottom: 10,
    marginLeft:10,
    marginRight:-40,
    
    left:-22,
    fontSize: 14,
    lineHeight: 21,
    color: '#050505',
    top:-30,
    justifyContent: 'center',
    
  },
  text1: {
    flex: 4,
    borderRadius:25,
    backgroundColor: 'white',
    borderBottomWidth: 40,
    borderTopWidth:40,
    borderLeftWidth: 30,
    borderRightWidth: 220,
    margin:1,
    marginTop: -125,
    marginBottom:-130,
   marginLeft:-94,
   marginRight:-50,
   paddingLeft:-10,
   paddingRight:-5,
  left:20,
    fontSize: 23,
    top:-128,
    color: '#2f662c',
    fontWeight: 'bold',
    
    overflow: 'hidden',
},
t2: {
  margin:10,
  marginTop: 15, 
  marginBottom: 10,
  flex: 10,
    borderRadius:10,
    borderColor: '#c3d8c8',
    borderWidth:1.2,
   borderRightWidth:10,
   borderLeftWidth:15,
    paddingLeft:10,
    paddingTop:2,
    paddingBottom:2,
    paddingRight:30,
    marginRight:25,
    marginLeft:60,
    top:-35,
    left:-135,
    fontSize: 12,
    
    color: '#2d703c',
    alignContent:'center',
    justifyContent: 'center',
    overflow: 'hidden',
},
not: {
  flex:1,
  width:410,
    height: 70,
marginTop:-90,
    top:35,
    bottom:20,
    marginBottom:-50,
    right:0,
    left: -5,
 
  
},
itemContainer: {
  backgroundColor: '#fff',
  justifyContent: 'center',
  alignItems: 'center',
  
  marginTop:330,
  marginBottom:150,
  bottom:-150,
  marginHorizontal: 40,
  zIndex:-2,
  borderRadius: 20,
}
});
export default App;