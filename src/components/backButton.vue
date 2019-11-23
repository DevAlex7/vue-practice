<template>
    <div>
        <v-btn
        :loading="loading3"
        :disabled="loading3"
        color="blue-grey"
        class="ma-2 white--text"
        @click="loader = 'loading3'"
        >
        Upload
        <v-icon right dark>mdi-cloud-upload</v-icon>
        </v-btn>
    </div>
</template>