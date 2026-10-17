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
    },
    {
      "id": "t3-2",
      "nombre": "Test T3.2 - Puentes, switches y aprendizaje MAC",
      "preguntas": [
        {
          "question": "¿En qué nivel del modelo OSI sitúan los apuntes a los puentes y switches tradicionales?",
          "answers": [
            "Red (3)",
            "Enlace de datos, subcapa MAC (2)",
            "Transporte (4)",
            "Físico (1)"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué información guarda un puente transparente cuando recibe una trama?",
          "answers": [
            "MAC de destino y dirección IP",
            "Dirección IP de origen y máscara",
            "MAC de origen y puerto de entrada",
            "MAC de destino y puerto de salida"
          ],
          "correct": 2
        },
        {
          "question": "Al arrancar un switch, ¿cómo están inicialmente sus tablas de aprendizaje MAC?",
          "answers": [
            "Con las MAC de toda la LAN",
            "Vacías",
            "Con las MAC de los routers",
            "Con las MAC de difusión"
          ],
          "correct": 1
        },
        {
          "question": "Un switch recibe una trama unicast cuya MAC de destino aún no figura en su tabla. ¿Qué hace?",
          "answers": [
            "La descarta siempre",
            "La entrega solo al router",
            "Inunda los puertos apropiados excepto el de entrada",
            "Convierte la trama en un paquete IP"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué dirección utiliza un switch para aprender por qué puerto se alcanza una estación?",
          "answers": [
            "La MAC de origen de cada trama recibida",
            "La MAC de destino únicamente",
            "La IP de destino",
            "La puerta de enlace predeterminada"
          ],
          "correct": 0
        },
        {
          "question": "Un switch recibe por el puerto 4 una trama con MAC origen AA y MAC destino BB. ¿Qué entrada aprende?",
          "answers": [
            "BB → puerto 4",
            "AA → puerto 4",
            "AA → puerto de salida de BB",
            "BB → todos los puertos"
          ],
          "correct": 1
        },
        {
          "question": "La tabla MAC indica que la estación B está en el puerto 2. Si llega por el puerto 1 una trama dirigida a B, ¿qué ocurre?",
          "answers": [
            "Se inunda por todos los puertos",
            "Se reenvía únicamente por el puerto 2",
            "Se descarta por ser unicast",
            "Se reenvía por el puerto 1"
          ],
          "correct": 1
        },
        {
          "question": "Si un switch recibe una trama destinada a una MAC que sabe que está en el mismo puerto por el que llegó, ¿qué decisión es coherente con el filtrado de puentes?",
          "answers": [
            "No reenviarla a otros puertos",
            "Difundirla por toda la LAN",
            "Encaminarla por IP",
            "Convertirla en broadcast"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué propiedad permite a un switch ofrecer ancho de banda dedicado por puerto, frente a un hub compartido?",
          "answers": [
            "Conmutación entre puertos",
            "Uso obligatorio de IP pública",
            "Repetición de todos los bits por todos los puertos",
            "Uso exclusivo de cable coaxial"
          ],
          "correct": 0
        },
        {
          "question": "Según los apuntes, ¿qué requisito debe cumplirse respecto a los caminos de una red de switches para evitar bucles cerrados?",
          "answers": [
            "Cada destino debe tener varios caminos activos simultáneos",
            "Debe existir un único camino activo para cada destino",
            "Todos los puertos deben estar conectados a hubs",
            "Las tramas deben circular indefinidamente"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué método de conmutación almacena la trama completa antes de decidir su reenvío?",
          "answers": [
            "Cut-Through",
            "Fragment Free",
            "Store-and-Forward",
            "ALOHA ranurado"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué comprueba un switch Store-and-Forward antes de reenviar una trama?",
          "answers": [
            "El campo CRC",
            "La dirección IP pública",
            "El puerto TCP",
            "La tabla ARP del host"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué hace Store-and-Forward con una trama cuyo CRC indica error?",
          "answers": [
            "La reenvía para reducir latencia",
            "La descarta",
            "La convierte en una trama de difusión",
            "La fragmenta en tramas menores"
          ],
          "correct": 1
        },
        {
          "question": "¿Cuál es una desventaja de Store-and-Forward señalada en los apuntes?",
          "answers": [
            "No puede aprender MAC",
            "Mayor retardo al procesar tramas, especialmente largas",
            "Solo funciona con hubs",
            "No permite verificar errores"
          ],
          "correct": 1
        },
        {
          "question": "¿Cuál es la principal ventaja de Cut-Through frente a Store-and-Forward?",
          "answers": [
            "Reduce el retardo de reenvío",
            "Corrige automáticamente errores CRC",
            "Evita cualquier bucle",
            "Sustituye la dirección MAC por IP"
          ],
          "correct": 0
        },
        {
          "question": "En Cut-Through, ¿qué dato espera recibir el switch para empezar a reenviar según los apuntes?",
          "answers": [
            "Los 6 bytes de la MAC de destino",
            "Toda la trama y su CRC",
            "Los 4 bytes de la dirección IPv4",
            "Los 64 últimos bytes de datos"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué limitación atribuyen los apuntes al método Cut-Through?",
          "answers": [
            "No puede usar Ethernet",
            "No detecta errores CRC de la trama antes de reenviarla",
            "No puede transmitir unicast",
            "Solo admite un puerto"
          ],
          "correct": 1
        },
        {
          "question": "¿Cuántos bytes iniciales espera un conmutador Fragment Free antes de reenviar?",
          "answers": [
            "6",
            "16",
            "64",
            "1500"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué persigue Fragment Free al esperar esos primeros bytes?",
          "answers": [
            "Reducir el reenvío de fragmentos producidos por colisiones",
            "Cambiar la máscara de subred",
            "Evitar el aprendizaje MAC",
            "Reemplazar la verificación de IP"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué caracteriza al modo Adaptive Cut-Through descrito en el tema?",
          "answers": [
            "Siempre reenvía sin comprobar errores",
            "Alterna entre Store-and-Forward y Cut-Through",
            "Solo funciona con direcciones multicast",
            "Obliga a usar routers"
          ],
          "correct": 1
        },
        {
          "question": "¿En qué puede basarse el cambio automático de modo de Adaptive Cut-Through?",
          "answers": [
            "La media de errores en las tramas",
            "El número de direcciones IP públicas",
            "La longitud del cable de alimentación",
            "La hora del sistema operativo"
          ],
          "correct": 0
        },
        {
          "question": "Según los apuntes, ¿qué ocurre con los dominios de colisión al intercalar un switch entre segmentos?",
          "answers": [
            "Se unifican",
            "Se dividen",
            "Desaparecen las direcciones MAC",
            "Se transforman en dominios IP"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué sucede con el dominio de difusión cuando se interconectan segmentos mediante switches sin separación de VLAN?",
          "answers": [
            "El switch bloquea todos los broadcasts",
            "Se mantiene extendido por los segmentos interconectados",
            "Cada trama de difusión se convierte en unicast",
            "Se necesita una ruta IP para cada broadcast"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué MAC de destino identifica una trama Ethernet de difusión?",
          "answers": [
            "00:00:00:00:00:00",
            "FF:FF:FF:FF:FF:FF",
            "127.0.0.1",
            "La MAC del puerto de entrada"
          ],
          "correct": 1
        },
        {
          "question": "Un switch recibe una trama broadcast por el puerto 1. ¿Qué comportamiento describen los apuntes?",
          "answers": [
            "Reenvío por los demás puertos del mismo dominio de difusión",
            "Descarte obligatorio",
            "Reenvío solo por el puerto 1",
            "Encapsulación en TCP"
          ],
          "correct": 0
        },
        {
          "question": "En una LAN con dos switches conectados y sin router intermedio, ¿qué afirmación es correcta según el tratamiento de difusión del tema?",
          "answers": [
            "El enlace entre switches impide broadcasts",
            "Las tramas broadcast pueden atravesar ambos switches",
            "Las MAC dejan de ser necesarias",
            "Cada switch crea una red IP diferente automáticamente"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué diferencia básica existe entre un hub y un switch al recibir una trama?",
          "answers": [
            "El hub aprende MAC y el switch repite bits",
            "El switch usa una tabla MAC; el hub repite señales",
            "Ambos enrutan según IP",
            "El hub verifica CRC antes de reenviar"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué dispositivo de los siguientes trabaja en capa 2 y mantiene una tabla MAC/puertos?",
          "answers": [
            "Repetidor",
            "Hub",
            "Puente transparente",
            "Patch panel"
          ],
          "correct": 2
        },
        {
          "question": "Un puente conecta dos segmentos y aprende MAC_A por Eth0 y MAC_D por Eth1. ¿Por qué interfaz enviará una trama para MAC_D que llegue por Eth0?",
          "answers": [
            "Eth0",
            "Eth1",
            "Por ambas siempre",
            "Por ninguna, porque son segmentos distintos"
          ],
          "correct": 1
        },
        {
          "question": "¿Cuál de estas afirmaciones resume mejor el efecto de un switch tradicional en la LAN?",
          "answers": [
            "Divide colisiones, pero reenvía difusión",
            "Divide difusión, pero comparte todas las colisiones",
            "Elimina la necesidad de MAC",
            "Trabaja únicamente en la capa física"
          ],
          "correct": 0
        }
      ]
    }
  ]
};
