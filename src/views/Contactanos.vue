<template>
    <div>
        <Navbar></Navbar>
        <Banner></Banner>
        <div class="Principal_c mt-10">45654
        </div>
        <div>
            <Footer></Footer>
        </div>
    </div>
</template>
<style scope>
.Principal_c {
    border: 5px solid red;
    width: 80%;
    margin: auto;
}
</style>
<script>
import Navbar from '../components/Navbar.vue'
import Banner from '../components/Banner.vue'
import Footer from '../components/Footer.vue'

export default {
    name: 'Contactanos',
    components: {
        Navbar,
        Banner,
        Footer
    }
}
</script>