document.addEventListener('DOMContentLoaded', () => {
    const nombreParticipanteInput = document.getElementById('nombreParticipante');
    const agregarParticipanteBtn = document.getElementById('agregarParticipante');
    const participantesUl = document.getElementById('participantes-ul');
    const iniciarSorteoBtn = document.getElementById('iniciarSorteo');
    const resultadoDiv = document.getElementById('resultado');
    const resultadosUl = document.getElementById('resultados-ul');
    const reiniciarSorteoBtn = document.getElementById('reiniciarSorteo');

    let participantes = [];

    const actualizarListaParticipantes = () => {
        participantesUl.innerHTML = '';
        participantes.forEach((participante, index) => {
            const li = document.createElement('li');
            li.textContent = participante;
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'X';
            deleteBtn.classList.add('delete-btn');
            deleteBtn.addEventListener('click', () => {
                participantes.splice(index, 1);
                actualizarListaParticipantes();
            });
            li.appendChild(deleteBtn);
            participantesUl.appendChild(li);
        });
        iniciarSorteoBtn.disabled = participantes.length < 2;
    };

    const agregarParticipante = () => {
        const nombre = nombreParticipanteInput.value.trim();
        if (nombre && !participantes.includes(nombre)) {
            participantes.push(nombre);
            nombreParticipanteInput.value = '';
            actualizarListaParticipantes();
        } else if (participantes.includes(nombre)) {
            alert('Este participante ya ha sido agregado.');
        }
    };

    agregarParticipanteBtn.addEventListener('click', agregarParticipante);
    nombreParticipanteInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            agregarParticipante();
        }
    });

    const realizarSorteo = () => {
        const givers = [...participantes];
        let receivers = [...participantes];
        
        let sorteoResultados = [];
        let intentos = 0;
        const maxIntentos = 1000; 

        while (givers.length > 0 && intentos < maxIntentos) {
            intentos++;
            const giverIndex = Math.floor(Math.random() * givers.length);
            const giver = givers[giverIndex];
            const posiblesReceivers = receivers.filter(receiver => receiver !== giver);

            if (posiblesReceivers.length === 0) {
                console.warn(`No hay receptores posibles para ${giver}. Reiniciando intento de sorteo...`);
                sorteoResultados = [];
                givers = [...participantes];
                receivers = [...participantes];
                intentos = 0; 
                continue; 
            }

            const receiverIndex = Math.floor(Math.random() * posiblesReceivers.length);
            const receiver = posiblesReceivers[receiverIndex];

            sorteoResultados.push({ giver: giver, receiver: receiver });

            givers.splice(giverIndex, 1);
            const receiverOriginalIndex = receivers.indexOf(receiver);
            if (receiverOriginalIndex > -1) {
                receivers.splice(receiverOriginalIndex, 1);
            }
        }

        if (sorteoResultados.length !== participantes.length) {
            console.error("No se pudo completar el sorteo correctamente. Reintentando...");
            return realizarSorteo(); 
        }

        mostrarResultados(sorteoResultados);
    };

    const mostrarResultados = (resultados) => {
        resultadosUl.innerHTML = '';
        resultados.forEach(res => {
            const li = document.createElement('li');
            li.textContent = `${res.giver} regala a ${res.receiver}`;
            resultadosUl.appendChild(li);
        });
        resultadoDiv.classList.remove('hidden');
        iniciarSorteoBtn.disabled = true; 
        agregarParticipanteBtn.disabled = true;
        nombreParticipanteInput.disabled = true;
    };

    iniciarSorteoBtn.addEventListener('click', realizarSorteo);

    reiniciarSorteoBtn.addEventListener('click', () => {
        participantes = [];
        actualizarListaParticipantes();
        resultadoDiv.classList.add('hidden');
        iniciarSorteoBtn.disabled = true;
        agregarParticipanteBtn.disabled = false;
        nombreParticipanteInput.disabled = false;
        nombreParticipanteInput.value = ''; 
    });

    actualizarListaParticipantes(); 
});