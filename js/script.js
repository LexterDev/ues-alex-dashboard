//Contantes
const materiasPorCiclo = {
    4: [
        {
            nombreMateria: "Psiología del Trabajo",
            linkDrive: "https://drive.google.com/drive/folders/1tOP0F2FbdOiKmUbypnWoQS-eDQjcVRv0?usp=sharing",
            linkMeet: "https://meet.google.com/dsj-krgo-eeh",
            linkImagen: "psicologia_trabajo.png",
        },
        {
            nombreMateria: "Programación Orientada a Objetos",
            linkDrive: "https://drive.google.com/drive/folders/1h1VUtZEdCBjk2UtB_XyyYyD8A71FD0On?usp=drive_link",
            linkMeet: "https://meet.google.com/zyp-nbdy-xfj",
            linkImagen: "poo.png",
        },
        {
            nombreMateria: "Lógica y Diseño Digital",
            linkDrive: "https://drive.google.com/drive/folders/1Z0rbz_ARgiwnoL3hHnbVZ0LvCU6b4M82",
            linkMeet: "https://meet.google.com/yed-acga-gyp",
            linkImagen: "logica_disenio_digital.png",
        },
        {
            nombreMateria: "Introducción al Software Libre",
            linkDrive: "https://drive.google.com/drive/folders/1p1nBLwHIOtOGNJ2-4no6Wwq3VDhOS4Kd?usp=sharing",
            linkMeet: "https://meet.google.com/efr-bxzq-khk",
            linkImagen: "intro_software_libre.png",
        },
        {
            nombreMateria: "Administración de Bases de Datos",
            linkDrive: "https://drive.google.com/drive/folders/1Q1aHoJUXx8LIpiTm0Sd23iYw-lkb8Vmj?usp=drive_link",
            linkMeet: "https://meet.google.com/haa-bdko-eet",
            linkImagen: "admon_bases_datos.png",
        }
    ],
}

//Controles HTML
const cicloSelect = document.getElementById("ciclo_actual");
const contenedorMaterias = document.getElementById("ids-materias-container");

//Funcion para crear una tarjeta por materia
function crearTarjetaMateria(materia) {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardImage = document.createElement("div");
    cardImage.classList.add("card__image");

    const image = document.createElement("img");
    image.src = `./img/${materia.linkImagen}`;
    image.alt = materia.nombreMateria;

    cardImage.appendChild(image);

    const cardTitle = document.createElement("div");
    cardTitle.classList.add("card__title");
    cardTitle.textContent = materia.nombreMateria;

    const cardContent = document.createElement("div");
    cardContent.classList.add("card__content");

    const linkMeet = document.createElement("a");
    linkMeet.href = materia.linkMeet;
    linkMeet.target = "_blank";
    linkMeet.classList.add("card__button");
    linkMeet.innerHTML = `<i class="fa-solid fa-comments"></i>Google Meet`;

    const linkDrive = document.createElement("a");
    linkDrive.href = materia.linkDrive;
    linkDrive.target = "_blank";
    linkDrive.classList.add("card__button");
    linkDrive.innerHTML = `<i class="fa-solid fa-hard-drive"></i>Google Drive`;

    cardContent.appendChild(linkMeet);
    cardContent.appendChild(linkDrive);

    card.appendChild(cardImage);
    card.appendChild(cardTitle);
    card.appendChild(cardContent);

    return card;
}

// Filtrar materias por ciclo
cicloSelect.addEventListener("change", (event) => {
    const ciclo = event.target.value;
    contenedorMaterias.innerHTML = "";

    // validar si el ciclo seleccionado tiene materias
    if (!materiasPorCiclo[ciclo]) {
        alert("No hay materias para este ciclo");
        return;
    }

    materiasPorCiclo[ciclo].forEach((materia) => {
        const card = crearTarjetaMateria(materia);
        contenedorMaterias.appendChild(card);
    });
});

// Ciclo por defecto al cargar la página: 4
cicloSelect.value = 4;
cicloSelect.dispatchEvent(new Event("change"));