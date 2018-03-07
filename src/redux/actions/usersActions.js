import{
TITLE_NAME_CHANGE,
FETCHING_USERS_REQUEST,    
FETCHING_USERS_SUCCESS,
FETCHING_USERS_FAILURE,
FETCHING_USERS_EMPTY,    
FETCHING_USER_REQUEST,
FETCHING_USER_SUCCESS,
FETCHING_USER_FAILURE,
MODAL_OPEN,
MODAL_CLOSE,
 
}  from './types';

 

//set the category to search users from
export const setUserTitle=(title,usersUrl)=>{
  
 return{
    type:TITLE_NAME_CHANGE,
    payload:{title,usersUrl}
 } ;    
}
//open and close modal 
export const toggleModal=(userAction)=>{
 if(userAction===MODAL_OPEN){ 
 return{
    type:MODAL_OPEN
    } ;
 }else{
 return{
    type:MODAL_CLOSE
    } ;

 } 
}

// on search request started
 const fetchingUsersRequest=()=>{
 return{
   type:FETCHING_USERS_REQUEST
   
 } ;
}
//on search request successful
const fetchingUsersSuccess=(users)=>{
 return{
   type:FETCHING_USERS_SUCCESS,
   payload:users
   
 } ;
}
//on network (search) error
const fetchingUsersFailure=()=>{
 return{
   type:FETCHING_USERS_FAILURE
   
 } ;
}
//on empty result
const fetchingUsersEmpty=()=>{
 return{
   type:FETCHING_USERS_EMPTY
   
 } ;
}
//on user details request started
 const fetchingUserRequest=()=>{
 return{
   type:FETCHING_USER_REQUEST
   
 } ;
}
//on user details success
const fetchingUserSuccess=(user)=>{
 return{
   type:FETCHING_USER_SUCCESS,
   payload:user
   
 } ;
}
// on user details fetch error
const fetchingUserFailure=()=>{
 return{
   type:FETCHING_USER_FAILURE   
   } ;
}

// fetch repo users by category
export const fetchRepoUsers=(usersUrl)=>{
 return async dispatch=>{
        dispatch(fetchingUsersRequest());
          try{
              let response=await fetch(usersUrl);
              let json= await response.json();
                if(Array.isArray(json)&&json.length==0 || !(Array.isArray(json)))
                  {
                   dispatch(fetchingUsersEmpty());
                  }
                  else
                  {                    
                   dispatch(fetchingUsersSuccess(json));
                  }
            }catch(error){
               dispatch(fetchingUserFailure());

              }      
    }
 }

 // fetch user details
export const fetchUserDetails=(userUrl)=>{
 return async dispatch=>{
        dispatch(fetchingUserRequest());
          try{
              let response=await fetch(userUrl);
              let json= await response.json();
                if(json.id)
                  {
                   dispatch(fetchingUserSuccess(json));
                   
                  }
                  else
                  {                    
                   dispatch(fetchingUserEmpty());
                  }
            }catch(error){
               dispatch(fetchingUsersFailure());

              }      
    }
 }
