
const parede = document.querySelector(".container-moldura");
document.addEventListener("DOMContentLoaded", function () {
    console.clear()
    console.log("DOM fully loaded and parsed");
     getCertificados("./data/list.json","molduras")
     getCertificados("./data/list.json","Curso em Video")
     getCertificados("./data/list.json","Proa")
});


function getCertificados(banco,tabela) {
    try {

        fetch(banco)
            .then((response) => response.json())
            .then(data => {
                console.log(data[tabela])
                carregarCertificados(data[tabela])
            })


    } catch (error) {
        console.error(error)
    }

}
   

function carregarCertificados(cursos) {
    console.log(cursos)
    const data = cursos.map((curso) => {
        console.log(curso)
        const moldura = document.createElement("div")
        const certificado = document.createElement("div");
        moldura.classList.add("col")
        moldura.classList.add("moldura")
        certificado.classList.add("certificado")
        certificado.style.backgroundImage = `url(${curso.img})`
        certificado.innerHTML = `
        
        <h4>${curso.titulo}</h4>
        <p class="instituicao">${curso.instituicao}</p>
        <p class="data">${curso.data}</p>
        
        `
        moldura.append(certificado)
        parede.append(moldura);
        
})
}

