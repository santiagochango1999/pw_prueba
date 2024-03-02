<template>
  <div class="container">
    <h1>ESTUDIANTE</h1>
    <div class="CONTAINER2">
      <p>Token</p>
      <input id="token" type="text" />
      <p>Nombre</p>
      <input v-model="nombre" type="text" />
      <p>Apellido</p>
      <input v-model="apellido" type="text" />
      <p>Cedula</p>
      <input v-model="cedula" type="text" />
    </div>
    <br />
    <button @click="insertar">Guardar</button>
  </div>
</template>

<script>
import { insertarEstudianteFachada } from "../helpers/clienteestudiante";
export default {
  data() {
    return {
      nombre: null,
      apellido: null,
      cedula: null,
    };
  },
  methods: {
    async insertar() {
      if (this.nombre && this.apellido && this.cedula) {
        const pacBody = {
          nombre: this.nombre,
          apellido: this.apellido,
          cedula: this.cedula,
        };
        await insertarEstudianteFachada(pacBody);
        location.reload();
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
  margin-left: -40%;
  margin-right: -40%;
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
.CONTAINER2 {
  text-align: left;
}
.container button {
  border-radius: 30px;
  background-color: rgb(38, 127, 243);
  color: white;
  font-size: 1.3cap;
  padding: 20px 20px;
}
#token {
  width: 120%;
  height: 150px;
}
</style>