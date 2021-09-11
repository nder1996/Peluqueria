<template>
    <div>
        <v-container>
            <h1 class="text-center mt-10">Nuestros Servicios</h1>
            <v-col cols="12" md="12" lg="12">
                <v-row justify-center>
                    <v-col class="Tarjetas" v-for="(c,index) in shownCards" :key="c.num">
                        <v-card class="Card">
                            <v-card-title>
                                <p class="name text-center">{{c.name}}</p>
                            </v-card-title>
                            <v-card-subtitle class="img_card" text-center>
                                <img :src="c.url" height="350" width="100%" /><br>
                                <p class="text-justify">{{c.text}}</p>
                            </v-card-subtitle>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row>
                    <div class="Paginacion text-center">
                        <v-pagination v-model="page" :length="length"></v-pagination>
                    </div>
                </v-row>
            </v-col>
        </v-container>
    </div>
</template>
<style>
.Card {
    border: 5px solid red;
    color: red;
}

.name {
    width: 100%;
}

.Paginacion {
    width: 100%;

}

.img_card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.Tarjetas:hover {
    /*box-shadow: 1px 1px 5px 5px black;*/
}
</style>
<script>
export default {
    name: 'Card',
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
                /*
                { "id": 'servicio_2', "name": "", "text": "n1", "url": "" },
                { "id": 'servicio_3', "name": "", "text": "n1", "url": "" },
                { "id": 'servicio_4', "name": "", "text": "n1", "url": "" },
                { "id": 'servicio_5', "name": "", "text": "n1", "url": "" },
                { "id": 'servicio_6', "name": "", "text": "n1", "url": "" },*/
            ]
        }
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