<template>
    <div class="Parallax">
        <v-carousel cycle height="700" hide-delimiter-background show-arrows-on-hover>
            <v-carousel-item v-for="(slide, i) in slides" :key="i">
                <v-sheet :color="colors[i]" height="100%">
                    <v-row class="fill-height" align="center" justify="center">
                        <div class="text-h2 text-center">
                            <p>
                                {{ slide }}
                                <br> <br>
                                <v-btn color="primary" elevation="2" outlined x-large>Lorem ipsum dolor</v-btn>
                            </p>
                            
                        </div>
                    </v-row>
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