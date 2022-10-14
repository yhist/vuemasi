<template>
  <ModalPop/>
  <div class="wrap">
  <GoTop />
  <MobilMenu />
  <FixMenu />
  <HeaderView />
  <VisualView />
  <ItemView />
  <BevarageView />
  <FranchiserView />
  <SnsView />
  <FooterView />
  </div>
</template>

<script>

import GoTop from '@/components/GoTop.vue'
import MobilMenu from '@/components/MobilMenu.vue'
import FixMenu from '@/components/FixMenu.vue'
import HeaderView from '@/components/HeaderView.vue'
import VisualView from '@/components/VisualView.vue'
import ItemView from '@/components/ItemView.vue'
import BevarageView from '@/components/BevarageView.vue'
import FranchiserView from '@/components/FranchiserView.vue'
import SnsView from '@/components/SnsView.vue'
import FooterView from '@/components/FooterView.vue'

// 공통으로 관리되는 state를 참조한다.
// 여기서는 actions를 호출하는 용도로 사용.
// vuex를 참ㅈ하는 객체를 접근하려고 하면
// 아래 구문으로 접근한다.
import { useStore } from 'vuex'
import ModalPop from './components/ModalPop.vue'
export default {
  name: 'App',
  components: {
    GoTop,
    MobilMenu,
    FixMenu,
    HeaderView,
    VisualView,
    ItemView,
    BevarageView,
    FranchiserView,
    SnsView,
    FooterView,
    ModalPop
},
  setup(){
    const store = useStore();
    // actins의 메소드를 사용할때
    //store.dispath('매소드면')
    // console.log('step1: dispatch');
    store.dispatch('fetchMenudata');
    return{
    }
  }
}
</script>

<style>
@charset 'utf-8';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline-style: none;
}

ul,
li {
  list-style: none;
}

a {
  text-decoration: none;
  color: #333;
}

img {
  vertical-align: top;
  border: 0;
}

html {
  font-size: 16px;
  overflow-x: hidden;
}


body {
  font-family: 'NanumSquare', 'Malgun Gothic', '맑은 고딕', "돋움", Verdana, sans-serif;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.5px;
  line-height: 1.6;
  color: #888;
  overflow-x: hidden;
}

/* 공통(재사용) */
.inner {
  position: relative;
  display: block;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}

/* float를 해제 */
.clearfix::after {
  content: '';
  position: relative;
  display: block;
  width: 100%;
  clear: both;
}

/* layout */
.wrap {
  position: relative;
  display: block;
}

</style>
