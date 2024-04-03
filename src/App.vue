<script setup>
import {  RouterView } from 'vue-router'
import AppNavDrawer from '@/components/app/AppNavDrawer.vue'
</script>

<template>
  <v-layout>
    <app-nav-drawer/> <!-- Main navigation drawer component -->
    <v-app-bar color="transparent" dark  style="background: linear-gradient(45deg, #001E89, #7D0000);" >
      <v-app-bar-title>
        <p style="color: white; text-transform: uppercase; text-align: center; font-weight: bold;"> Gestión Académica - Estudiantes</p>
         </v-app-bar-title>
    </v-app-bar>

    <v-main style="min-height: 300px;">
      <RouterView/>
    </v-main>
  </v-layout>
</template>

<style scoped>

</style>
