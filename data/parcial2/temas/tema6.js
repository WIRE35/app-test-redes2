const tema6 = {
  "id": "tema6",
  "tema": "Tema 6 — VLAN y enlaces troncales",
  "tests": [
    {
      "id": "t6-1",
      "nombre": "Test T6.1 - Fundamentos, ventajas y tipos de VLAN",
      "preguntas": [
        {
          "question": "¿Qué es una VLAN?",
          "answers": [
            "Un grupo lógico de dispositivos que comparte un dominio de broadcast",
            "Una red física obligatoriamente aislada",
            "Un protocolo de enrutamiento",
            "Un cable dedicado a cada departamento"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué permite una VLAN respecto a la ubicación de los usuarios?",
          "answers": [
            "Agrupar solo equipos en la misma planta",
            "Eliminar switches entre edificios",
            "Compartir siempre la misma subred con todas las VLAN",
            "Agruparlos lógicamente aunque estén en edificios distintos"
          ],
          "correct": 3
        },
        {
          "question": "En el ejemplo universitario, ¿qué ventaja tiene crear VLAN Estudiante y Docente?",
          "answers": [
            "Impedir que existan enlaces troncales",
            "Hacer que todos compartan broadcasts",
            "Aplicar políticas diferentes a ambos grupos",
            "Evitar toda configuración de puertos"
          ],
          "correct": 2
        },
        {
          "question": "¿A qué capa corresponde principalmente la segmentación mediante VLAN en switches?",
          "answers": [
            "Capa 1",
            "Capa 2",
            "Capa 4",
            "Capa 7"
          ],
          "correct": 1
        },
        {
          "question": "¿Cuál es el efecto de separar seis PCs en tres VLAN?",
          "answers": [
            "Crear tres dominios de broadcast",
            "Crear seis routers",
            "Crear un único dominio de broadcast",
            "Eliminar las direcciones MAC"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué beneficio de VLAN reduce la difusión de tráfico innecesario?",
          "answers": [
            "Aumento obligatorio de enlaces",
            "Más tormentas broadcast",
            "Desactivación de Ethernet",
            "Mejor rendimiento"
          ],
          "correct": 3
        },
        {
          "question": "¿Por qué las VLAN mejoran la seguridad?",
          "answers": [
            "Cifran automáticamente todas las tramas",
            "Sustituyen todas las contraseñas",
            "Separan lógicamente grupos con datos sensibles",
            "Impiden cualquier ataque de red"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué beneficio permite reutilizar mejor enlaces y ancho de banda?",
          "answers": [
            "Aumento de puertos físicos necesarios",
            "Reducción de costes",
            "Duplicación de cableado por VLAN",
            "Eliminación de la conmutación"
          ],
          "correct": 1
        },
        {
          "question": "¿Cómo ayudan las VLAN al personal de TI?",
          "answers": [
            "Usuarios similares comparten políticas y una VLAN identificable",
            "Cada PC requiere un switch independiente",
            "Las políticas dejan de existir",
            "Todas las VLAN deben tener el mismo nombre"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué beneficio facilitan las VLAN para proyectos específicos?",
          "answers": [
            "Eliminar servidores de aplicaciones",
            "Prohibir trabajo entre edificios",
            "Sustituir la red IP",
            "Agrupar equipos y usuarios por necesidades de aplicación"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué VLAN aparece como ejemplo de Cuerpo docente?",
          "answers": [
            "VLAN 20",
            "VLAN 30",
            "VLAN 10",
            "VLAN 150"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué VLAN aparece como ejemplo de Estudiante?",
          "answers": [
            "VLAN 10",
            "VLAN 20",
            "VLAN 30",
            "VLAN 99"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué VLAN aparece como ejemplo de Invitado?",
          "answers": [
            "VLAN 30",
            "VLAN 150",
            "VLAN 1",
            "VLAN 10"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué IDs corresponden al rango normal según los apuntes?",
          "answers": [
            "1006 a 4094",
            "0 a 65535",
            "4095 a 8191",
            "1 a 1005"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué IDs corresponden al rango extendido según los apuntes?",
          "answers": [
            "1 a 1005",
            "1 a 4096",
            "1006 a 4094",
            "1002 a 1005 exclusivamente"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué IDs se reservan para Token Ring y FDDI?",
          "answers": [
            "20 a 30",
            "1002 a 1005",
            "1006 a 1010",
            "150 a 155"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué VLAN no puede eliminarse ni renombrarse en los switches Cisco descritos?",
          "answers": [
            "VLAN 1",
            "VLAN 20",
            "VLAN 99",
            "VLAN 150"
          ],
          "correct": 0
        },
        {
          "question": "¿Dónde se almacenan las VLAN de rango normal según el tema?",
          "answers": [
            "En la tabla ARP del PC",
            "En el registro DNS",
            "En la memoria ROM del teléfono IP",
            "En vlan.dat de la memoria flash"
          ],
          "correct": 3
        },
        {
          "question": "¿Dónde se guardan las VLAN de rango extendido según el material?",
          "answers": [
            "En vlan.dat exclusivamente",
            "En la caché del navegador",
            "En la configuración en ejecución",
            "En el servidor DHCP obligatoriamente"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué rango de VLAN puede asimilar VTP según las diapositivas?",
          "answers": [
            "Solo rango extendido",
            "Rango normal",
            "Solo VLAN de voz",
            "Todos los IDs sin excepción"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué describe una VLAN de datos?",
          "answers": [
            "Transporta tráfico de datos generado por usuarios",
            "Solo tráfico de voz",
            "Únicamente BPDU",
            "Solo mensajes de gestión"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué es la VLAN predeterminada en un switch Cisco recién iniciado?",
          "answers": [
            "VLAN 99, creada para voz",
            "VLAN 150, para datos",
            "VLAN 4094, para gestión",
            "VLAN 1, a la que pertenecen inicialmente los puertos"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué caracteriza a una VLAN de administración?",
          "answers": [
            "Obliga a conectar un router por cada puerto",
            "Solo transporta audio",
            "Permite acceder a la gestión del switch mediante una IP y máscara",
            "Es idéntica siempre a la VLAN de voz"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué protocolos menciona el tema para gestionar un switch por red?",
          "answers": [
            "SMTP, POP3, IMAP y FTP",
            "HTTP, Telnet, SSH y SNMP",
            "BGP, OSPF, RIP y EIGRP",
            "NTP, DNS, DHCP y ARP exclusivamente"
          ],
          "correct": 1
        },
        {
          "question": "¿Por qué se recomienda no usar VLAN 1 para administración?",
          "answers": [
            "Porque es la VLAN predeterminada y conviene separar la gestión",
            "Porque VLAN 1 no admite direcciones MAC",
            "Porque no puede transmitir tramas",
            "Porque VLAN 1 solo existe en routers"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "t6-2",
      "nombre": "Test T6.2 - VLAN de voz y funcionamiento de los puertos",
      "preguntas": [
        {
          "question": "¿Para qué se utiliza una VLAN de voz?",
          "answers": [
            "Enviar únicamente broadcasts ARP",
            "Separar y priorizar el tráfico VoIP",
            "Sustituir las VLAN de datos",
            "Evitar que el teléfono tenga dirección IP"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué requisito de demora cita el tema para VoIP?",
          "answers": [
            "Menos de 150 ms a través de la red",
            "Menos de 5 segundos",
            "Exactamente 500 ms",
            "Más de 1 segundo"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué necesita el tráfico VoIP según las diapositivas?",
          "answers": [
            "Solo cableado coaxial",
            "Ausencia de QoS",
            "Un puerto físico por cada paquete",
            "Ancho de banda garantizado y prioridad"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué otra necesidad de VoIP se menciona además de prioridad y latencia?",
          "answers": [
            "Desactivar el enrutamiento IP",
            "Usar siempre VLAN 1",
            "Poder encaminarse en áreas congestionadas",
            "Bloquear todo tráfico de datos"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué VLAN se reserva para voz en el ejemplo PC5?",
          "answers": [
            "VLAN 20",
            "VLAN 150",
            "VLAN 99",
            "VLAN 10"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué VLAN usa la PC5 para datos en ese ejemplo?",
          "answers": [
            "VLAN 20",
            "VLAN 150",
            "VLAN 1",
            "VLAN 99"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué puerto de S3 se configura en modo voz en el ejemplo?",
          "answers": [
            "F0/1",
            "F0/3",
            "F0/11",
            "F0/18"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué instrucción envía el switch al teléfono IP en modo voz?",
          "answers": [
            "Etiquetar toda trama de PC5 con VLAN 1",
            "Descartar la voz",
            "Etiquetar las tramas de voz con el ID de VLAN 150",
            "Cambiar la MAC de la PC"
          ],
          "correct": 2
        },
        {
          "question": "¿Cómo salen las tramas de datos de la PC5 hacia el switch a través del teléfono?",
          "answers": [
            "Con etiqueta de VLAN 150",
            "Sin etiquetar según el ejemplo",
            "Con doble etiqueta de VLAN 99",
            "Sin dirección MAC"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué hace el teléfono con la etiqueta de VLAN de los datos destinados a la PC5?",
          "answers": [
            "La elimina antes de entregar los datos al PC",
            "La conserva obligatoriamente hasta el PC",
            "La cambia por VLAN 150",
            "Descarta siempre la trama"
          ],
          "correct": 0
        },
        {
          "question": "¿Cuántos puertos tiene el switch integrado del teléfono Cisco descrito?",
          "answers": [
            "Un puerto gigabit",
            "Ocho puertos ópticos",
            "Dos puertos seriales",
            "Tres puertos 10/100"
          ],
          "correct": 3
        },
        {
          "question": "¿A qué se conecta el puerto 1 del teléfono IP Cisco descrito?",
          "answers": [
            "A la PC únicamente",
            "Al disco duro del teléfono",
            "Al switch de red u otro dispositivo VoIP",
            "Al servidor DNS exclusivamente"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué función cumple el puerto 2 del teléfono IP descrito?",
          "answers": [
            "Conexión a la PC",
            "Interfaz interna que transporta el tráfico del teléfono",
            "Enlace WAN serial",
            "Puerto de consola del switch externo"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué se conecta al puerto 3 del teléfono IP descrito?",
          "answers": [
            "Una PC u otro dispositivo",
            "Un segundo procesador del teléfono",
            "Solo un router",
            "Únicamente una fuente de alimentación"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué comportamiento tiene el enlace switch-teléfono con VLAN de voz?",
          "answers": [
            "Solo admite tráfico sin etiquetar",
            "Solo transmite una VLAN de datos etiquetada",
            "Convierte voz en tramas ARP",
            "Transporta voz etiquetada y datos sin etiquetar"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué es un puerto de switch en el contexto del tema?",
          "answers": [
            "Una interfaz que enruta siempre entre subredes",
            "Un servidor de políticas",
            "Una interfaz física de capa 2 asociada a VLAN",
            "Un puerto de aplicación TCP"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué se debe asignar obligatoriamente al crear una VLAN?",
          "answers": [
            "Una dirección IPv6 pública",
            "Un ID de VLAN",
            "Un dominio DNS",
            "Una contraseña por host"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué dato es opcional al crear una VLAN?",
          "answers": [
            "Su nombre descriptivo",
            "Su ID numérico",
            "La existencia del switch",
            "La interfaz física de origen"
          ],
          "correct": 0
        },
        {
          "question": "¿Cómo se asignan puertos en una VLAN estática?",
          "answers": [
            "Por la MAC mediante VMPS siempre",
            "Por una respuesta ARP automática",
            "Por la velocidad del enlace",
            "Manualmente por configuración del switch"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué puede ocurrir al asignar por CLI un puerto a una VLAN inexistente, según el tema?",
          "answers": [
            "Que el puerto se convierta en router",
            "Que se borren todas las VLAN",
            "Que el switch cree esa VLAN",
            "Que se desactive STP globalmente"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué servicio emplea la VLAN dinámica descrita?",
          "answers": [
            "DNSSEC",
            "VMPS",
            "NAT",
            "SMTP"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué dato usa VMPS para determinar la VLAN de un host?",
          "answers": [
            "La dirección MAC de origen",
            "El número de puerto TCP de destino",
            "La máscara IP del router",
            "La fecha de conexión"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué ventaja ofrece la asignación dinámica mediante VMPS?",
          "answers": [
            "Evitar el uso de direcciones MAC",
            "Eliminar la necesidad de switches",
            "Hacer que todas las VLAN sean nativas",
            "Mantener la VLAN del host al cambiarlo de puerto o switch"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué debe existir antes de configurar un puerto con VLAN de voz, según el tema?",
          "answers": [
            "Dos routers físicos",
            "Una VLAN extendida obligatoria",
            "Una VLAN de voz y otra de datos",
            "Un servidor FTP"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué sucede al conectar por primera vez un teléfono a un puerto en modo voz?",
          "answers": [
            "El teléfono borra todas las VLAN",
            "El switch comunica al teléfono su configuración e ID de VLAN de voz",
            "La PC adquiere prioridad sobre la voz",
            "El switch deja de transportar datos"
          ],
          "correct": 1
        }
      ]
    },
    {
      "id": "t6-3",
      "nombre": "Test T6.3 - Comunicación entre VLAN y dominios de broadcast",
      "preguntas": [
        {
          "question": "¿A qué puertos reenvía S2 un broadcast originado por PC1 en VLAN 10?",
          "answers": [
            "A todos los puertos de cualquier VLAN",
            "Solo a puertos de VLAN 20",
            "Solo a puertos pertenecientes a VLAN 10, excepto el de entrada",
            "A ningún puerto"
          ],
          "correct": 2
        },
        {
          "question": "¿En qué VLAN está PC1 en el ejemplo de docentes?",
          "answers": [
            "VLAN 20",
            "VLAN 10",
            "VLAN 30",
            "VLAN 150"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué equipo docente recibe el broadcast de PC1 en el ejemplo de S1-S2-S3?",
          "answers": [
            "PC4",
            "PC5",
            "PC6",
            "Ninguno aunque estén en la misma VLAN"
          ],
          "correct": 0
        },
        {
          "question": "¿Por qué PC5 no recibe el broadcast de PC1?",
          "answers": [
            "Tiene una MAC demasiado larga",
            "Está conectado a un switch diferente",
            "Las tramas broadcast no cruzan ningún switch",
            "Pertenece a otra VLAN"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué conexión une S2 con S1 en el ejemplo de broadcast?",
          "answers": [
            "Un cable dedicado a VLAN 10 únicamente",
            "Un enlace serial de router",
            "Un enlace troncal que admite las VLAN",
            "Una interfaz loopback"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué conexión une S1 con S3 en el ejemplo de broadcast?",
          "answers": [
            "Un enlace de capa 3 obligatorio",
            "Un enlace troncal que admite las VLAN",
            "Un cable exclusivo de voz",
            "Un enlace de consola"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué puerto de S1 reenvía hacia S3 el broadcast de VLAN 10 según la diapositiva?",
          "answers": [
            "F0/3",
            "F0/18",
            "F0/11",
            "F0/24"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué puerto de S3 entrega a PC4 el broadcast de VLAN 10?",
          "answers": [
            "F0/1",
            "F0/18",
            "F0/3",
            "F0/11"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué tipos de tráfico quedan limitados a su VLAN según el material?",
          "answers": [
            "Solo broadcast",
            "Solo voz",
            "Unicast, multicast y broadcast",
            "Solo tráfico TCP"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué permite que dos PCs en la misma VLAN se comuniquen aunque estén en switches distintos?",
          "answers": [
            "Asignarles necesariamente la misma MAC",
            "Enlaces entre switches que transporten esa VLAN",
            "Desactivar los troncales",
            "Poner todos los puertos en VLAN 1"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué sucede si dos PCs pertenecen a VLAN distintas y solo hay switches de capa 2?",
          "answers": [
            "No pueden comunicarse directamente entre VLAN sin enrutamiento",
            "Se comunican por broadcast automáticamente",
            "Un switch cambia su VLAN de forma espontánea",
            "El switch mezcla ambas VLAN"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué dispositivo puede enrutar tráfico entre VLAN según el tema?",
          "answers": [
            "Un repetidor Ethernet",
            "Un hub pasivo",
            "Un cable cruzado",
            "Un switch de capa 3"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué significa SVI?",
          "answers": [
            "Servidor virtual de Internet",
            "Identificador de VLAN serial",
            "Interfaz virtual de switch",
            "Interfaz de voz síncrona"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué es una SVI?",
          "answers": [
            "Un puerto físico de consola",
            "Una interfaz lógica configurada para una VLAN específica",
            "Un enlace troncal sin etiquetas",
            "Una dirección MAC reservada"
          ],
          "correct": 1
        },
        {
          "question": "¿Para qué se configura una SVI según las diapositivas?",
          "answers": [
            "Para enrutar entre VLAN o dar conectividad IP de gestión al switch",
            "Para eliminar el tráfico unicast",
            "Para reemplazar el cableado físico",
            "Para cambiar el tamaño de Ethernet"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué SVI se crea por defecto según el tema?",
          "answers": [
            "La de VLAN 150",
            "La de VLAN 4094",
            "La de VLAN 20",
            "La de VLAN 1"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué función cumplen las SVI de un switch capa 3 al enrutar entre VLAN?",
          "answers": [
            "Son servidores DHCP obligatorios",
            "Etiquetan todos los broadcasts para todas las VLAN",
            "Actúan como interfaces de router para cada VLAN",
            "Eliminan el uso de direcciones IP"
          ],
          "correct": 2
        },
        {
          "question": "¿Con qué comienza el ejemplo de PC1 comunicándose con PC5 entre VLAN?",
          "answers": [
            "PC1 envía un broadcast a todas las VLAN",
            "PC1 envía una petición ARP broadcast en VLAN 10",
            "PC5 cambia a VLAN 10",
            "S3 desactiva el enlace troncal"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué hace S2 con la petición ARP de PC1 en VLAN 10?",
          "answers": [
            "La difunde por puertos de VLAN 10 correspondientes",
            "La entrega directamente a VLAN 20",
            "La convierte en trama de voz",
            "La descarta por ser ARP"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué interfaz de S1 participa en la petición ARP de PC1?",
          "answers": [
            "La SVI de VLAN 150",
            "El puerto de consola",
            "La interfaz de VLAN 4094 exclusivamente",
            "La SVI de VLAN 10"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué devuelve S1 a PC1 en el ejemplo de enrutamiento inter-VLAN?",
          "answers": [
            "Un broadcast de VLAN 20 dirigido a todos los PCs",
            "Un mensaje VMPS de asignación",
            "Una respuesta ARP desde la SVI de VLAN 10",
            "Una etiqueta de VLAN nativa obligatoria"
          ],
          "correct": 2
        },
        {
          "question": "¿A qué destino lógico envía PC1 su trama unicast para alcanzar PC5 en otra VLAN?",
          "answers": [
            "Directamente a la MAC de PC5 sin enrutamiento",
            "A la interfaz de capa 3 correspondiente a su VLAN",
            "A todos los equipos de VLAN 20 por broadcast",
            "Al servidor VMPS"
          ],
          "correct": 1
        },
        {
          "question": "Si PC1 y PC4 están en VLAN 10 en switches distintos, ¿qué permite el trunk?",
          "answers": [
            "Conservar la pertenencia a VLAN 10 al atravesar switches",
            "Convertir PC4 en router",
            "Hacer que PC1 reciba tráfico de todas las VLAN",
            "Eliminar el aprendizaje MAC"
          ],
          "correct": 0
        },
        {
          "question": "Si se añade una VLAN 30, ¿qué ocurre con los broadcasts de VLAN 10?",
          "answers": [
            "Se duplican en VLAN 30 automáticamente",
            "Cambian a VLAN 1",
            "Se transforman en tráfico IP multicast",
            "Permanecen dentro del dominio de broadcast de VLAN 10"
          ],
          "correct": 3
        },
        {
          "question": "¿Cuál es la distinción fundamental entre switch de capa 2 y de capa 3 en este contexto?",
          "answers": [
            "El de capa 2 siempre enruta por IP",
            "El de capa 3 no aprende direcciones MAC",
            "El de capa 3 puede realizar enrutamiento entre VLAN",
            "El de capa 2 no admite VLAN"
          ],
          "correct": 2
        }
      ]
    },
    {
      "id": "t6-4",
      "nombre": "Test T6.4 - Enlaces troncales y etiquetado IEEE 802.1Q",
      "preguntas": [
        {
          "question": "¿Para qué sirve un enlace troncal entre switches?",
          "answers": [
            "Transportar exclusivamente una VLAN de acceso",
            "Conectar solo equipos finales",
            "Eliminar la necesidad de etiquetar tráfico entre switches",
            "Transportar tráfico de varias VLAN por un enlace físico"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué inconveniente muestra la figura con un enlace separado por subred?",
          "answers": [
            "Reduce el número de cables a uno",
            "Impide crear VLAN de datos",
            "Consume puertos y requiere nuevos enlaces al añadir subredes",
            "Aumenta los puertos libres"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué problema resuelve 802.1Q?",
          "answers": [
            "Asignar direcciones IP por DHCP",
            "Identificar a qué VLAN pertenece una trama en un troncal",
            "Elegir el puente raíz STP",
            "Cifrar todo tráfico Ethernet"
          ],
          "correct": 1
        },
        {
          "question": "¿Por qué el encabezado Ethernet original no basta en un troncal?",
          "answers": [
            "No incluye por sí solo la VLAN de pertenencia",
            "No contiene direcciones MAC",
            "No tiene campo de tipo",
            "No admite FCS"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué añade IEEE 802.1Q a la trama Ethernet?",
          "answers": [
            "Un encabezado IP adicional",
            "Una dirección MAC nueva del host",
            "Un paquete ARP completo",
            "Una etiqueta que identifica la VLAN"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué hace el switch al enviar por trunk una trama recibida por un puerto de acceso?",
          "answers": [
            "Borra la dirección MAC de destino",
            "Convierte la trama en IPv6",
            "Inserta la etiqueta correspondiente y recalcula FCS",
            "Cambia la VLAN de todos los puertos"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué campo 802.1Q utiliza el valor 0x8100?",
          "answers": [
            "VID",
            "EtherType o TPID",
            "FCS",
            "Dirección MAC origen"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué indica el valor TPID 0x8100 al switch receptor?",
          "answers": [
            "Que debe interpretar información de etiqueta VLAN",
            "Que la trama es obligatoriamente de voz",
            "Que debe reiniciar la interfaz",
            "Que el paquete usa TCP"
          ],
          "correct": 0
        },
        {
          "question": "¿Cuántos bits ocupa el campo de prioridad de usuario de 802.1Q?",
          "answers": [
            "12 bits",
            "8 bits",
            "16 bits",
            "3 bits"
          ],
          "correct": 3
        },
        {
          "question": "¿Con qué estándar se relaciona la prioridad de usuario de 802.1Q?",
          "answers": [
            "IEEE 802.11ac",
            "IEEE 802.3af",
            "IEEE 802.1p",
            "IEEE 802.1D exclusivamente"
          ],
          "correct": 2
        },
        {
          "question": "¿Cuántos bits ocupa el CFI según el tema?",
          "answers": [
            "3 bits",
            "1 bit",
            "12 bits",
            "4 bits"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué finalidad se atribuye al CFI en los apuntes?",
          "answers": [
            "Facilitar el transporte de tramas Token Ring por enlaces Ethernet",
            "Indicar la dirección IP del router",
            "Determinar el tamaño del paquete TCP",
            "Asignar la VLAN por MAC"
          ],
          "correct": 0
        },
        {
          "question": "¿Cuántos bits ocupa el VID en 802.1Q?",
          "answers": [
            "3 bits",
            "1 bit",
            "32 bits",
            "12 bits"
          ],
          "correct": 3
        },
        {
          "question": "¿Cuántos identificadores teóricos permite representar un VID de 12 bits?",
          "answers": [
            "1005",
            "150",
            "4096",
            "256"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué campo identifica concretamente el número de VLAN?",
          "answers": [
            "TPID",
            "VID",
            "FCS",
            "CFI"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué campo debe recalcularse tras insertar la etiqueta 802.1Q?",
          "answers": [
            "FCS",
            "MAC origen",
            "Dirección IP destino",
            "TTL"
          ],
          "correct": 0
        },
        {
          "question": "¿Cuál de estos valores pertenece al rango extendido de VLAN?",
          "answers": [
            "VLAN 20",
            "VLAN 99",
            "VLAN 1002",
            "VLAN 2000"
          ],
          "correct": 3
        },
        {
          "question": "¿Cuál de estos valores pertenece al rango normal de VLAN?",
          "answers": [
            "VLAN 2000",
            "VLAN 3000",
            "VLAN 900",
            "VLAN 4094"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué diferencia hay entre un puerto de acceso y uno troncal?",
          "answers": [
            "Acceso enruta IP y troncal no",
            "Acceso transporta la VLAN asignada; troncal varias VLAN",
            "Ambos transportan siempre todas las VLAN",
            "Troncal solo admite voz"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué ocurre con una trama etiquetada que llega a un switch por troncal?",
          "answers": [
            "El switch puede identificar su VLAN mediante el VID",
            "Se ignora siempre la etiqueta",
            "Se convierte necesariamente en broadcast",
            "Se reenvía a todas las VLAN"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué VLAN usa el ejemplo como nativa en el enlace troncal?",
          "answers": [
            "VLAN 150",
            "VLAN 20",
            "VLAN 30",
            "VLAN 99"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué sucede con una trama sin etiqueta recibida por un trunk Cisco?",
          "answers": [
            "Se envía a todas las VLAN",
            "Se descarta siempre",
            "Se asigna a la VLAN nativa del puerto",
            "Se asigna a la VLAN de voz"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué significa PVID en el contexto de la VLAN nativa?",
          "answers": [
            "Protocolo virtual de Internet distribuido",
            "Identificador de VLAN predeterminado del puerto",
            "Puerto de voz de identificación dinámica",
            "Prioridad VLAN de interfaz de datos"
          ],
          "correct": 1
        },
        {
          "question": "Si la VLAN nativa se configura como 99, ¿qué valor adopta PVID?",
          "answers": [
            "99",
            "1",
            "150",
            "4094"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué VLAN nativa se usa por defecto según el tema?",
          "answers": [
            "VLAN 99",
            "VLAN 20",
            "VLAN 150",
            "VLAN 1"
          ],
          "correct": 3
        }
      ]
    },
    {
      "id": "t6-5",
      "nombre": "Test T6.5 - Funcionamiento y comprobación de enlaces troncales",
      "preguntas": [
        {
          "question": "En una topología con S1, S2 y S3, ¿qué permite un trunk entre switches?",
          "answers": [
            "Llevar varias VLAN por el mismo enlace",
            "Mezclar todos los dominios broadcast",
            "Reemplazar las direcciones MAC por IP",
            "Convertir todos los puertos en routers"
          ],
          "correct": 0
        },
        {
          "question": "Si una trama de VLAN 20 sale por un troncal 802.1Q, ¿qué dato permite identificarla?",
          "answers": [
            "El puerto TCP de destino",
            "El nombre de la PC",
            "La máscara de subred de S1",
            "Su etiqueta VID 20"
          ],
          "correct": 3
        },
        {
          "question": "Si una trama de VLAN 10 llega por troncal a S3, ¿qué puertos de acceso son candidatos al reenvío?",
          "answers": [
            "Todos los de VLAN 20",
            "Solo los de VLAN 150",
            "Los asignados a VLAN 10",
            "Cualquier puerto sin considerar VLAN"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué hace el switch antes de entregar a una PC una trama que llegó etiquetada por trunk?",
          "answers": [
            "Mantiene obligatoriamente el VID en la PC",
            "La entrega sin la etiqueta de troncal por el puerto de acceso",
            "La convierte en una BPDU",
            "Le añade una segunda etiqueta de voz"
          ],
          "correct": 1
        },
        {
          "question": "Si S1 y S2 transportan VLAN 10 y 20 por un único enlace, ¿cómo se distingue el tráfico?",
          "answers": [
            "Por etiquetas VLAN en el troncal",
            "Por cables físicos independientes para cada VLAN",
            "Por la longitud de las MAC",
            "Por la velocidad de cada PC"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué problema aparece si una VLAN necesaria no se transporta por el troncal?",
          "answers": [
            "La VLAN pasa automáticamente a otra VLAN",
            "Todas las VLAN dejan de existir",
            "El switch cambia su dirección IP",
            "Los equipos de esa VLAN pueden perder conectividad entre switches"
          ],
          "correct": 3
        },
        {
          "question": "Si un puerto de acceso pertenece a VLAN 20, ¿qué VLAN se asocia a las tramas sin etiquetar que recibe?",
          "answers": [
            "VLAN 1 siempre",
            "VLAN 150",
            "VLAN 20",
            "Todas las VLAN a la vez"
          ],
          "correct": 2
        },
        {
          "question": "En el ejemplo, ¿qué equipos pueden recibir el broadcast de PC1 en VLAN 10?",
          "answers": [
            "Todos los invitados de VLAN 30",
            "Los equipos de VLAN 10 alcanzables por la topología",
            "Todos los estudiantes de VLAN 20",
            "Solo los teléfonos IP"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué papel cumple S1 como switch de capa 3 en el ejemplo inter-VLAN?",
          "answers": [
            "Enrutar entre VLAN mediante SVI",
            "Crear enlaces físicos independientes por VLAN",
            "Desactivar las VLAN al recibir ARP",
            "Convertir la voz en datos"
          ],
          "correct": 0
        },
        {
          "question": "Si PC1 envía datos a PC5 de otra VLAN, ¿qué necesita la red?",
          "answers": [
            "Un cable exclusivo PC1-PC5 obligatoriamente",
            "Una única VLAN nativa para ambas",
            "Que las PCs compartan MAC",
            "Un dispositivo de capa 3 que enrute entre ambas VLAN"
          ],
          "correct": 3
        },
        {
          "question": "¿Cuál es el efecto de cambiar la VLAN nativa de 1 a 99 en un trunk?",
          "answers": [
            "Todos los puertos de acceso pasan a VLAN 99",
            "Desaparecen las etiquetas 802.1Q",
            "Las tramas sin etiquetar se asocian a VLAN 99",
            "La VLAN 1 se elimina del switch"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué dato de una interfaz troncal conviene comprobar al diagnosticar tráfico sin etiquetar?",
          "answers": [
            "La frecuencia del procesador del PC",
            "La VLAN nativa o PVID",
            "La resolución de pantalla",
            "La versión del navegador"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué dato de un troncal interesa comprobar si VLAN 20 no cruza entre switches?",
          "answers": [
            "Que VLAN 20 esté admitida en el enlace",
            "Que el PC tenga antivirus",
            "Que el teléfono use VLAN 150",
            "Que el nombre de VLAN sea largo"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué indica que un enlace esté funcionando como troncal?",
          "answers": [
            "Que conecta siempre un PC directamente",
            "Que desactiva el etiquetado de todas las VLAN",
            "Que solo permite VLAN 1",
            "Que transporta las VLAN correspondientes entre switches"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué ocurre si se reemplazan cuatro enlaces por VLAN por un troncal único?",
          "answers": [
            "Se requieren más puertos por subred",
            "Se elimina la separación lógica",
            "Se liberan puertos físicos manteniendo varias VLAN",
            "Cada VLAN necesita un router dedicado"
          ],
          "correct": 2
        },
        {
          "question": "Si un switch recibe una trama etiquetada con VID 10 por un troncal, ¿qué identifica?",
          "answers": [
            "Que el host tiene IP terminada en 10",
            "La pertenencia de la trama a VLAN 10",
            "Que el enlace es de 10 Mbps",
            "Que la trama pertenece a VLAN 20"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué campo debe actualizarse cuando un switch añade etiqueta VLAN?",
          "answers": [
            "El FCS de la trama",
            "El TTL IP de todos los hosts",
            "El nombre de la VLAN",
            "La dirección DNS"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué debe comprobarse si un teléfono IP transporta voz y datos por el mismo enlace al switch?",
          "answers": [
            "Que ambos flujos usen siempre VLAN 1",
            "Que la PC etiquete obligatoriamente la voz",
            "Que el switch descarte el tráfico de voz",
            "Que la voz use su VLAN etiquetada y los datos la VLAN de acceso"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué ocurre si PC5 envía datos sin etiquetar a través del teléfono IP?",
          "answers": [
            "Se convierten en tráfico de VLAN 150",
            "Se envían a todos los dominios de broadcast",
            "El switch los asocia a la VLAN de datos del puerto",
            "Se bloquean por definición"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué función tiene una VLAN de administración en un switch?",
          "answers": [
            "Transportar exclusivamente llamadas",
            "Ofrecer conectividad IP para administrarlo",
            "Crear automáticamente rutas estáticas",
            "Sustituir los enlaces troncales"
          ],
          "correct": 1
        },
        {
          "question": "Si una SVI de VLAN 10 recibe tráfico dirigido a VLAN 20 en un switch capa 3, ¿qué puede hacer?",
          "answers": [
            "Enrutarlo hacia la VLAN 20",
            "Difundirlo como broadcast de capa 2 en todas las VLAN",
            "Cambiar el VID sin procesar capa 3",
            "Ignorar siempre el destino"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué implica que S2 y S3 estén unidos mediante S1 con troncales?",
          "answers": [
            "Todas las VLAN se convierten en una sola",
            "Las PCs ya no necesitan puertos de acceso",
            "Solo se transporta la VLAN nativa",
            "Una VLAN común puede extenderse a través de los tres switches"
          ],
          "correct": 3
        },
        {
          "question": "Si una trama sin etiqueta llega a un trunk con PVID 99, ¿dónde se clasifica?",
          "answers": [
            "En VLAN 20",
            "En VLAN 150",
            "En VLAN 99",
            "En todas las VLAN"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué distinción debe mantenerse al interpretar un diagrama con VLAN 10 y 20?",
          "answers": [
            "Que comparten automáticamente todos los broadcasts",
            "Que son dominios broadcast diferentes aunque compartan switches",
            "Que cada VLAN necesita cableado físico exclusivo",
            "Que las VLAN se definen por edificio únicamente"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué información determina si una trama viaja etiquetada por un troncal?",
          "answers": [
            "La VLAN asociada y las reglas de etiquetado 802.1Q",
            "La marca del monitor del usuario",
            "El puerto USB del PC",
            "El tamaño de la memoria RAM del switch"
          ],
          "correct": 0
        }
      ]
    }
  ]
};
