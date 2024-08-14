//Contantes
const materiasPorCiclo = {
    4: [
        {
            nombreMateria: "Psiología del Trabajo",
            linkDrive: "https://drive.google.com/drive/folders/1tOP0F2FbdOiKmUbypnWoQS-eDQjcVRv0?usp=sharing",
            linkMeet: "https://meet.google.com/dsj-krgo-eeh",
            linkImagen: "psicologia_trabajo.png",
            grupoTeorico: "gt01",
            codigoMateria: "ptr",
            carnets: [
                'ac12066', 'ab23007', 'br23021', 'bl23018', 'cm23137', 'cg23016', 'cl22006',
                'dp21008', 'dg22023', 'dd23010', 'fc16004', 'gg14054', 'ga22038', 'gm22043',
                'ia22001', 'ic23005', 'lr20029', 'mg23117', 'mm18021', 'mr22142', 'ms23056',
                'ms19059', 'mc23152', 'mm19240', 'mc22069', 'mf23004', 'nm23016', 'pl23022',
                'pf23019', 'ph23011', 'pc12028', 'qc23006', 'rc23104', 're20005', 'rj23001',
                'rs13036', 'rp23005', 'rf23006', 'rh23003', 'rr23027', 'rl15028', 'sb14009',
                'sr23002', 'tf23002', 'um22006', 've20008', 'vt21004', 'vl23003'
            ],
        },
        {
            nombreMateria: "Programación Orientada a Objetos",
            linkDrive: "https://drive.google.com/drive/folders/1h1VUtZEdCBjk2UtB_XyyYyD8A71FD0On?usp=drive_link",
            linkMeet: "https://meet.google.com/zyp-nbdy-xfj",
            linkImagen: "poo.png",
            grupoTeorico: "gt01",
            codigoMateria: "poo",
            carnets: [
                'ac12066', 'ab23007', 'ba22004', 'bm16036', 'cg22079', 'ca07001', 'ca21062',
                'cs23022', 'cl22006', 'cz23002', 'cg21038', 'dm23004', 'em15008', 'fc16004',
                'gg14054', 'ga22038', 'gg18092', 'gz22006', 'gf12016', 'gf16017', 'ha23039',
                'ha23040', 'hg22017', 'hh22038', 'hp13008', 'hp23005', 'hq22004', 'ic22003',
                'ic23005', 'lp21019', 'mr22142', 'mm23001', 'ms19059', 'mm22090', 'os23002',
                'qc23006', 'rc23104', 're20005', 'rg22059', 'rf23006', 'rh16042', 'rh23003',
                'sg23001', 'sl21010', 'sb14009', 'sr23002', 'tv22002', 'um22006', 'vl23003',
                'vl16008', 'zc99001'
            ],
        },
        {
            nombreMateria: "Lógica y Diseño Digital",
            linkDrive: "https://drive.google.com/drive/folders/1Z0rbz_ARgiwnoL3hHnbVZ0LvCU6b4M82",
            linkMeet: "https://meet.google.com/yed-acga-gyp",
            linkImagen: "logica_disenio_digital.png",
            grupoTeorico: "gt01",
            codigoMateria: "ldd",
            carnets: [
                'am19116', 'aa06124', 'bl23018', 'bm16036', 'cg22079', 'ca07001', 'ca21062',
                'cs23022', 'cl22006', 'cr11019', 'ch21024', 'cg21038', 'dm23004', 'dd21006',
                'fl18001', 'gg14054', 'ga22038', 'gz22006', 'gf12016', 'ha23039', 'ha23040',
                'hs23005', 'ha22026', 'ic22003', 'ic23005', 'lp21019', 'md23005', 'mm18021',
                'mg21069', 'mc23015', 'mc23152', 'mm23084', 'ma12106', 'os23002', 'pl23022',
                'rg22059', 'rh16042', 'rh23003', 'rl15028', 'sg23001', 'se21003', 'sl21010',
                'sr22025', 'sr23002', 'sf10020', 'tv22002', 'zc99001'
            ],
        },
        {
            nombreMateria: "Lógica y Diseño Digital",
            linkDrive: "https://drive.google.com/drive/folders/16EmO6LYBm1q4xK_QHYJVvdf5nsAhU4A_",
            linkMeet: "https://meet.google.com/gng-wutz-dxd",
            linkImagen: "logica_disenio_digital.png",
            grupoTeorico: "gt03",
            codigoMateria: "ldd",
            carnets: [
                'af97011', 'ac12066', 'ab23007', 'br23021', 'cm23137', 'cb11002', 'cz23002',
                'dp21008', 'dg22023', 'dd23010', 'ff21003', 'ff23004', 'gb22003', 'gc23100',
                'gg18092', 'gg16061', 'hp13008', 'hp23005', 'hq22004', 'ia22001', 'jc21002',
                'lr20029', 'lr22016', 'mv23006', 'mg23117', 'mr22142', 'mm21098', 'ms19059',
                'mm22090', 'nm23016', 'pf23019', 'ph23011', 'pt92002', 'pg22040', 'pa23013',
                'qc23006', 'rc23104', 'rj23001', 'rs13036', 'rp23005', 'rf23006', 'rr23027',
                'sb14009', 'sc19013', 'sh22014', 'um22006', 'vh15010', 'vr22001', 'vl16008'
            ],
        },
        {
            nombreMateria: "Introducción al Software Libre",
            linkDrive: "https://drive.google.com/drive/folders/1p1nBLwHIOtOGNJ2-4no6Wwq3VDhOS4Kd?usp=sharing",
            linkMeet: "https://meet.google.com/efr-bxzq-khk",
            linkImagen: "intro_software_libre.png",
            grupoTeorico: "gt03",
            codigoMateria: "isl",
            carnets: [
                'ac12066', 'br10022', 'bm16036', 'ca21118', 'ca07001', 'ca21062', 'cs23022',
                'cm23003', 'cb11002', 'dp21008', 'em15008', 'ff21003', 'gg14054', 'ga22038',
                'gl10025', 'gl23032', 'gg16061', 'gf12016', 'gf16017', 'hp13008', 'hq22004',
                'ic23005', 'la17014', 'lr20029', 'mg23117', 'mf23004', 'os23002', 'ph23011',
                'pj23001', 'pl21026', 'rg22059', 'rp23005', 'rz23001', 'sg23001', 'se21003',
                'sb14009', 'sr23002', 'sf10020', 'tv22002', 'um22006', 'vh15010', 'vl16008'
            ],
        },
        {
            nombreMateria: "Introducción al Software Libre",
            linkDrive: "https://drive.google.com/drive/folders/1N_ES6LUNp37RHiynIoGN7BSPBLcGvgXb?usp=sharing",
            linkMeet: "https://meet.google.com/wco-behc-bbn",
            linkImagen: "intro_software_libre.png",
            grupoTeorico: "gt02",
            codigoMateria: "isl",
            carnets: [
                'aj23001', 'av23037', 'aj22005', 'br23021', 'cz23002', 'cg19057', 'ff23004',
                'gg23009', 'gm22106', 'gc23100', 'ha23040', 'lr22016', 'mp23069', 'md23005',
                'mt06017', 'mr22142', 'ms19059', 'mm19240', 'mp23093', 'nm23016', 'pf23019',
                'pt92002', 'pc12028', 'pa23013', 'qc23006', 'rc23104', 'rl22020', 'rf23006',
                'tz23003', 've20008', 'vl23003', 'vh22014', 'zc99001'
            ],
        },
        {
            nombreMateria: "Administración de Bases de Datos",
            linkDrive: "https://drive.google.com/drive/folders/1Q1aHoJUXx8LIpiTm0Sd23iYw-lkb8Vmj?usp=drive_link",
            linkMeet: "https://meet.google.com/haa-bdko-eet",
            linkImagen: "admon_bases_datos.png",
            grupoTeorico: "gt01",
            codigoMateria: "abd",
            carnets: [
                'aa06124', 'cl22006', 'cg19057', 'dd21006', 'gg14054', 'ga22038', 'ha23040',
                'hc21030', 'hs23005', 'ic23005', 'md23005', 'ms23056', 'mr23013', 'mo23002',
                'mm19240', 'mm23084', 'mp23093', 'pt92002', 'pj23001', 'pa23013', 'rg22059',
                'rh16042', 'rh23003', 'sg23001', 'sr23008', 'sr23002', 'sf10020', 'vt21004',
                'zc99001'
            ],
        },
        {
            nombreMateria: "Administración de Bases de Datos",
            linkDrive: "https://drive.google.com/drive/folders/1ucWHqqZJx4I37Bpp8byCZHLS2i6A1Aug?usp=sharing",
            linkMeet: "https://meet.google.com/bgt-muxk-ejw",
            linkImagen: "admon_bases_datos.png",
            grupoTeorico: "gt03",
            codigoMateria: "abd",
            carnets: [
                'ac12066', 'ab23007', 'ba22004', 'br23021', 'bl23018', 'cm23137', 'cg23016',
                'cz23002', 'dp21008', 'dg22023', 'dm23004', 'fc16004', 'hp23005', 'hq22004',
                'ia22001', 'la17014', 'lr20029', 'mg23117', 'mr22142', 'mg16068', 'mc23015',
                'mc23152', 'mc22069', 'mm22090', 'nm23016', 'pl23022', 'pf23019', 'ph23011',
                'pc12028', 'pg22040', 'qc23006', 'rc23104', 'rj23001', 'rs13036', 'rp23005',
                'rg20063', 'rf23006', 'rr23027', 'sb14009', 've20008', 'vm19071', 'vl23003'
            ],
        },
    ],
}
const ciclo = 4;

