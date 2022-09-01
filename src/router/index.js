import { createRouter, createWebHistory } from "vue-router";
// router는 링크 기능이다. //모든 vue에서 사용하기 이해서 export 하겠다.
// router라는 객체에다가 기능을 담겠다.
// const router = createRouter(변수);
const router = createRouter({
  // 웹브라우저 주소창의 내용을 깨끗하게(# 없게 보이도록)
  history: createWebHistory(),
  // {path:'/home', name: Home, components: HomeView}
  routes: [
    
  ]
});
// 외부로 내보내서 사용하도록 하겠다.
export default router;