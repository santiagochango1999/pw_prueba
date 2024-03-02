import axios from "axios";

//tener dos funciones  una de logica y otra como fachada para poder exportarla

const consultarEstudiante = async (id) => {
    // axios tiene incluido implicitamente el await no hace falta declararlo
    const data = axios.get(`http://localhost:8080/API/v1.0/Inscripcion/estudiantes`).then(r => r.data);
    console.log("DATOS: " + data);
    return data;
}

const insertarEstudiante = async (body) => {
    //then es para respuestas
    const data = axios.post("http://localhost:8080/API/v1.0/Inscripcion/estudiantes", body).then(r => r.data);
    console.log(data);
}

export const consultarEstudianteFachada = async (id) => {
    return await consultarEstudiante(id);
}
export const insertarEstudianteFachada = async (body) => {
    await insertarEstudiante(body);
}
