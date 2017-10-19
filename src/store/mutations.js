import {
  ACTION_LOGIN,
  ACTION_REGISTER,
  GET_USERINFO
} from './moutation-types.js'


export default {
  [GET_USERINFO](state, info){
    if(state.userInfo){
      return
    }
    if(!state.login){
      return
    }
    if(!info.message){
      state.userInfo = {...info};
    }else{
      state.userInfo = null;
    }
  }
}
