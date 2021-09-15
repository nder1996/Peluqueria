<template>
    <div class="mt-10">
        <v-card>
            <v-toolbar flat color="primary" dark>
                <v-toolbar-title class="Titulo-Servicios text-center">
                    <h2>Nuestros Servicios</h2>
                </v-toolbar-title>
            </v-toolbar>
            <v-tabs vertical>
                <v-tab>
                    <v-icon left>
                        mdi-account
                    </v-icon>
                    <h1>Para Ella</h1>
                </v-tab>
                <v-tab>
                    <v-icon left>
                        mdi-lock
                    </v-icon>
                    <h1>Para El</h1>
                </v-tab>
                <v-tab-item>
                    <v-card flat>
                        <v-card-text>
                            <div class="Prueba">
                                <v-col cols="12" md="12" lg="12">
                                    <v-row justify-center>
                                        <v-col class="Tarjetas" v-for="(c,index) in shownCards" :key="c.num">
                                            <v-card class="mx-auto my-12" max-width="374">
                                                <template slot="progress">
                                                    <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
                                                </template>
                                                <img :src="c.url" height="250" width="100%" />
                                                <v-card-title>
                                                    <p class="name text-center">{{c.name}}</p>
                                                </v-card-title>
                                                <v-card-text>
                                                    <v-row align="center" class="mx-0 d-flex justify-center">
                                                        <v-rating :value="5" color="amber" dense half-increments readonly size="14"></v-rating>
                                                        <div class="grey--text ms-4">
                                                            4.5
                                                        </div>
                                                    </v-row>
                                                    <div class="my-4 text-subtitle-1 d-flex justify-center mt-10">
                                                        $ • 75 USD
                                                    </div>
                                                    <div class="d-flex justify-center">
                                                        <p class="text-justify">{{c.text}}</p>
                                                    </div>
                                                </v-card-text>
                                                <v-divider class="mx-4"></v-divider>
                                                <v-card-actions>
                                                    <v-btn color="deep-purple lighten-2" text>
                                                        Reserve
                                                    </v-btn>
                                                </v-card-actions>
                                            </v-card>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <div class="Paginacion text-center">
                                            <v-pagination v-model="page" :length="length"></v-pagination>
                                        </div>
                                    </v-row>
                                </v-col>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card flat>
                        <v-card-text>
                            <div class="Prueba">
                                <v-col cols="12" md="12" lg="12">
                                    <v-row justify-center>
                                        <v-col class="Tarjetas" v-for="(c,index) in shownCards" :key="c.num">
                                            <v-card class="mx-auto my-12" max-width="374">
                                                <template slot="progress">
                                                    <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
                                                </template>
                                                <img :src="c.url" height="250" width="100%" />
                                                <v-card-title>
                                                    <p class="name text-center">{{c.name}}</p>
                                                </v-card-title>
                                                <v-card-text>
                                                    <v-row align="center" class="mx-0 d-flex justify-center">
                                                        <v-rating :value="5" color="amber" dense half-increments readonly size="14"></v-rating>
                                                        <div class="grey--text ms-4">
                                                            4.5
                                                        </div>
                                                    </v-row>
                                                    <div class="my-4 text-subtitle-1 d-flex justify-center mt-10">
                                                        $ • 75 USD
                                                    </div>
                                                    <div class="d-flex justify-center">
                                                        <p class="text-justify">{{c.text}}</p>
                                                    </div>
                                                </v-card-text>
                                                <v-divider class="mx-4"></v-divider>
                                                <v-card-actions>
                                                    <v-btn color="deep-purple lighten-2" text>
                                                        Reserve
                                                    </v-btn>
                                                </v-card-actions>
                                            </v-card>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <div class="Paginacion text-center">
                                            <v-pagination v-model="page" :length="length"></v-pagination>
                                        </div>
                                    </v-row>
                                </v-col>
                            </div>
                            <!--
                            <p>
                                Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
                            </p>
                            <p>
                                Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In hac habitasse platea dictumst. Fusce ac felis sit amet ligula pharetra condimentum.
                            </p>
                            <p>
                                Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Nam commodo suscipit quam. In consectetuer turpis ut velit. Sed cursus turpis vitae tortor. Aliquam eu nunc.
                            </p>
                            <p>
                                Etiam ut purus mattis mauris sodales aliquam. Ut varius tincidunt libero. Aenean viverra rhoncus pede. Duis leo. Fusce fermentum odio nec arcu.
                            </p>
                            <p class="mb-0">
                                Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
                            </p>
                        -->
                        </v-card-text>
                    </v-card>
                </v-tab-item>
            </v-tabs>
        </v-card>
    </div>
