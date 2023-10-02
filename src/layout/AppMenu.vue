<script setup>
import { ref } from "vue";

import AppMenuItem from "./AppMenuItem.vue";

const items = ref([
  {
    label: "Inicio",
    items: [
      { label: "Agenda", icon: "ri-calendar-line", to: "/" },
      { label: "Caja", icon: "ri-currency-line", to: "/#" },
      { label: "Pacientes", icon: "ri-empathize-fill", to: "/#" },
      { label: "Recepción", icon: "ri-notification-3-line", to: "/#" },
      { label: "Somatometría", icon: "ri-nurse-line", to: "/#" },
    ],
  },
  {
    label: "Consulta externa",
    items: [
      {
        label: "Consultas pendientes",
        icon: "ri-nurse-line",
        to: "/preferencias",
      },
      {
        label: "Historial de consultas",
        icon: "ri-health-book-line",
        to: "/preferencias",
      },
    ],
  },
  {
    label: "Consulta Dental",
    items: [
      {
        label: "Consultas pendientes",
        icon: "ri-nurse-line",
        to: "/preferencias",
      },
      {
        label: "Historial de consultas",
        icon: "ri-health-book-line",
        to: "/preferencias",
      },
    ],
  },
  {
    label: "Psicología",
    items: [
      {
        label: "Consultas pendientes",
        icon: "ri-mental-health-line",
        to: "/preferencias",
      },
      {
        label: "Historial de consultas",
        icon: "ri-health-book-line",
        to: "/preferencias",
      },
    ],
  },
  {
    label: "Audiometría",
    items: [
      {
        label: "Consultas pendientes",
        icon: "ri-psychotherapy-line",
        to: "/preferencias",
      },
      {
        label: "Historial de consultas",
        icon: "ri-health-book-line",
        to: "/preferencias",
      },
    ],
  },
  {
    label: "Configuración",
    items: [
      { label: "Preferencias", icon: "pi pi-fw pi-cog", to: "/preferencias" },
    ],
  },
]);
</script>

<template>
  <ul class="layout-menu">
    <template v-for="(item, i) in items" :key="item">
      <app-menu-item
        v-if="!item.separator"
        :item="item"
        :index="i"
      ></app-menu-item>
      <li v-if="item.separator" class="menu-separator"></li>
    </template>
  </ul>
</template>

<style lang="scss" scoped>
</style>