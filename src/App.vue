<template>
    <v-app class="Principal">
        <v-app-bar app color="blue-grey grey darken-4" dark>
            <div class="d-flex align-center">
                <span>Style Perfect</span>
                <!--
                <v-img alt="Vuetify Logo" class="shrink mr-2" contain src="../src/assets/Logo_P.png" transition="scale-transition" width="180" />
              <!---
                <v-img alt="Vuetify Name" class="shrink mt-1 hidden-sm-and-down" contain min-width="100" src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png" width="100" />
           -->
            </div>
            <v-spacer></v-spacer>
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
        </v-app-bar>
        <v-main>
            <router-view />
        </v-main>
        <v-footer dark padless>
            <v-card class="flex" flat tile>
                <v-card-title class="teal">
                    <strong class="subheading">Style Perfect</strong>
                    <v-spacer></v-spacer>
                    <b-container class="Footer">
                        <i class="fab fa-facebook"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-instagram"></i>
                    </b-container>
                </v-card-title>
                <v-card-text class="py-2 white--text text-center">
                    {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
                </v-card-text>
            </v-card>
        </v-footer>
    </v-app>
</template>
<script>
    export default {
    name: 'App',

    data: () => ({
         /* icons: [
          'fab fa-facebook',
          'fab fa-twitter',
          'fab fa-instagram',
      ],
      */
    }),
};
</script>
<style type="text/css">
.Principal {
  
    /*
         background-image: url("../src/assets/Fondo_P.jpg");
        */

}

.Footer {
    position: relative;
   
    left: -2%;
   
}

.Footer i {
    margin-left: 30px;
    font-size: 35px;
    /*border: 5px solid red;*/


}
</style>