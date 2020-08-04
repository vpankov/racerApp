import {
    StyleSheet
  } from 'react-native';

const styles = StyleSheet.create({
    listItem: {
        flexDirection:"row", 
        justifyContent:"space-between", 
        paddingTop:5, 
        paddingBottom:5
    },
    column:{
        paddingLeft:5, 
        paddingRight:5, 
        fontSize:15
    },
    column_name:{
        flex: 2
    },
    column_nationality:{
        flex: 1
    },
    column_birthday:{
        width:100
    }
  });

export default styles