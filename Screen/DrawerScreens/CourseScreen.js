// Import React and Component
import React from 'react';
import {View, Text, SafeAreaView,StyleSheet,ScrollView,Image,TouchableOpacity} from 'react-native';
import { Card } from 'react-native-elements';
import CustomCard from '../Components/CustomCard';

import { useNavigation } from '@react-navigation/native';
const CourseScreen = () => {

  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
       <View style={styles.container}>
          <CustomCard 
          title="New Title"
          subject="CAT"
          imageSource={require('../../Image/CAT.png')}
          onPressDetails={()=>navigation.navigate('ViewCourseDetale')} />
        </View>

        
        <View style={styles.container}>
      <CustomCard 
        title="New Title 3"
        subject="ClAT"
        imageSource={require('../../Image/CLAT.png')}
        onPressDetails={()=>navigation.navigate('ViewCourseDetale')} />
    </View>
    <View style={styles.container}>
      <CustomCard 
        title="New Title 3"
        subject="IPM"
        imageSource={require('../../Image/IPM.png')}
        onPressDetails={()=>navigation.navigate('ViewCourseDetale')} />
    </View>
 
    </ScrollView>
  </SafeAreaView>
  );
};

export default CourseScreen;


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  price:{
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft:20,
    color: '#34495e',
  },
  buttonStyle: {
    backgroundColor: '#307ecc',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#307ecc',
    height: 40,
    alignItems: 'center',
    // borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
});