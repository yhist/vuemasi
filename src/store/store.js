import {
  createStore
} from 'vuex'
// 모든 vue파일에서 화면에 공유되어질 state(데이터) 관리 목적
import axios from 'axios';


export default createStore({
  // state : 데이터를 모아서 관리하는 객체
  state: {},

  // actions : 서버연동, 파일연동 성공 실패 체크(Error, Success)후에 mutation 실행
  actions: {
    // 메뉴 데이터 json 로딩
    fetchMenudata({commit}) {
      axios.get('/data/menu.json')
        .then(response => {
          // 서버 또는 파일이 결과가 있을때
          // console.log("axios", response.data);
          // console.log("step 2 : axios", response.data);
          // mutation실행하라
          commit('MENU_DATA_INIT', response.data);
      // 외부에 있는 메뉴테이터.JSON 파일을 불러온다.
        }).catch(err => console.log(err));
    }
  },

  // mutations : state(데이터) 업데이트 자리
  mutations: {
    MENU_DATA_INIT(state, payload){
      state.menuData = payload
      // console.log('step 3 : mutation ', payload)
    }
  },

  // getters : state(데이터)를 컴포넌트에 전달,  
  getters: {
    getMenuData(state) {
      // console.log('step4 : getters')
      return state.menuData;
    }
  }
})