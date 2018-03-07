import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  search:{
   flexDirection:'row',
   backgroundColor:'#00BBD3',
     
  },
  inputsview:{
   padding:3,
   flex:1,
   
      
  },
  searchinput:{
  borderWidth:0,
  borderRadius:3,
  height:30,
  padding:2,
  backgroundColor:'#FFFFFF',
  marginTop:1  
  
  },
  searchbut:{
  justifyContent: 'center',
  alignItems: 'center',
  width:60,  
  },
  homebody: {
    flex:1,
    justifyContent: 'flex-start',
  },
  errorview:{
  padding:10,
  paddingTop:30,
  flexDirection:'row',
  alignItems:'center'     
  },
  fetchstyle:{
   flex:1,
   justifyContent:'center'   
  },
  modalStyle:{
   flex:1,
   alignItems: 'stretch',
   padding:0   
  },
  modalContainerStyle:{
   flex:1,
   justifyContent: 'flex-start',
   backgroundColor:'#FFFFFF',
   alignItems: 'stretch',  
  },
  modalHeaderStyle:{
   flexDirection:'row',
   backgroundColor:'#4e8087',
   height:50,
   justifyContent: 'space-between',
   alignItems: 'center',
   paddingHorizontal:5  
  },
  modalBodyStyle:{
   flex:1,
   marginHorizontal:0,
   borderRadius:3,
   justifyContent: 'flex-start',
   backgroundColor:'#ffffff',
   alignItems: 'stretch',
   borderColor:'#FFFFFF',
   borderWidth:1,
   paddingTop:10  
  },
  userDetailsStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
   
    padding: 10
  },
  faceImageStyle: {
    width: 65,
    height: 65
  },
});
export default styles;
