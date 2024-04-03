<script setup>
import { ref } from 'vue';

const drawer = ref(true);
const rail = ref(true);

const menuGroupList = ref([
  {
    name: 'Académico',
    value: 'Academic',
    icon: 'mdi-school',
    subMenus:[
      {
        name:'Matriculación',
        value: 'matriculation',
        route:'/matriculation'
      },
      {
        name:'Horario de clases',
        value: 'class-schedule',
        route: '/class-schedule'
      },
      {
        name:'Kardex',
        value: 'kardex',
        route: '/kardex'
      },
      {
        name:'Malla Curricular',
        value: 'curriculum',
        route:'/curriculum'
      },

    ]
  }
])
</script>

<template>
  <v-navigation-drawer
    v-model="drawer"
    :rail="rail"
    permanent
    @click="rail = false"
  >
    <v-list-item
      prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
      title="UMSS"
      nav
    >
      <template v-slot:append>
        <v-btn
          icon="mdi-chevron-left"
          variant="text"
          @click.stop="rail = !rail"
        ></v-btn>
      </template>
    </v-list-item>

    <v-divider></v-divider>

    <v-list density="compact">
      <v-list-item prepend-icon="mdi-home" title="Inicio" value="home" router to="/"/>
      <v-list-group v-for="menuGroup in menuGroupList" :key="menuGroup.value" :value="menuGroup.value">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" :prepend-icon="menuGroup.icon" :title="menuGroup.name"></v-list-item>
        </template>
        <v-list-item
          v-for="subMenu in menuGroup.subMenus"
          :key="subMenu.value"
          :value="subMenu.value"
          :title="subMenu.name"
          router :to="subMenu.route"
        ></v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>

</template>

<style scoped>

</style>