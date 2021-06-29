<template>
  <b-card
    border-variant="primary"
    no-body
    class="d-flex flex-column mx-2 card-calculadora p-0"
  >
    <div class="d-flex flex-column mb-auto p-4">
      <p class="col-12 text-titulo mt-2">
        Cálculo de la canasta básica familiar
      </p>

      <div v-if="paso1" class="d-flex flex-wrap justify-content-center">
        <img class="col-12 image-limitada" :src="'/Calculator-pana.svg'" />

        <p class="col-12 text-subtitulo">Cantidad de miembros en el hogar</p>
        <div class="d-flex col-12 justify-content-center">
          <b-form-select
            class="selector-cantidad mx-2"
            v-model="numPersonas"
            :options="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]"
          />

          <b-button v-on:click="onStep(1)" class="button-lg mx-2">
            Siguiente
          </b-button>
        </div>
      </div>

      <div v-if="paso2">
        <p class="col-12 text-subtitulo">Como se conforma el hogar</p>

        <div
          class="d-flex justify-content-center mt-2"
          :key="index"
          v-for="index in numPersonas"
        >
          <p class="text-numeracion col-1">{{ index }}</p>

          <b-form-select
            class="selector-sexo col-3 mx-2"
            :key="'sex' + index"
            v-model="sexos[index - 1]"
            :options="options"
            v-on="calcularCanasta()"
            >Sexo</b-form-select
          >

          <b-form-input
            class="d-flex input-edad col-3 mx-2"
            v-model="edades[index - 1]"
            placeholder="Edad"
          />
        </div>
        <b-button v-on:click="onStep(2)" class="button-lg mt-3">
          Siguiente
        </b-button>
      </div>

      <div v-if="paso3">
        Resultado para tu hogar Cantidad de miembros en el hogar Canasta básica
        general
        <strong>${{ canastaBasicaGeneral }} </strong> Canasta básica alimentaria
        <strong>${{ canastaBasicaAlimentaria }}</strong>

        Si los ingresos de tu hogar se encuentran por debajo de los
        {{ canastaBasicaGeneral }} está por debajo de la línea de la pobreza:
        por debajo de {{ canastaBasicaAlimentaria }} se encuentra dentro de la
        indigencia. Fuente: Dirección de estadistica de la provincia - Mayo
        2021.

        <b-button v-on:click="onStep(0)" class="button-lg-volver">
          Volver a inicio
        </b-button>
      </div>
    </div>

    <img
      class="col-12 align-self-end mt-auto image-limitada-h"
      :src="'/footer.png'"
    />
  </b-card>
</template>

<script>
//component code

