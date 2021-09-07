<template>
    <v-container fluid>
        <v-row justify="space-around">
            <v-col cols="5">
                <div class="text-h6 mb-1">
                    Default (cover)
                </div>
                <div class="subheading">
                    Matching
                </div>
                <!--
                <v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.7"></v-img>
              -->
            </v-col>
            <v-col cols="5">
                <div class="text-h6 mb-1">
                    Contain
                </div>
                <div class="subheading">
                    Matching
                </div>
                <v-img class="" src="../assets/Slider_1.jpg" aspect-ratio="1.7" contain></v-img>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    name: 'HelloWorld',

    data: () => ({
        ecosystem: [{
                text: 'vuetify-loader',
                href: 'https://github.com/vuetifyjs/vuetify-loader',
            },
            {
                text: 'github',
                href: 'https://github.com/vuetifyjs/vuetify',
            },
            {
                text: 'awesome-vuetify',
                href: 'https://github.com/vuetifyjs/awesome-vuetify',
            },
        ],
        importantLinks: [{
                text: 'Documentation',
                href: 'https://vuetifyjs.com',
            },
            {
                text: 'Chat',
                href: 'https://community.vuetifyjs.com',
            },
            {
                text: 'Made with Vuetify',
                href: 'https://madewithvuejs.com/vuetify',
            },
            {
                text: 'Twitter',
                href: 'https://twitter.com/vuetifyjs',
            },
            {
                text: 'Articles',
                href: 'https://medium.com/vuetify',
            },
        ],
        whatsNext: [{
                text: 'Explore components',
                href: 'https://vuetifyjs.com/components/api-explorer',
            },
            {
                text: 'Select a layout',
                href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
            },
            {
                text: 'Frequently Asked Questions',
                href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
            },
        ],
    }),
}
</script>
<style>
.Principal {
    border: 5px solid red;

    height: 100%;
}

.Principal .img {
    border: 5px solid black;
    width: 50%;
    height: 500px;
}
</style>