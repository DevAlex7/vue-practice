<template>
   <div>
       <navbar/>
       <v-container>
            <v-card
                class="mx-auto"
                max-width="300"
                tile
            >
                <v-list rounded>
                    <v-subheader>Autores</v-subheader>
                    <v-list-item-group  color="primary">
                        <v-list-item
                        v-for="(item, i) in autores"
                        :key="i"
                        >
                        <v-list-item-icon>
                            <v-icon>persons</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content @click="viewActor(item.id)">
                            <v-list-item-title v-text="item.nombre"></v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-card>
        </v-container>
   </div>
</template>
<style>
a{
    cursor: pointer;
}
</style>
<script>
import baseURL from '../constants'
import axios from 'axios';
import navbar from '../components/navbar'
export default {
    data () {
        return{
            autores: [],
        }
    },
    methods:{
        getAutores: function() {
            const url = baseURL.link+'autores/';
            axios.get(url, {
            headers: {
                'Content-Type': 'application/json'
            }
            }).then((response) => {
                this.autores = response.data.data
            })
        },
        viewActor:function(id){
            this.$router.push('/autores/'+id) 
        }
    },
    components:{
        navbar
    },
    beforeMount:function(){
        //this.crearAutor()
        this.getAutores()
    }
}
</script>