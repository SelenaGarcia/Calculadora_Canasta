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
        v-model="numPersonas"
        :options="[1, 2, 3, 4, 5, 6]"
      ></b-form-select>
    </tab-content>
    <tab-content title="Grupo familiar">
      Como se conforma el hogar
      <ul id="listaFliar">
        <li :key="index" v-for="index in numPersonas">
          <b-form-select
            :key="'sex' + index"
            v-model="sexos[index - 1]"
            :options="['Femenino', 'Masculino']"
            v-on="calcularCanasta()"
          ></b-form-select>
          <b-form-input
            v-model="edades[index - 1]"
            placeholder="Edad"
          ></b-form-input>
        </li>
      </ul>
    </tab-content>
    <tab-content title="Resultado para tu hogar">
      Cantidad de miembros en el hogar Canasta básica general
      <strong>{{ canastaBasicaGeneral }} </strong> Canasta básica alimentaria
      <strong>{{ canastaBasicaAlimentaria }}</strong>

      Si los ingresos de tu hogar se encuentran por debajo de los
      {{ canastaBasicaGeneral }} está por debajo de la línea de la pobreza: por
      debajo de {{ canastaBasicaAlimentaria }} se encuentra dentro de la
      indigencia. Fuente: Dirección de estadistica de la provincia - Mayo 2021.
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
      numPersonas: 1,
      edades: [0, 0, 0, 0, 0, 0],
      sexos: ["F", "F", "F", "F", "F", "F"],
      canastaBasicaGeneral: 0,
      canastaBasicaAlimentaria: 0,
    };
  },
  methods: {
    calcularCanasta() {
      var indice = 0;

      var i = 0;
      for (i; i < this.numPersonas; i++) {
        indice = indice + this.calcularIndice(this.edades[i], this.sexos[i]);
      }

      console.log(indice);
      this.canastaBasicaGeneral = indice * 10000;
      this.canastaBasicaAlimentaria = indice * 200000;
    },
    calcularIndice(edad, sexo) {
      if (edad <= 0) {
        return 0.35;
      }
      if (edad < 1) {
        return 0.37;
      }
      if (edad < 2) {
        return 0.46;
      }
      if (edad < 3) {
        return 0.51;
      }
      if (edad < 4) {
        return 0.55;
      }
      if (edad < 5) {
        return 0.6;
      }
      if (edad < 6) {
        return 0.64;
      }
      if (edad < 7) {
        return 0.66;
      }
      if (edad < 8) {
        return 0.68;
      }
      if (edad < 9) {
        return 0.69;
      }
      if (edad < 9) {
        if (sexo == "Femenino") {
          return 0.79;
        }
        return 0.7;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
