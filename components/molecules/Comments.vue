<template>
  <div class="comment-box">
    <div class="justify-content-start">
      <Disqus />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommentsComponent',
}
</script>

<style scoped>
.comment-box {
  margin: 2em 0px;
}
</style>