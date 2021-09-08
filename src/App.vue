<template>
    <v-app class="Principal">
        <div>
            <v-app-bar class="Navbar" color="red" dense dark>
                <v-toolbar-title>Style Perfect</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
                    <span class="mr-2">Inicio</span>
                    <i class="fas fa-home"></i>
                </v-btn>
                <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
                    <span class="mr-2">Contactanos</span>
                    <i class="fas fa-address-book"></i>
                </v-btn>
                <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
                    <span class="mr-2">Sobre Nosotros</span>
                    <i class="far fa-question-circle"></i>
                </v-btn>
            </v-app-bar>
            <Banner />
        </div>
        <v-parallax class="Parallax" src="./assets/Fondo_P.jpg">
            <v-row align="center" justify="center">
                <v-col class="text-center" cols="12">
                    <div class="Fondo_P">
                        
                    </div>
                    <!--
                        <h1 class="text-h4 font-weight-thin mb-4">
                        </h1>
                        <h4 class="subheading">
                            Build your application today!
                        </h4>
                    -->
                </v-col>
            </v-row>
        </v-parallax>
        <!--
            <v-container class="Slider d-flex justify-center" fluid>
                <v-row justify="space-around">
                    <v-col class="Slider_1">
                        <h5>LA FORMA MÁS FÁCIL DE RESERVAR TUS CITAS DE BELLEZA</h5>
                        <p>
                            Más de 500 salones, centros de estética y spas
                        </p>
                    </v-col>
                    <v-col class="Slider_1">
                        <v-img class="IMG" src="./assets/Slider_1.jpg"></v-img>
                    </v-col>
                </v-row>
            </v-container>
        -->
        <br> <br>
        <v-footer dark padless>
            <v-card flat tile class="#000000 lighten-1 white--text text-center">
                <v-card-text>
                    <v-btn class="Footer mx-4 white--text" icon>
                        <i class="fab fa-facebook"></i>
                        <i class="fab fa-twitter-square"></i>
                        <i class="fab fa-instagram"></i>
                    </v-btn>
                </v-card-text>
                <v-card-text class="white--text pt-0">
                    Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </v-card-text>
                <v-divider></v-divider>
                <v-card-text class="white--text">
                    {{ new Date().getFullYear() }} — <strong>Style Perfect</strong>
                </v-card-text>
            </v-card>
        </v-footer>
    </v-app>
</template>
<style>
    .Principal{
        padding-left: 25px;
        margin: 0;
        padding: 0;
    }

    .Slider {
        background-color:#263238;
    }

    .Slider_1{
        color: white;
        width: 30%;
        margin-left: 5px;
        border: 5px solid grey;
    }

    .Slider_1 h5{
        border: 5px solid red;
        width: 700px;
        font-size: 50px;
    }

    .Slider_1 p{
         font-size: 30px;
    }

    .Slider_1 .IMG{
        border: 5px solid grey;
        width: 100%;

    }

    .Parallax{
        border: 5px solid purple;
        height: 100%;
    }

    .Principal{
        border: 5px solid red;
 
    }


    .Fondo_P{
        position: relative;
        border: 5px solid black;
        margin: auto;
        width: 90%;
        height: 1000px;
        
    }

    .Slider{
        border: 5px solid black;
        
    }


/*
     .Slider_2{
         width: 40%;
      background-color:#263238;
        margin-left: 10px;
    }

*/

    .d-flex{
        flex-wrap: wrap;
    }

    .Footer{
        border: 5px solid transparent;
    }

    .Footer i{
        margin-left: 25px;
        font-size: 25px;
    }
</style>
<script type="text/javascript">
import Banner from './components/Banner.vue';

export default {
    data: () => ({
        /* icons: [
             'mdi-facebook',
             'mdi-twitter',
             'mdi-linkedin',
             'mdi-instagram',
         ],*/
    }),
    components: {
        Banner
    }
}
</script>