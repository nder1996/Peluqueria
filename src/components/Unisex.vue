<template>
    <div class="Carrusel">
        <h1 class="text-center mt-7">YOUR BEAUTY EXPERIENCE</h1>
        <p class="text-center mt-5">
            Los salones de peluquería Carche aúnan la alta peluquería a una innovadora línea de servicios estéticos ofreciendo los cuidados más exigentes requeridos por nuestros clientes, haciendo de nuestros espacios, lugares de estética y bien estar, a la vez de ofrecer la disposición y servicios más innovadores y elitistas de cada momento.
            Sin dejar de añadir nuestro servicio a domicilio en la que contamos con desplazamientos a barcos, villas y hoteles.
        </p>
        <v-sheet class="mx-auto" elevation="8" max-width="100%">
            <v-slide-group v-model="model" class="pa-4" active-class="lighten-1" show-arrows>
                <v-slide-item v-for="n in 15" :key="n" v-slot="{ active, toggle }">
                    <v-card :color="active ? undefined : 'grey lighten-1'" class="ma-5" height="400" width="400" @click="toggle">
                        <p class="text-center mt-10">
                            <v-avatar size="128"><img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-avatar>
                        </p>
                        <p class="text-justify pa-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores incidunt dolor soluta. Cupiditate ad pariatur amet provident molestias, saepe voluptates, architecto delectus velit culpa sint similique tenetur quas quod. Reprehenderit.
                        </p>
                        <v-rating v-model="rating" background-color="purple lighten-3" color="purple" large></v-rating>
                        <v-row class="fill-height" align="center" justify="center">
                            <v-scale-transition>
                            </v-scale-transition>
                        </v-row>
                    </v-card>
                </v-slide-item>
            </v-slide-group>
        </v-sheet>
    </div>
</template>
<style>
.Carrusel .P_1 {
    border: 5px solid red;
    width: 150%;
}
</style>
<script>
export default {
    data: () => ({
        model: null,
        rating: 4,

    }),

}
</script>