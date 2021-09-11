<template>
    <div>
        <v-bottom-navigation class="Nav"  >
            <v-btn value="recent">
                <a> <router-link to="/">Inicio</router-link></a>
            </v-btn>
            <v-btn value="favorites">
                <a>  <router-link to="/Contactanos">Contactanos</router-link></a>
              
            </v-btn>
            <v-btn value="nearby">
                <a><router-link to="/Servicios">Servicios</router-link></a>
             
            </v-btn>
            <v-btn value="recent">
                <a><router-link to="/Nosotros">Sobre Nosotros</router-link></a>
                
            </v-btn>
        </v-bottom-navigation>
    </div>
</template>

<style>
    .Nav{
        text-decoration: none;
    }
    a{
        text-decoration: none;
        color:black !important;
        font-size: 20px;
    }
</style>

<script>
    export default{
        name:'Banner'
        
    }
</script>
