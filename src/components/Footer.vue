<template>
    <div>
        <v-footer class="mt-10" dark padless>
            <v-card flat tile class="#000000 lighten-1 white--text text-center">
                <v-card-text>
                    <v-btn class="Footer mx-4 white--text" icon>
                        <i class="fab fa-facebook"></i>
                        <i class="fab fa-twitter-square"></i>
                        <i class="fab fa-instagram"></i>
                    </v-btn>
                </v-card-text>
                <v-card-text class="white--text pt-0">
                    Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </v-card-text>
                <v-divider></v-divider>
                <v-card-text class="white--text">
                  <img src="../assets/logo.png" height="100" width="190"  alt="">
                </v-card-text>
            </v-card>
        </v-footer>
    </div>
</template>
<style>
.Footer {
    border: 5px solid transparent;
}

.Footer i {
    margin-left: 25px;
    font-size: 25px;
}
</style>
<script>
export default{
    name:'Footer'
}
</script>