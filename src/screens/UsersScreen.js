/**
 * UsersScreen displays list of various repository users depending on the 
 * selected repository user category
 * 
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Image
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import UsersList from '../components/UsersList';
import Modal from 'react-native-simple-modal';
import {connect} from 'react-redux';
import {toggleModal,fetchRepoUsers,fetchUserDetails} from '../redux/actions/usersActions'
import {MODAL_OPEN,MODAL_CLOSE} from '../redux/actions/types';
import PropTypes from 'prop-types';

class UsersScreen extends Component {
  
 static navigationOptions =({navigation, screenProps})=> {
     const params=navigation.state.params || {};
     return{
     title:params.screenTitle
     }     
  }

//fetch for category users with cat provided via prop
componentWillMount(){
   this.props.navigation.setParams({
    screenTitle: this.props.title
     });   
  this.props.fetchRepoUsers(this.props.usersUrl);
   
  }
// on fetch more details for single user  
_onFetchUserDetails=(url)=>{
 this.props.toggleModal(MODAL_OPEN);
 this.props.fetchUserDetails(url);
        
   }
   
    
  render() {
   
   let {user}=this.props;
   //default screen on successful search 
   let content = <UsersList users={this.props.users} showModal={this._onFetchUserDetails} />;
   // indicate fetching in progress 
   if(this.props.usersFetching)
       {   
        content=(<View style={styles.fetchstyle}>
                      <ActivityIndicator size="small" />
                    </View>
                    );
       }
   // on empty search result       
   if(this.props.usersEmptyResult)
       {
        content=(<View style={styles.errorview}>
                   <Icon name="info" color='#ccc000' size={25} />
                   <Text>No users found</Text>
                 </View>
                 );  
        }
   //on network error        
   if(this.props.usersFetchingError)
       {
         content=(<View style={styles.errorview}>
                   <Icon name="error-outline" color='#ccc000' size={25} />
                   <Text>Network error encountered</Text>
                 </View>
                 );  
       } 
    //modal to show more user details
    let modalContent=(
          <View style={styles.userDetailsStyle}>
          
                <Text style={styles.cardTextStyle}>
                 Usename: {user.login}{"\n"}
                 Name: {user.name} {"\n"}
                 Email: {user.email} {"\n"}
                  
                </Text>
          
                <Image
                    style={styles.faceImageStyle}
                    source={{ uri: user.avatar_url }}
                  />
             </View>  

      );
      // on user details fetch request
      if(this.props.userFetching)
       {   
        modalContent=(<View style={styles.fetchstyle}>
                      <ActivityIndicator size="small" />
                    </View>
                    );
       }
      // on fetch user details error       
      if(this.props.userFetchError)
       {
         modalContent=(<View style={styles.errorview}>
                   <Icon name="error-outline" color='#ccc000' size={25} />
                   <Text>Network error encountered</Text>
                 </View>
                 );  
       }       
    
    return (   
    
       <View style={styles.container}>
           {content}
           
         <Modal
            offset={this.props.offset}
            overlayBackground={'rgba(0, 0, 0, 0.9)'}
            animationDuration={100}
            open={this.props.modalopen}
            modalDidClose={() => this.props.toggleModal(MODAL_CLOSE)}
            containerStyle={{flex:1,justifyContent: 'center',alignItems: 'stretch',padding:0}}
            modalStyle={styles.modalStyle}>
            <View style={styles.modalContainerStyle}>
            <View style={styles.modalHeaderStyle}>                  
                  <Text style={{color:'#FFFFFF'}}>User Details</Text>
                  <TouchableOpacity 
                  onPress={()=> this.props.toggleModal(MODAL_CLOSE)
                     }>
                   <Icon name="close" color='#FFFFFF' size={25} /> 
                  </TouchableOpacity>           
            </View>            
            <View style={styles.modalBodyStyle}>
            
               { modalContent}

            </View>                    
          </View>
        </Modal>   
       </View>
    );
  }
}
// props from redux store
UsersScreen.propTypes={
title:PropTypes.string.isRequired,
usersUrl:PropTypes.string.isRequired,
usersFetching:PropTypes.bool,
usersFetchingError:PropTypes.bool,
usersEmptyResult:PropTypes.bool,
users:PropTypes.array,
modalopen:PropTypes.bool,
user:PropTypes.object,    
userFetchError:PropTypes.bool,
userFetching:PropTypes.bool
   
}
//map store state to props
const mapStateToProps=state=>{
return {
title:state.users.title,
usersUrl:state.users.usersUrl,
usersFetching:state.users.usersFetching,
usersFetchingError:state.users.usersFetchingError,
usersEmptyResult:state.users.usersEmptyResult,
users:state.users.users,
modalopen:state.users.modalopen,
user:state.users.user,    
userFetchError:state.users.userFetchError,
userFetching:state.users.userFetching
};    
}


export default connect(mapStateToProps,{toggleModal,fetchRepoUsers,fetchUserDetails})(UsersScreen);
