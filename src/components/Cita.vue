<template>
    <div>
        <v-stepper v-model="e1">
            <v-stepper-header>
                <v-stepper-step :complete="e1 > 1" step="1" class="Numero">
                    Servicios
                </v-stepper-step>
                <v-divider>
                </v-divider>
                <v-stepper-step :complete="e1 > 2" step="2" class="Numero">
                    Disponibilidad
                </v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step step="3" class="Numero">
                    Reserva Cupo
                </v-stepper-step>
            </v-stepper-header>
            <v-stepper-items>
                <v-stepper-content step="1">
                    <Horario></Horario>
                    <v-btn color="primary" @click="e1 = 2">
                        Continue
                    </v-btn>
                    <v-btn text>
                        Cancel
                    </v-btn>
                </v-stepper-content>
                <v-stepper-content step="2">
                    <Respuesta></Respuesta>
                    <v-btn color="primary" @click="e1 = 3">
                        Continue
                    </v-btn>
                    <v-btn text>
                        Cancel
                    </v-btn>
                </v-stepper-content>
                <v-stepper-content step="3">
                    <Reserva></Reserva>
                
                    <v-btn color="primary" @click="e1 = 1">
                        Continue
                    </v-btn>
                    <v-btn text>
                        Cancel
                    </v-btn>
                </v-stepper-content>
            </v-stepper-items>
        </v-stepper>
    </div>
</template>
<style>
    .Numero{
    position: relative;
    top: -30%;
    /* border: 5px solid red; */
    font-size: 30px ;
 
}
.Titulo{
    position: relative;
    /* border: 5px solid red; */
    margin: 0;

}

.Servicios{
    /* border: 5px solid red; */
}

.Servicios .El , .Servicios .Ella {
    /*border: 5px solid black;
    margin-left: 25px;*/
    
}

.Servicios .Op{
    /* border: 5px solid red; */
    margin-top: 10px;

}

.Info{
    /* border: 5px solid red; */
    margin-top: 45px;
}



.Alertas-Info{
  
    text-align: center;
}

.info{
   
    margin-top: 25px;
}

.Alertas-Info .alert{
    /* border: 5px solid black; */
}




</style>
<script type="text/javascript">
import Horario from '../components/Horario.vue'
import Respuesta from '../components/Respuesta_Consulta.vue'
import Reserva from '../components/Reservar_Cupo.vue'


export default {
    data() {
        return {
            e1: 1,
         

        }
    },
    components: {
        Horario,
        Respuesta,
        Reserva,
       
    },

}
</script>