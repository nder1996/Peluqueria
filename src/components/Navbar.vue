<template>
    <v-app-bar class="Navbar" color="black" height="120" dense dark>
        <v-toolbar-title class="Logo text-center">
        		<h1 class="Linia">Style Perfect</h1>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <!--
        <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
            <span class="mr-2">Inicio</span>
            <i class="fas fa-home"></i>
        </v-btn>
        <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
            <span class="mr-2">Contactanos</span>
            <i class="fas fa-address-book"></i>
        </v-btn>
        <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
            <span class="mr-2">Sobre Nosotros</span>
            <i class="far fa-question-circle"></i>
        </v-btn>
    -->
    </v-app-bar>
</template>
<script>
export default{
	name:'Navbar',
}
</script>
<style>

.Navbar{
	border:5px solid red;
}

.Logo{
	width:100%;
}
.Linia{
	
}

/*
.Logo h1{
	border-bottom:3px solid white;
	width:10%;
}
*/

</style>