//Controles HTML
const cicloSelect = document.getElementById("ciclo_actual");
const contenedorMaterias = document.getElementById("ids-materias-container");
const carnetInput = document.getElementById("carnet");
const formularioCarnet = document.getElementById("frm-buscar-carnet");
const contenedorFormulario = document.getElementById("ids-form-carnet");
const selectCiclo = document.getElementById("select-ciclo");
const encabezado = document.getElementById("ids-encabezado");

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
    cardTitle.innerHTML = `<p>${materia.nombreMateria}</p><p>${materia.grupoTeorico.toUpperCase()}</p>`;

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


// Buscar carnet en la lista de carnets de las materias, y mostrar todas las materias a las que tiene acceso
formularioCarnet.addEventListener("submit", (event) => {
    event.preventDefault();
    const carnet = carnetInput.value.toLowerCase();
    const cicloSeleccionado = selectCiclo.value;
    encabezado.innerText = `Materias del ciclo ${cicloSeleccionado}`;
    contenedorMaterias.innerHTML = "";

    // Validar que haya materias en el ciclo seleccionado

    if (materiasPorCiclo[cicloSeleccionado]) {

        for (const materia of materiasPorCiclo[cicloSeleccionado]) {
            console.log(materia);
            if (materia.carnets.includes(carnet)) {
                const card = crearTarjetaMateria(materia);
                contenedorMaterias.appendChild(card);
                contenedorFormulario.classList.add("hidden");
            } else {
                console.log('no');
                console.log(typeof carnet);
            }
        }

    } else {
        console.log('no hay materias');
        alert("No hay materias en el ciclo seleccionado");
    }
});



