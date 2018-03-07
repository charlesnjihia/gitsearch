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
MODAL_CLOSE              
}  from '../actions/types'

const initialState={
    title:'',
    usersUrl:'',
    usersFetching:false,
    usersFetchingError:false,
    usersEmptyResult:false,
    users:[],
    modalopen:false,
    user:{},    
    userFetchError:false,
    userFetching:false,
    
    
    
}

export default(state=initialState,action)=> {
  switch(action.type){
   case TITLE_NAME_CHANGE:
     return {...state,title:action.payload.title,usersUrl:action.payload.usersUrl};
   case FETCHING_USERS_REQUEST:
     return {...state,
           usersFetchingError:false,
           usersEmptyResult:false,
           usersFetching:true};
   case FETCHING_USERS_SUCCESS:
    return {...state,
           usersFetchingError:false,
           usersEmptyResult:false,
           usersFetching:false,users:action.payload};
   case FETCHING_USERS_FAILURE:
     return {...state,
            usersFetching:false,
            usersEmptyResult:false,
            usersFetchingError:true};
   case FETCHING_USERS_EMPTY:
     return {...state,
             usersFetching:false,
             usersFetchingError:false,
             usersEmptyResult:true};
   case FETCHING_USER_REQUEST:
     return {...state,
             userFetchError:false,
             userFetching:true};
   case FETCHING_USER_SUCCESS:
     return {...state,
            userFetchError:false,
            userFetching:false,user:action.payload};
   case FETCHING_USER_FAILURE:
     return {...state,userFetching:false,userFetchError:true};
   case MODAL_OPEN:
     return {...state,modalopen:true};
   case MODAL_CLOSE:
     return {...state,modalopen:false};
   default:
     return state;
  }  
    
}
