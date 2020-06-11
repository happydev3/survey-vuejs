<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from './pages/layouts/Header';
import Footer from '@/pages/layouts/Footer';
export default {
  components: {
    Header,
    Footer
  }
}
</script>