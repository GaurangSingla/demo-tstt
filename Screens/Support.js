
import { View, Text ,StyleSheet,TextInput,Image,TouchableOpacity,Linking,Alert} from 'react-native'
import React,{useState,useEffect} from 'react'
import  {Dropdown}  from 'react-native-element-dropdown';
import {useFocusEffect} from '@react-navigation/native';
import {useIsFocused} from '@react-navigation/native';
import axios from "axios";

	  const Sport = () => {
      const [subject, setSubject] = React.useState('');
      const [desc, setDesc] = React.useState('');

      const [selectedType, setSelectedType] = useState('');
      const [selectedSubject, setSelectedSubject] = useState('');
      const [type, setType] = useState([]);
      const [SelectedSubjectList, setSelectedSubjectList] = useState([]);


      const [errorForSubject, setErrorForSubject] = useState(false);
      const [errorForType, setErrorForType] = useState(false);
    const [isFocus, setIsFocus] = useState(false);
    const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");
  const [companyList, setCompanyList] = useState([{'name':'','id':''}])
 




  // const isFocused = useIsFocused();
  // useEffect(() => {
  //   if (isFocused) {
  //     setDesc('');
  //     setSelectedSubjectList([]);
  //     setSelectedType([]);
  //     setSelectedSubject('');
  //     setSelectedType('');
  //     setShowDescErr(false);
  //     setErrorForSubject(false);
  //     setErrorForType(false);
  //   }
   
  // }, [isFocused]);

  // const mapLookupData = async () => {
  //   let getlookupData = await getItem(ASYNC_KEY.LOOKUP);
  //   let parsedLookUpData = JSON.parse(getlookupData);
  //   setLookupResponse(parsedLookUpData);
  //   setType(parsedLookUpData.accountType);
  //   let feature = parsedLookUpData.features;
  //   setSupportEmailFromService(feature.supportEmailFromService);
  // };
  // function handleError() {
  //   console.log('focus function::::::::::::');
  //   if (SelectedSubjectList && SelectedSubjectList.length == 0) {
  //     setshowAlertDialog(true);
  //     setAlertBody({
  //       dialogBoxType: 'Error',
  //       headerText: 'Error',
  //       messageText: 'Please select account type',
  //     });
  //   }
  // }
  // const selectSubject = item => {
  //   setSelectedSubjectList([]);
  //   setSelectedSubject('');
  //   if (item == 'Postpaid') {
  //     console.log(lookupResponse?.postPaidSupportSubjects);
  //     setSelectedSubjectList(lookupResponse?.postPaidSupportSubjects);
  //   } else {
  //     console.log(lookupResponse?.prePaidSupportSubjects);
  //     setSelectedSubjectList(lookupResponse?.prePaidSupportSubjects);
  //   }
  // };

  

  return (
    <View>
	
      <Text style={{top:60,fontSize:30,alignSelf:'center'}}>Help and Support</Text>
      <Text style={{top:72,fontSize:15,alignSelf:'center'}}>Please complete this form and click Submit</Text>
      <Dropdown
                  style={{
                    top:100,
                    overflow: 'visible',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width:350,
                    borderWidth:1,
                    borderColor:'black',
                    borderRadius:10,padding:8,
                    alignSelf:'center'
                  }}
                  selectedTextStyle={[
                    {
                      textAlign: 'left',
                      fontSize:15,
                      color: '#989898',
                      paddingLeft: '7%',
                    },
                  ]}
                  dropdownPosition="bottom"
                  renderItem={({key, value}) => {
                    return (
                      <View
                        style={{
                         
                          alignItems: 'flex-start',
                          borderTopWidth: 1,
                          borderColor: '#989898',
                          backgroundColor: colors.background,
                          backgroundColor:
                            colors.background == '#171717'
                              ? '#1e1c1c'
                              : '#d8d7d7',
                          justifyContent: 'center',
                        }}>
                        <Typography
                          textStyle={[
                          
                            {
                              textAlign: 'left',
                              fontSize: 12,
                          
                              color: colors.titleText,
                              paddingLeft: '7%',
                            },
                          ]}
                          text={value}
                        />
                      </View>
                    );
                  }}
                  data={ setCompanyList}
                  labelField="value"
                  valueField="value"
                  maxHeight={150}
                  // value={name}
                  // key={id}
                  placeholder={
                    <Text>
                      Select Type
                      <Text style={{color: 'red', fontSize:15}}>
                        *
                      </Text>
                    </Text>
                  }
                  placeholderStyle={[
                    {
                      textAlign: 'left',
                      fontSize: 12,
                    
                      paddingHorizontal: '7%',
                    },
                  ]}
                
                  onChange={item => {
                    setSelectedType(item.value);
                    setErrorForType(false);
                    selectSubject(item.value);
                  }}
                />
             
              
            
             <Dropdown
                  style={{
                 
                    top:110,
                    overflow: 'visible',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width:350,
                    borderWidth:1,
                    borderColor:'black',
                    borderRadius:10,padding:8,
                    alignSelf:'center'
                  }}
                  selectedTextStyle={[
                    {
                      textAlign: 'left',
                      fontSize: 12,
                      color: '#989898',
                      paddingLeft: '7%',
                    },
                  ]}
                  dropdownPosition="bottom"
                  renderItem={({subject, email}) => {
                    return (
                      <View
                        style={{
                          backgroundColor: 'green',
                        
                          alignItems: 'flex-start',
                          borderWidth: 1,
                          borderColor: '#989898',
                          backgroundColor:
                            colors.background == '#171717'
                              ? '#1e1c1c'
                              : '#d8d7d7',
                          justifyContent: 'center',
                        }}>
                        <Typography
                          textStyle={[
                        
                            {
                              textAlign: 'left',
                              fontSize: 12,
                              paddingLeft: '7%',
                            },
                          ]}
                          text={subject}
                        />
                      </View>
                    );
                  }}
                  data={SelectedSubjectList}
                  labelField="subject"
                  valueField="subject"
                  maxHeight={150}
                  value={selectedSubject}
                  placeholder={
                    <Text>
                      Select Subject
                      <Text style={{color: 'red', fontSize:15}}>
                        *
                      </Text>
                    </Text>
                  }
                  placeholderStyle={[
                    {
                      textAlign: 'left',
                      fontSize: 12,
                
                      paddingHorizontal: '7%',
                    },
                  ]}
                
                  onChange={item => {
               
                    setSelectedSubject(item.subject);
                    setErrorForSubject(false);
                  
                  }}
              
                />
            

            
		 <TextInput
		  multiline
		  numberOfLines={10}
        style={{height: 200, borderColor: 'black', 
                borderWidth: 1,margin:10,borderRadius:5,fontSize:0,
        fontSize:35,top:120,width:350,alignSelf:"center"}}
      placeholder={"Provide Description*"}
		
		
      
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
