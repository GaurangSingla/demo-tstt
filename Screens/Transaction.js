import { View, Text ,StyleSheet, TouchableOpacity} from 'react-native'
import React ,{useState}from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from 'react-native-datepicker';
const Transaction = () => {
    const [date, setDate] = useState('09-10-2020');
  return (
    <View>
      <Text  style={{alignSelf:'center',fontSize:20,fontWeight:'500',color:'#989898',top:'20%'}}>Transaction History</Text>
      <View style={styles.container}>
     
        <DatePicker
          style={styles.datePickerStyle}
          date={date} 
          mode="date" 
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-2016"
          maxDate="01-01-2019"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
           
           
              left: 5,
            
              marginRight: 10,
            },
            dateInput: {
            
            },
        }}
        onDateChange={(date) => {
          setDate(date);
        }}
      />
   
        <DatePicker
          style={styles.datePickerStyle}
          date={date} // Initial date from state
          mode="date" 
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-2016"
          maxDate="01-01-2019"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              //display: 'none',
            color:"grey",
              left: 4,
             
              marginLeft: 10,
            },
            dateInput: {
          
            },
        }}
        onDateChange={(date) => {
          setDate(date);
        }}
      />
    </View>
    <TouchableOpacity style={{backgroundColor:'#00E556',height:50,width:"90%",top:50,alignSelf:'center',borderRadius:10}}>
        <Text style={{color:'white',padding:10,alignSelf:'center',fontSize:20}}>
            Apply
        </Text>

    </TouchableOpacity>
    <Text style={{top:250,alignSelf:'center',fontSize:30}}>
        No Data Available
    </Text>
    </View>
  )
}

export default Transaction

const styles = StyleSheet.create({
    container: {
      
      padding: 10,
     
      alignItems: 'center',
      flexDirection:'row',
      top:'10%',
      
    },
    title: {
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      padding: 20,
      flexDirection:'row',
    },
    datePickerStyle: {
      width: 180,
      marginTop: 20,
      marginLeft:5
      
    },
  });
