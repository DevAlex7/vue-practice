<template>
    <div>
        <v-card
            class="mx-auto"
            max-width="1000"
            >
            <v-card-text>
            <div>Editar Autor</div>
            </v-card-text>
            <v-container>
            <v-form
            
            ref="form"
            v-model="valid"
            lazy-validation
            >
            <v-text-field
            
            v-model="name"
            :counter="50"
            :rules="nameRules"
            label="Name"
            required
            ></v-text-field>

            <v-text-field
            :value="edad"
            v-model="edad"
            :rules="edadRules"
            label="edad"
            required
            ></v-text-field>

            <v-select
            v-model="select"
            :items="items"
            :rules="[v => !!v || 'Item is required']"
            label="Item"
            required
            ></v-select>

            <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
            >
            Validate
            </v-btn>

            <v-btn
            color="warning"
            class="mr-4"
            @click="reset"
            >
            Reset Form
            </v-btn>
            <v-btn
            color="error"
            class="mr-4"
            @click="deleteActor"
            >
            Eliminar
            </v-btn>
            </v-form>
            </v-container>
        </v-card>
    </div>
</template>
<script>
import baseURL from '../constants'
import axios from 'axios';
export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 50) || 'Name must be less than 10 characters',
      ],
      edad: '',
      edadRules: [
        v => !!v || 'Edad is required',
      ],
      select: null,
      items: [
        'El salvador',
        'España',
        'Sudafrica',
        'Estados unidos',
      ],
    }),

    methods: {
        validate () {
            if (this.$refs.form.validate()) {
                this.snackbar = true
                var router = this.$router; 
                axios.put(baseURL.link+'autores/'+this.$route.params.id+'/edit', {
                    nombre:this.name,
                    edad:this.edad,
                    pais:this.select
                })
                .then(function (response) {
                    if(response.data.status == 200){
                        alert("Autor editado");
                        router.push('/autores')
                    }
                    else{
                        alert(response.data.data)
                    }
                })
                .catch(function (error) {
                alert(error)
                });
            }
        },
        reset () {
            this.$refs.form.reset()
        },
        resetValidation () {
            this.$refs.form.resetValidation()
        },
        getInformation:function(){
            const data = this
            axios.get(baseURL.link+'autores/'+this.$route.params.id)
                .then(function(response) {
                    data.name = response.data.data[0].nombre
                    data.edad = response.data.data[0].edad
                    data.select = response.data.data[0].pais
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        },
        deleteActor:function(){
            const router = this.$router
            axios.delete(baseURL.link+'autores/'+this.$route.params.id, {
                headers: {
                    'Content-Type': 'application/json'
                },
                body: this.$route.params.id
            }).then(function(response) {
                if(response.data.status == 200){
                    router.push('/autores')
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        }
    },
    beforeMount:function(){
        this.getInformation()
    }
    
}
</script>