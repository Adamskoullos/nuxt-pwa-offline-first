<template>
  <div class="loader">
    <div class="holder">
      <p class="placeholder wave"></p>
      <span class="placeholder wave"></span>
      <span class="placeholder wave"></span>
      <span class="placeholder wave"></span>
    </div>
    <div class="holder">
      <p class="placeholder wave"></p>
      <span class="placeholder wave"></span>
      <span class="placeholder wave"></span>
      <span class="placeholder wave"></span>
    </div>
    <div class="holder">
      <p class="placeholder wave"></p>
      <span class="placeholder wave"></span>
      <span class="placeholder wave"></span>
      <span class="placeholder wave"></span>
    </div>
    <div class="holder">
      <p class="placeholder wave"></p>
      <span class="placeholder wave"></span>
      <span class="placeholder wave"></span>
      <span class="placeholder wave"></span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// Needs refactoring to Vuetify and Rems ===========================
.loader {
  height: 400px;
  margin: 3px auto;
  padding: 10px;
  max-width: 900px;

  .holder {
    flex: 1;
    margin: 20px 10px;
    height: 47px;
    display: flex;
    align-items: stretch;
    justify-content: stretch;

    p {
      flex: 1;
      margin: 0;
      background: cornflowerblue;
    }
    span {
      width: 30px;
      margin-left: 20px;
      background: darkgoldenrod;
    }
  }
  .placeholder.wave {
    animation: wave 1s infinite linear forwards;
    -webkit-animation: wave 1s infinite linear forwards;
    background: #f6f7f8;
    background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
    background-size: 800px 104px;
  }
  @keyframes wave {
    0% {
      background-position: -468px 0;
    }
    100% {
      background-position: 468px 0;
    }
  }

  @-webkit-keyframes wave {
    0% {
      background-position: -468px 0;
    }
    100% {
      background-position: 468px 0;
    }
  }
}
</style>
