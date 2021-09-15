<template>
    <div class="Formulario d-flex">
        <div class="Datos">
            <v-form class="Form" ref="form" v-model="valid" lazy-validation>
                <v-text-field class="dato-form" v-model="name" :counter="10" :rules="nameRules" label="Nombre Completo" required></v-text-field>
                <v-text-field class="dato-form" v-model="email" :rules="emailRules" label="Correo Electronico" required></v-text-field>
                <v-text-field class="dato-form" v-model="email" :rules="emailRules" label="Telefono" required></v-text-field>
                <v-select class="dato-form" v-model="select" :items="items" :rules="[v => !!v || 'Item is required']" label="debe aparecer el tipo de servicio que escogio el Usuario" required></v-select>
                <section class="terminos d-flex">
                    <div class="termino-1">
                        <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" required></v-checkbox>
                         <Terminos></Terminos>
                    </div>
                    
                       
                    
                </section>
                <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
                    Validate
                </v-btn>
                <v-btn color="error" class="mr-4" @click="reset">
                    Reset Form
                </v-btn>
            </v-form>
        </div>
        <div class="Tarjeta">
            <h6 class="text-center" style="font-size:20px">PAGO POR MEDIO DE TARJETAS DE CREDITO</h6>
            <v-text-field class="tarjeta-info" v-model="name" :counter="10" :rules="nameRules" label="Nombre y Apellido" required></v-text-field>
            <v-text-field class="tarjeta-info" v-model="name" :counter="10" :rules="nameRules" label="Numero" required></v-text-field>
            <section class="tarjeta-datos">
                <v-text-field class="tarjeta-info" v-model="name" :counter="10" :rules="nameRules" label="Vencimiento" required></v-text-field>
                <v-text-field class="tarjeta-info" v-model="name" :counter="10" :rules="nameRules" label="Codigo de seguridad" required></v-text-field>
            </section>
        </div>
    </div>
</template>
<style>
.Formulario {}

.Formulario .Datos,
.Formulario .Tarjeta {
    width: 50%;

}

.Form {
    padding: 20px;

}

.dato-form {

    margin-top: 25px;
}

.Tarjeta {
    padding: 20px;
    border: 5px solid red;
    width: 20%;
}

.tarjeta-info {

    margin-top: 25px;
}

#datos-tarjeta {
    border: 1px solid black;
}

.terminos{
    border: 8px solid red;
}
.terminos .termino-1 , .terminos .termino-2{
    border: 5px solid black;
    width: 50%;

}
</style>
<script>
import Terminos from '../components/Terminos.vue'
export default {
    data: () => ({
        valid: true,
        Termino: false,
        name: '',
        nameRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        select: null,
        items: [
            'Item 1',
            'Item 2',
            'Item 3',
            'Item 4',
        ],
        checkbox: false,
    }),
    components: {
        Terminos,
    },
    methods: {
        validate() {
            this.$refs.form.validate()
        },
        reset() {
            this.$refs.form.reset()
        },
        resetValidation() {
            this.$refs.form.resetValidation()
        },
    },
}
</script>