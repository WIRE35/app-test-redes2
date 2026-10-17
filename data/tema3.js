const tema3 = {
  "id": "tema3",
  "tema": "Tema 3 — Tests de entrenamiento",
  "tests": [
    {
      "id": "t3-1",
      "nombre": "Test T3.1 - Dominios de colisión, difusión y dispositivos",
      "preguntas": [
        {
          "question": "¿Qué describe un dominio de colisión en una LAN?",
          "answers": [
            "El conjunto de equipos que comparten una dirección IP",
            "Un segmento donde las tramas pueden colisionar al acceder al medio",
            "La lista de direcciones MAC de un router",
            "Todos los equipos conectados a Internet"
          ],
          "correct": 1
        },
        {
          "question": "¿Cuándo puede producirse una colisión en un medio compartido?",
          "answers": [
            "Cuando dos estaciones transmiten simultáneamente por ese medio",
            "Cuando un router cambia una ruta",
            "Cuando un switch aprende una dirección MAC",
            "Cuando se recibe una trama unicast"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué efecto puede tener un dominio de colisión compartido?",
          "answers": [
            "Elimina el tráfico de difusión",
            "Aumenta siempre la velocidad de la red",
            "Consume ancho de banda cuando se producen colisiones",
            "Sustituye la necesidad de direcciones MAC"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué es un dominio de difusión?",
          "answers": [
            "El conjunto de hosts alcanzables mediante una trama de broadcast de capa 2",
            "El conjunto de puertos con el mismo número",
            "Un enlace dedicado entre dos routers",
            "La zona donde solo se permiten tramas unicast"
          ],
          "correct": 0
        },
        {
          "question": "¿Cuál es la dirección MAC de difusión en Ethernet?",
          "answers": [
            "00:00:00:00:00:00",
            "FF:FF:FF:FF:FF:FF",
            "127.0.0.1",
            "01:00:5E:00:00:01"
          ],
          "correct": 1
        },
        {
          "question": "En una trama unicast Ethernet, ¿quién debe procesar normalmente su contenido?",
          "answers": [
            "Todas las estaciones del dominio de difusión",
            "Todos los routers de Internet",
            "La estación cuya MAC coincide con la de destino",
            "Solo el switch que la origina"
          ],
          "correct": 2
        },
        {
          "question": "Según los apuntes, ¿qué es un rack?",
          "answers": [
            "Un dispositivo de capa 2",
            "Un soporte para alojar equipamiento electrónico y de comunicaciones",
            "Un protocolo de encaminamiento",
            "Un repetidor multipuerto"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué función cumple un patch panel?",
          "answers": [
            "Encaminar paquetes IP",
            "Detectar colisiones y bloquearlas",
            "Organizar pasivamente las terminaciones del cableado",
            "Aprender automáticamente direcciones MAC"
          ],
          "correct": 2
        },
        {
          "question": "En un patch panel típico, ¿dónde termina el cableado fijo?",
          "answers": [
            "En la parte trasera",
            "En la CPU del switch",
            "En el conector de alimentación",
            "En la antena Wi-Fi"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué se conecta normalmente entre la parte frontal del patch panel y el switch?",
          "answers": [
            "Un cable coaxial troncal obligatorio",
            "Un patch cord o latiguillo",
            "Un convertidor de direcciones IP",
            "Un cable de alimentación"
          ],
          "correct": 1
        },
        {
          "question": "¿En qué nivel OSI trabaja un repetidor convencional?",
          "answers": [
            "Red (3)",
            "Transporte (4)",
            "Enlace de datos (2)",
            "Físico (1)"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué operación realiza un repetidor sobre la señal?",
          "answers": [
            "Regenera y retemporiza los bits",
            "Filtra paquetes por dirección IP",
            "Calcula la ruta de menor coste",
            "Comprueba la MAC de destino para elegir puerto"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué información interpreta un repetidor para decidir el reenvío?",
          "answers": [
            "La cabecera TCP",
            "La dirección IP",
            "No interpreta formatos de trama: opera sobre bits",
            "La tabla ARP"
          ],
          "correct": 2
        },
        {
          "question": "¿Cuál es el objetivo habitual de usar un repetidor?",
          "answers": [
            "Separar dominios de difusión",
            "Permitir que la señal alcance mayor distancia",
            "Convertir direcciones IPv4 en IPv6",
            "Asignar direcciones IP a los hosts"
          ],
          "correct": 1
        },
        {
          "question": "¿Cómo se define un hub Ethernet?",
          "answers": [
            "Un router sin tabla de rutas",
            "Un puente inalámbrico",
            "Un repetidor multipuerto",
            "Un servidor de nombres"
          ],
          "correct": 2
        },
        {
          "question": "Cuando un hub recibe bits por un puerto, ¿qué hace?",
          "answers": [
            "Los retransmite por los demás puertos",
            "Consulta una tabla MAC y selecciona un puerto",
            "Los envía únicamente al router",
            "Descarta siempre las señales desconocidas"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué topología física suele tener una LAN construida con un hub?",
          "answers": [
            "Anillo",
            "Estrella",
            "Malla completa",
            "Bus coaxial sin ramificaciones"
          ],
          "correct": 1
        },
        {
          "question": "¿A qué se parece el comportamiento lógico de una red con hub?",
          "answers": [
            "A una red con enlaces dedicados entre todos los pares",
            "A una red en bus con medio compartido",
            "A una red de routers independientes",
            "A un sistema de circuitos virtuales"
          ],
          "correct": 1
        },
        {
          "question": "¿Cómo se reparte el ancho de banda de un hub entre los equipos conectados?",
          "answers": [
            "Cada equipo dispone de un enlace dedicado independiente",
            "El hub reserva un canal por dirección IP",
            "Es un ancho de banda compartido",
            "Solo el primer equipo conectado puede transmitir"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué ocurre con el dominio de colisión al añadir un hub a un segmento Ethernet compartido?",
          "answers": [
            "Se divide en tantos dominios como puertos",
            "Se extiende a los equipos conectados al hub",
            "Desaparece automáticamente",
            "Se transforma en un dominio IP"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué sucede con el dominio de difusión al interconectar segmentos mediante un repetidor?",
          "answers": [
            "Se extiende a través del repetidor",
            "Se separa por cada puerto",
            "Se limita al equipo emisor",
            "Se convierte en tráfico multicast"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué dispositivo de los siguientes funciona en el nivel físico, según los apuntes?",
          "answers": [
            "Router",
            "Switch de capa 2",
            "Hub",
            "Bridge"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué dispositivo utiliza una tabla de direcciones MAC asociadas a puertos?",
          "answers": [
            "Hub",
            "Repetidor",
            "Patch panel",
            "Bridge"
          ],
          "correct": 3
        },
        {
          "question": "¿En qué nivel OSI trabaja un puente o bridge convencional?",
          "answers": [
            "Físico (1)",
            "Enlace de datos / MAC (2)",
            "Red (3)",
            "Aplicación (7)"
          ],
          "correct": 1
        },
        {
          "question": "¿Cómo aprende un bridge la ubicación de un equipo?",
          "answers": [
            "Examinando la MAC de origen y el puerto de entrada",
            "Consultando siempre un servidor DNS",
            "Leyendo el número de puerto TCP",
            "Enviando solicitudes DHCP"
          ],
          "correct": 0
        },
        {
          "question": "Si un switch no conoce el puerto asociado a la MAC de destino, ¿qué hace normalmente?",
          "answers": [
            "Apaga el puerto de entrada",
            "Descarta siempre la trama",
            "Inunda la trama por los demás puertos del dominio correspondiente",
            "Solicita una dirección IP nueva"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué ventaja de ancho de banda atribuyen los apuntes al switch frente al hub?",
          "answers": [
            "El switch comparte obligatoriamente un único ancho de banda",
            "El switch puede proporcionar ancho de banda dedicado por puerto",
            "El switch solo transmite a 10 Mb/s",
            "El switch elimina toda trama broadcast"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué dispositivo separa dominios de difusión cuando interconecta redes IP?",
          "answers": [
            "Hub",
            "Repetidor",
            "Patch panel",
            "Router"
          ],
          "correct": 3
        },
        {
          "question": "¿En qué nivel OSI sitúan los apuntes el funcionamiento principal del router?",
          "answers": [
            "Red (3)",
            "Físico (1)",
            "Enlace de datos (2)",
            "Sesión (5)"
          ],
          "correct": 0
        },
        {
          "question": "Una red con seis ordenadores conectados a un único hub, sin otros dispositivos, ¿cuántos dominios de colisión tiene?",
          "answers": [
            "Seis, uno por ordenador",
            "Dos, uno por cada mitad",
            "Uno, compartido por todos",
            "Ninguno, porque no hay switches"
          ],
          "correct": 2
        }
      ]
    }
  ]
};
