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
    margin: 20,
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
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 3,
    marginTop: 2,
    backgroundColor: "#4e8087",
    padding: 10,
    paddingVertical:5
  },
  userImageStyle: {
    width: 65,
    height: 65,
    borderRadius:33,
  },
  loginTextStyle: {
    color: "white",
    textAlign: "left",
    marginLeft:5
  },
  moreButStyle:{
  height:20,
  paddingHorizontal:5,  
  },
  butTextStyle: {
    color: "white",
    
  }
});
export default styles;
