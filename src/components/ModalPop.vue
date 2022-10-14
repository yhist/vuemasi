<template>
  <!-- 안내창 -->
  <div class="modal-wrap">
    <div class="modal-main">
      <div class="modal-icon">
        <i class="fas fa-exclamation-triangle"></i>
      </div>
      <h1>노엘로힐스 클론코딩</h1>
      <p>
        이 사이트는 <strong>스터디용으로 제작</strong>되었으며 <br />
        <strong>모든 리소스의 저작권은 원저작자</strong>에게 있습니다. <br />
      </p>

      <div class="modal-bottom">
        <span
          >* 본 사이트는 <strong>Chrome</strong> 에 최적화되어 있습니다.</span
        >
        <span
          >*해당 사이트 관련 문제사항이 있을시 연락해주시면
          삭제하겠습니다.</span
        >
        <div class="modal-bottom-icon">
          <a href="mailto:ehdusgml0903@naver.com" target="_blank"
            ><i class="far fa-envelope"></i
          ></a>
          <a href="https://open.kakao.com/o/sXrenCHe" target="_blank"
            ><i class="far fa-comments"></i
          ></a>
          <a href="https://github.com/yhist" target="_blank"
            ><i class="fab fa-github"></i
          ></a>
        </div>
      </div>

      <button class="modal-close">
        <i class="fas fa-times"></i>
      </button>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      // 안내창 기능
      // 추가기능 : 스크롤바 없애기
      $("html").css("overflow", "hidden");

      let modalWrap = $(".modal-wrap");
      let modalClose = $(".modal-close");
      modalClose.click(function () {
        modalWrap.stop().fadeOut(100);
        // 추가기능 : 스크롤바 살리기
        $("html").css("overflow", "auto");
      });

      let modalMain = $(".modal-main");
      // 내용 배경 클릭
      modalMain.click(function (event) {
        // 클릭 정보 전달 막기
        event.stopPropagation();
      });
      // 전체 배경 클릭
      modalWrap.click(function () {
        modalWrap.stop().fadeOut(100);
        // 추가기능 : 스크롤바 살리기
        $("html").css("overflow", "auto");
      });
    });
    return {};
  },
};
</script>

<style>
/* 안내창 */
.modal-wrap {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.7);
  z-index: 99999;
}

.modal-main {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 550px;
  height: 400px;
  background-color: #fff;
  border-radius: 20px;
  padding: 10px;
  box-shadow: 0px 0px 15px 0px rgb(0 0 0 / 20%);
  border: 5px solid rgba(0, 0, 0, 0.1);
}

.modal-main h1 {
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  color: #000;
  padding: 20px 0;
}

.modal-main .modal-icon {
  position: relative;
  display: block;
  margin: 0 auto;
  text-align: center;
}

.modal-main .modal-icon i {
  font-size: 25px;
  margin-top: 20px;
  color: #ed1c24;
  text-shadow: 2px 2px 2px rgb(212, 210, 210);
}

.modal-main h1 {
  font-size: 23px;
  font-weight: 500;
  text-align: center;
  color: #000;
  text-shadow: 2px 2px 2px rgb(192, 192, 192);
  padding-bottom: 20px;
}

.modal-main p {
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  color: #999;
  line-height: 1.8;
}

.modal-main strong {
  font-weight: 600;
  text-decoration: underline;
  color: #ed1c24;
}

.modal-bottom {
  position: relative;
  display: block;
  margin-top: 50px;
}
.modal-bottom span {
  position: relative;
  display: block;
  font-size: 16px;
  text-align: center;
}

.modal-bottom-icon {
  position: relative;
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
}

.modal-bottom-icon i {
  font-size: 30px;
  color: #999;
  transition: all 0.5s;
}

.modal-bottom-icon i:hover {
  color: #000;
}

.modal-close {
  position: absolute;
  right: 30px;
  top: 20px;
  border: 0;
  cursor: pointer;
  font-size: 20px;
  background-color: transparent;
  color: #999;
}

.modal-close:hover {
  transform: rotate(90deg);
  transition: transform 0.5s;
}
</style>
