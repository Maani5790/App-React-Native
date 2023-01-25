import React, { useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';

const HookEffect = () => {
  const [myUserData, setMyUserData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getUserData = async ()=> {
    try{
      const response = await fetch("https://thapatechnical.github.io/userapi/users.json");
      const myData = await response.json();
      setMyUserData(myData);
      setIsLoading(false);
    }
    catch (error){
      console.log(error);
    }
  };

  useEffect(()=>{
    getUserData();
  },[]);
  
  return(
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>List of Students</Text>
      <FlatList 
      data={myUserData}
      renderItem={({item})=>{
        return(
          <View style={styles.card}>
            <View style={styles.imgContainer}>
              <Image 
                style={styles.imgStyle}
                resizeMode="cover"
                source = {{ uri:item.image}}
              />
            </View>
            <View>
              <View style={styles.biodataContainer}>
                <Text style={styles.bioData}>Bio-Data</Text>
                <Text style={styles.idNumber}>{item.id}</Text>
              </View>
              <View style={styles.detailsContainer}>
                <Text style={styles.myName}>Name: {item.name}</Text>
                <Text style={styles.myName}>eMail: {item.email}</Text>
                <Text style={styles.myName}>Mobile: {item.mobile}</Text>
              </View>
            </View>
          </View>
        );
      }}
      keyExtractor = {(key) => key}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card:{
    width:250,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginVertical: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  imgContainer:{
    padding: 10
  },
  imgStyle:{
    width:"100%",
    height:180,
  },
  biodataContainer:{
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#353535",
    paddingVertical: 10,
  },
  detailsContainer:{
    backgroundColor: '#353535',
  },
  bioData: {
    fontSize: 30,
    color: "#fff",
    paddingLeft: 5,
  },
  idNumber:{
    fontSize: 30,
    color: "rgba(255,255,255,0.5)",
  },
  mainContainer:{
    width: "100%",
    paddingTop: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#b696d7",
  },
  myName:{
    color: "#fff",
    padding: 5,
    fontSize: 15,
  },
  mainHeader:{
    fontSize:20,
    color: "#fff",
  },
});

export default HookEffect;