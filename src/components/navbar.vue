<template>
  <div>
    <v-toolbar class="green accent-4">
        <v-toolbar-title ><span class="white--text">Autores</span></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn text @click="viewCreate()">Crear Autor</v-btn>
        </v-toolbar-items>
    </v-toolbar>
  </div>
</template>
<script>
export default {
    name:"Navbar",
    methods:{
      viewCreate:function(){
          this.$router.push('/autores/create')
      }
    }
}
</script>