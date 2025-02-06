const themeToggle = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');

// Función para actualizar el color de las partículas
function updateParticlesColor(color) {
  const particles = window.pJSDom[0].pJS; // Acceder a la instancia de partículas
  if (particles) {
    particles.particles.color.value = color;
    particles.particles.line_linked.color = color;
    particles.fn.particlesRefresh(); // Refrescar las partículas para aplicar los cambios
  }
}

themeToggle.addEventListener('click', () => {
  // Cambiar el tema
  document.body.classList.toggle('dark-mode');
  
  // Mostrar/ocultar los íconos de sol y luna
  if (document.body.classList.contains('dark-mode')) {
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'inline';
    updateParticlesColor("#ffffff"); // Cambiar a blanco en modo oscuro
  } else {
    sunIcon.style.display = 'inline';
    moonIcon.style.display = 'none';
    updateParticlesColor("#000000"); // Cambiar a negro en modo claro
  }
});


particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 50,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#000000" // Color inicial en modo claro
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#000000", // Color inicial en modo claro
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2, // Velocidad más lenta
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
 "interactivity": {
  "detect_on": "window", 
  "events": {
    "onhover": {
      "enable": true,
      "mode": "repulse"
    },
    "onclick": {
      "enable": true,
      "mode": "push"
    }
  },
  "modes": {
    "repulse": {
      "distance": 100, 
      "duration": 0.4
    }
  },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 100, // Distancia de repulsión (ajusta este valor)
        "duration": 0.4, // Duración de la repulsión
        "speed": 1 // Velocidad de la repulsión
      },
      "push": {
        "particles_nb": 4 // Número de partículas al hacer clic
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});