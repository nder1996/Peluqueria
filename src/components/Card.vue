<template>
    <div>
        <v-container>
            <v-col cols="12" xs="12" sm="12" xl="12" md="12" lg="12">
                <v-row>
                    <v-col v-for="(c,index) in shownCards" :key="c.num" cols="12" xs="12" sm="12" xl="3" md="12" lg="3">
                        <v-card>
                            <v-card-title>{{c.name}}</v-card-title>
                            <v-card-subtitle>
                            	<img :src="c.url" height="150" width="300" />
                        	</v-card-subtitle>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row>
                    <div class="text-center">
                        <v-pagination v-model="page" :length="length"></v-pagination>
                    </div>
                </v-row>
            </v-col>
        </v-container>
    </div>
</template>
<style>
.v-card--reveal {

    bottom: 0;
    opacity: 1 !important;
    position: absolute;
    width: 100%;
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
                { "id": 'servicio_1', "name": "COLORACIÓN", "text": "Coloración permanente con cobertura de canas 100%. Marca: Koleston (Wella). Duración: 35 min", "url": "./assets/Servicio_1.jpg" },
                 { "id": 'servicio_1', "name": "COLORACIÓN", "text": "Coloración permanente con cobertura de canas 100%. Marca: Koleston (Wella). Duración: 35 min", "url": "/assets/Servicio_1.jpg" },
                  { "id": 'servicio_1', "name": "COLORACIÓN", "text": "Coloración permanente con cobertura de canas 100%. Marca: Koleston (Wella). Duración: 35 min", "url": "/assets/Servicio_1.jpg" },
                 { "id": 'servicio_1', "name": "COLORACIÓN", "text": "Coloración permanente con cobertura de canas 100%. Marca: Koleston (Wella). Duración: 35 min", "url": "/assets/Servicio_1.jpg" },
                  { "id": 'servicio_1', "name": "COLORACIÓN", "text": "Coloración permanente con cobertura de canas 100%. Marca: Koleston (Wella). Duración: 35 min", "url": "/assets/Servicio_1.jpg" },
                 { "id": 'servicio_1', "name": "COLORACIÓN", "text": "Coloración permanente con cobertura de canas 100%. Marca: Koleston (Wella). Duración: 35 min", "url": "/assets/Servicio_1.jpg" },
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