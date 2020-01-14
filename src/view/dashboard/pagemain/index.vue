<template>
  <div class="pageMain">
    <transition name="fade-page" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {};
</script>
