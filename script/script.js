let cursos;
const objCurso = {
    titulo: "",
    instituicao: "",
    data: ""
}
const parede = document.querySelector(".container-moldura");
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");
    getCertificados();
});

async function getCertificados() {
    try {
        const dados = fetch("../data/list.json")
            .then(response => response.json())
            .then(data => {
                cursos = data.moldura;


            })
            .catch(error => console.error(error));


    }
    catch (error) {
        console.log(error)
    }
}
function carregarCertificados() {
    console.log(cursos)
    const data = cursos.map((curso) => {
        console.log(curso)
        const moldura = document.createElement("div");
        moldura.classList.add("col")
        moldura.classList.add("moldura")
        moldura.innerHTML = `
   <div class="certificado">
                    <h4>${curso.titulo}</h4>
                    <p class="instituicao">${curso.instituicao}</p>
                    <p class="data">${curso.data}</p>
                </div>
`
        parede.append(moldura);
        console.log(data)
    });
}

