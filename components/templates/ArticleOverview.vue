<template>
  <span v-if="post">
    <ArticleHeader :post="post" />
    <section class="pt-5" style="background-color: white">
      <div class="container mx-auto">
        <div class="row m-0">
          <div class="col-md-12">
            <ReadArticle :post="post" />
          </div>
          <!------------------>

          <!-- <div class="col-md-4">
            <div class="row">
              <div class="col-lg-12 mb-3">
                <SideNewsletter />
              </div>
              <div class="col-lg-12 mb-4">
                <PopularPosts />
              </div>


              <div class="col-lg-12 mb-4">
                <VerticalAd />
              </div>


              <div class="col-lg-12 mb-3"><RecentPosts /></div>

              <div class="col-lg-12">
                <JoinCommunity />
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </section>
  </span>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => { },
    },
  },
}
</script>

<style></style>