export default {
  name: "CalculadoraCanasta",
  components: {},
  data() {
    return {
      paso1: true,
      paso2: false,
      paso3: false,
      numPersonas: 1,
      edades: [],
      sexos: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
      ],
      canastaBasicaGeneral: 0,
      canastaBasicaAlimentaria: 0,
      start: 0,
      options: [
        { value: null, text: "Sexo", disabled: true },
        { value: "Femenino", text: "Femenino" },
        { value: "Masculino", text: "Masculino" },
      ],
    };
  },
  methods: {
    onStep(paso) {
      this.paso1 = false;
      this.paso2 = false;
      this.paso3 = false;
      switch (paso) {
        case 0:
          this.paso1 = true;
          
          break;
        case 1:
          this.paso2 = true;
          break;
        case 2:
          this.paso3 = true;
          break;
      }
    },
    onComplete: function () {
      this.$refs["wizard"].reset();
    },
    calcularCanasta() {
      var indice = 0;

      var i = 0;
      for (i; i < this.numPersonas; i++) {
        indice = indice + this.calcularIndice(this.edades[i], this.sexos[i]);
      }

      var numbForm = new Intl.NumberFormat("es-ES");
      this.canastaBasicaGeneral = numbForm.format(indice * 18150.98);
      this.canastaBasicaAlimentaria = numbForm.format(indice * 8176.12);
    },
    calcularIndice(edad, sexo) {
      if ((isNaN(edad))) {
        return 0;
      }
      if (edad < 0) {
        return 0;
      }
      if (edad < 1) {
        if (sexo == "Femenino") {
          return 0.35;
        }
        return 0.35;
      }
      if (edad <= 1) {
        if (sexo == "Femenino") {
          return 0.37;
        }
        return 0.37;
      }
      if (edad <= 2) {
        if (sexo == "Femenino") {
          return 0.46;
        }
        return 0.46;
      }
      if (edad <= 3) {
        if (sexo == "Femenino") {
          return 0.51;
        }
        return 0.51;
      }
      if (edad <= 4) {
        if (sexo == "Femenino") {
          return 0.55;
        }
        return 0.55;
      }
      if (edad <= 5) {
        if (sexo == "Femenino") {
          return 0.6;
        }
        return 0.6;
      }
      if (edad <= 6) {
        if (sexo == "Femenino") {
          return 0.64;
        }
        return 0.64;
      }
      if (edad <= 7) {
        if (sexo == "Femenino") {
          return 0.66;
        }
        return 0.66;
      }
      if (edad <= 8) {
        if (sexo == "Femenino") {
          return 0.68;
        }
        return 0.68;
      }
      if (edad <= 9) {
        if (sexo == "Femenino") {
          return 0.69;
        }
        return 0.69;
      }
      if (edad <= 10) {
        if (sexo == "Femenino") {
          return 0.7;
        }
        return 0.79;
      }
      if (edad <= 11) {
        if (sexo == "Femenino") {
          return 0.72;
        }
        return 0.82;
      }
      if (edad <= 12) {
        if (sexo == "Femenino") {
          return 0.74;
        }
        return 0.85;
      }
      if (edad <= 13) {
        if (sexo == "Femenino") {
          return 0.76;
        }
        return 0.9;
      }
      if (edad <= 14) {
        if (sexo == "Femenino") {
          return 0.76;
        }
        return 0.96;
      }
      if (edad <= 15) {
        if (sexo == "Femenino") {
          return 0.77;
        }
        return 1.0;
      }
      if (edad <= 16) {
        if (sexo == "Femenino") {
          return 0.77;
        }
        return 1.03;
      }
      if (edad <= 17) {
        if (sexo == "Femenino") {
          return 0.77;
        }
        return 1.04;
      }
      if (edad <= 29) {
        if (sexo == "Femenino") {
          return 0.76;
        }
        return 1.02;
      }
      if (edad <= 45) {
        if (sexo == "Femenino") {
          return 0.77;
        }
        return 1.0;
      }
      if (edad <= 60) {
        if (sexo == "Femenino") {
          return 0.76;
        }
        return 1.0;
      }
      if (edad <= 75) {
        if (sexo == "Femenino") {
          return 0.67;
        }
        return 0.83;
      }
      if (edad <= 999) {
        if (sexo == "Femenino") {
          return 0.63;
        }
        return 0.74;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.image-limitada {
  max-width: 300px;
}

.image-limitada-h {
  max-height: 30px;
  object-fit: scale-down;
}

.button-lg {
  border-radius: 90px;
  background-color: #476cc2;
  border-width: 0px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 35px;
  padding-right: 35px;
}

.selector-cantidad {
  width: 80px;
  background: #f3f3f3;
  border-radius: 4px;
  border-color: #cdcdcd;
}

.selector-sexo {
  background: #f3f3f3;
  border-radius: 4px;
  border-color: #cdcdcd;
}

.input-edad {
  background: #f3f3f3;
  border-radius: 4px;
  width: 25%;
  border-color: #cdcdcd;
}

.card-calculadora {
  min-height: 700px;
  border-radius: 20px;
  border-width: 3px;
}

.text-titulo {
  color: #000000;
  font-size: 1.5rem;
  text-align: left;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
}

.text-numeracion {
  color: #5b5b5b;
  font-size: 1.2rem;
  text-align: center;
  margin: inherit;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
}

.text-subtitulo {
  color: #476cc2;
  font-size: 1.2rem;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
}
</style>
