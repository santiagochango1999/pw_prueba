<template>
  <div class="container">
    <h1>TOKEN</h1>
    <div class="izquierda">
      <p>Semilla</p>
      <input v-model="semilla" type="text" />
      <p>Tiempo de vigencia</p>
      <input v-model="tiempo" type="text" />
      <p>Token</p>
      <input v-model="token" type="text" />
    </div>
    <br />
    <button @click="generar">Generar</button>
  </div>
</template>

<script>
import { obtenerTokenFachada } from "../helpers/clientetoken";
export default {
  data() {
    return {
      semilla: null,
      tiempo: null,
      token: null,
    };
  },
  methods: {
    async generar() {
      if (this.semilla && this.tiempo) {
        const pacBody = {
          semilla: this.semilla,
          tiempo: this.tiempo,
        };
        this.token = await obtenerTokenFachada(pacBody);
      } else {
        alert("ingrese datos");
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: block;
  align-items: first baseline;
  text-align: center;
  margin-left: 37%;
  margin-right: 37%;
  margin-top: 30px;
  padding: 0% 1% 1% 1%;
  border-style: solid;
  border-color: rgb(2, 12, 24);
  font-size: 2cap;
  background: rgb(125, 162, 163);
}

.container input {
  border-radius: 30px;
  border-color: rgb(33, 33, 33);
}

.container h1,
.container p {
  color: rgb(0, 0, 0);
}
.izquierda {
  text-align: left;
}
.container button {
  border-radius: 30px;
  background-color: rgb(38, 127, 243);
  color: white;
  font-size: 1.3cap;
  padding: 20px 20px;
}
</style>