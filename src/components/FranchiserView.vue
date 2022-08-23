<template>
  <section class="franchiser">
    <div class="inner">
      <div class="franchiser-top">
        <h2>MASIGRAY <b>Franchiser</b></h2>
        <span>마시그래이 신규 매장</span>
      </div>
      <ul class="franchiser-list clearfix">
        <li id="store-1">
        </li>
        <li id="store-2">
        </li>
        <li id="store-3">
        </li>
        <li id="store-4">
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  export default {

  }
</script>

<style>
/* franchiser */
.franchiser {
  position: relative;
  display: block;
  background: url('@/assets/images/main-store-bg.png') no-repeat center;
  background-size: cover;
  padding: 100px 0;
}

.franchiser .inner {
  position: relative;
  display: block;
}

.franchiser-top {
  position: relative;
  display: block;
}

.franchiser-top h2 {
  position: relative;
  display: block;
  font-size: 40px;
  color: #69ccd0;
  font-weight: 300;
  text-align: center;
}

.franchiser-top h2 b {
  font-weight: 500;
}

.franchiser-top span {
  position: relative;
  display: block;
  font-size: 20px;
  color: #666;
  text-align: center;
}

.franchiser-list {
  position: relative;
  display: block;
  margin-top: 40px;
}

.franchiser-list li {
  position: relative;
  display: block;
  float: left;
  width: 24%;
  margin-right: 1.3%;
}

.franchiser-list li:last-child {
  margin-right: 0;
}

.franchiser-list li a {
  position: relative;
  display: block;
  text-align: center;
}

.franchiser-list li a img {
  width: auto;
  height: 324px;
  text-align: center;
}

.franchiser-list li a span {
  position: relative;
  display: block;
  margin-top: 20px;
  font-size: 20px;
  text-align: center;
  color: #fff;
}


/* 프랜차이즈 반응형 영역 */
@media all and (max-width: 1000px) {
  .franchiser {
    padding: 10vw 0;
  }

  .franchiser-top h2 {
    font-size: 30px;
  }

  .franchiser-top span {
    font-size: 15px;
  }

  .franchiser-list {
    margin-top: 4vw;
  }

  .franchiser-list li a img {
    height: 32.4vw;
  }

  .franchiser-list li a span {
    font-size: 15px;
    margin-top: 2vw;
    white-space: nowrap;
  }
}
</style>