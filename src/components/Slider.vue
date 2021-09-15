<template>
    <div class="Parallax">
        <v-carousel cycle height="700" hide-delimiter-background show-arrows-on-hover>
            <v-carousel-item v-for="(slide, i) in slides" :key="i">
                <v-sheet :color="colors[i]" height="100%">
                    <v-img class="img-slider" :src="require(`@/assets/Slider_${[i+1]}.jpg`)" width="100%" height="850px">
                        <section class="Info-slider">
                            <h1 class="Titulo text-center fill-height" align="center" justify="center">
                                {{ slide }} <br>
                                <!--
                                <v-btn class="btn-1" depressed elevation="2" large outlined v-if="i==2">Inscribirme</v-btn>
                            -->
                                <v-col cols="auto">
                                    <v-dialog transition="dialog-bottom-transition" max-width="1500">
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn color="primary" v-bind="attrs" v-on="on" v-if="i==2">From the bottom</v-btn>
                                        </template>
                                        <template v-slot:default="dialog">
                                            <v-card height="1010">
                                                <v-toolbar color="primary" dark>Opening from the bottom</v-toolbar>
                                                <v-card-text>
                                                    <div class="text-h2 pa-12"><Cita></Cita></div>
                                                </v-card-text>
                                                <v-card-actions class="justify-end">
                                                    <v-btn text @click="dialog.value = false">Close</v-btn>
                                                </v-card-actions>
                                            </v-card>
                                        </template>
                                    </v-dialog>
                                </v-col>
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

import Cita from '../components/Cita.vue'

export default {
    name: 'Slider',
        components:{
            Cita    
    },
    data() {
        return {
            dialog: false,
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