import { View, Text ,StyleSheet,TextInput,Image,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import  {Dropdown}  from 'react-native-element-dropdown';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const data = [
		{ label: 'Item 1', value: '1' },
		{ label: 'Item 2', value: '2' },
		{ label: 'Item 3', value: '3' },
		{ label: 'Item 4', value: '4' },
		{ label: 'Item 5', value: '5' },
		{ label: 'Item 6', value: '6' },
		{ label: 'Item 7', value: '7' },
		{ label: 'Item 8', value: '8' },
	  ];
	  
	  const Sport = () => {
	    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
      if (value || isFocus) {
        return (
          <Text style={[styles.label, isFocus && { color: 'blue' }]}>
            Dropdown label
          </Text>
        );
      }
      return null;
    };

<<<<<<< Updated upstream:Screens/Sport.js
  return (
    <View>
		<View style={{flexDirection:'row'}}> 
       <Image style={{left:150,fontSize:40,alignSelf:'center'}} source={require('../src/assets/bmobileNewWhite.png')}></Image>
       <MaterialCommunityIcons style={{left:235,fontSize:40,alignSelf:'center'}} name="bell" size={25} />
       </View>
      <Text style={{top:60,fontSize:30,alignSelf:'center'}}>Help and Support</Text>
      <Text style={{top:72,fontSize:15,alignSelf:'center'}}>Please complete this form and click Submit</Text>
	  <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select Type*' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
         
        />
		  <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' },{marginTop:20}]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select Subject*' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
         
        />
		 <TextInput
		  multiline
		  numberOfLines={10}
        style={{height: 200, borderColor: 'black', 
                borderWidth: 1,margin:10,borderRadius:5,fontSize:0,
        fontSize:35,top:120,width:350,alignSelf:"center"}}
		placeholder="Provide Description*"
		placeholderStyle={{fontSize:10}}
		
      
      />
      <TouchableOpacity  style={{marginTop:20,alignContent:'center',bottom:85}} onPress={() => navigation.navigate('Tab_navi')}>
       <Text
          style={{  backgroundColor:'green',
          borderRadius:10,
          height:70,
          color:'white',
         alignSelf:'center',
         alignContent:'center',
          fontSize:28,
          justifyContent:'center',
          width:'90%',
          textAlign:'center',
          justifyContent:'center',
          paddingTop:11,top:200}}>
       Submit</Text>
     
    </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 16,
    },
    dropdown: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
	  top:110,
	  width:350,
	  alignSelf:'center',
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
    
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
	placeholder:{
		fontSize:5,
	}
  });
export default Sport
=======
const Support = () => {
  return (
    <View>
      <Text>Support</Text>
    </View>
  )
}

export default Support
>>>>>>> Stashed changes:Screens/Support.js
