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
    },
    {
      "id": "t2-2",
      "nombre": "Test T2.2 - ALOHA, CSMA y protocolos de acceso múltiple",
      "preguntas": [
        {
          "question": "Una LAN comparte un único canal entre varias estaciones. ¿Qué problema intenta resolver la subcapa MAC?",
          "answers": [
            "Seleccionar la ruta IP entre redes",
            "Determinar cuándo puede acceder cada estación al medio",
            "Cifrar el contenido de las aplicaciones",
            "Traducir nombres de dominio"
          ],
          "correct": 1
        },
        {
          "question": "Un sistema reparte el canal en bandas de frecuencia fijas, aunque algunos usuarios no transmitan. ¿Qué técnica está utilizando?",
          "answers": [
            "FDM",
            "CSMA/CD",
            "ALOHA ranurado",
            "Paso de testigo"
          ],
          "correct": 0
        },
        {
          "question": "Una red con tráfico muy irregular y emisores cambiantes desaprovecha recursos con FDM. ¿Qué enfoque estudian los apuntes como alternativa?",
          "answers": [
            "Asignación dinámica del canal",
            "Aumentar el número de bandas fijas",
            "Asignación exclusiva a una sola estación",
            "Eliminar la subcapa MAC"
          ],
          "correct": 0
        },
        {
          "question": "Dos equipos transmiten al mismo tiempo por un canal compartido sin coordinación. ¿Qué fenómeno debe contemplar un protocolo de acceso múltiple?",
          "answers": [
            "Enrutamiento asimétrico",
            "Colisión",
            "Fragmentación IP",
            "Resolución DNS"
          ],
          "correct": 1
        },
        {
          "question": "En ALOHA puro, una estación termina de preparar su trama. ¿Qué puede hacer a continuación?",
          "answers": [
            "Esperar necesariamente al siguiente intervalo sincronizado",
            "Transmitirla sin esperar una ranura preestablecida",
            "Solicitar un testigo antes de transmitir",
            "Reservar una frecuencia mediante FDM"
          ],
          "correct": 1
        },
        {
          "question": "En ALOHA puro, una trama no llega correctamente a su destino. ¿Qué comportamiento se describe?",
          "answers": [
            "Se retransmite hasta lograr enviarla con éxito",
            "Se descarta definitivamente sin más intentos",
            "Se convierte en una trama Ethernet de control",
            "Se entrega al siguiente usuario"
          ],
          "correct": 0
        },
        {
          "question": "En el ejemplo de ALOHA puro de los apuntes, ¿cuándo vuelve el usuario a escribir una nueva línea?",
          "answers": [
            "Al empezar cualquier ranura temporal",
            "Tras comprobar que el envío anterior tuvo éxito y recibir respuesta",
            "En cuanto otro usuario ocupa el canal",
            "Solo al obtener el testigo"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué cambio permite que ALOHA ranurado limite los instantes en los que puede iniciarse una transmisión?",
          "answers": [
            "Usar direcciones IP distintas",
            "Dividir el tiempo en ranuras con límites acordados",
            "Eliminar las tramas de datos",
            "Sustituir el canal compartido por enlaces dedicados"
          ],
          "correct": 1
        },
        {
          "question": "Una estación tiene una trama lista justo después de comenzar una ranura de ALOHA ranurado. ¿Cuándo debe empezar a transmitir?",
          "answers": [
            "Inmediatamente, sin atender al reloj",
            "En el siguiente límite de ranura permitido",
            "Solo después de recibir un token",
            "Al detectar una dirección MAC desconocida"
          ],
          "correct": 1
        },
        {
          "question": "¿Por qué un sistema ALOHA ranurado necesita que las estaciones compartan una referencia temporal?",
          "answers": [
            "Para coincidir en los límites de las ranuras",
            "Para calcular máscaras de subred",
            "Para codificar cada bit en Manchester",
            "Para evitar que existan tramas"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué función desempeña el «pip» emitido por una estación especial en el ejemplo de ALOHA ranurado?",
          "answers": [
            "Anunciar una colisión ya producida",
            "Marcar el inicio de cada intervalo temporal",
            "Asignar una dirección IP",
            "Indicar que Ethernet está desconectada"
          ],
          "correct": 1
        },
        {
          "question": "Según el material, ¿qué efecto tuvo la propuesta de Roberts de 1972 sobre la capacidad de ALOHA?",
          "answers": [
            "La redujo a la mitad",
            "La duplicó",
            "La mantuvo igual",
            "La hizo ilimitada"
          ],
          "correct": 1
        },
        {
          "question": "Una estación escucha el canal antes de actuar, en vez de transmitir sin comprobarlo. ¿A qué familia pertenece este mecanismo?",
          "answers": [
            "Protocolos con detección de portadora (CSMA)",
            "Protocolos de encaminamiento",
            "Protocolos de aplicación",
            "Codificación Manchester"
          ],
          "correct": 0
        },
        {
          "question": "¿Cuál es la diferencia esencial entre ALOHA puro y un protocolo con detección de portadora?",
          "answers": [
            "ALOHA puro escucha siempre antes de enviar",
            "CSMA toma decisiones a partir de si percibe una transmisión en el medio",
            "CSMA solo funciona con ranuras de ALOHA",
            "ALOHA puro usa testigo"
          ],
          "correct": 1
        },
        {
          "question": "En el índice de protocolos con detección de portadora, ¿qué dos modalidades de CSMA se presentan?",
          "answers": [
            "Conmutado y enrutado",
            "Persistente y no persistente",
            "Centralizado y cifrado",
            "Físico y lógico"
          ],
          "correct": 1
        },
        {
          "question": "Una estación CSMA/CD transmite y compara lo que lee del medio con lo que está enviando. Si observa distorsión, ¿qué infiere?",
          "answers": [
            "Que el destino cambió de IP",
            "Que ha ocurrido una colisión",
            "Que el token expiró",
            "Que la trama es demasiado larga"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué describe correctamente la función adicional de CSMA/CD respecto a limitarse a detectar portadora?",
          "answers": [
            "Detecta colisiones durante el proceso de transmisión",
            "Asigna direcciones MAC nuevas",
            "Convierte una LAN en WAN",
            "Evita el uso de tramas"
          ],
          "correct": 0
        },
        {
          "question": "¿En qué tipo de Ethernet sitúan los apuntes el uso histórico de CSMA/CD?",
          "answers": [
            "Ethernet clásica",
            "Únicamente Ethernet de 10 Gbit/s",
            "Solo enlaces de fibra punto a punto sin compartición",
            "Exclusivamente redes Wi-Fi modernas"
          ],
          "correct": 0
        },
        {
          "question": "En CSMA/CD, ¿cuál de las siguientes secuencias contiene exclusivamente estados descritos en el tema?",
          "answers": [
            "Escucha, encaminamiento, cifrado",
            "Contención, transmisión, inactivo",
            "Solicitud, concesión, cierre TCP",
            "Sincronización, aplicación, sesión"
          ],
          "correct": 1
        },
        {
          "question": "Una estación ya ha capturado inequívocamente el canal mediante CSMA/CD. Según los apuntes, ¿qué sucede con las colisiones?",
          "answers": [
            "Continúan necesariamente durante toda la trama",
            "Ya no se producen una vez capturado el canal",
            "Se convierten en errores de direccionamiento IP",
            "Aparecen únicamente al recibir un testigo"
          ],
          "correct": 1
        },
        {
          "question": "¿En qué momento se siguen produciendo colisiones en un sistema CSMA/CD?",
          "answers": [
            "Durante el período de contienda",
            "Solo después de que termine toda comunicación",
            "Únicamente en el nivel de aplicación",
            "Solo cuando se usa FDM"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué escenario señalan los apuntes como perjudicial para el rendimiento de CSMA/CD?",
          "answers": [
            "Cable largo y tramas cortas",
            "Cable corto y ausencia de estaciones",
            "Una única estación con canal exclusivo",
            "Sin tráfico ni retardo de propagación"
          ],
          "correct": 0
        },
        {
          "question": "¿Por qué el retardo de propagación elevado puede perjudicar el rendimiento en un medio compartido con CSMA/CD?",
          "answers": [
            "Hace más problemático el período en que las estaciones compiten por el canal",
            "Obliga a sustituir todas las MAC por IP",
            "Impide representar bits con señales físicas",
            "Convierte el enlace en una aplicación"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué efecto tienen las colisiones sobre el uso del ancho de banda, según los apuntes?",
          "answers": [
            "Reducen el ancho de banda útil",
            "Aumentan siempre el ancho de banda disponible",
            "No influyen en el tiempo de envío",
            "Eliminan la necesidad de protocolos MAC"
          ],
          "correct": 0
        },
        {
          "question": "Para tráfico de voz o videoconferencia en tiempo real, ¿por qué interesan los protocolos libres de colisiones?",
          "answers": [
            "Porque evitan pérdidas de tiempo debidas a contiendas con colisiones",
            "Porque garantizan cifrado de extremo a extremo",
            "Porque sustituyen los routers de Internet",
            "Porque asignan automáticamente nombres DNS"
          ],
          "correct": 0
        },
        {
          "question": "En un protocolo de mapa de bits con N estaciones, ¿cuántas posiciones tiene cada período de contención?",
          "answers": [
            "Una por trama recibida",
            "N posiciones, una por estación",
            "Siempre dos posiciones",
            "Un número igual a la velocidad del enlace"
          ],
          "correct": 1
        },
        {
          "question": "En el mapa de bits, la estación 4 tiene una trama pendiente. ¿Cómo anuncia que desea transmitir?",
          "answers": [
            "Emitiendo un bit en la ranura 4",
            "Transmitiendo toda la trama durante la ranura 0",
            "Solicitando una dirección IP",
            "Tomando el testigo de la estación 0"
          ],
          "correct": 0
        },
        {
          "question": "Tras las N ranuras de anuncio en el protocolo de mapa de bits, ¿en qué orden transmiten las estaciones que tienen tramas?",
          "answers": [
            "En orden numérico",
            "En orden aleatorio",
            "Siempre primero la última estación",
            "Según el tamaño de su dirección IP"
          ],
          "correct": 0
        },
        {
          "question": "En una red de paso de testigo, una estación no tiene el testigo. ¿Qué condición le falta para transmitir según este protocolo?",
          "answers": [
            "Recibir el mensaje de autorización que circula en el orden predefinido",
            "Sincronizarse con ranuras ALOHA",
            "Detectar una colisión",
            "Conocer la máscara de subred"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué tecnologías se citan como ejemplos de redes basadas en paso de testigo?",
          "answers": [
            "Token Ring y Token Bus",
            "HTTP y DNS",
            "ARP y DHCP",
            "TCP y UDP"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "t2-3",
      "nombre": "Test T2.3 - Ethernet clásica, tramas y Manchester",
      "preguntas": [
        {
          "question": "¿Quiénes diseñaron e implementaron la primera LAN Ethernet en Xerox PARC según los apuntes?",
          "answers": [
            "Norman Abramson y Roberts",
            "Bob Metcalfe y David Boggs",
            "Vint Cerf y Bob Kahn",
            "Claude Shannon y Alan Turing"
          ],
          "correct": 1
        },
        {
          "question": "¿En qué año sitúan los apuntes la primera LAN Ethernet de Xerox PARC?",
          "answers": [
            "1970",
            "1973",
            "1976",
            "1983"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué velocidad tenía la primera red Ethernet de Xerox PARC mencionada en el tema?",
          "answers": [
            "1 Mbps",
            "3 Mbps",
            "10 Mbps",
            "100 Mbps"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué medio empleaba aquella primera Ethernet de Xerox PARC?",
          "answers": [
            "Fibra óptica multimodo",
            "Par trenzado sin apantallar",
            "Cable coaxial largo y grueso",
            "Radio de 2,4 GHz"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué tres empresas participaron en la especificación Ethernet de 10 Mbps publicada en 1978?",
          "answers": [
            "Xerox, DEC e Intel",
            "IBM, Cisco y Apple",
            "Microsoft, HP y Nokia",
            "Xerox, IBM y Motorola"
          ],
          "correct": 0
        },
        {
          "question": "¿En qué año se convirtió Ethernet en el estándar IEEE 802.3, según los apuntes?",
          "answers": [
            "1976",
            "1978",
            "1983",
            "1995"
          ],
          "correct": 2
        },
        {
          "question": "¿Cuál es la longitud máxima de segmento indicada para Thick Ethernet?",
          "answers": [
            "100 m",
            "185 m",
            "500 m",
            "2000 m"
          ],
          "correct": 2
        },
        {
          "question": "¿Cuántos equipos podía conectar como máximo un segmento Thick Ethernet, según la diapositiva?",
          "answers": [
            "10",
            "30",
            "64",
            "100"
          ],
          "correct": 3
        },
        {
          "question": "¿Cuál es la longitud máxima indicada para un segmento Thin Ethernet?",
          "answers": [
            "85 m",
            "100 m",
            "185 m",
            "500 m"
          ],
          "correct": 2
        },
        {
          "question": "¿Cuántos ordenadores se indican como máximo en un segmento Thin Ethernet?",
          "answers": [
            "10",
            "30",
            "100",
            "255"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué conectores se mencionan para Thin Ethernet?",
          "answers": [
            "RJ-45",
            "LC",
            "BNC",
            "SC"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué dispositivo permitía unir segmentos coaxiales para alcanzar mayores distancias en Ethernet clásica?",
          "answers": [
            "Router",
            "Repetidor",
            "Cortafuegos",
            "Servidor DHCP"
          ],
          "correct": 1
        },
        {
          "question": "¿A qué capa OSI pertenece un repetidor Ethernet según los apuntes?",
          "answers": [
            "Física",
            "Enlace de datos",
            "Red",
            "Transporte"
          ],
          "correct": 0
        },
        {
          "question": "¿Cuál es la función de un repetidor descrita en el tema?",
          "answers": [
            "Decidir rutas IP entre redes",
            "Filtrar tramas por MAC",
            "Recibir, amplificar y retransmitir señales",
            "Traducir nombres DNS"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué técnica de codificación se estudia expresamente en la sección de Ethernet clásica?",
          "answers": [
            "Manchester",
            "8b/10b exclusivamente",
            "QAM-256",
            "OFDM"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué característica básica permite recuperar el reloj en una señal codificada con Manchester?",
          "answers": [
            "Cada bit contiene una transición a mitad del intervalo",
            "Todos los bits 1 se transmiten sin transición",
            "El receptor necesita una señal de reloj separada",
            "La señal solo puede transmitirse por fibra"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué dos formatos de trama Ethernet compara la diapositiva de la subcapa MAC?",
          "answers": [
            "Ethernet DIX e IEEE 802.3",
            "IPv4 e IPv6",
            "Token Ring y Token Bus",
            "TCP y UDP"
          ],
          "correct": 0
        },
        {
          "question": "En Ethernet clásica con CSMA/CD, ¿qué representa 2τ?",
          "answers": [
            "El tiempo de transmisión de una dirección MAC",
            "El tiempo máximo de ida y vuelta de propagación relevante para detectar una colisión",
            "La duración de una trama de 2 bytes",
            "El intervalo entre dos direcciones IP"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué ocurre con el intervalo de contención al aumentar la longitud del cable, según los apuntes?",
          "answers": [
            "Disminuye siempre",
            "No cambia",
            "Aumenta",
            "Se hace cero"
          ],
          "correct": 2
        },
        {
          "question": "¿Por qué el estándar Ethernet fija una longitud máxima de cable en el análisis de rendimiento?",
          "answers": [
            "Para limitar el retardo de propagación y el intervalo de contención",
            "Para que todas las IP sean privadas",
            "Para impedir el uso de switches",
            "Para aumentar el tamaño de la dirección MAC"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué variables aparecen en la reformulación del rendimiento Ethernet propuesta en los apuntes?",
          "answers": [
            "Solo direcciones IP y máscaras",
            "Longitud de trama, ancho de banda, longitud del cable y velocidad de propagación",
            "Únicamente número de routers",
            "Solo número de puertos TCP"
          ],
          "correct": 1
        },
        {
          "question": "En la arquitectura Ethernet con concentrador central descrita en el tema, ¿cómo se conecta cada estación?",
          "answers": [
            "A un cable dedicado hasta el concentrador",
            "Directamente a todos los demás equipos",
            "Mediante un único anillo sin concentrador",
            "A través de un satélite"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué ventaja de mantenimiento aporta el cableado hacia un concentrador central?",
          "answers": [
            "Hace más fácil añadir y retirar estaciones",
            "Elimina toda necesidad de cableado",
            "Convierte automáticamente Ethernet en una WAN",
            "Obliga a cambiar las direcciones MAC"
          ],
          "correct": 0
        },
        {
          "question": "¿Por qué un hub no incrementa la capacidad agregada de una Ethernet compartida?",
          "answers": [
            "Porque crea una red IP distinta por puerto",
            "Porque se comporta como un medio compartido equivalente al cable largo clásico",
            "Porque cifra cada trama",
            "Porque solo admite fibra óptica"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué ocurre con el rendimiento disponible por estación en una red con hub cuando se añaden muchas estaciones activas?",
          "answers": [
            "Aumenta sin límite",
            "Permanece idéntico en cualquier carga",
            "Tiende a deteriorarse por compartir el medio",
            "Se multiplica por el número de puertos"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué dispositivo propone el tema para superar las limitaciones de capacidad de los hubs?",
          "answers": [
            "Switch",
            "Repetidor coaxial",
            "Módem analógico",
            "Terminador BNC"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué debe determinar un switch Ethernet para reenviar correctamente una trama?",
          "answers": [
            "Qué trama corresponde a qué estación de destino",
            "Qué aplicación usa más memoria",
            "Qué máscara tiene el servidor DNS",
            "Qué usuario inició sesión"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué ventaja respecto a las colisiones atribuyen los apuntes a Ethernet conmutada?",
          "answers": [
            "El switch aumenta las colisiones",
            "Las colisiones dejan de producirse en enlaces conmutados apropiados",
            "El switch exige usar ALOHA",
            "Las colisiones se trasladan a la capa de aplicación"
          ],
          "correct": 1
        },
        {
          "question": "¿Cuál de estas afirmaciones diferencia correctamente un hub de un switch?",
          "answers": [
            "Ambos seleccionan siempre el destino MAC de cada trama",
            "El hub repite señales; el switch puede dirigir tramas al puerto correspondiente",
            "El hub enruta IP y el switch no trabaja con tramas",
            "El switch es un repetidor de capa física sin aprendizaje"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué afirmación resume la evolución tratada en la sección Ethernet del tema?",
          "answers": [
            "De enlaces coaxiales compartidos a conexiones centralizadas y conmutación",
            "De Ethernet a redes exclusivamente inalámbricas",
            "De redes conmutadas a un único coaxial obligatorio",
            "De direcciones MAC a direcciones telefónicas"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "t2-4",
      "nombre": "Test T2.4 - Rendimiento y Ethernet conmutada",
      "preguntas": [
        {
          "question": "¿Por qué influye la longitud máxima del cable en el rendimiento de Ethernet compartida?",
          "answers": [
            "Porque determina la dirección MAC",
            "Porque aumenta el tiempo de propagación y el intervalo de contienda",
            "Porque reduce el tamaño de la cabecera IP",
            "Porque elimina las retransmisiones"
          ],
          "correct": 1
        },
        {
          "question": "Si dos estaciones están más alejadas en una Ethernet compartida, ¿qué ocurre con el retardo de propagación?",
          "answers": [
            "Disminuye",
            "Se mantiene necesariamente en cero",
            "Aumenta",
            "Depende solo del tamaño del disco"
          ],
          "correct": 2
        },
        {
          "question": "¿Cuál es el tiempo máximo aproximado que puede transcurrir hasta detectar una colisión en el caso extremo descrito en los apuntes?",
          "answers": [
            "τ/2",
            "τ",
            "4τ",
            "2τ"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué representa τ en el análisis del intervalo de contienda de Ethernet?",
          "answers": [
            "El tiempo de propagación en un sentido",
            "La tasa de transmisión",
            "El tamaño mínimo de la trama",
            "El número de puertos del switch"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué relación existe entre una mayor distancia entre estaciones y el intervalo de contienda?",
          "answers": [
            "Una mayor distancia tiende a ampliarlo",
            "La distancia no afecta nunca",
            "Una mayor distancia lo hace negativo",
            "La distancia sustituye al protocolo MAC"
          ],
          "correct": 0
        },
        {
          "question": "En el análisis de rendimiento de Ethernet, ¿qué magnitud representa F?",
          "answers": [
            "La frecuencia del procesador",
            "La longitud de trama",
            "El número de routers",
            "El número de dominios de difusión"
          ],
          "correct": 1
        },
        {
          "question": "En la formulación del rendimiento Ethernet, ¿qué magnitud representa B?",
          "answers": [
            "El número de bridges",
            "El tamaño del búfer",
            "El ancho de banda de la red",
            "La longitud del cable"
          ],
          "correct": 2
        },
        {
          "question": "En la formulación del rendimiento Ethernet, ¿qué magnitud representa L?",
          "answers": [
            "El tiempo de propagación",
            "La longitud del cable",
            "El número de estaciones activas",
            "La longitud de la dirección MAC"
          ],
          "correct": 1
        },
        {
          "question": "En la formulación del rendimiento Ethernet, ¿qué representa c?",
          "answers": [
            "La velocidad de propagación de la señal",
            "La capacidad del disco",
            "El número de colisiones",
            "El tamaño de la cabecera"
          ],
          "correct": 0
        },
        {
          "question": "Si se mantiene la distancia y aumenta la velocidad de transmisión B, ¿qué pasa con el tiempo necesario para transmitir una trama de F bits?",
          "answers": [
            "Aumenta siempre",
            "No cambia nunca",
            "Disminuye",
            "Se convierte en el retardo de propagación"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué relación expresa el tiempo de transmisión de una trama de F bits a una tasa B?",
          "answers": [
            "F/B",
            "B/F",
            "F×B",
            "2B/F"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué aproximación corresponde al retardo de propagación en un cable de longitud L con velocidad c?",
          "answers": [
            "L×c",
            "L/c",
            "c/L",
            "F/B"
          ],
          "correct": 1
        },
        {
          "question": "En una Ethernet compartida con un hub, ¿qué sucede al conectar más estaciones activas?",
          "answers": [
            "Se crea un canal independiente para cada estación",
            "El hub multiplica la capacidad total",
            "Puede reducirse el rendimiento disponible por estación",
            "Desaparecen las colisiones por completo"
          ],
          "correct": 2
        },
        {
          "question": "¿Por qué un hub no mejora por sí solo la capacidad de una Ethernet compartida?",
          "answers": [
            "Porque funciona como un medio compartido equivalente al cable único",
            "Porque convierte automáticamente Ethernet en Wi-Fi",
            "Porque asigna una VLAN por puerto",
            "Porque enruta cada paquete por IP"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué ventaja de cableado introduce la topología física en estrella frente al coaxial compartido?",
          "answers": [
            "Obliga a apagar toda la red al añadir un equipo",
            "Facilita añadir o retirar estaciones",
            "Elimina la necesidad de cables",
            "Impide usar switches"
          ],
          "correct": 1
        },
        {
          "question": "¿Cuál es la función esencial de un switch Ethernet frente a un hub?",
          "answers": [
            "Amplificar siempre hacia todos los puertos",
            "Traducir direcciones IPv4 en nombres DNS",
            "Seleccionar el puerto de salida adecuado para las tramas",
            "Sustituir las direcciones MAC por números de teléfono"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué información necesita aprender un switch para reenviar selectivamente una trama?",
          "answers": [
            "La dirección MAC asociada a cada puerto",
            "La contraseña del usuario",
            "La velocidad del ventilador",
            "El nombre de la aplicación"
          ],
          "correct": 0
        },
        {
          "question": "En una red con switch y enlaces punto a punto full-duplex, ¿qué ocurre con las colisiones Ethernet?",
          "answers": [
            "Son obligatorias en cada trama",
            "No se producen por contienda del medio compartido",
            "Aumentan con cada puerto",
            "Se detectan mediante ARP"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué diferencia fundamental existe entre un hub y un switch en cuanto al tráfico recibido?",
          "answers": [
            "El hub filtra por IP; el switch nunca filtra",
            "Ambos transmiten exclusivamente por radio",
            "El hub repite la señal; el switch decide el reenvío según la trama",
            "El switch no recibe tramas Ethernet"
          ],
          "correct": 2
        },
        {
          "question": "¿Cuál es una consecuencia de dedicar un enlace físico a cada estación en una Ethernet conmutada?",
          "answers": [
            "Cada estación deja de compartir necesariamente el mismo segmento físico de colisión",
            "Todos los equipos usan el mismo cable coaxial",
            "Se pierde la posibilidad de conectar nuevos equipos",
            "Las direcciones MAC dejan de existir"
          ],
          "correct": 0
        },
        {
          "question": "¿Por qué se presenta la conmutación como solución al aumento de demanda de ancho de banda?",
          "answers": [
            "Porque el switch reduce toda la red a 1 Mbps",
            "Porque permite separar el tráfico entre enlaces y evitar compartir un único canal",
            "Porque elimina el protocolo Ethernet",
            "Porque sustituye las tramas por señales analógicas sin control"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué ventaja adicional mencionan los apuntes al hablar del uso de switches?",
          "answers": [
            "Eliminación de todas las direcciones IP",
            "Ausencia de necesidad de alimentación",
            "Beneficios de seguridad",
            "Desaparición de cualquier broadcast"
          ],
          "correct": 2
        },
        {
          "question": "Una oficina cambia un hub por un switch sin aumentar la velocidad nominal de los enlaces. ¿Qué mejora puede conseguir?",
          "answers": [
            "Menor contienda al separar enlaces de los equipos",
            "Mayor diámetro de cable coaxial obligatorio",
            "Conversión automática a fibra óptica",
            "Una sola colisión por segundo garantizada"
          ],
          "correct": 0
        },
        {
          "question": "En una Ethernet compartida, ¿qué efecto tiene que dos estaciones intenten transmitir a la vez?",
          "answers": [
            "Se fusionan automáticamente ambas tramas",
            "Puede producirse una colisión y ser necesaria una retransmisión",
            "El router incrementa la TTL",
            "La trama se convierte en un datagrama IP"
          ],
          "correct": 1
        },
        {
          "question": "¿Cuál de estos factores puede empeorar el rendimiento de Ethernet clásica al aumentar?",
          "answers": [
            "La eficiencia de la codificación de texto",
            "La memoria RAM de los hosts",
            "El tiempo perdido en contienda y colisiones",
            "El número de puertos USB"
          ],
          "correct": 2
        },
        {
          "question": "Si una trama es muy corta y el retardo de propagación es relativamente alto, ¿qué problema puede aparecer en un medio compartido?",
          "answers": [
            "La contienda representa una fracción importante del tiempo útil",
            "La trama no necesita dirección MAC",
            "La velocidad de propagación supera la luz",
            "Se desactiva la capa de enlace"
          ],
          "correct": 0
        },
        {
          "question": "¿Cuál de las siguientes afirmaciones describe mejor una topología física en estrella con hub?",
          "answers": [
            "Cada puerto forma siempre un dominio de colisión independiente",
            "La disposición física es estrella, pero el medio sigue siendo compartido",
            "No existe tráfico entre estaciones",
            "Se requiere un router en cada puerto"
          ],
          "correct": 1
        },
        {
          "question": "¿Cuál de las siguientes afirmaciones describe mejor una estrella con switch?",
          "answers": [
            "Todos los puertos actúan como un único cable coaxial",
            "No es posible reenviar tramas unicast",
            "El dispositivo central puede conmutar tramas hacia puertos específicos",
            "Los enlaces no transportan tramas Ethernet"
          ],
          "correct": 2
        },
        {
          "question": "Si el tiempo de transmisión F/B disminuye pero el retardo de propagación L/c permanece, ¿qué parte gana peso relativo en una Ethernet compartida?",
          "answers": [
            "El retardo de propagación y la contienda",
            "La longitud de la contraseña",
            "La capacidad del disco",
            "La frecuencia de refresco del monitor"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué idea resume el apartado de rendimiento y Ethernet conmutada del Tema 2?",
          "answers": [
            "La distancia y las colisiones condicionan el medio compartido; la conmutación mejora su aprovechamiento",
            "Los hubs garantizan ancho de banda exclusivo por estación",
            "La Ethernet conmutada requiere siempre cable coaxial grueso",
            "La longitud de cable no tiene ninguna influencia física"
          ],
          "correct": 0
        }
      ]
    }
  ]
};
