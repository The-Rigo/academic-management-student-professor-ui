<script setup>
import {  RouterView } from 'vue-router'
import AppNavDrawerStudent from '@/components/app/AppNavDrawerStudent.vue'
import AppNavDrawerProfessor from '@/components/app/AppNavDrawerProfessor.vue'
import { ref } from 'vue'

const isStudent=ref(false)
const isProfessor=ref(false)
const stateButton=ref(true)
const student = () =>{
  isStudent.value=true
  buttons()
  console.log(isStudent.value)
}

const professor =()=>{
  isProfessor.value=true
  buttons()
  console.log(isProfessor.value)
}

const buttons =()=>{
  stateButton.value=false
}
</script>

<template>
  <div v-if="stateButton">
    <v-btn @click="student" > Estudiante</v-btn>
    <v-btn @click="professor" > Docente</v-btn>
    <RouterView/>
  </div>

  <div v-if="isStudent">
      <v-layout>
        <app-nav-drawer-student/> <!-- Main navigation drawer component -->
        <v-app-bar color="transparent" dark  style="background: linear-gradient(45deg, #001E89, #7D0000);" >
          <v-app-bar-title>
            <p style="color: white; text-transform: uppercase; text-align: center; font-weight: bold;"> Gestión Académica - Estudiantes</p>
             </v-app-bar-title>
        </v-app-bar>

        <v-main style="min-height: 300px;">
          <RouterView/>
        </v-main>
      </v-layout>
  </div>
  <div v-if="isProfessor">
    <v-layout>
      <app-nav-drawer-professor/> <!-- Main navigation drawer component -->
      <v-app-bar color="transparent" dark  style="background: linear-gradient(45deg, #001E89, #7D0000);" >
        <v-app-bar-title>
          <p style="color: white; text-transform: uppercase; text-align: center; font-weight: bold;"> Gestión Académica - Docentes</p>
        </v-app-bar-title>
      </v-app-bar>
      <v-main style="min-height: 300px;">
        <RouterView/>
      </v-main>
    </v-layout>
  </div>

</template>

<style scoped>

</style>
