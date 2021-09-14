
particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 300,
        "density": {
          "enable": true,
          "value_area": 1500
        }
      },
      "color": {
        // "value": "#1C1C1C"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0.5,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 10
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 0.2,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 4,
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
        "distance": 100,
        "color": "#4070F4",
        "opacity": 0.9,
        "width": 1,
      },
      "move": {
        "enable": true,
        "speed": 5,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "bounce",
        "attract": {
          "enable": true,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab",
          "distance":10
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 150,
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
          "distance": 20
        },
        "push": {
          "particles_nb": 5
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 5%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);

// setup over-drawing
const ctx = document.querySelector('#particles-js > canvas').getContext('2d');
let grad;
onresize();
addEventListener('resize', onresize);

function onresize() {
  grad= ctx.createLinearGradient(50,50,ctx.canvas.width,0);
  grad.addColorStop(0,'#4070F4');
  grad.addColorStop(1,'#60C8A2');
}

// must be ran after Particles.js' own anim loop has began
// se we are always pushed after their drawings
requestAnimationFrame( anim );
function anim() {
  ctx.fillStyle = grad;
  ctx.globalCompositeOperation = "source-atop";
  ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height);
  ctx.globalCompositeOperation = "source-over";
  requestAnimationFrame( anim );
}