const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', function(e) {

    e.preventDefault();

    const numero1 = parseFloat(document.querySelector('#numero1').value);

    const numero2 = parseFloat(document.querySelector('#numero2').value);

    const resultado = document.querySelector('#resultado');

    resultado.innerHTML = "";

    const operaciones = [

        {
            nombre: "SUMA",
            valor: numero1 + numero2
        },

        {
            nombre: "RESTA",
            valor: numero1 - numero2
        },

        {
            nombre: "MULTIPLICACIÓN",
            valor: numero1 * numero2
        },

        {
            nombre: "DIVISIÓN",
            valor: numero1 / numero2
        },

        {
            nombre: "MÓDULO (%)",
            valor: numero1 % numero2
        }

    ];

    for(let i = 0; i < operaciones.length; i++) {

        setTimeout(() => {

            resultado.innerHTML += `

                <div class="resultado-item">

                    <strong>Iteración ${i + 1}</strong><br>

                    ${operaciones[i].nombre}: 
                    ${operaciones[i].valor}

                </div>

            `;

        }, i * 1000);

    }

});