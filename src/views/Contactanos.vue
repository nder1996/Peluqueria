<template>
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
</template>
<script>
import Navbar from '../components/Navbar.vue'
import Banner from '../components/Banner.vue'

export default {
    name: 'Home',
    components: {
       Navbar,Banner
    },
}
</script>