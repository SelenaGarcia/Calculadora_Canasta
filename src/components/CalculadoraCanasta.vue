<template>
  <form-wizard
    color="#e67e22"
    back-button-text="Anterior"
    next-button-text="Siguiente"
    finish-button-text="Volver al inicio"
  >
    <h2 slot="title">Cálculo de la canasta básica familiar</h2>
    <h2 slot="next ">Siguiente</h2>

    <tab-content title="Miembros del hogar">
      Cantidad de miembros en el hogar
      <b-form-select
        v-model="personas"
        :options="[1, 2, 3, 4, 5, 6]"
      ></b-form-select>
    </tab-content>
    <tab-content title="Grupo familiar">
      Como se conforma el hogar
      <ul id="listaFliar">
        <li v-bind="key" :key="index" v-for="(persona, index) in personas">
          <b-form-select
            v-model="sexo"
            :options="['Femenino', 'Masculino']"
          ></b-form-select>
          <b-form-input v-model="edad" placeholder="Edad"></b-form-input>
        </li>
      </ul>
    </tab-content>
    <tab-content title="Resultado para tu hogar">
       Cantidad de miembros en el hogar

       Canasta básica general {{canastaBasicaGeneral}}
       Canasta básica general {{canastaBasicaAlimentaria}}

       Si los ingresos de tu hogar se encuentran por debajo de los {{canastaBasicaGeneral}} está por debajo de la línea de la pobreza: por debajo de {{canastaBasicaAlimentaria}} se encuentra dentro de la indigencia.

       Fuente: Dirección de estadistica de la provincia - Mayo 2021.
    </tab-content>
  </form-wizard>
</template>

<script>
import { FormWizard, TabContent } from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
//component code

export default {
  name: "CalculadoraCanasta",
  components: {
    FormWizard,
    TabContent,
  },
  data() {
    return {
      personas: 1,
      edad:'',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
