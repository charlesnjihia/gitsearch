import{
   FETCHING_REPOS_REQUEST,
   FETCHING_REPOS_SUCCESS,
   FETCHING_REPOS_FAILURE,
   OWNER_NAME_CHANGE,
   REPO_NAME_CHANGE,
   SEARCH_FIELDS_EMPTY,
   FETCHING_RESULT_EMPTY
  }from './types'
  
const repoUrl="https://api.github.com/repos";//charlesnjihia/address"
const repoSearchUrl="https://api.github.com/search";//facebook"}"
const ownerReposUrl="https://api.github.com/users";//facebook"/repos"

//set repo name from search filter
export const setRepoName=(name)=>{
 return{
   type:REPO_NAME_CHANGE,
   payload:name
 } ;
}
 //set  owner (organisation) name from search filter
export const setOwnerName=(name)=>{
 return{
   type:OWNER_NAME_CHANGE,
   payload:name
 } ;
}
// indicate network search started
const fetchingReposRequest=()=>{
 return{
   type:FETCHING_REPOS_REQUEST
   
 } ;
}
//set results on success
const fetchingReposSuccess=(repos)=>{
 return{
   type:FETCHING_REPOS_SUCCESS,
   payload:repos
   
 } ;
}
//network or fetching error
const fetchingReposFailure=()=>{
 return{
   type:FETCHING_REPOS_FAILURE
   
 } ;
}
//empty result returned
const fetchingReposEmpty=()=>{
 return{
   type:FETCHING_RESULT_EMPTY
   
 } ;
}


//search for repos function
export const searchRepos=(ownerName,repoName)=>{
 if(ownerName.length==0&&repoName.length==0){
   return{
   type:SEARCH_FIELDS_EMPTY,   
   
 } ;   
 }
 else{
     let URL="";
     //if only owner provided fetch all repos for the owner
     if(ownerName.length>0&&repoName.length==0)
        {
        URL=`${ownerReposUrl}/${ownerName}/repos`;
           return async dispatch=>{
               dispatch(fetchingReposRequest());
              try{
                let response=await fetch(URL);
                let json= await response.json();
                if(!(Array.isArray(json))|| json.length==0)
                  {
                  dispatch(fetchingReposEmpty());
                  }else
                  {                    
                  dispatch(fetchingReposSuccess(json));
                  }
              }catch(error){
               dispatch(fetchingReposFailure());

              }      
            } 

        
        }
     //if only repo name provided search for all repos with the name
     else if(ownerName.length==0&&repoName.length>0)
        { 
        URL=`${repoSearchUrl}/repositories?q={${repoName}}`; 
        return async dispatch=>{
          dispatch(fetchingReposRequest());
          try{
            let response=await fetch(URL);
            let json= await response.json();            
            if(json.total_count&&json.total_count>0){
            dispatch(fetchingReposSuccess(json.items));
            }else{
             dispatch(fetchingReposEmpty());   
            }
          }catch(error){
           dispatch(fetchingReposFailure());

          }      
        } 
        
        
        
        }
        
     // if both provided, get the exact repo for a given owner and with given   name
     else if(ownerName.length>0&&repoName.length>0){    
      URL=`${repoUrl}/${ownerName}/${repoName}`
        return async dispatch=>{
          dispatch(fetchingReposRequest());
          try{
            let response=await fetch(URL);
            let json= await response.json();
            if((json.message&&json.message==='Not Found')||(json.message&&json.message.indexOf('limit')>-1)){
               
              dispatch(fetchingReposEmpty());   
            }else{
              
            dispatch(fetchingReposSuccess([json]));
            }
          }catch(error){
           dispatch(fetchingReposFailure());

          }      
        }   
      
      
      }
     
        
     
     

}
 
}