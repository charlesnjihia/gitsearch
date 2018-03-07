import React, { Component } from "react";
import { StyleSheet, FlatList, Text, Image, View,TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import styles from './repostyles';
import {SUBSCRIBERS,CONTRIBUTORS,STARGAZERS} from '../redux/actions/types';
export default class ReposList extends Component {
    constructor(props) {
    super(props);
 }    
    
   
    static navigationOptions = {
    header: null,
  };
 //set user category and the url fro the cat   
_onUsersPressed=(userCat,usersUrl)=>{
      
      this.props.fetchUsers(userCat,usersUrl);

  };  
    
  _keyExtractor = item => item.id;
  

  _renderItem = ({ item }) => {
    const { name,full_name, owner } = item;
    
   

    return (
      <View>
        <View style={styles.cardContainerStyle}>
          <View style={{ paddingRight: 5,flex:1 }}>
                <Text style={styles.cardTextStyle}>
                 Repo Name: {name}{"\n"}
                 Full Name:  {full_name} {"\n"}
                 Owner: {owner.login} {"\n"}
                  
                </Text>
          </View>
          <Image
            style={styles.faceImageStyle}
            source={{ uri: owner.avatar_url }}
          />
        </View>
        <View style={styles.userContainerStyle}>
            <Text style={styles.userTextStyle}>Users:</Text>
            <TouchableOpacity 
              onPress={()=>this._onUsersPressed(CONTRIBUTORS,item.contributors_url)} >
              <Text style={styles.userTextStyle}>Contributors</Text>
            </TouchableOpacity>
            <Text>|</Text>
            <TouchableOpacity 
              onPress={()=>this._onUsersPressed(SUBSCRIBERS,item.subscribers_url)} >
              <Text style={styles.userTextStyle}>Subscribers</Text>
            </TouchableOpacity>
            <Text>|</Text>
            <TouchableOpacity 
              onPress={()=>this._onUsersPressed(STARGAZERS,item.stargazers_url)} >
              <Text style={styles.userTextStyle}>Stargazers</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  };

  render() {
    return (
      <FlatList
        style={{ flex: 1 }}
        data={this.props.repos}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    );
  }
}

ReposList.propTypes = {
  repos: PropTypes.array,
  fetchUsers:PropTypes.func
};


