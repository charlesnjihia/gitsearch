import { StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#093339"
  },
  cardContainerStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    marginBottom: 0,
    marginLeft: 3,
    backgroundColor: "#4e8087",
    padding: 10
  },
  faceImageStyle: {
    width: 65,
    height: 65
  },
  cardTextStyle: {
    color: "white",
    textAlign: "left"
  },
  userContainerStyle: {    
    flexDirection: "row",
    justifyContent: "space-between",   
    backgroundColor: "#4e8087",
    padding: 10,
    marginRight: 10,
    marginLeft: 3,
  },
  userTextStyle:{
   color:'#F5FCFF',   
  },
  
});


export default styles;
