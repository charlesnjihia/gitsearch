/**
 * App Home Screen provides the search filters for repos
 * User can search for repos by organisation (owner) name or by repo name or by
 * combination of the two
 * 
 */

import React, { Component } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator
  
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import ReposList from '../components/ReposList';
import {connect} from 'react-redux';
import {setRepoName,setOwnerName,searchRepos} from '../redux/actions/reposActions';
import { setUserTitle } from '../redux/actions/usersActions';

import PropTypes from 'prop-types';

class HomeScreen extends Component{
 ///remove header bar for home screen 
 static navigationOptions = {
    header:null,
  };
  
  //set the user category pressed and navigate to users
  fetchUsers=(userTitle,usersUrl)=>{
   this.props.setUserTitle(userTitle,usersUrl);      
   this.props.navigation.navigate('Users');   
  }
  
  
 
  render() {     
      
     //default screen 
    let content = (<View style={styles.fetchstyle}>
                <Icon name="search" color="#E8E8FF" size={200} />
                </View>);
    // on repos fetched             
    if(this.props.reposFetchingSuccess)
       {        
         content = <ReposList repos={this.props.repos} fetchUsers={this.fetchUsers}/>;
       }
    // on fetching repos show indicator   
   if(this.props.reposFetching)
       {   
        content=(<View style={styles.fetchstyle}>
                      <ActivityIndicator size="small" />
                    </View>
                    );
       }
     //  on empty results       
   if(this.props.reposEmptyResult)
       {
        content=(<View style={styles.errorview}>
                   <Icon name="info" color='#ccc000' size={25} />
                   <Text>No repo found</Text>
                 </View>
                 );  
        }
    // on network (fetching) error        
   if(this.props.reposFetchingError)
       {
         content=(<View style={styles.errorview}>
                   <Icon name="error-outline" color='#ccc000' size={25} />
                   <Text>Network error encountered</Text>
                 </View>
                 );  
       }
    // on no text added for filters       
   if(this.props.reposEmptySearch)
       {
         content=(<View style={styles.errorview}>
                   <Icon name="error-outline" color='#ccc000' size={25} />
                   <Text>Fill atleast one serch field</Text>
                 </View>
                 );  
       }     
    return (
      <View style={styles.container}>
       <View style={styles.search}>
             <View style={styles.inputsview}>
               <TextInput
               underlineColorAndroid='transparent'
               style={styles.searchinput}
               placeholder='Owner'
               onChangeText={(text)=>this.props.setOwnerName(text)}
                 />
               <TextInput
               underlineColorAndroid='transparent'
               style={styles.searchinput}
               placeholder='Repo Name'
               onChangeText={(text)=>this.props.setRepoName(text)}/>
           
            </View>
            <View style={styles.searchbut} >
               <TouchableOpacity 
               onPress={()=>this.props.searchRepos(this.props.owner,this.props.repo)}
               style={styles.searchbut}>
               <Icon name="search" color="#FFFFFF" size={30} />
                </TouchableOpacity>
            </View>
       </View>
       <View style={styles.homebody}>
           {content}
       
       
       </View>
      
        
      </View>
    );
  }
}
//props to be supplies from redux store
HomeScreen.propTypes={
owner:PropTypes.string.isRequired ,
repo:PropTypes.string.isRequired,
repos:PropTypes.array, 
reposFetching:PropTypes.bool,
reposFetchingError:PropTypes.bool,
reposEmptyResult:PropTypes.bool,
reposEmptySearch:PropTypes.bool,
reposFetchingSuccess:PropTypes.bool,    
}
// add props from redux state
const mapStateToProps=state=>{
return {
owner:state.repos.owner,
repo:state.repos.repo,
repos:state.repos.repos,
reposFetching:state.repos.reposFetching,
reposFetchingError:state.repos.reposFetchingError,
reposEmptyResult:state.repos.reposEmptyResult,
reposEmptySearch:state.repos.reposEmptySearch,
reposFetchingSuccess:state.repos.reposFetchingSuccess
};    
}
export default connect(mapStateToProps,{setRepoName,setOwnerName,searchRepos,setUserTitle})(HomeScreen);
