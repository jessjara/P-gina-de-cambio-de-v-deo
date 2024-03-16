let number = 0;
let data = [];
const button = document.getElementById('btn');
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const videoArea = document.getElementById("video");



function getData() {
    $.ajax("ajax.json", {
        type: "GET",
        success: function (datos) {
            data = datos
        },
        error: function () {
            alert("Hubo un problema con la carga de datos...")
        }
    })

}

function changeVideo() {
    if (data.length == 0) {
        console.log('cargando datos...')
        getData()
    }

    button.addEventListener("click", function () {
        console.log('Cambio de datos')
        titleArea.innerHTML = data[number].title
        contentArea.innerHTML = data[number].content
        videoArea.setAttribute("src", data[number].url)
        number ==2? number = 0: number++
    })

}


window.onload = changeVideo;
