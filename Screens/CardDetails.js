import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

const CardDetails = ({navigation}) => {
  const [data,setData]=useState([]);
  const [ HolderName,setHolderName]=useState('');
  const [number,setNumber]=useState('');
  const [expirydate,setExpiryDate]=useState('');
  const saveCard=() => {
 
   axios({
     method: 'POST',
     url: 'https://dev-cim-api.tstt.co.tt/api/consumer/user/card',
     headers: {
       Accept: 'application/json',
       'X-CSRF-TOKEN': '',
       Authorization:
         'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiODI5NTlhNjM5YWFjZjgxNTM4ZDViOThkYmUxNjQ5MTEyN2JkZGQwNmI1NDdkNzQ0YzAwZjQxNmNmNDI1YmUzOWYyNjcwNWM2MjE0ZDc1NjQiLCJpYXQiOjE2NzA0MTM4NTUuNjMxMDA1LCJuYmYiOjE2NzA0MTM4NTUuNjMxMDA3LCJleHAiOjE3MDE5NDk4NTUuNjI4MTgzLCJzdWIiOiIzMiIsInNjb3BlcyI6WyJhZG1pbiJdfQ.QInOUXUC4A3tbFQ5v7aDqYFup8OoPv-hO7guGo7mSBTG2N_dMVXMWcwG586Ijg9tH6xdKJYBnnM8zQl4hc-BC4D01szZNh9xeioTw5H3bign6Witcj4YKgTuC5-vz8n7F-OylzGZrccABNpeyAs_rIv2wr6ZW_MJ2e3hMOYfm0nTPwPPwzE7CrDXnZdXPSVBjmexacRjUmiO0T_CWCRjkevFMSY0gx2jzyg8gk_8w1huZ0VQh27KCs-dSPJtQ1oCGLQg0LoyYKc_WtSknOzudDPM5zUiErOovwFKp7W5xa9QS4UTm2JhYYNN272hszqd_SUmjIsWf5545A6NFpXlzKG2icnC-X_46DL5VVSR6t97n3hOY0Y1WCl2KHKPr51R9DbhIDTmeChzwKo9Oqy7_6c4VqjWiptuAdA0i7I469H5eMnHMvANX_imP61_vuQNig_1amvdxy3LMHZsYi6YTJ_6R4JTLzPt4A_aeeKkb0zHx4i_3CSlceTvxT2Fvfe7jNpJsWd67nT5LrnAn25NL9dM050yiXgGH-UEeYxzfraCiXg8yz3SwrRp8pZ9iKcKQO5-50v6pFPdva3yw3jki_sCRqH8J4w_fo8XV52U_u_m60A6WSR2ALs_03OuaUv6amD1CvkoWT9IbVYJZBPQHte4yJgp-T2a0AQUFXYGuVE',
         "Content-Type": "application/json",
 
     },
     params: {
       cardHolderName:HolderName ,
       cardNumber: number,
       expiryDate:expirydate ,
     },
   })
   .then(function (response) {
     console.log("response", JSON.stringify(response.data))
      setData(response.data.result);
     
 
   })
   .catch(function (error) {
     console.log("error", error)
   })
   
 }
 function setCardImage(cardNumber) {
  switch (cardImages(cardNumber)) {
    case 'visa':
      return require('../src/assets/visa_card.png');
    case 'master':
      return require('../src/assets/master_card.png');
    case 'amex':
      return require('../src/assets/AmEx.png');
    default:
      return require('../src/assets/Creditdebit_card.png');
  }
}

function setCard(cardNumber) {
  switch (cardNumber) {
    case 'VISA':
      return require('../src/assets/visa_card.png');
    case 'MASTER':
      return require('../src/assets/master_card.png');
    case 'AMEX':
      return require('../src/assets/AmEx.png');
    default:
      return require('../src/assets/Creditdebit_card.png');
  }
} 
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{flex: 1}}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={{
                marginLeft: 10,
                height: 30,
                width: 30,
                marginTop: 20,
              }}
              source={require('../assets/backbutton.png')}
            />
          </TouchableOpacity>
          <Image
            style={{
              marginLeft: 90,
              height: 60,
              width: 160,
              marginTop: 10,
            }}
            source={require('../assets/toplogo.jpeg')}
          />
          <Image
            style={{
              marginLeft: 30,
              height: 40,
              width: 60,
              marginTop: 20,
            }}
            source={require('../assets/notificationwhite.png')}
          />
        </View>

        <View>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 25,
              marginTop: 9,
              marginLeft: 'auto',
              marginRight: 'auto',
              color: '#4D4848',
            }}>
            Select Card To Pay
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#FFFFFF',
            height: '60%',
            width: '90%',
            marginLeft: 20,
            marginTop: 10,
          }}>
          <Text
            style={{
              marginLeft: 15,
              fontSize: 15,
              fontWeight: 'bold',
              marginTop: 10,
              color: '#3E3E3E',
            }}>
            Select Card To Pay
          </Text>

          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#F4F4F4',
              width: '90%',
              height: '20%',
              marginLeft: 15,
              marginTop: 10,
            }}>
            <View
              style={{
                borderColor: 'white',
                width: 70,
                height: 50,
                padding: 5,
                borderRadius: 10,
                backgroundColor: '#FFFFFF',
                marginLeft: 20,
                marginTop: 10,
              }}>
              <Image
                style={{
                  marginLeft: 10,
                  height: 28,
                  width: 45,
                  marginTop: 8,
                }}
                source={require('../assets/master_card.png')}
              />
            </View>
            <View style={{marginLeft: 20, marginTop: 20}}>
              <Text>Mr.John {'\n'} 08/25</Text>
            </View>
            <View style={{marginLeft: 30, marginTop: 20}}>
              <Text>**5678</Text>
              <View
                style={{
                  height: 20,
                  width: 20,
                  borderRadius: 15,
                  backgroundColor: 'white',
                  marginLeft: 70,
                  marginBottom: 20,
                }}></View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#F4F4F4',
              width: '90%',
              height: '35%',
              marginLeft: 15,
              marginTop: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#F4F4F4',
                marginLeft: 2,
                marginTop: 10,
              }}>
              <View
                style={{
                  borderColor: 'white',
                  width: 70,
                  height: 50,
                  padding: 5,
                  borderRadius: 10,
                  backgroundColor: '#FFFFFF',
                  marginLeft: 20,
                  marginTop: 10,
                }}>
                <Image
                  style={{
                    marginLeft: 10,
                    height: 15,
                    width: 45,
                    marginTop: 15,
                  }}
                  source={require('../assets/Visa.png')}
                />
              </View>
              <View style={{marginLeft: 20, marginTop: 20}}>
                <Text>Mr.John {'\n'} 08/25</Text>
              </View>
              <View style={{marginLeft: 30, marginTop: 20}}>
                <Text>**5678</Text>
                <View
                  style={{
                    height: 20,
                    width: 20,
                    borderRadius: 15,
                    backgroundColor: 'white',
                    marginLeft: 70,
                    marginBottom: 20,
                  }}></View>
              </View>
            </View>
            <View
              style={{
                backgroundColor: 'white',
                height: 10,
                width: 100,
                marginLeft: 100,
                borderRadius: 10,
              }}>
              {/* <Text style={{marginLeft:10,padding:10}}>CVV</Text>  */}
              <TextInput
                style={{
                  backgroundColor: 'white',
                  marginTop: 5,
                  height: 50,
                  borderRadius: 20,
                }}
                placeholder="CVV"
                placeholderTextColor={'#4D4848'}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#F4F4F4',
              width: '90%',
              height: '20%',
              marginLeft: 15,
              marginTop: 10,
            }}>
            <View
              style={{
                borderColor: 'white',
                width: 70,
                height: 50,
                padding: 5,
                borderRadius: 10,
                backgroundColor: '#FFFFFF',
                marginLeft: 20,
                marginTop: 10,
              }}>
              <Image
                style={{
                  marginLeft: 10,
                  height: 28,
                  width: 45,
                  marginTop: 8,
                }}
                source={require('../assets/master_card.png')}
              />
            </View>
            <View style={{marginLeft: 20, marginTop: 20}}>
              <Text>Mr.John {'\n'} 08/25</Text>
            </View>
            <View style={{marginLeft: 30, marginTop: 20}}>
              <Text>**5678</Text>
              <View
                style={{
                  height: 20,
                  width: 20,
                  borderRadius: 15,
                  backgroundColor: 'white',
                  marginLeft: 70,
                  marginBottom: 20,
                }}></View>
            </View>
          </View>
        </View>

        <Text
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 10,
            marginBottom: 10,
            color: '#989898',
          }}>
          Or
        </Text>

        <View
          style={{
            backgroundColor: 'white',
            height: '90%',
            width: '90%',
            marginLeft: 20,
          }}>
          <Text
            style={{
              color: '#3E3E3E',
              marginLeft: 20,
              marginLeft: 10,
              marginTop: 10,
            }}>
            Add New Card
          </Text>
          <TextInput
            style={{
              width: '90%',
              marginTop: 20,
              marginLeft: 15,
              borderRadius: 10,
              backgroundColor: 'white',
              borderWidth: 2,
              borderColor: '#F4F4F4',
              height: 45,
            }}
            placeholder="Cardholder Name"
            placeholderTextColor="#989898"
          />
          <TextInput
            style={{
              width: '90%',
              marginTop: 20,
              marginLeft: 15,
              borderRadius: 10,
              backgroundColor: 'white',
              borderWidth: 2,
              borderColor: '#F4F4F4',
              height: 45,
            }}
            placeholder="Card Number"
            placeholderTextColor="#989898"
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            height: 90,
            padding: 20,
            marginTop: 670,
            width: '100%',
            position: 'absolute',
          }}>
          <View
            style={{
              backgroundColor: '#F2F2F2',
              height: 50,
              width: 150,
              marginLeft: 20,
              borderRadius: 10,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 25,
                  padding: 10,
                  marginLeft: 20,
                  color: '#2E2F2F',
                }}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: '#00E556',
              height: 50,
              width: 150,
              marginLeft: 20,
              borderRadius: 10,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 25,
                  padding: 10,
                  marginLeft: 18,
                  color: '#2E2F2F',
                }}>
                Confirm
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CardDetails;
