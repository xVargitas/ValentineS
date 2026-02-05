const inicio = new Date("2026-02-01");
const hoy = new Date();

const dias = Math.floor((hoy - inicio) / (1000 * 60 * 60 * 24)) + 1;

const ramo = document.getElementById("ramo");
const boton = document.getElementById("botonSorpresa");

// Máximo 12 flores
const floresMostrar = Math.min(dias, 12);

for (let i = 0; i < floresMostrar; i++) {
    const flor = document.createElement("div");
    flor.className = "flor";

    flor.style.height = 90 + i * 5 + "px"; // alturas distintas
    flor.style.transform += ` rotate(${(i - floresMostrar / 2) * 6}deg)`;

    ramo.appendChild(flor);
}

if (dias >= 13) {
    boton.style.display = "block";
    boton.onclick = () => {
        document.body.classList.add("fade-out");

        setTimeout(() => {
            window.location.href = "regalo.html";
        }, 1000);
    };
}

const mensajes = [
    "Hoy nace la primera flor 🌷 porque pensar en ti me hace sonreír.",
    "Segunda flor 🌷 porque cada día contigo se siente especial.",
    "Tercera flor 🌷 porque me encanta elegirte.",
    "Cuarta flor 🌷 Porque contigo todo es más bonito.",
    "Quinta flor 🌷 Porque me haces sentir en casa.",
    "Sexta flor 🌷 Porque me haces muy feliz.",
    "Séptima flor 🌷 Porque quiero seguir creando momentos contigo.",
    "Octava flor 🌷 Porque me ilusiona todo lo que viene.",
    "Novena flor 🌷 Porque me inspiras.",
    "Décima flor 🌷 Porque te elijo siempre.",
    "Onceava flor 🌷 Porque eres increíble.",
    "Doceava flor 🌷 Porque este ramo es solo para ti 💖"
];

const mensajeDiario = document.getElementById("mensajeDiario");

if (floresMostrar > 0) {
    mensajeDiario.textContent = mensajes[floresMostrar - 1];
}
const contador = document.getElementById("contador");

if (floresMostrar < 12) {
    const proximoDia = new Date();
    proximoDia.setHours(24, 0, 0, 0); // medianoche del próximo día

    setInterval(() => {
        const ahora = new Date();
        const diff = proximoDia - ahora;

        const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const m = Math.floor((diff / (1000 * 60)) % 60);
        const s = Math.floor((diff / 1000) % 60);

        contador.textContent =
            `La siguiente flor aparece en ${h}h ${m}m ${s}s ⏳`;
    }, 1000);
}
