<template>
  <div class="container">
    <div class="consulta"></div>
    <div class="tablah">
      <table>
        <tr>
          <td>Id</td>
          <td>Nombre</td>
          <td>Apellido</td>
          <td>Cedula</td>
        </tr>

        <tr v-for="dato in datos" :key="dato.id">
          <td>{{ dato.id }}</td>
          <td>{{ dato.nombre }}</td>
          <td>{{ dato.apellido }}</td>
          <td>{{ dato.cedula }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { consultarEstudianteFachada } from "../helpers/clienteestudiante";
export default {
  data() {
    return {
      datos: null,
    };
  },
  methods: {
    async consultar() {
      this.datos = await consultarEstudianteFachada();
    },
  },
  created() {
    this.consultar();
  },
};
</script>
<style scoped>


.consulta {
  font-size: 30px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 300;
  text-align: center;
  margin-bottom: 15px;
}
table {
  margin: 0px 20px;
  border: solid;
  width: 200%;
  background: black;
   margin-left: -40%;
  margin-right: -40%;

}
.tablac {
  height: 200px;
  overflow-x: auto;
  margin-top: 0px;
  border: 1px solid rgba(255, 255, 255, 0.3);
}
th {
  padding: 20px 15px;
  text-align: left;
  font-weight: 500;
  font-size: 12px;
  color: #fff;
  text-transform: uppercase;
}
td {
  padding: 15px;
  text-align: left;
  vertical-align: middle;
  font-weight: 300;
  font-size: 12px;
  color: #fff;
  border-bottom: solid 1px rgba(255, 255, 255, 0.1);
}
body {
  font-family: "Roboto", sans-serif;
}
</style>