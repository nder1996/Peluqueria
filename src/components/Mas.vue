<template>
    <div class="History">
        <h1 class="text-center mt-7">Ahora es tiempo de abrazar nuestro cabello natural</h1>
        <h2 class="text-center mt-7">The Blog</h2>
        <v-timeline :dense="$vuetify.breakpoint.smAndDown" class="mt-10">
            <v-timeline-item color="blue-grey lighten-3" fill-dot right>
                <v-card>
                    <v-card-title class="blue-grey lighten-3">
                        <h2 class="text-h4 white--text font-weight-light text-center">
                            <v-carousel cycle height="610" hide-delimiter-background show-arrows-on-hover>
                                <v-carousel-item v-for="(slide, i) in slides" :key="i">
                                    <v-sheet class="ELLA" height="270" color="blue-grey lighten-3">
                                        <v-row class="fill-height" align="center" justify="center">
                                            <div class="img-slider text-h2 mt-5">
                                                <v-img :src="require(`@/assets/Tiempo_${[i+1]}.jpg`)" width="100%" height="380px"></v-img>
                                            </div>
                                        </v-row> <br>
                                        <div class="div-Frase text-h2 mt-5">
                                            <p class="Frase text-center">
                                                {{ Frases[i] }} <br>
                                                <v-btn color="primary" elevation="12" large outlined>Ver Mas + </v-btn> <br>
                                            </p>
                                        </div>
                                    </v-sheet>
                                </v-carousel-item>
                            </v-carousel>
                        </h2>
                    </v-card-title>
                </v-card>
            </v-timeline-item>
            <v-timeline-item color="grey lighten-2" fill-dot left small>
                <v-card>
                    <v-card-title class="grey lighten-2">
                        <h2 class="text-h4 white--text font-weight-light text-center">
                            <v-carousel cycle height="670" hide-delimiter-background show-arrows-on-hover>
                                <v-carousel-item v-for="(slide, i) in slides" :key="i">
                                    <v-sheet class="ELLA" height="310" color="grey lighten-2">
                                        <v-row class="fill-height" align="center" justify="center">
                                            <div class="img-slider text-h2 mt-5">
                                                <v-img :src="require(`@/assets/Tiempo_${[i+4]}.jpg`)"  height="480px"></v-img>
                                            </div>
                                        </v-row> <br>
                                        <div class="div-Frase text-h2 mt-5">
                                            <p class="Frase text-center">
                                                {{ Frases_H[i] }} <br>
                                                <v-btn color="primary" elevation="12" large outlined>Ver Mas + </v-btn> <br>
                                            </p>
                                        </div>
                                    </v-sheet>
                                </v-carousel-item>
                            </v-carousel>
                        </h2>
                    </v-card-title>
                </v-card>
            </v-timeline-item>
        </v-timeline>
    </div>
</template>
<style>

.text-h4{

    width: 100%;
    
}


.History{
   
    width: 98%;
    margin: auto;
}

.img-slider{
    margin-bottom: 25px;
    width: 95%;
}

.div-Frase{
    position: relative;
    top: 40%;
     width:100% ;
}

.Frase{
    width:100%;
    position: relative;
    font-size: 25px;
    padding: 15px;
   
}

.img-slider{
   
}



</style>
<script type="text/javascript">
export default {
    data() {
        return {
            colors: [
                'indigo',
                'warning',
                'pink darken-2'
            ],
            slides: [
                '1',
                '2',
                '3'
            ],
            Frases: [
                'Vernon Francois: Nuestro experto en rizo',
                'Estilismos para cada tipo de cabello ',
                'NUESTROS SALONES UN DISEÑO ÚNICO',
            ],
             Frases_H: [
                'TRATAMIENTO ANTI-CAÍDA...!',
                'Grooming: Del grunge al clásico',
                '¿Puedo aumentar el vello de mis Cejas?',
            ]
        }
    },
}
</script>