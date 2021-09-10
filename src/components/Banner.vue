<template>
    <div>
        <v-bottom-navigation>
            <v-btn value="recent">
                <router-link to="/">Inicio</router-link>
            </v-btn>
            <v-btn value="favorites">
                <router-link to="/Contactanos">Contactanos</router-link>
            </v-btn>
            <v-btn value="nearby">
             <router-link to="/Servicios">Servicios</router-link>
            </v-btn>
            <v-btn value="recent">
                <router-link to="/Nosotros">Sobre Nosotros</router-link>
            </v-btn>
        </v-bottom-navigation>
    </div>
</template>
<script>
    export default{
        name:'Banner'
    }
</script>