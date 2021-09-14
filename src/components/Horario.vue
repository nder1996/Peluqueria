<template>
    <div class="">
        <v-card class="mb-12" height="590px">
            <v-container class="Servicios d-flex justify-center flex-wrap" fluid>
                <v-card elevation="2" class="card" id="card_1" outlined shaped>
                    <v-radio-group v-model="row" class="Ella" column>
                        <h1 class="text-center mb-2">Para Ella</h1>
                        <v-radio class="Op" label="ALISADO BRASILEÑO VALOR : $60 USD" value="Corte_1"></v-radio>
                        <v-radio class="Op" label="COLORACIÓN : $70 USD" value="Corte_2"></v-radio>
                        <v-radio class="Op" label="FLEQUILLO RECTO : $80 USD" value="Corte_3"></v-radio>
                    </v-radio-group>
                </v-card>
                <v-card elevation="2" class="card" id="card_2" outlined shaped>
                    <v-radio-group v-model="row" class="El" column>
                        <h1 class="text-center mb-5">Para El</h1>
                        <v-radio class="Op" label="CORTES DE PELO LARGO : $80 USD" value="Corte_4"></v-radio>
                        <v-radio class="Op" label="ESTILO FRENCH CROP : $75 USD" value="Corte_5"></v-radio>
                        <v-radio class="Op" label="DEGRADE : $65 USD" value="Corte_6"></v-radio>
                    </v-radio-group>
                </v-card>
                <br><br>
                <div class="mt-10">
                    <h6 class="text-center">Escoge Tu Horario</h6>
                    <v-row align="center" class="mt-10">
                        <v-col class="d-flex" cols="12" sm="6">
                            <v-select :items="Dia" label="Dia"></v-select>
                        </v-col>
                        <v-col class="d-flex" cols="12" sm="6">
                            <v-select :items="Hora" filled label="Hora"></v-select>
                        </v-col>
                    </v-row>
                </div>
            </v-container>
        </v-card>
    </div>
</template>
<style>
.card {
    border: 5px solid red;
    padding: 20px;
    width: 40%;
    margin-left: 45px;
}

#card_1 {
    background-color: #CFD8DC;
}

#card_2 {
    background-color: #F5F5F5;
}
</style>
<script>
export default {
    name: 'Horario',
    data() {
        return {
            column: null,
            row: null,
            Dia: [
                'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'
            ],

            Hora: [
                '9:00 AM - 10:00 AM', '10:00 AM - 11:00 AM', '11:00 AM - 12:00 PM', '2:00 PM - 3:00 PM', '3:00 PM - 4:00 PM', '4:00 PM - 5:00 PM', '5:00 PM - 6:00 PM', '6:00 PM - 7:00 PM'
            ],
        }


    }
}
</script>