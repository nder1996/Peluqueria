<template>
    <v-bottom-navigation v-model="value">
        <v-btn value="recent">
            <span>Alisados</span>
        </v-btn>
        <v-btn value="favorites">
            <span>Color</span>
        </v-btn>
        <v-btn value="nearby">
            <span>Asesoría de belleza</span>
        </v-btn>
        <v-btn value="recent">
            <span>Tratamientos capilares</span>
        </v-btn>
        <v-btn value="favorites">
            <span>Corte de pelo hombre</span>
        </v-btn>
        <v-btn value="nearby">
            <span>Extensiones de pelo</span>
        </v-btn>
    </v-bottom-navigation>
</template>