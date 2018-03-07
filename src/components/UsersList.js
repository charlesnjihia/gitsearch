import React, { Component } from "react";
import { StyleSheet, FlatList, Text, Image, View,TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import styles from './userstyles';
class UsersList extends Component {
  _keyExtractor = item => item.id;

  _renderItem = ({ item }) => {
    const { login, avatar_url,url} = item;

    return (
      <View>
        <View style={styles.userContainerStyle}>
          <View style={{ paddingRight: 5,flex:1 }}>
               <Image
                style={styles.userImageStyle}
                source={{ uri: avatar_url }}
              />
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                   <Text style={styles.loginTextStyle}>{login}</Text>
                   <TouchableOpacity
                     onPress={()=>{this.props.showModal(url)}}
                     style={styles.moreButStyle}>
                       <Text style={styles.butTextStyle} >more..</Text>
                   </TouchableOpacity>
              </View>
          </View>
          
        </View>
      </View>
    );
  };

  render() {
    return (
      <FlatList
        style={{ flex: 1 }}
        data={this.props.users}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    );
  }
}

UsersList.propTypes = {
  users: PropTypes.array,
  showModal:PropTypes.func.isRequired,
};
export default UsersList; 