</template>
<style>
.Prueba {
    border: 5px solid red;
}

.Titulo-Servicios {
    border: 5px solid red;
    width: 100%;
}
</style>
<script>
import Card from '../components/Card.vue'
export default {
    data() {

        return {
            page: 1,
            length: 2,
            cards: [
                { "id": 'servicio_1', "name": "ALISADO BRASILEÑO", "text": "Alisado de larga duración libre de formol. Resultados garantizados de un cabello sedoso, sin encrespamiento ", "url": require('@/assets/Servicio_1.jpg') },
                { "id": 'servicio_2', "name": "COLORACIÓN", "text": "Coloración permanente con cobertura de canas 100%. Marca: Koleston (Wella). Duración: 35 min", "url": require('@/assets/Servicio_2.jpg') },
                { "id": 'servicio_3', "name": "Flequillo recto", "text": "tienes el rostro alargado u ovalado porque visualmente dará la sensación de que es más corto y, especialmente bien.", "url": require('@/assets/Servicio_3.jpg') },
                { "id": 'servicio_4', "name": "CORTES DE PELO LARGO", "text": "Los profesionales de Carlos Style Perfect cortarán uno a uno los distintos mechones de pelo de manera que le den forma y volumen", "url": require('@/assets/Servicio_4.jpg') },
                { "id": 'servicio_5', "name": "ESTILO FRENCH CROP", "text": "Se trata de un estilo de corte de cabello inspirado en los años 90. En este caso se pasa la maquinilla por la nuca y por los laterales.", "url": require('@/assets/Servicio_5.jpg') },
                { "id": 'servicio_6', "name": "Degrade", "text": "Este corte se parece al Undercut porque al igual que él, consiste en ir dejando menor volumen de cabello.", "url": require('@/assets/Servicio_6.jpg') },
            ]
        }
    },
    components: {
        Card
    },
    computed: {

        shownCards() {

            const { page, length, cards } = this;
            const number = Math.ceil(cards.length / length); // Numero de elementos a mostrar por página
            return cards.slice((page - 1) * number, page * number);

        }

    }
}
</script>
<!---<template>
    <div>
        <v-card>
            <v-toolbar flat color="primary" dark>
                <v-toolbar-title>User Profile</v-toolbar-title>
            </v-toolbar>
            <v-tabs vertical>
                <v-tab>
                    <v-icon left>
                        mdi-account
                    </v-icon>
                    Option 1
                </v-tab>
                <v-tab>
                    <v-icon left>
                        mdi-lock
                    </v-icon>
                    Option 2
                </v-tab>
                <v-tab>
                    <v-icon left>
                        mdi-access-point
                    </v-icon>
                    Option 3
                </v-tab>
                <v-tab-item>
                    <Card></Card>
                </v-tab-item>
                <v-tab-item>
                    <v-card flat>
                        <v-card-text>
                            <p>
                                Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
                            </p>
                            <p>
                                Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In hac habitasse platea dictumst. Fusce ac felis sit amet ligula pharetra condimentum.
                            </p>
                            <p>
                                Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Nam commodo suscipit quam. In consectetuer turpis ut velit. Sed cursus turpis vitae tortor. Aliquam eu nunc.
                            </p>
                            <p>
                                Etiam ut purus mattis mauris sodales aliquam. Ut varius tincidunt libero. Aenean viverra rhoncus pede. Duis leo. Fusce fermentum odio nec arcu.
                            </p>
                            <p class="mb-0">
                                Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
                            </p>
                        </v-card-text>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card flat>
                        <v-card-text>
                            <p>
                                Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
                            </p>
                            <p class="mb-0">
                                Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
                            </p>
                        </v-card-text>
                    </v-card>
                </v-tab-item>
            </v-tabs>
        </v-card>
    </div>
</template>
<style>
.Service {
    border: 5px solid red;
    display: flex;
    align-items: center;
}
</style>
<script>

import Card from '../components/Card.vue'

export default {
    name: 'Tabs',
    components:{
        Card
    }

}
</script>