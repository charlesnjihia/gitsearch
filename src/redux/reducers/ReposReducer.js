import{
   FETCHING_REPOS_REQUEST,
   FETCHING_REPOS_SUCCESS,
   FETCHING_RESULT_EMPTY,
   FETCHING_REPOS_FAILURE,
   OWNER_NAME_CHANGE,
   REPO_NAME_CHANGE,
   SEARCH_FIELDS_EMPTY
  }from '../actions/types'

 const initialState={
     owner:'',
     repo:'',
     repos:[],
     reposFetching:false,
     reposFetchingError:false,
     reposFetchingSuccess:false,
     reposEmptyResult:false,
     reposEmptySearch:false,

 }; 
export default(state=initialState,action)=> {
  switch(action.type){
   case FETCHING_REPOS_REQUEST:
     return {...state,
             reposFetchingError:false,
             reposFetchingSuccess:false,
             reposEmptyResult:false,
             reposEmptySearch:false,
             reposFetching:true};
   case FETCHING_REPOS_SUCCESS:
     return {...state,
             reposFetching:false,
             reposFetchingError:false,
             reposEmptyResult:false,
             reposEmptySearch:false,
             reposFetchingSuccess:true,repos:action.payload};
    case FETCHING_RESULT_EMPTY:
     return {...state,
             reposFetching:false,
             reposFetchingError:false,
             reposEmptySearch:false,
             reposFetchingSuccess:false,
             reposEmptyResult:true};         
   case FETCHING_REPOS_FAILURE:
     return {...state,
            reposFetching:false,
            reposEmptySearch:false,
            reposFetchingSuccess:false,
            reposEmptyResult:false,
            reposFetchingError:true};
   case OWNER_NAME_CHANGE:
     return {...state,owner:action.payload};
   case REPO_NAME_CHANGE:
     return {...state,repo:action.payload};
   case SEARCH_FIELDS_EMPTY:
     return {...state,
            reposFetching:false,            
            reposFetchingSuccess:false,
            reposEmptyResult:false,
            reposFetchingError:false,
            reposEmptySearch:true};     
   default:
     return state;
  }  
    
}
