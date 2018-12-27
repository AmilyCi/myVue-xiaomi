<style>
.test > p {
  background-color: aqua;
}
</style>

<template>
    <article class="test">
        <p>{{vue}}</p>
    </article>
</template>

<script>
export default {
  data() {
    return {
      vue: "vue"
    };
  }
};
</script>