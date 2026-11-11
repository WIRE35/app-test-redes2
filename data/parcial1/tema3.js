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
    },
    {
      "id": "t3-3",
      "nombre": "Test T3.3 - Routers, direccionamiento IP y ARP",
      "preguntas": [
        {
          "question": "¿En qué capa del modelo OSI opera principalmente un router al encaminar paquetes IP?",
          "answers": [
            "Física",
            "Enlace de datos",
            "Red",
            "Aplicación"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué información utiliza un router para elegir el siguiente salto de un datagrama IP?",
          "answers": [
            "Tabla de encaminamiento",
            "Tabla de direcciones MAC del switch",
            "Nombre del archivo transmitido",
            "Número de puerto USB"
          ],
          "correct": 0
        },
        {
          "question": "¿Cuál es la unidad básica de transferencia del protocolo IP?",
          "answers": [
            "Bit de sincronismo",
            "Datagrama",
            "Trama Ethernet",
            "Token"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué característica describe el servicio ofrecido por IP?",
          "answers": [
            "Garantiza entrega ordenada",
            "Establece siempre un circuito previo",
            "Servicio sin conexión y sin garantía de entrega",
            "Reserva ancho de banda antes de transmitir"
          ],
          "correct": 2
        },
        {
          "question": "¿Para qué se incorpora direccionamiento IP además de las direcciones MAC?",
          "answers": [
            "Para identificar redes y facilitar el encaminamiento entre ellas",
            "Para sustituir la señal eléctrica del cable",
            "Para eliminar la necesidad de routers",
            "Para asignar una MAC diferente a cada aplicación"
          ],
          "correct": 0
        },
        {
          "question": "¿Cuántos bits tiene una dirección IPv4?",
          "answers": [
            "16",
            "32",
            "48",
            "128"
          ],
          "correct": 1
        },
        {
          "question": "¿Cuántos octetos componen la representación decimal habitual de IPv4?",
          "answers": [
            "Dos",
            "Tres",
            "Cuatro",
            "Seis"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué dos partes identifica una dirección IPv4 junto con su máscara?",
          "answers": [
            "Puerto y protocolo",
            "Red y host",
            "Origen y TTL",
            "MAC y CRC"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué máscara corresponde a un prefijo IPv4 /24?",
          "answers": [
            "255.255.0.0",
            "255.0.0.0",
            "255.255.255.0",
            "255.255.255.128"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué longitud de prefijo corresponde a la máscara 255.255.0.0?",
          "answers": [
            "/8",
            "/16",
            "/24",
            "/32"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué diferencia principal presentan las redes classless frente a las full-class descritas en los apuntes?",
          "answers": [
            "Usan máscaras de longitud variable",
            "No utilizan direcciones IP",
            "Solo permiten redes clase A",
            "No necesitan identificar la red"
          ],
          "correct": 0
        },
        {
          "question": "¿Cuál de estas direcciones pertenece a un bloque privado RFC 1918?",
          "answers": [
            "8.8.8.8",
            "172.20.5.4",
            "172.32.0.1",
            "193.18.1.10"
          ],
          "correct": 1
        },
        {
          "question": "¿Cuál es el intervalo privado del bloque 192.168.0.0/16?",
          "answers": [
            "192.168.0.0 a 192.168.255.255",
            "192.0.0.0 a 192.255.255.255",
            "192.168.0.0 a 192.168.0.255",
            "192.169.0.0 a 192.169.255.255"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué bloque privado abarca direcciones desde 172.16.0.0 hasta 172.31.255.255?",
          "answers": [
            "172.16.0.0/12",
            "172.16.0.0/16",
            "172.0.0.0/8",
            "172.31.0.0/24"
          ],
          "correct": 0
        },
        {
          "question": "¿Cuál es la función esencial del protocolo ARP en una LAN IPv4?",
          "answers": [
            "Convertir un nombre DNS en IP",
            "Obtener la dirección MAC asociada a una dirección IP",
            "Seleccionar la ruta entre dos sistemas autónomos",
            "Comprimir datagramas"
          ],
          "correct": 1
        },
        {
          "question": "¿Cómo se envía normalmente una solicitud ARP en una LAN Ethernet?",
          "answers": [
            "En difusión a FF:FF:FF:FF:FF:FF",
            "En unicast a la MAC desconocida",
            "Siempre al servidor DNS",
            "Como mensaje TCP"
          ],
          "correct": 0
        },
        {
          "question": "¿Quién responde normalmente a una solicitud ARP que pregunta por la MAC de una IP local?",
          "answers": [
            "Todos los equipos con un ACK",
            "El host propietario de esa IP",
            "El switch de acceso en todos los casos",
            "El servidor web remoto"
          ],
          "correct": 1
        },
        {
          "question": "¿Cómo suele enviarse una respuesta ARP al equipo que preguntó?",
          "answers": [
            "En unicast a su dirección MAC",
            "Siempre en difusión a toda Internet",
            "Por una sesión HTTPS",
            "Mediante un datagrama ICMP de error"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué valor EtherType identifica ARP en una trama Ethernet?",
          "answers": [
            "0x0800",
            "0x86DD",
            "0x0806",
            "0x8100"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué valor EtherType identifica IPv4 en una trama Ethernet?",
          "answers": [
            "0x0800",
            "0x0806",
            "0x8847",
            "0x88CC"
          ],
          "correct": 0
        },
        {
          "question": "¿Para qué sirve la caché ARP?",
          "answers": [
            "Guardar temporalmente asociaciones IP-MAC",
            "Almacenar contraseñas de usuarios",
            "Asignar nuevas IP públicas",
            "Conservar rutas BGP indefinidamente"
          ],
          "correct": 0
        },
        {
          "question": "Si dos equipos pertenecen a la misma red IP y pueden comunicarse directamente, ¿qué MAC de destino lleva la trama?",
          "answers": [
            "La del router de salida siempre",
            "La del host destino",
            "La de difusión obligatoriamente",
            "La del servidor DHCP"
          ],
          "correct": 1
        },
        {
          "question": "Si un host envía un datagrama a otra red IP, ¿qué MAC de destino suele poner en la primera trama Ethernet?",
          "answers": [
            "La del host remoto",
            "La del servidor DNS",
            "La de su puerta de enlace o router local",
            "La del switch de la red remota"
          ],
          "correct": 2
        },
        {
          "question": "En el envío a otra red, ¿qué dirección IP de destino contiene el datagrama que sale del host?",
          "answers": [
            "La IP del host remoto",
            "La IP del router local como destino final",
            "La IP del switch",
            "La IP de difusión local"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué se consulta primero para decidir si el destino IPv4 está en la misma red local?",
          "answers": [
            "La máscara de red junto con las direcciones IP",
            "El CRC de la trama",
            "La tabla de puertos TCP abiertos",
            "El número de serie del router"
          ],
          "correct": 0
        },
        {
          "question": "Un equipo 192.168.10.20/24 quiere contactar con 192.168.10.80/24. ¿Qué tipo de comunicación IP corresponde?",
          "answers": [
            "Diálogo directo dentro de la misma red",
            "Diálogo indirecto obligatorio vía Internet",
            "Necesita un NAT para alcanzar al destino",
            "No es posible por pertenecer a subredes diferentes"
          ],
          "correct": 0
        },
        {
          "question": "Un equipo 192.168.10.20/24 quiere contactar con 192.168.11.80/24. ¿Qué necesita normalmente?",
          "answers": [
            "Solo un repetidor de nivel físico",
            "Enviar al router o puerta de enlace",
            "Usar la MAC del destino remoto directamente",
            "Cambiar a una dirección de difusión"
          ],
          "correct": 1
        },
        {
          "question": "¿Cuál es el identificador de red de 157.42.4.2 con máscara 255.255.0.0?",
          "answers": [
            "157.42.0.0",
            "157.0.0.0",
            "157.42.4.0",
            "157.42.4.2"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué consecuencia tiene que IP sea un servicio de datagramas sin conexión?",
          "answers": [
            "Los datagramas pueden seguir rutas distintas y llegar desordenados",
            "Todos los datagramas deben atravesar idéntico circuito reservado",
            "Cada router garantiza la entrega de todos los paquetes",
            "Las direcciones MAC sustituyen por completo a las IP"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué elemento permite a un router interconectar redes de tecnologías distintas?",
          "answers": [
            "Sus interfaces de red y el encaminamiento IP",
            "Una única dirección MAC compartida por todos los hosts",
            "Un cable coaxial obligatorio",
            "Un concentrador que repite todos los bits"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "t3-4",
      "nombre": "Test T3.4 - Fragmentación IP, subnetting y supernetting",
      "preguntas": [
        {
          "question": "¿Qué representa la MTU de una red física?",
          "answers": [
            "El número máximo de routers de una ruta",
            "El tamaño máximo de la unidad de datos que puede transportar el enlace",
            "La cantidad máxima de direcciones MAC de un switch",
            "El tiempo máximo de vida de un datagrama"
          ],
          "correct": 1
        },
        {
          "question": "Según los apuntes, ¿cuál es la MTU habitual de Ethernet para un datagrama IP?",
          "answers": [
            "1500 bytes",
            "64 bytes",
            "576 bytes",
            "9000 bytes"
          ],
          "correct": 0
        },
        {
          "question": "Un datagrama IP de 1400 bytes atraviesa un enlace de MTU 1500. ¿Qué ocurre por tamaño?",
          "answers": [
            "Se divide siempre en dos fragmentos",
            "Se descarta aunque DF sea 0",
            "Se divide en tres fragmentos de 500 bytes",
            "No necesita fragmentación"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué dispositivo puede fragmentar un datagrama IPv4 al pasar a una red de menor MTU?",
          "answers": [
            "Un repetidor de capa física",
            "Un hub Ethernet",
            "Un router intermedio",
            "Un cable de par trenzado"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué campo permite reconocer fragmentos pertenecientes al mismo datagrama IPv4?",
          "answers": [
            "TTL",
            "Identificación",
            "Puerto TCP de destino",
            "Dirección MAC de difusión"
          ],
          "correct": 1
        },
        {
          "question": "¿En qué unidades se expresa el desplazamiento (Fragment Offset) en IPv4?",
          "answers": [
            "Bloques de 8 bytes",
            "Bits individuales",
            "Bloques de 64 bytes",
            "Paquetes completos"
          ],
          "correct": 0
        },
        {
          "question": "Si un fragmento tiene desplazamiento 100, ¿a qué posición de los datos originales corresponde?",
          "answers": [
            "Byte 100",
            "Byte 108",
            "Byte 1600",
            "Byte 800"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué indica el bit MF=1 de la cabecera IPv4?",
          "answers": [
            "Que no se permite fragmentar",
            "Que es necesariamente el último fragmento",
            "Que quedan más fragmentos del mismo datagrama",
            "Que el TTL ha llegado a cero"
          ],
          "correct": 2
        },
        {
          "question": "¿Cómo se identifica normalmente el último fragmento de un datagrama IPv4?",
          "answers": [
            "Con DF=1 obligatoriamente",
            "Con MF=0",
            "Con offset=0 siempre",
            "Con TTL=0"
          ],
          "correct": 1
        },
        {
          "question": "Si un datagrama tiene DF=1 y no cabe en la MTU del siguiente enlace, ¿qué debe hacer el router?",
          "answers": [
            "Descartarlo en lugar de fragmentarlo",
            "Fragmentarlo ignorando DF",
            "Cambiar su dirección IP de origen",
            "Convertirlo automáticamente a IPv6"
          ],
          "correct": 0
        },
        {
          "question": "Según el Tema 3, ¿dónde se realiza el reensamblado de fragmentos IPv4?",
          "answers": [
            "En cada switch de la ruta",
            "En todos los routers intermedios",
            "En el primer hub de la red",
            "En el equipo de destino"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué sucede si no llegan todos los fragmentos antes de expirar el temporizador de reensamblado?",
          "answers": [
            "Se entrega un datagrama incompleto como válido",
            "Se reenvían los fragmentos desde el switch",
            "Se descartan los fragmentos recibidos de ese datagrama",
            "Se asigna una nueva máscara de red"
          ],
          "correct": 2
        },
        {
          "question": "Un datagrama IPv4 tiene 2000 bytes de datos y cabecera de 20 bytes. Con MTU=1500, ¿cuántos fragmentos mínimos se necesitan?",
          "answers": [
            "1",
            "2",
            "3",
            "4"
          ],
          "correct": 1
        },
        {
          "question": "En una MTU de 800 bytes y cabecera IPv4 de 20 bytes, ¿cuál es la carga útil máxima de un fragmento no final, respetando múltiplos de 8?",
          "answers": [
            "776 bytes",
            "780 bytes",
            "800 bytes",
            "784 bytes"
          ],
          "correct": 0
        },
        {
          "question": "Un datagrama con 2000 bytes de datos y cabecera de 20 bytes atraviesa MTU=800. ¿Cuántos fragmentos se generan?",
          "answers": [
            "2",
            "4",
            "5",
            "3"
          ],
          "correct": 3
        },
        {
          "question": "En el ejemplo anterior (MTU=800), ¿cuáles son los desplazamientos de los tres fragmentos?",
          "answers": [
            "0, 776 y 1552",
            "0, 100 y 200",
            "0, 97 y 194",
            "0, 97 y 185"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué máscara decimal corresponde al prefijo /24?",
          "answers": [
            "255.255.0.0",
            "255.255.255.0",
            "255.255.255.128",
            "255.255.255.192"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué máscara decimal corresponde al prefijo /26?",
          "answers": [
            "255.255.255.192",
            "255.255.255.0",
            "255.255.255.224",
            "255.255.255.240"
          ],
          "correct": 0
        },
        {
          "question": "¿Cuál es la dirección de red de 192.168.10.77/26?",
          "answers": [
            "192.168.10.0",
            "192.168.10.77",
            "192.168.10.128",
            "192.168.10.64"
          ],
          "correct": 3
        },
        {
          "question": "¿Cuál es la dirección de difusión de la subred 192.168.10.64/26?",
          "answers": [
            "192.168.10.63",
            "192.168.10.128",
            "192.168.10.127",
            "192.168.10.255"
          ],
          "correct": 2
        },
        {
          "question": "¿Cuántas direcciones de host utilizables tiene normalmente una subred IPv4 /27?",
          "answers": [
            "32",
            "30",
            "62",
            "14"
          ],
          "correct": 1
        },
        {
          "question": "¿Cuántas subredes /18 se obtienen al dividir 131.107.0.0/16 usando dos bits adicionales de subred?",
          "answers": [
            "4",
            "2",
            "8",
            "16"
          ],
          "correct": 0
        },
        {
          "question": "¿Cuál de estas redes pertenece al reparto de 131.107.0.0/16 en cuatro subredes /18?",
          "answers": [
            "131.107.32.0/18",
            "131.107.16.0/18",
            "131.107.224.0/18",
            "131.107.128.0/18"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué significa subnetting en el contexto del direccionamiento IPv4?",
          "answers": [
            "Unir varias redes en una sola ruta resumida",
            "Sustituir ARP por DHCP",
            "Dividir una red IP en subredes más pequeñas",
            "Eliminar los bits de red de una máscara"
          ],
          "correct": 2
        },
        {
          "question": "¿Cuál es la finalidad principal del supernetting o agregación de rutas?",
          "answers": [
            "Crear más colisiones Ethernet",
            "Agrupar prefijos para reducir entradas de encaminamiento",
            "Fragmentar los datagramas en cada router",
            "Asignar una MAC idéntica a todos los hosts"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué ventaja aporta CIDR frente al direccionamiento estrictamente por clases?",
          "answers": [
            "Utilizar prefijos de longitud variable y favorecer la agregación de rutas",
            "Obligar a todas las redes a usar /8",
            "Eliminar la necesidad de direcciones IP",
            "Impedir el uso de routers"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué prefijo resume exactamente las redes 192.168.0.0/24 y 192.168.1.0/24?",
          "answers": [
            "192.168.0.0/25",
            "192.168.0.0/24",
            "192.168.0.0/22",
            "192.168.0.0/23"
          ],
          "correct": 3
        },
        {
          "question": "Una red /24 se divide en subredes /28. ¿Cuántas subredes del mismo tamaño se obtienen?",
          "answers": [
            "8",
            "14",
            "16",
            "32"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué prefijo IPv4 permite normalmente 62 hosts utilizables por subred?",
          "answers": [
            "/27",
            "/26",
            "/25",
            "/28"
          ],
          "correct": 1
        },
        {
          "question": "Si una empresa necesita subredes de distintos tamaños, ¿qué técnica permite ajustar la máscara a cada necesidad?",
          "answers": [
            "VLSM (máscaras de subred de longitud variable)",
            "CSMA/CD",
            "Codificación Manchester",
            "Inundación de tramas"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "t3-5",
      "nombre": "Test T3.5 - Repaso global del Tema 3",
      "preguntas": [
        {
          "question": "Una estación A/24 envía datos a otra IP situada fuera de su subred. ¿Qué MAC pone como destino en la primera trama Ethernet?",
          "answers": [
            "La MAC de la interfaz de su router de salida",
            "La MAC del host remoto",
            "La MAC de difusión FF:FF:FF:FF:FF:FF",
            "La MAC del servidor DNS"
          ],
          "correct": 0
        },
        {
          "question": "En el diálogo indirecto A → router → C, ¿qué campos permanecen normalmente iguales al atravesar el router?",
          "answers": [
            "Las MAC de origen y destino de la trama",
            "Las direcciones IP de origen y destino del datagrama",
            "La MAC de destino y el CRC Ethernet",
            "Las MAC de origen y destino y el TTL"
          ],
          "correct": 1
        },
        {
          "question": "Si A y B están en la misma subred IP y conectados por un switch, ¿qué necesita A para enviarles una trama unicast?",
          "answers": [
            "Conocer la MAC del router de otra red",
            "Fragmentar siempre el datagrama IP",
            "Resolver la MAC de B, normalmente mediante ARP",
            "Consultar una ruta BGP"
          ],
          "correct": 2
        },
        {
          "question": "En una red Ethernet con un switch sin VLAN y cuatro puertos activos, ¿qué ocurre con una trama de difusión enviada por uno de ellos?",
          "answers": [
            "Solo llega al puerto de la MAC de destino aprendida",
            "El switch la descarta porque no tiene destino unicast",
            "Se envía exclusivamente al router por obligación",
            "Se reenvía por los otros puertos de ese dominio de difusión"
          ],
          "correct": 3
        },
        {
          "question": "Se conectan dos hubs entre sí y cada uno tiene tres ordenadores. ¿Cuántos dominios de colisión forman, suponiendo una única LAN compartida?",
          "answers": [
            "Uno",
            "Dos",
            "Tres",
            "Seis"
          ],
          "correct": 0
        },
        {
          "question": "Se conectan dos switches Ethernet sin VLAN entre sí y cada uno tiene tres equipos, todos en enlaces dedicados. ¿Qué sucede con el dominio de difusión?",
          "answers": [
            "Se convierte en seis dominios de difusión",
            "Sigue siendo uno, salvo que intervenga un dispositivo o configuración que lo separe",
            "Se elimina por completo",
            "Cada switch siempre crea una red IP distinta"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué dispositivo de los estudiados divide tanto dominios de colisión como de difusión?",
          "answers": [
            "Un hub",
            "Un repetidor",
            "Un router",
            "Un patch panel"
          ],
          "correct": 2
        },
        {
          "question": "¿Cuál es la función principal de un patch panel en un armario de comunicaciones?",
          "answers": [
            "Aprender direcciones MAC y filtrar tramas",
            "Calcular rutas entre subredes IP",
            "Traducir protocolos de aplicación",
            "Organizar y terminar conexiones de cableado de forma pasiva"
          ],
          "correct": 3
        },
        {
          "question": "Un repetidor recibe una señal degradada y la regenera para extender el medio. ¿En qué capa OSI trabaja?",
          "answers": [
            "Capa física",
            "Capa de red",
            "Capa de transporte",
            "Capa de aplicación"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué información aprende un switch Ethernet para construir su tabla de conmutación?",
          "answers": [
            "La dirección IP de destino y el TTL",
            "La dirección MAC de origen y el puerto de entrada de las tramas",
            "El nombre DNS del emisor",
            "La dirección MAC de destino y el número de saltos IP"
          ],
          "correct": 1
        },
        {
          "question": "Un switch recibe una trama unicast cuya MAC destino aún no figura en su tabla. ¿Qué hace habitualmente?",
          "answers": [
            "La envía solo por el puerto de entrada",
            "La convierte automáticamente en un datagrama IP",
            "La inunda por los demás puertos del mismo dominio de difusión",
            "La bloquea siempre como maliciosa"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué ventaja de Store-and-Forward frente a Cut-Through se destaca al conmutar tramas?",
          "answers": [
            "No necesita recibir ningún byte antes de transmitir",
            "Siempre elimina las colisiones de otros hubs",
            "Sustituye al protocolo ARP",
            "Puede comprobar la trama completa antes de reenviarla"
          ],
          "correct": 3
        },
        {
          "question": "En un switch Cut-Through, ¿cuándo puede empezar el reenvío?",
          "answers": [
            "Cuando ha leído suficiente cabecera para identificar el destino",
            "Solo después de recibir y validar toda la trama",
            "Únicamente al terminar un temporizador de ARP",
            "Después de que el router confirme la ruta IP"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué caracteriza al método de conmutación Fragment Free?",
          "answers": [
            "Espera exactamente 1500 bytes de datos",
            "Espera al menos los primeros 64 bytes antes de reenviar",
            "No utiliza direcciones MAC",
            "Reenvía sin leer la dirección destino"
          ],
          "correct": 1
        },
        {
          "question": "Una consulta ARP pregunta por la MAC correspondiente a una IP local desconocida. ¿Cómo se distribuye normalmente la solicitud?",
          "answers": [
            "Como unicast a todos los routers de Internet",
            "Como un datagrama dirigido a 127.0.0.1",
            "Como difusión Ethernet en la LAN",
            "Como difusión IP global entre subredes"
          ],
          "correct": 2
        },
        {
          "question": "¿Para qué sirve la caché ARP descrita en el tema?",
          "answers": [
            "Para almacenar rutas de todas las redes de Internet",
            "Para traducir nombres DNS en direcciones IP",
            "Para eliminar la necesidad de direcciones Ethernet",
            "Para reutilizar temporalmente asociaciones IP–MAC y evitar consultas repetidas"
          ],
          "correct": 3
        },
        {
          "question": "Si el host destino está fuera de la subred, ¿para qué dirección IP debe resolver ARP el emisor antes del primer salto?",
          "answers": [
            "La IP de la interfaz local del router de salida",
            "La IP del host remoto en cualquier caso",
            "La IP del servidor web del campus",
            "La IP de difusión limitada 255.255.255.255"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué indica una ruta por defecto en una tabla de encaminamiento?",
          "answers": [
            "Una ruta exclusiva hacia todos los hosts de la LAN",
            "El siguiente salto para destinos que no coinciden con rutas más específicas",
            "Que el router ya no necesita direcciones IP",
            "La dirección MAC de todos los equipos"
          ],
          "correct": 1
        },
        {
          "question": "¿Cuál de estas afirmaciones sobre rutas entre dos extremos es correcta?",
          "answers": [
            "Las rutas de ida y vuelta deben ser idénticas",
            "Un router nunca usa rutas por defecto",
            "La ruta de A a B puede ser distinta de la de B a A",
            "Todas las rutas se eligen usando solo direcciones MAC"
          ],
          "correct": 2
        },
        {
          "question": "En una tabla de rutas classless, ¿qué dato permite distinguir prefijos de diferente longitud?",
          "answers": [
            "El CRC de la trama Ethernet",
            "El número de puertos del switch",
            "La dirección MAC del emisor",
            "La máscara o longitud de prefijo asociada a la red destino"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué significa el bit DF del encabezado IPv4?",
          "answers": [
            "Que el datagrama no debe fragmentarse",
            "Que todos los fragmentos son los últimos",
            "Que la trama se enviará en difusión",
            "Que el datagrama usa DHCP"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué significa MF=1 en un fragmento IPv4?",
          "answers": [
            "Que es necesariamente el último fragmento",
            "Que después de ese fragmento quedan más fragmentos del datagrama",
            "Que no puede existir fragmentación",
            "Que el paquete se ha reenviado por multicast"
          ],
          "correct": 1
        },
        {
          "question": "¿En qué unidades se expresa el desplazamiento de fragmento (fragment offset) de IPv4?",
          "answers": [
            "En bits individuales",
            "En bloques de 64 bytes",
            "En bloques de 8 bytes",
            "En paquetes de 1500 bytes"
          ],
          "correct": 2
        },
        {
          "question": "Un datagrama IPv4 de 2020 bytes totales (20 de cabecera y 2000 de datos) atraviesa un enlace con MTU 1500, sin opciones. ¿Cuántos fragmentos se requieren?",
          "answers": [
            "Uno",
            "Tres",
            "Cuatro",
            "Dos"
          ],
          "correct": 3
        },
        {
          "question": "Para el datagrama de 2000 bytes de datos y cabecera IPv4 de 20 bytes, con MTU 1500, ¿cuántos bytes de datos puede llevar como máximo el primer fragmento no final?",
          "answers": [
            "1480 bytes",
            "1500 bytes",
            "1490 bytes",
            "1460 bytes"
          ],
          "correct": 0
        },
        {
          "question": "Si el primer fragmento IPv4 transporta 1480 bytes de datos, ¿qué desplazamiento (fragment offset) tendrá el siguiente fragmento?",
          "answers": [
            "1480",
            "185",
            "180",
            "186"
          ],
          "correct": 1
        },
        {
          "question": "Una subred IPv4 /27 dispone de cuántas direcciones utilizables para hosts, bajo el esquema convencional de red y difusión?",
          "answers": [
            "32",
            "62",
            "30",
            "14"
          ],
          "correct": 2
        },
        {
          "question": "¿Cuál es la dirección de red del host 192.168.10.77/26?",
          "answers": [
            "192.168.10.0",
            "192.168.10.77",
            "192.168.10.128",
            "192.168.10.64"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué técnica permite asignar prefijos de distinta longitud a subredes con diferentes necesidades de hosts?",
          "answers": [
            "VLSM",
            "CSMA/CD",
            "ARP",
            "Manchester"
          ],
          "correct": 0
        },
        {
          "question": "Según los apuntes, ¿para qué se utiliza una pasarela (gateway) de traducción entre redes heterogéneas?",
          "answers": [
            "Para regenerar únicamente señales eléctricas de capa física",
            "Para adaptar protocolos o formatos de comunicación entre sistemas distintos",
            "Para reemplazar siempre al switch de acceso",
            "Para conectar dos cables mediante un panel pasivo"
          ],
          "correct": 1
        }
      ]
    }
  ]
};
