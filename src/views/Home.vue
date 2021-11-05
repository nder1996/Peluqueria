<template>
    <div>
        <Navbar></Navbar>
        <Banner></Banner>
        <div class="Principal mt-10">
            <Slider></Slider>
            <Tabs></Tabs>
            <Mas></Mas>
            <Comments></Comments>
            <Google></Google>
        </div>
        <!---->
        <!---->
        <Footer></Footer>
    </div>
</template>
<script>
    import Navbar from '../components/Navbar.vue'
import Banner from '../components/Banner.vue'
import Footer from '../components/Footer.vue'

import Slider from '../components/Slider.vue'
//import Card from '../components/Card.vue'
import Mas from '../components/Mas.vue'
import Comments from '../components/Comments.vue'
import Google from '../components/Google.vue'


import Tabs from '../components/Tabs.vue'

export default {
    name: 'Home',
    components: {
        Navbar,
        Banner,
        Footer,
        Slider,
      
        Mas,
        Comments,
        Google,
        Tabs
    },


   data: () => ({
      loading: false,
      selection: 1,
    }),

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }




</script>
<style type="text/css" media="screen">
.Principal {
    /* border: 5px solid red; */
    width: 80%;
    margin: auto;


}

.Novedades {}

.Novedades div {
    /* border: 5px solid red; */
    margin-left: 25px;

}

.Body {
    /* border: 5px solid black; */
}
</style>