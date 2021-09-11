<template>
    <div class="Parallax">
        <v-carousel cycle height="500" hide-delimiter-background show-arrows-on-hover>
            <v-carousel-item v-for="(slide, i) in slides" :key="i">
                <v-sheet :color="colors[i]" height="100%">
                    <v-img class="img-slider" :src="require(`@/assets/Slider_${[i+1]}.jpg`)" width="100%" height="500px">
                        <section class="Info-slider">
                            <h1 class="Titulo text-center fill-height" align="center" justify="center">
                                {{ slide }} <br>
                                 <v-btn class="btn-1" depressed elevation="2" large outlined v-if="i==2">Inscribirme</v-btn>
                            </h1> 
                            <br>
                           
                        </section>
                    </v-img>
                    <!--
                    <v-row class="fill-height" align="center" justify="center">
                        <div class="text-h2 text-center">
                            <section>
                                <p class="text-center">
                                     {{ slide }}
                                </p>
                                 <v-img :src="require(`@/assets/Slider_${[i+1]}.jpg`)" width="100%" height="380px"></v-img>
                                <br> <br>
                                <v-btn color="primary" elevation="2" outlined x-large>Lorem ipsum dolor</v-btn>
                            </section>
                            
                        </div>
                    </v-row>
                -->
                </v-sheet>
            </v-carousel-item>
        </v-carousel>
    </div>
</template>
<style>
    .btn{
    background-color: #BDBDBD;
    color: white;
}

.img-slider{
    margin: auto;
    background: yellow;
  height: 150px;
  /*IMPORTANTE*/
  display: flex;
  justify-content: center;
  align-items: center;
}

.Info-slider{
  
    margin: auto;
}

.Titulo{
    font-size: 45px;
    background-color:rgb(168,168,168,0.5);
    color: white;
}

.btn-1{
    background-color: yellow;
    color: white;
}

</style>
<script type="text/javascript">
export default {
    name: 'Slider',
    data() {
        return {
            colors: [
                'indigo',
                'warning',
                'pink darken-2',
                'red lighten-1',
                'deep-purple accent-4',
            ],
            slides: [
                'La mejor peluquería de Bogotá',
                'Para el Verano: ACTUALIZA EL LOOK',
                '¡AGENDAS ABIERTAS!',
                'Un equipo especializado',
                'MANIFIESTA TU GRANDEZA',
            ],
        }
    },
}
</script>