<template>
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <!--
        <h1>
            <router-link to="/about">Contactanos</router-link>
        </h1>
 -->
    </div>
</template>
<script>
import Navbar from '../components/Navbar.vue'
import Banner from '../components/Banner.vue'

export default {
    name: 'Servicios',
    components: {
       Navbar,Banner
    },
}
</script>