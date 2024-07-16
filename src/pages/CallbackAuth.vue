<template>
  <div
    class="wrapper w-full text-center flex flex-col justify-center items-center"
  >
    <img
      src="https://www.fand.it/wp-content/uploads/2022/11/logo_fand_PRINCIPALE_web-300x287.jpg"
      class="size-40 mb-16"
      alt=""
    />
    <div class="flex flex-col justfy-center items-center my-8">
      <div class="loader"></div>
      <p>Loading...</p>
    </div>
    <h1>Sta avvenendo il processo di Login</h1>
    <p>sarai reindirizzato alla home</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      redirectUrl: "/", // URL di default per reindirizzamento
    };
  },
  created() {
    setTimeout(() => {
      this.$router.push(this.redirectUrl);
    }, 5000);
  },
};
</script>

<style scoped>
.wrapper {
  height: 100vh;
  z-index: 2;
  position: absolute;
  top: 0;
  bottom: 0;
  background-color: white;
}
</style>
