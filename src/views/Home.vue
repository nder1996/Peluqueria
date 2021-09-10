<template>
    <div>
        <Navbar></Navbar>
        <Banner></Banner>
        <div class="Principal mt-10">
            <Slider></Slider>
              <h1 class="text-center mt-10">Nuestros Servicios</h1>
               <Card></Card>
            <div class="Novedades d-flex justify-center">
           
              <div>1</div>
              <div>2</div>
              <div>3</div>
            </div>
        </div>
         <Footer></Footer>
    </div>
</template>
<script>
import Navbar from '../components/Navbar.vue'
import Banner from '../components/Banner.vue'
import Footer from '../components/Footer.vue'

import Slider from '../components/Slider.vue'
import Card from '../components/Card.vue'

export default {
    name: 'Home',
    components: {
        Navbar,
        Banner,
        Footer,
        Slider,Card
    },
}
</script>
<style type="text/css" media="screen">
    .Principal{
      border:5px solid red;
      width:80%;
      margin:auto;
    } 

    .Novedades{

    }

    .Novedades div{
      border:5px solid red;
      margin-left:25px;

    } 
</style>