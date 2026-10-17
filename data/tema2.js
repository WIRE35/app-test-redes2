const tema2 = {
  "id": "tema2",
  "tema": "Tema 2 — Tests de entrenamiento",
  "tests": [
    {
      "id": "t2-1",
      "nombre": "Test T2.1 - Subcapa MAC y acceso al medio",
      "preguntas": [
        {
          "question": "¿En qué capa del modelo OSI se sitúa la subcapa de control de acceso al medio (MAC)?",
          "answers": [
            "Física",
            "Enlace de datos",
            "Red",
            "Transporte"
          ],
          "correct": 1
        },
        {
          "question": "¿Cuáles son los dos tipos de enlaces de red que distinguen los apuntes?",
          "answers": [
            "Dedicados y virtuales",
            "Locales y remotos",
            "Difusión y punto a punto",
            "Analógicos y digitales"
          ],
          "correct": 2
        },
        {
          "question": "¿En qué ámbito destaca especialmente la importancia de la subcapa MAC?",
          "answers": [
            "Redes LAN y comunicación inalámbrica",
            "Únicamente redes WAN de fibra",
            "Solo conexiones telefónicas",
            "Exclusivamente aplicaciones web"
          ],
          "correct": 0
        },
        {
          "question": "Según los apuntes, ¿qué tipo de enlaces suelen emplear las WAN, salvo excepciones como los satélites?",
          "answers": [
            "Solo enlaces de difusión",
            "Enlaces punto a punto",
            "Únicamente enlaces de anillo",
            "Canales de radio FM"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué técnicas aparecen como ejemplos de asignación estática del canal?",
          "answers": [
            "CSMA/CD y ALOHA",
            "Paso de testigo y ARP",
            "TDM y FDM",
            "TCP y UDP"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué inconveniente de FDM se destaca cuando existen muchos emisores variables o tráfico a ráfagas?",
          "answers": [
            "Puede resultar poco adecuado para ese patrón de tráfico",
            "No permite dividir frecuencias",
            "Requiere direcciones IP públicas",
            "Impide el uso de enlaces punto a punto"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué supuesto pertenece al modelo de asignación dinámica descrito en los apuntes?",
          "answers": [
            "Cada estación dispone de un canal exclusivo permanente",
            "Existe un único canal compartido",
            "Nunca se producen colisiones",
            "La transmisión siempre usa fibra óptica"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué diferencia entre tiempo continuo y ranurado se contempla en la asignación dinámica?",
          "answers": [
            "El número de capas del modelo OSI",
            "El tamaño de las direcciones MAC",
            "Si las transmisiones pueden comenzar en cualquier instante o solo en intervalos",
            "Si el cable es de cobre o fibra"
          ],
          "correct": 2
        },
        {
          "question": "¿Cuál de los siguientes aparece como protocolo de acceso múltiple en el Tema 2?",
          "answers": [
            "ALOHA",
            "HTTP",
            "DNS",
            "FTP"
          ],
          "correct": 0
        },
        {
          "question": "¿Dónde surgió el sistema ALOHA original según los apuntes?",
          "answers": [
            "En París en 1983",
            "En Hawái en 1970",
            "En California en 1995",
            "En Londres en 1960"
          ],
          "correct": 1
        },
        {
          "question": "¿A quién atribuyen los apuntes el desarrollo de ALOHA junto a sus colaboradores?",
          "answers": [
            "Bob Metcalfe",
            "Robert Kahn",
            "Norman Abramson",
            "David Boggs"
          ],
          "correct": 2
        },
        {
          "question": "¿Cuáles son las dos versiones de ALOHA tratadas en el tema?",
          "answers": [
            "Persistente y no persistente",
            "Clásico y conmutado",
            "Físico y lógico",
            "Puro y ranurado"
          ],
          "correct": 3
        },
        {
          "question": "En ALOHA puro, ¿qué hace una estación cuando tiene una trama lista para enviar?",
          "answers": [
            "La transmite por el canal compartido sin esperar a una ranura fija",
            "Espera obligatoriamente al siguiente intervalo sincronizado",
            "Solicita siempre un testigo",
            "Reserva previamente una frecuencia exclusiva"
          ],
          "correct": 0
        },
        {
          "question": "Si una transmisión de ALOHA puro no tiene éxito, ¿qué comportamiento describen los apuntes?",
          "answers": [
            "Se elimina para siempre la estación",
            "La estación intenta retransmitir la trama",
            "Se cambia automáticamente a TCP",
            "Se desconecta físicamente el canal"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué innovación introduce ALOHA ranurado frente a ALOHA puro?",
          "answers": [
            "El uso exclusivo de fibra óptica",
            "La eliminación de todas las retransmisiones",
            "Dividir el tiempo en intervalos discretos para transmitir",
            "La sustitución de tramas por circuitos"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué requisito es obligatorio en ALOHA ranurado?",
          "answers": [
            "Utilizar direcciones IPv6",
            "Emplear switches gestionables",
            "Desactivar el reloj de las estaciones",
            "Sincronizar los límites de las ranuras"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué efecto atribuyen los apuntes a la propuesta de ALOHA ranurado de Roberts en 1972?",
          "answers": [
            "Duplicar la capacidad respecto a ALOHA puro",
            "Reducir la capacidad a la mitad",
            "Eliminar la necesidad de sincronización",
            "Convertir la red en punto a punto"
          ],
          "correct": 0
        },
        {
          "question": "En ALOHA ranurado, ¿a qué corresponde cada intervalo temporal según los apuntes?",
          "answers": [
            "A una dirección IP",
            "A una trama",
            "A una capa OSI",
            "A una estación permanente"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué función puede cumplir una estación especial en ALOHA ranurado?",
          "answers": [
            "Asignar nombres DNS",
            "Calcular máscaras de subred",
            "Emitir una señal al inicio de cada intervalo",
            "Convertir señales digitales en analógicas"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué significa la detección de portadora en protocolos CSMA?",
          "answers": [
            "Comprobar el contenido de una trama recibida",
            "Reservar una ruta IP",
            "Usar siempre dos canales físicos",
            "Escuchar el canal antes de actuar para transmitir"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué dos variantes de CSMA se citan explícitamente en los apuntes?",
          "answers": [
            "Persistente y no persistente",
            "Puro y ranurado",
            "DIX y 802.3",
            "Estático y conmutado"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué significan las siglas CSMA/CD?",
          "answers": [
            "Control de Sesión y Mensajes de Aplicación con Datos",
            "Acceso múltiple por detección de portadora con detección de colisiones",
            "Conmutación de Señales mediante Asignación de Canales Digitales",
            "Comunicación Simultánea de Máquinas con Control de Destino"
          ],
          "correct": 1
        },
        {
          "question": "¿Con qué tecnología relacionan los apuntes CSMA/CD como base histórica?",
          "answers": [
            "Wi-Fi moderno exclusivamente",
            "Redes de telefonía móvil",
            "Ethernet clásica",
            "Enlaces satelitales de difusión"
          ],
          "correct": 2
        },
        {
          "question": "¿Cómo puede detectar una colisión una estación que utiliza CSMA/CD según los apuntes?",
          "answers": [
            "Consultando un servidor DNS",
            "Contando los routers intermedios",
            "Esperando a que termine el día",
            "Comparando la señal observada con la que está transmitiendo"
          ],
          "correct": 3
        },
        {
          "question": "¿Cuáles son los tres estados de CSMA/CD indicados en el tema?",
          "answers": [
            "Contención, transmisión e inactivo",
            "Enrutamiento, filtrado y cifrado",
            "Petición, resolución y cierre",
            "Difusión, encaminamiento y aplicación"
          ],
          "correct": 0
        },
        {
          "question": "¿En qué fase pueden seguir produciéndose colisiones en CSMA/CD?",
          "answers": [
            "Después de capturar inequívocamente el canal",
            "Durante el período de contienda",
            "Solo tras cerrar la conexión",
            "Únicamente al arrancar un router"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué combinación se señala como desfavorable para el rendimiento de CSMA/CD?",
          "answers": [
            "Cable corto y tramas grandes",
            "Retardo mínimo y ausencia de tráfico",
            "Cable largo, alto retardo de propagación y tramas cortas",
            "Enlace dedicado sin competencia"
          ],
          "correct": 2
        },
        {
          "question": "¿Por qué los protocolos libres de colisiones pueden interesar para aplicaciones en tiempo real?",
          "answers": [
            "Porque obligan a retransmitir continuamente",
            "Porque requieren siempre ALOHA puro",
            "Porque convierten los datos en voz analógica",
            "Porque evitan pérdidas de tiempo asociadas a colisiones"
          ],
          "correct": 3
        },
        {
          "question": "En el protocolo de mapa de bits, ¿cómo anuncia la estación j que tiene una trama pendiente?",
          "answers": [
            "Insertando un bit 1 en su ranura j",
            "Enviando una trama Ethernet completa en todas las ranuras",
            "Emitiendo un testigo a la estación anterior",
            "Reservando una frecuencia FM"
          ],
          "correct": 0
        },
        {
          "question": "En un sistema de paso de testigo, ¿qué permite transmitir a una estación?",
          "answers": [
            "Detectar una dirección IP duplicada",
            "Recibir el testigo según el orden predefinido",
            "Que todas las estaciones transmitan a la vez",
            "Enviar primero una petición HTTP"
          ],
          "correct": 1
        }
      ]
    }
  ]
};
