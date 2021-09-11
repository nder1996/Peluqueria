<template>
    <div>
        <h1 class="text-center mt-7">OPINIONES</h1>
        <v-sheet class="mx-auto mt-10" elevation="8" max-width="100%">
            <v-slide-group v-model="model" class="pa-4" active-class="success" show-arrows>
                <v-slide-item v-for="n in 4" :key="n" v-slot="{ active, toggle }">
                    <v-card :color="active ? undefined : 'grey lighten-1'" class="ma-4" height="400" width="500" @click="toggle">
                        <v-row class="fill-height" align="center" justify="center">
                            <v-scale-transition>
                                <section class="text-center mt-2">
                                    <v-avatar size="150"><img :src="require(`@/assets/Coments_${[n]}.jpg`)" alt="John"></v-avatar>
                                    <br> <br>
                                    <p>{{ Nombre[n-1] }}</p><br>
                                    <p>{{ Coments[n-1] }}</p>
                                    <p class="Calificacion">
                                        <i class="far fa-star"></i>
                                        <i class="far fa-star"></i>
                                        <i class="far fa-star"></i>
                                        <i class="far fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </p>
                                </section>
                            </v-scale-transition>
                        </v-row>
                    </v-card>
                </v-slide-item>
            </v-slide-group>
        </v-sheet>
    </div>
</template>
<script type="text/javascript">
export default {
    data: () => ({
        model: null,
        Nombre: [
            'Julio R',
            'Andres A.',
            'Mirela L.',
            'Sabrina M.',
        ],
        Coments: [
            'Lorem ipsum dolor sit amet consectetur1',
            'Lorem ipsum dolor sit amet consectetur2',
            'Lorem ipsum dolor sit amet consectetur3',
            'Lorem ipsum dolor sit amet consectetur4'
        ]
    }),
}
</script>
<style>
.Calificacion{
    /*border:5px solid red;*/
}

.Calificacion i{
    margin-left:25px;
}

</style>
