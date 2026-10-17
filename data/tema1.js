const tema1 = {
  "id": "tema1",
  "tema": "Tema 1 — Tests de entrenamiento",
  "tests": [
    {
      "id": "t1-1",
      "nombre": "Test T1.1 - Fundamentos y redes",
      "preguntas": [
        {
          "question": "¿Qué elemento del modelo de comunicación transforma la información de la fuente en una señal apta para su transmisión?",
          "answers": [
            "Receptor",
            "Transmisor",
            "Destino",
            "Sistema de transmisión"
          ],
          "correct": 1
        },
        {
          "question": "¿Cuál de las siguientes es una tarea fundamental de la comunicación de datos?",
          "answers": [
            "Evitar cualquier necesidad de sincronización",
            "Eliminar el formato de los mensajes",
            "Detectar y corregir errores",
            "Prescindir del control de flujo"
          ],
          "correct": 2
        },
        {
          "question": "En conmutación de circuitos, ¿qué se establece durante toda la comunicación?",
          "answers": [
            "Un circuito dedicado",
            "Una ruta independiente para cada paquete",
            "Un canal compartido sin reserva",
            "Una trama de difusión"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué red se presenta en los apuntes como ejemplo clásico de conmutación de circuitos?",
          "answers": [
            "Internet IP",
            "Ethernet",
            "Red telefónica",
            "Red Wi-Fi"
          ],
          "correct": 2
        },
        {
          "question": "En una red de conmutación de paquetes, ¿qué puede ocurrir en un mismo enlace?",
          "answers": [
            "Solo circulan datos de un único origen",
            "Se intercalan paquetes de distintas comunicaciones",
            "Debe reservarse siempre un circuito exclusivo",
            "Los paquetes no pasan por nodos intermedios"
          ],
          "correct": 1
        },
        {
          "question": "¿Cuál es el enfoque utilizado por la mayoría de redes de comunicación de datos, según los apuntes?",
          "answers": [
            "Conmutación de circuitos",
            "Transmisión exclusivamente analógica",
            "Conmutación de paquetes",
            "Conexión dedicada permanente"
          ],
          "correct": 2
        },
        {
          "question": "En conmutación de paquetes por circuito virtual, ¿cómo circulan los paquetes de una misma comunicación?",
          "answers": [
            "Cada uno elige una ruta sin relación con los anteriores",
            "Todos siguen la ruta establecida para esa comunicación",
            "Solo se transmiten por difusión",
            "Nunca atraviesan routers"
          ],
          "correct": 1
        },
        {
          "question": "¿Cuál es el orden de etapas de un circuito virtual descrito en el tema?",
          "answers": [
            "Datos, cierre, establecimiento",
            "Cierre, establecimiento, datos",
            "Establecimiento, transmisión, cierre",
            "Transmisión, establecimiento, cierre"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué ocurre en la fase de cierre de un circuito virtual?",
          "answers": [
            "Se libera la reserva de recursos",
            "Se fija la ruta por primera vez",
            "Se generan los datos del usuario",
            "Se convierte en una red LAN"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué tecnología se cita como ejemplo de conmutación de paquetes en modo circuito virtual?",
          "answers": [
            "IP",
            "ATM",
            "10BASE-T",
            "UTP"
          ],
          "correct": 1
        },
        {
          "question": "En el modo datagrama, ¿cómo se encamina cada paquete?",
          "answers": [
            "Independientemente de los demás",
            "Solo tras establecer un circuito físico",
            "Siempre por la ruta del primer paquete",
            "Sin usar nodos de red"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué protocolo se utiliza en los apuntes como ejemplo del modo datagrama?",
          "answers": [
            "ATM",
            "SONET",
            "IP",
            "STP"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué caracteriza a un enlace de difusión?",
          "answers": [
            "Conexiones exclusivas entre cada par de nodos",
            "Un único canal compartido por varias máquinas",
            "Ausencia de dirección de destino",
            "Una ruta fija por circuito virtual"
          ],
          "correct": 1
        },
        {
          "question": "En una red de difusión, ¿cómo identifica una estación que un paquete va dirigido a ella?",
          "answers": [
            "Por el campo de dirección de destino",
            "Por el número de saltos del circuito",
            "Por la longitud física del cable",
            "Por la potencia de la antena"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué caracteriza a los enlaces punto a punto?",
          "answers": [
            "Un solo canal común a todas las estaciones",
            "Conexiones individuales entre pares de máquinas",
            "Recepción obligatoria de todas las tramas por todos los nodos",
            "Uso exclusivo de redes PAN"
          ],
          "correct": 1
        },
        {
          "question": "¿Cuál de estas clasificaciones se basa en la extensión geográfica?",
          "answers": [
            "PAN, LAN, MAN y WAN",
            "Bus, anillo y estrella",
            "UTP, STP y coaxial",
            "Circuito virtual y datagrama"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué tipo de red abarca normalmente una gran área geográfica, del orden de cientos o miles de kilómetros?",
          "answers": [
            "PAN",
            "LAN",
            "WAN",
            "Red de área personal"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué categoría de red se asocia en los apuntes a una ciudad y a despliegues de fibra FTTH?",
          "answers": [
            "PAN",
            "MAN",
            "LAN exclusivamente",
            "Red punto a punto"
          ],
          "correct": 1
        },
        {
          "question": "¿Cuál es una característica habitual de una LAN según los apuntes?",
          "answers": [
            "Extensión planetaria",
            "Propiedad privada y alta velocidad",
            "Uso exclusivo de satélites",
            "Siempre enlaces de miles de kilómetros"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué describe la topología de una red?",
          "answers": [
            "La estructura de interconexión de sus elementos",
            "La versión de IP instalada",
            "El contenido de los paquetes",
            "La política de contraseñas"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué distinción de topologías aparece expresamente en el tema?",
          "answers": [
            "Interna y externa",
            "Digital y analógica",
            "Física y lógica",
            "Privada y pública"
          ],
          "correct": 2
        },
        {
          "question": "¿Cuál de estas es una topología de red mostrada en los apuntes?",
          "answers": [
            "Estrella",
            "Datagrama",
            "Fibra monomodo",
            "Circuito virtual"
          ],
          "correct": 0
        },
        {
          "question": "¿Cuál de los siguientes es un medio de transmisión guiado?",
          "answers": [
            "Ondas de radio en el aire",
            "Cable de par trenzado",
            "Enlace inalámbrico por antena",
            "Radiación electromagnética libre"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué medio de transmisión se considera no guiado?",
          "answers": [
            "Fibra óptica",
            "Cable coaxial",
            "Par trenzado",
            "Comunicación inalámbrica por antena"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué dos variantes de par trenzado se citan en el tema?",
          "answers": [
            "LAN y WAN",
            "UTP y STP",
            "ATM e IP",
            "MAN y PAN"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué efecto tiene el trenzado de los conductores en un cable de par trenzado?",
          "answers": [
            "Mejora la inmunidad frente a interferencias",
            "Convierte el cable en fibra óptica",
            "Elimina la necesidad de señales",
            "Impide toda transmisión de datos"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué característica destaca el tema de la fibra óptica?",
          "answers": [
            "Gran sensibilidad a interferencias electromagnéticas",
            "Solo sirve para distancias de centímetros",
            "Inmunidad a interferencias electromagnéticas",
            "Transmite por corriente eléctrica en cobre"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué elementos intervienen en una transmisión inalámbrica según los apuntes?",
          "answers": [
            "Antenas",
            "Únicamente cable coaxial",
            "Conectores RJ45 obligatorios",
            "Circuitos dedicados de cobre"
          ],
          "correct": 0
        },
        {
          "question": "Según el tema, ¿qué es un protocolo de comunicación?",
          "answers": [
            "Un tipo de topología física",
            "Un conjunto de reglas que gobiernan el intercambio de datos",
            "Un medio guiado de transmisión",
            "Un dispositivo que amplifica señales"
          ],
          "correct": 1
        },
        {
          "question": "¿Cuáles son las tres características de un protocolo destacadas en los apuntes?",
          "answers": [
            "Sintaxis, semántica y temporización",
            "Potencia, alcance y longitud",
            "Bus, anillo y estrella",
            "Circuitos, tramas y antenas"
          ],
          "correct": 0
        }
      ]
    }
  ]
};
