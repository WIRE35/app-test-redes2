const tema5 = {
  "id": "tema5",
  "tema": "Tema 5 — Tests de entrenamiento",
  "tests": [
    {
      "id": "t5-1",
      "nombre": "Test T5.1 - Redundancia y bucles de capa 2",
      "preguntas": [
        {
          "question": "¿Qué aporta la redundancia de capa 2 a una LAN jerárquica?",
          "answers": [
            "Impide todo tráfico broadcast",
            "Rutas alternativas para mantener la conectividad ante fallos",
            "Elimina la necesidad de switches",
            "Sustituye las VLAN por subredes IP"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué riesgo aparece al agregar enlaces redundantes sin un mecanismo de prevención?",
          "answers": [
            "Bucles de capa 2",
            "Fragmentación obligatoria de Ethernet",
            "Pérdida de direcciones IP por DHCP",
            "Disminución del tamaño de la tabla ARP"
          ],
          "correct": 0
        },
        {
          "question": "¿Por qué una trama Ethernet puede circular indefinidamente en un bucle?",
          "answers": [
            "No incorpora un campo TTL como los paquetes IP",
            "Se convierte automáticamente en un paquete IP",
            "Los switches eliminan siempre el broadcast",
            "Su dirección MAC cambia en cada salto"
          ],
          "correct": 0
        },
        {
          "question": "¿Cómo reenvía un switch una trama broadcast?",
          "answers": [
            "Solo al puerto de origen",
            "Solo hacia puertos con direcciones MAC conocidas",
            "Solo hacia el router predeterminado",
            "Por todos los puertos del dominio excepto por el de entrada"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué es una tormenta de broadcast?",
          "answers": [
            "Un aumento legítimo del tamaño de las tramas",
            "La transmisión de unicast a un único destino",
            "Acumulación de tramas broadcast en bucle que consume ancho de banda",
            "Un corte del suministro eléctrico del switch"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué puede suceder con la tabla MAC de un switch durante un bucle?",
          "answers": [
            "Solo almacena direcciones IP",
            "Puede volverse inestable al aprender una misma MAC por puertos distintos",
            "Se convierte en una tabla de enrutamiento",
            "Queda protegida por el TTL de Ethernet"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué efecto pueden tener los bucles sobre las tramas unicast?",
          "answers": [
            "Pueden provocar copias duplicadas de una trama",
            "Garantizan una única entrega",
            "Eliminan automáticamente la dirección destino",
            "Convierten todas las tramas en BPDU"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué problema puede provocar conectar por error dos puertos del mismo entorno con un cable?",
          "answers": [
            "Desactivar automáticamente todos los puertos",
            "Cambiar la máscara de subred",
            "Crear un bucle de capa 2",
            "Convertir el switch en router"
          ],
          "correct": 2
        },
        {
          "question": "¿Por qué un switch personal conectado incorrectamente puede ser peligroso?",
          "answers": [
            "Impide que existan broadcasts",
            "Puede introducir rutas redundantes no controladas y bucles",
            "Aumenta siempre el ancho de banda útil",
            "Desactiva las VLAN de toda la red"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué mecanismo evita bucles cuando hay varios caminos entre switches?",
          "answers": [
            "Asignar direcciones IP estáticas",
            "Aumentar el TTL de Ethernet",
            "STP habilitado",
            "Deshabilitar la tabla MAC"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué ocurre con la conectividad cuando falla un enlace y existe redundancia bien gestionada?",
          "answers": [
            "Puede utilizarse una ruta alternativa",
            "Todas las tramas se descartan para siempre",
            "Es obligatorio cambiar las MAC de los equipos",
            "La red queda necesariamente desconectada"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué se entiende por punto único de fallo?",
          "answers": [
            "Un puerto que recibe una BPDU",
            "Cualquier switch con dos interfaces",
            "Elemento cuya caída puede interrumpir la conectividad",
            "Un enlace troncal con varias VLAN"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué característica busca mejorar la redundancia?",
          "answers": [
            "Disponibilidad",
            "Número de bits del campo TTL Ethernet",
            "Longitud máxima de direcciones MAC",
            "Tamaño de cabeceras IP"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué sucede si una tormenta broadcast ocupa el ancho de banda?",
          "answers": [
            "Se eliminan todas las rutas redundantes",
            "Se degrada gravemente el tráfico normal",
            "Los switches pasan a capa 3",
            "La red incrementa su velocidad física"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué se debe considerar antes de introducir redundancia en una LAN?",
          "answers": [
            "La prevención de bucles de capa 2",
            "Reemplazar las tramas Ethernet por IP",
            "Desactivar siempre STP",
            "Eliminar todos los enlaces alternativos"
          ],
          "correct": 0
        },
        {
          "question": "Caso 1: en una LAN redundante, una MAC aparece alternativamente por dos puertos. ¿Qué concepto explica mejor lo observado?",
          "answers": [
            "ausencia de TTL en Ethernet",
            "tormenta de broadcast",
            "bloqueo lógico preventivo de STP",
            "inestabilidad de la tabla MAC"
          ],
          "correct": 3
        },
        {
          "question": "Caso 2: en una LAN redundante, las tramas broadcast se replican sin cesar. ¿Qué concepto explica mejor lo observado?",
          "answers": [
            "tormenta de broadcast",
            "alta disponibilidad de red",
            "tolerancia a fallos por redundancia",
            "comportamiento de difusión Ethernet"
          ],
          "correct": 0
        },
        {
          "question": "Caso 3: en una LAN redundante, un servidor recibe varias copias del mismo unicast. ¿Qué concepto explica mejor lo observado?",
          "answers": [
            "bucle accidental de capa 2",
            "duplicación de tramas unicast",
            "ausencia de TTL en Ethernet",
            "prevención de bucles con STP"
          ],
          "correct": 1
        },
        {
          "question": "Caso 4: en una LAN redundante, un usuario conecta un pequeño switch formando un circuito. ¿Qué concepto explica mejor lo observado?",
          "answers": [
            "bucle accidental de capa 2",
            "reconvergencia de la topología",
            "tolerancia a fallos por redundancia",
            "prevención de bucles con STP"
          ],
          "correct": 0
        },
        {
          "question": "Caso 5: en una LAN redundante, se rompe el enlace directo y el tráfico pasa por otro switch. ¿Qué concepto explica mejor lo observado?",
          "answers": [
            "recuperación mediante redundancia",
            "comportamiento de difusión Ethernet",
            "prevención de bucles con STP",
            "inestabilidad de la tabla MAC"
          ],
          "correct": 0
        },
        {
          "question": "Caso 6: en una LAN redundante, un puerto redundante no reenvía datos aunque el enlace está activo. ¿Qué concepto explica mejor lo observado?",
          "answers": [
            "reconvergencia de la topología",
            "tormenta de broadcast",
            "bloqueo lógico preventivo de STP",
            "bucle accidental de capa 2"
          ],
          "correct": 2
        },
        {
          "question": "Caso 7: en una LAN redundante, la CPU de los switches se satura por broadcasts repetidos. ¿Qué concepto explica mejor lo observado?",
          "answers": [
            "alta disponibilidad de red",
            "comportamiento de difusión Ethernet",
            "prevención de bucles con STP",
            "tormenta de broadcast"
          ],
          "correct": 3
        },
        {
          "question": "Caso 8: en una LAN redundante, una trama Ethernet sigue circulando sin que caduque por saltos. ¿Qué concepto explica mejor lo observado?",
          "answers": [
            "posible bucle de capa 2",
            "duplicación de tramas unicast",
            "alta disponibilidad de red",
            "ausencia de TTL en Ethernet"
          ],
          "correct": 3
        },
        {
          "question": "Caso 9: en una LAN redundante, al recuperar un enlace se recalcula la ruta utilizada. ¿Qué concepto explica mejor lo observado?",
          "answers": [
            "reconvergencia de la topología",
            "ausencia de TTL en Ethernet",
            "tormenta de broadcast",
            "comportamiento de difusión Ethernet"
          ],
          "correct": 0
        },
        {
          "question": "Caso 10: en una LAN redundante, se conecta un cable entre dos tomas del mismo dominio conmutado. ¿Qué concepto explica mejor lo observado?",
          "answers": [
            "inestabilidad de la tabla MAC",
            "tolerancia a fallos por redundancia",
            "alta disponibilidad de red",
            "posible bucle de capa 2"
          ],
          "correct": 3
        },
        {
          "question": "Caso 11: en una LAN redundante, el switch aprende la MAC del mismo PC desde interfaces diferentes. ¿Qué concepto explica mejor lo observado?",
          "answers": [
            "tormenta de broadcast",
            "inestabilidad de la tabla MAC",
            "duplicación de tramas unicast",
            "tolerancia a fallos por redundancia"
          ],
          "correct": 1
        },
        {
          "question": "Caso 12: en una LAN redundante, se pierde un switch pero existe un camino alternativo. ¿Qué concepto explica mejor lo observado?",
          "answers": [
            "tolerancia a fallos por redundancia",
            "posible bucle de capa 2",
            "reconvergencia de la topología",
            "recuperación mediante redundancia"
          ],
          "correct": 0
        },
        {
          "question": "Caso 13: en una LAN redundante, un enlace secundario queda en espera para evitar un circuito. ¿Qué concepto explica mejor lo observado?",
          "answers": [
            "comportamiento de difusión Ethernet",
            "prevención de bucles con STP",
            "bloqueo lógico preventivo de STP",
            "bucle accidental de capa 2"
          ],
          "correct": 1
        },
        {
          "question": "Caso 14: en una LAN redundante, un switch inunda broadcasts por todos los puertos menos el entrante. ¿Qué concepto explica mejor lo observado?",
          "answers": [
            "bucle accidental de capa 2",
            "ausencia de TTL en Ethernet",
            "duplicación de tramas unicast",
            "comportamiento de difusión Ethernet"
          ],
          "correct": 3
        },
        {
          "question": "Caso 15: en una LAN redundante, una ruta falla y el tráfico sigue alcanzando el destino. ¿Qué concepto explica mejor lo observado?",
          "answers": [
            "tormenta de broadcast",
            "duplicación de tramas unicast",
            "alta disponibilidad de red",
            "inestabilidad de la tabla MAC"
          ],
          "correct": 2
        }
      ]
    },
    {
      "id": "t5-2",
      "nombre": "Test T5.2 - Fundamentos de STP y algoritmo STA",
      "preguntas": [
        {
          "question": "¿Qué significan las siglas STA en el contexto de STP?",
          "answers": [
            "Switch Trunk Assignment",
            "Spanning Tree Algorithm",
            "Static Traffic Addressing",
            "Spanning Transfer Access"
          ],
          "correct": 1
        },
        {
          "question": "¿Cuál es la finalidad principal del algoritmo STA?",
          "answers": [
            "Establecer VLAN automáticamente",
            "Seleccionar una topología lógica sin bucles",
            "Asignar direcciones IPv4 a hosts",
            "Cifrar las tramas Ethernet"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué switch utiliza STA como referencia para calcular rutas?",
          "answers": [
            "El router predeterminado",
            "El switch con más puertos conectados",
            "El último switch que se enciende",
            "El puente raíz"
          ],
          "correct": 3
        },
        {
          "question": "¿Cómo se identifica normalmente al puente raíz en STP?",
          "answers": [
            "Por el BID más bajo",
            "Por el mayor número de VLAN",
            "Por el enlace más lento",
            "Por la dirección IP más alta"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué mensajes intercambian los switches que participan en STP?",
          "answers": [
            "Tramas ARP exclusivamente",
            "BPDU",
            "Mensajes DHCP Discover",
            "Paquetes ICMP Echo"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué información identifica al switch emisor dentro de una BPDU?",
          "answers": [
            "Su nombre DNS",
            "Su máscara de subred",
            "Su dirección IP pública",
            "Su Bridge ID (BID)"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué tres componentes forman el BID descrito en los apuntes?",
          "answers": [
            "VLAN nativa, MTU y velocidad",
            "Prioridad, ID de sistema extendido y MAC",
            "IP, máscara y puerta de enlace",
            "TTL, checksum y puerto TCP"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué hace STA después de determinar el puente raíz?",
          "answers": [
            "Deshabilita todas las VLAN",
            "Convierte cada switch en router",
            "Calcula las mejores rutas hacia él",
            "Bloquea todos los puertos del puente raíz"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué criterio básico emplea STA para seleccionar una ruta?",
          "answers": [
            "Mayor cantidad de saltos",
            "Menor coste total de ruta",
            "Menor número de VLAN",
            "Mayor dirección MAC de origen"
          ],
          "correct": 1
        },
        {
          "question": "¿De dónde provienen los costes utilizados para calcular rutas STP?",
          "answers": [
            "De los costes de los puertos atravesados",
            "De las direcciones MAC de los hosts",
            "Del tamaño de las tramas IP",
            "De la longitud de los nombres de switch"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué sucede con algunos puertos redundantes tras el cálculo de STA?",
          "answers": [
            "Se convierten en interfaces WAN",
            "Todos reenvían tramas de datos",
            "Cambian a direcciones IPv6",
            "Quedan bloqueados para evitar bucles"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué describe la función de un puerto STP?",
          "answers": [
            "Su relación con el puente raíz y su posibilidad de enviar tráfico",
            "La marca de su cable Ethernet",
            "Su dirección IPv4",
            "La aplicación que utiliza el usuario"
          ],
          "correct": 0
        },
        {
          "question": "¿Cuál es el papel de los enlaces físicos redundantes cuando STP bloquea uno?",
          "answers": [
            "Desaparecen físicamente",
            "Dejan de formar parte de la red",
            "Permanecen disponibles como alternativas ante cambios de topología",
            "Se transforman en enlaces de fibra"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué diferencia existe entre topología física y lógica con STP?",
          "answers": [
            "Ambas siempre muestran todos los puertos reenviando",
            "La lógica solo contiene routers",
            "La física cambia de cableado en cada BPDU",
            "La lógica puede bloquear caminos aunque físicamente existan"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué comparten los switches que participan en una elección STP?",
          "answers": [
            "Información BPDU para comparar identificadores y rutas",
            "Paquetes de correo electrónico",
            "Claves WPA",
            "Tablas de usuarios DHCP"
          ],
          "correct": 0
        },
        {
          "question": "En una instancia STP, S1 anuncia prioridad 12288, S2 prioridad 24576 y S3 prioridad 16384 (misma VLAN). ¿Qué switch elegiría STA como puente raíz?",
          "answers": [
            "Ninguno: se elige por IP",
            "S3",
            "S1",
            "S2"
          ],
          "correct": 2
        },
        {
          "question": "En una instancia STP, S1 anuncia prioridad 12288, S2 prioridad 16384 y S3 prioridad 28672 (misma VLAN). ¿Qué switch elegiría STA como puente raíz?",
          "answers": [
            "Ninguno: se elige por IP",
            "S1",
            "S2",
            "S3"
          ],
          "correct": 1
        },
        {
          "question": "En una instancia STP, S1 anuncia prioridad 20480, S2 prioridad 8192 y S3 prioridad 12288 (misma VLAN). ¿Qué switch elegiría STA como puente raíz?",
          "answers": [
            "S3",
            "S2",
            "Ninguno: se elige por IP",
            "S1"
          ],
          "correct": 1
        },
        {
          "question": "En una instancia STP, S1 anuncia prioridad 28672, S2 prioridad 4096 y S3 prioridad 20480 (misma VLAN). ¿Qué switch elegiría STA como puente raíz?",
          "answers": [
            "S2",
            "Ninguno: se elige por IP",
            "S3",
            "S1"
          ],
          "correct": 0
        },
        {
          "question": "En una instancia STP, S1 anuncia prioridad 8192, S2 prioridad 12288 y S3 prioridad 24576 (misma VLAN). ¿Qué switch elegiría STA como puente raíz?",
          "answers": [
            "S2",
            "Ninguno: se elige por IP",
            "S1",
            "S3"
          ],
          "correct": 2
        },
        {
          "question": "En una instancia STP, S1 anuncia prioridad 16384, S2 prioridad 8192 y S3 prioridad 24576 (misma VLAN). ¿Qué switch elegiría STA como puente raíz?",
          "answers": [
            "Ninguno: se elige por IP",
            "S2",
            "S1",
            "S3"
          ],
          "correct": 1
        },
        {
          "question": "En una instancia STP, S1 anuncia prioridad 24576, S2 prioridad 20480 y S3 prioridad 8192 (misma VLAN). ¿Qué switch elegiría STA como puente raíz?",
          "answers": [
            "S3",
            "S2",
            "Ninguno: se elige por IP",
            "S1"
          ],
          "correct": 0
        },
        {
          "question": "En una instancia STP, S1 anuncia prioridad 16384, S2 prioridad 8192 y S3 prioridad 4096 (misma VLAN). ¿Qué switch elegiría STA como puente raíz?",
          "answers": [
            "S1",
            "S3",
            "S2",
            "Ninguno: se elige por IP"
          ],
          "correct": 1
        },
        {
          "question": "En una instancia STP, S1 anuncia prioridad 8192, S2 prioridad 12288 y S3 prioridad 16384 (misma VLAN). ¿Qué switch elegiría STA como puente raíz?",
          "answers": [
            "S3",
            "Ninguno: se elige por IP",
            "S1",
            "S2"
          ],
          "correct": 2
        },
        {
          "question": "En una instancia STP, S1 anuncia prioridad 24576, S2 prioridad 8192 y S3 prioridad 32768 (misma VLAN). ¿Qué switch elegiría STA como puente raíz?",
          "answers": [
            "Ninguno: se elige por IP",
            "S3",
            "S1",
            "S2"
          ],
          "correct": 3
        },
        {
          "question": "En una instancia STP, S1 anuncia prioridad 20480, S2 prioridad 28672 y S3 prioridad 32768 (misma VLAN). ¿Qué switch elegiría STA como puente raíz?",
          "answers": [
            "S3",
            "S2",
            "Ninguno: se elige por IP",
            "S1"
          ],
          "correct": 3
        },
        {
          "question": "En una instancia STP, S1 anuncia prioridad 28672, S2 prioridad 8192 y S3 prioridad 32768 (misma VLAN). ¿Qué switch elegiría STA como puente raíz?",
          "answers": [
            "Ninguno: se elige por IP",
            "S2",
            "S3",
            "S1"
          ],
          "correct": 1
        },
        {
          "question": "En una instancia STP, S1 anuncia prioridad 32768, S2 prioridad 12288 y S3 prioridad 4096 (misma VLAN). ¿Qué switch elegiría STA como puente raíz?",
          "answers": [
            "S1",
            "Ninguno: se elige por IP",
            "S3",
            "S2"
          ],
          "correct": 2
        },
        {
          "question": "En una instancia STP, S1 anuncia prioridad 24576, S2 prioridad 16384 y S3 prioridad 20480 (misma VLAN). ¿Qué switch elegiría STA como puente raíz?",
          "answers": [
            "Ninguno: se elige por IP",
            "S1",
            "S3",
            "S2"
          ],
          "correct": 3
        },
        {
          "question": "En una instancia STP, S1 anuncia prioridad 20480, S2 prioridad 16384 y S3 prioridad 8192 (misma VLAN). ¿Qué switch elegiría STA como puente raíz?",
          "answers": [
            "Ninguno: se elige por IP",
            "S3",
            "S2",
            "S1"
          ],
          "correct": 1
        }
      ]
    },
    {
      "id": "t5-3",
      "nombre": "Test T5.3 - Puente raíz, rutas y costes STP",
      "preguntas": [
        {
          "question": "¿Qué coste STP predeterminado indica el tema para un enlace de 10 Gb/s?",
          "answers": [
            "19",
            "4",
            "2",
            "100"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué coste STP predeterminado indica el tema para un enlace de 1 Gb/s?",
          "answers": [
            "100",
            "4",
            "2",
            "19"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué coste STP predeterminado indica el tema para un enlace de 100 Mb/s?",
          "answers": [
            "4",
            "2",
            "19",
            "100"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué coste STP predeterminado indica el tema para un enlace de 10 Mb/s?",
          "answers": [
            "100",
            "4",
            "19",
            "2"
          ],
          "correct": 0
        },
        {
          "question": "¿Cómo se calcula el coste total de una ruta STP?",
          "answers": [
            "Restando el TTL de cada trama",
            "Multiplicando las direcciones MAC",
            "Sumando los costes de los puertos que recorre",
            "Sumando los números de VLAN"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué ruta elige STA si hay varias rutas disponibles hacia el puente raíz?",
          "answers": [
            "La de menor coste total",
            "La que tiene más puertos",
            "La de mayor coste total",
            "La que utiliza el puerto con mayor número"
          ],
          "correct": 0
        },
        {
          "question": "¿Puede el administrador modificar el coste de un puerto STP?",
          "answers": [
            "Solo deshabilitando todas las VLAN",
            "Solo modificando la MAC del host",
            "Sí, para influir en las rutas seleccionadas",
            "No, nunca"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué característica determina el coste STP predeterminado de un puerto?",
          "answers": [
            "El número de usuarios",
            "La dirección IP del switch",
            "El nombre del puerto",
            "La velocidad del enlace"
          ],
          "correct": 3
        },
        {
          "question": "¿Por qué los valores de coste STP pueden actualizarse con el tiempo?",
          "answers": [
            "Porque dependen de la hora local",
            "Porque cambian con cada paquete IP",
            "Porque los asigna DHCP",
            "Para adaptarse a nuevas velocidades Ethernet"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué es el puente raíz para los cálculos STP?",
          "answers": [
            "Un host con dirección IP fija",
            "Un puerto que siempre está bloqueado",
            "Un servidor DNS",
            "El punto de referencia de todas las rutas"
          ],
          "correct": 3
        },
        {
          "question": "Una ruta hacia el puente raíz atraviesa un puerto de 10 Gb/s y otro de 10 Mb/s. Según la tabla de costes del tema, ¿cuál es su coste total?",
          "answers": [
            "102",
            "121",
            "100",
            "2"
          ],
          "correct": 0
        },
        {
          "question": "Una ruta hacia el puente raíz atraviesa un puerto de 100 Mb/s y otro de 10 Mb/s. Según la tabla de costes del tema, ¿cuál es su coste total?",
          "answers": [
            "100",
            "119",
            "138",
            "19"
          ],
          "correct": 1
        },
        {
          "question": "Una ruta hacia el puente raíz atraviesa un puerto de 1 Gb/s y otro de 10 Gb/s. Según la tabla de costes del tema, ¿cuál es su coste total?",
          "answers": [
            "6",
            "4",
            "2",
            "25"
          ],
          "correct": 0
        },
        {
          "question": "Una ruta hacia el puente raíz atraviesa un puerto de 1 Gb/s y otro de 10 Mb/s. Según la tabla de costes del tema, ¿cuál es su coste total?",
          "answers": [
            "100",
            "123",
            "4",
            "104"
          ],
          "correct": 3
        },
        {
          "question": "Una ruta hacia el puente raíz atraviesa un puerto de 100 Mb/s y otro de 10 Gb/s. Según la tabla de costes del tema, ¿cuál es su coste total?",
          "answers": [
            "2",
            "21",
            "40",
            "19"
          ],
          "correct": 1
        },
        {
          "question": "Una ruta hacia el puente raíz atraviesa un puerto de 10 Mb/s y otro de 10 Gb/s. Según la tabla de costes del tema, ¿cuál es su coste total?",
          "answers": [
            "121",
            "2",
            "100",
            "102"
          ],
          "correct": 3
        },
        {
          "question": "Una ruta hacia el puente raíz atraviesa un puerto de 1 Gb/s y otro de 100 Mb/s. Según la tabla de costes del tema, ¿cuál es su coste total?",
          "answers": [
            "42",
            "23",
            "4",
            "19"
          ],
          "correct": 1
        },
        {
          "question": "Una ruta hacia el puente raíz atraviesa un puerto de 10 Mb/s y otro de 1 Gb/s. Según la tabla de costes del tema, ¿cuál es su coste total?",
          "answers": [
            "123",
            "104",
            "100",
            "4"
          ],
          "correct": 1
        },
        {
          "question": "Ruta A: 10 Gb/s + 10 Mb/s (coste 102). Ruta B: 100 Mb/s + 100 Mb/s (coste 38). ¿Qué ruta preferirá STP?",
          "answers": [
            "La ruta con mayor número de saltos",
            "Ambas rutas siempre se usan simultáneamente",
            "Ruta A",
            "Ruta B"
          ],
          "correct": 3
        },
        {
          "question": "Ruta A: 1 Gb/s + 100 Mb/s (coste 23). Ruta B: 100 Mb/s + 10 Gb/s (coste 21). ¿Qué ruta preferirá STP?",
          "answers": [
            "Ruta A",
            "La ruta con mayor número de saltos",
            "Ruta B",
            "Ambas rutas siempre se usan simultáneamente"
          ],
          "correct": 2
        },
        {
          "question": "Ruta A: 1 Gb/s + 10 Gb/s (coste 6). Ruta B: 100 Mb/s + 100 Mb/s (coste 38). ¿Qué ruta preferirá STP?",
          "answers": [
            "Ruta B",
            "Ambas rutas siempre se usan simultáneamente",
            "La ruta con mayor número de saltos",
            "Ruta A"
          ],
          "correct": 3
        },
        {
          "question": "Ruta A: 1 Gb/s + 100 Mb/s (coste 23). Ruta B: 10 Gb/s + 1 Gb/s (coste 6). ¿Qué ruta preferirá STP?",
          "answers": [
            "Ruta A",
            "La ruta con mayor número de saltos",
            "Ambas rutas siempre se usan simultáneamente",
            "Ruta B"
          ],
          "correct": 3
        },
        {
          "question": "Ruta A: 10 Mb/s + 1 Gb/s (coste 104). Ruta B: 100 Mb/s + 10 Gb/s (coste 21). ¿Qué ruta preferirá STP?",
          "answers": [
            "Ruta B",
            "Ambas rutas siempre se usan simultáneamente",
            "La ruta con mayor número de saltos",
            "Ruta A"
          ],
          "correct": 0
        },
        {
          "question": "Ruta A: 100 Mb/s + 10 Gb/s (coste 21). Ruta B: 10 Gb/s + 10 Gb/s (coste 4). ¿Qué ruta preferirá STP?",
          "answers": [
            "Ruta A",
            "Ruta B",
            "La ruta con mayor número de saltos",
            "Ambas rutas siempre se usan simultáneamente"
          ],
          "correct": 1
        },
        {
          "question": "Ruta A: 10 Gb/s + 10 Mb/s (coste 102). Ruta B: 1 Gb/s + 100 Mb/s (coste 23). ¿Qué ruta preferirá STP?",
          "answers": [
            "Ruta B",
            "Ruta A",
            "Ambas rutas siempre se usan simultáneamente",
            "La ruta con mayor número de saltos"
          ],
          "correct": 0
        },
        {
          "question": "Ruta A: 10 Gb/s + 10 Mb/s (coste 102). Ruta B: 10 Gb/s + 1 Gb/s (coste 6). ¿Qué ruta preferirá STP?",
          "answers": [
            "La ruta con mayor número de saltos",
            "Ambas rutas siempre se usan simultáneamente",
            "Ruta B",
            "Ruta A"
          ],
          "correct": 2
        },
        {
          "question": "En el cálculo de STP, una ruta atraviesa 1 Gb/s, 10 Mb/s y 100 Mb/s. ¿Qué suma de costes corresponde a esa ruta?",
          "answers": [
            "23",
            "119",
            "104",
            "123"
          ],
          "correct": 3
        },
        {
          "question": "En el cálculo de STP, una ruta atraviesa 10 Gb/s, 1 Gb/s y 100 Mb/s. ¿Qué suma de costes corresponde a esa ruta?",
          "answers": [
            "6",
            "25",
            "23",
            "21"
          ],
          "correct": 1
        },
        {
          "question": "Caso de costes 1: una ruta STP pasa por 10 Gb/s, 1 Gb/s y 100 Mb/s. ¿Qué coste total resulta?",
          "answers": [
            "25",
            "21",
            "6",
            "23"
          ],
          "correct": 0
        },
        {
          "question": "Caso de costes 2: una ruta STP pasa por 1 Gb/s, 100 Mb/s y 10 Mb/s. ¿Qué coste total resulta?",
          "answers": [
            "23",
            "104",
            "123",
            "119"
          ],
          "correct": 2
        }
      ]
    },
    {
      "id": "t5-4",
      "nombre": "Test T5.4 - Tramas BPDU y funcionamiento del protocolo",
      "preguntas": [
        {
          "question": "¿Cuántos campos distintos de BPDU describe el tema?",
          "answers": [
            "6",
            "16",
            "8",
            "12"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué describen los cuatro primeros campos de una BPDU?",
          "answers": [
            "MAC destino, VLAN, MTU y TTL",
            "Coste, puerto, antigüedad y saludo",
            "Dirección IP, máscara, DNS y gateway",
            "Protocolo, versión, tipo de mensaje y señaladores"
          ],
          "correct": 3
        },
        {
          "question": "¿Para qué sirven los cuatro últimos campos de una BPDU?",
          "answers": [
            "Para seleccionar la velocidad física",
            "Para almacenar direcciones IP",
            "Para los temporizadores de intercambio y conservación de información",
            "Para definir claves de acceso"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué valor tiene el campo ID de protocolo en la BPDU STP clásica descrita?",
          "answers": [
            "2",
            "255",
            "1",
            "0"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué valor tiene el campo de versión en una BPDU STP clásica?",
          "answers": [
            "8",
            "0",
            "4",
            "2"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué señala el bit TC de una BPDU?",
          "answers": [
            "Una dirección IP duplicada",
            "Un cambio de topología",
            "Una trama de datos cifrada",
            "Un fallo de DNS"
          ],
          "correct": 1
        },
        {
          "question": "¿Para qué se utiliza el bit TCA?",
          "answers": [
            "Para aumentar el coste de puerto",
            "Para designar una VLAN nativa",
            "Para acusar recibo de una notificación de cambio de topología",
            "Para establecer el MTU"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué identifica el campo Root ID?",
          "answers": [
            "El servidor DHCP",
            "La estación final con menor MAC",
            "El puente raíz de la instancia STP",
            "El router de Internet"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué indica el campo Coste en una BPDU?",
          "answers": [
            "El coste de la ruta del emisor al puente raíz",
            "La velocidad máxima de la tarjeta del usuario",
            "El tamaño de la trama Ethernet",
            "La cantidad de VLAN de la red"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué identifica el campo Bridge ID de una BPDU?",
          "answers": [
            "El puente que envía el mensaje",
            "La red de destino IPv4",
            "La IP del equipo receptor",
            "El servidor de nombres"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué indica el campo Port ID de una BPDU?",
          "answers": [
            "El número de equipos conectados",
            "La puerta de enlace IP",
            "El puerto desde el que se envía el mensaje",
            "El puerto TCP del navegador"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué ocurre cuando la antigüedad del mensaje alcanza la antigüedad máxima?",
          "answers": [
            "El mensaje se guarda indefinidamente",
            "Se descarta la información caducada y puede iniciarse una nueva elección",
            "Se incrementa automáticamente el ancho de banda",
            "El puerto se convierte en router"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué valor predeterminado indica el tema para Max Age?",
          "answers": [
            "20 segundos",
            "15 segundos",
            "2 segundos",
            "50 segundos"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué valor predeterminado indica el tema para Hello Time?",
          "answers": [
            "15 segundos",
            "2 segundos",
            "20 segundos",
            "30 segundos"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué valor predeterminado indica el tema para Forward Delay?",
          "answers": [
            "15 segundos",
            "2 segundos",
            "20 segundos",
            "40 segundos"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué supone cada switch al iniciar el proceso BPDU?",
          "answers": [
            "Que todos sus puertos deben permanecer bloqueados",
            "Que él mismo es inicialmente el puente raíz",
            "Que no hay otros switches",
            "Que su MAC es necesariamente la menor"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué hace un switch al conocer mediante BPDU un Root ID menor?",
          "answers": [
            "Ignora siempre el mensaje",
            "Asigna una IP al puente raíz",
            "Actualiza su información de raíz y la propaga",
            "Deshabilita todas sus interfaces"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué campo de BPDU cambia a medida que se atraviesan switches hacia la raíz?",
          "answers": [
            "La dirección IP del host",
            "El coste de ruta",
            "La contraseña del switch",
            "El tipo de cable físico"
          ],
          "correct": 1
        },
        {
          "question": "En el formato BPDU descrito en el tema, ¿qué función tiene el campo «ID de protocolo»?",
          "answers": [
            "identificar el puente raíz",
            "identificar el protocolo",
            "identificar la versión STP",
            "identificar el puente emisor"
          ],
          "correct": 1
        },
        {
          "question": "En el formato BPDU descrito en el tema, ¿qué función tiene el campo «Versión»?",
          "answers": [
            "identificar la versión STP",
            "regular las transiciones de estado",
            "indicar el tipo de BPDU",
            "identificar el puente raíz"
          ],
          "correct": 0
        },
        {
          "question": "En el formato BPDU descrito en el tema, ¿qué función tiene el campo «Tipo de mensaje»?",
          "answers": [
            "identificar el protocolo",
            "identificar la versión STP",
            "identificar el puente emisor",
            "indicar el tipo de BPDU"
          ],
          "correct": 3
        },
        {
          "question": "En el formato BPDU descrito en el tema, ¿qué función tiene el campo «Señaladores»?",
          "answers": [
            "identificar el puerto de emisión",
            "indicar la edad de la información",
            "indicar cambios de topología y acuses",
            "regular las transiciones de estado"
          ],
          "correct": 2
        },
        {
          "question": "En el formato BPDU descrito en el tema, ¿qué función tiene el campo «Root ID»?",
          "answers": [
            "indicar el tipo de BPDU",
            "limitar cuánto se conserva la información",
            "indicar cambios de topología y acuses",
            "identificar el puente raíz"
          ],
          "correct": 3
        },
        {
          "question": "En el formato BPDU descrito en el tema, ¿qué función tiene el campo «Coste de ruta»?",
          "answers": [
            "identificar el puerto de emisión",
            "regular las transiciones de estado",
            "indicar cambios de topología y acuses",
            "indicar el coste hasta el puente raíz"
          ],
          "correct": 3
        },
        {
          "question": "En el formato BPDU descrito en el tema, ¿qué función tiene el campo «Bridge ID»?",
          "answers": [
            "indicar el tipo de BPDU",
            "identificar la versión STP",
            "identificar el puente emisor",
            "establecer el intervalo de BPDU"
          ],
          "correct": 2
        },
        {
          "question": "En el formato BPDU descrito en el tema, ¿qué función tiene el campo «Port ID»?",
          "answers": [
            "identificar el puerto de emisión",
            "indicar el coste hasta el puente raíz",
            "indicar el tipo de BPDU",
            "limitar cuánto se conserva la información"
          ],
          "correct": 0
        },
        {
          "question": "En el formato BPDU descrito en el tema, ¿qué función tiene el campo «Antigüedad del mensaje»?",
          "answers": [
            "establecer el intervalo de BPDU",
            "indicar la edad de la información",
            "indicar el tipo de BPDU",
            "identificar el puerto de emisión"
          ],
          "correct": 1
        },
        {
          "question": "En el formato BPDU descrito en el tema, ¿qué función tiene el campo «Antigüedad máxima»?",
          "answers": [
            "limitar cuánto se conserva la información",
            "indicar el tipo de BPDU",
            "indicar la edad de la información",
            "regular las transiciones de estado"
          ],
          "correct": 0
        },
        {
          "question": "En el formato BPDU descrito en el tema, ¿qué función tiene el campo «Tiempo de saludo»?",
          "answers": [
            "establecer el intervalo de BPDU",
            "indicar el coste hasta el puente raíz",
            "identificar el protocolo",
            "limitar cuánto se conserva la información"
          ],
          "correct": 0
        },
        {
          "question": "En el formato BPDU descrito en el tema, ¿qué función tiene el campo «Retraso de envío»?",
          "answers": [
            "indicar el coste hasta el puente raíz",
            "identificar el puerto de emisión",
            "regular las transiciones de estado",
            "limitar cuánto se conserva la información"
          ],
          "correct": 2
        }
      ]
    },
    {
      "id": "t5-5",
      "nombre": "Test T5.5 - Bridge ID (BID) y elección del puente raíz",
      "preguntas": [
        {
          "question": "¿Qué significa BID en STP?",
          "answers": [
            "Broadcast IP Datagram",
            "Bridge ID",
            "Bridge Interface Duplex",
            "Backup Internet Device"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué campo del BID se compara antes que la dirección MAC?",
          "answers": [
            "La VLAN nativa",
            "La prioridad del puente",
            "La dirección IP",
            "La velocidad del enlace"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué sucede si dos switches tienen la misma prioridad efectiva de BID?",
          "answers": [
            "Gana el que tenga la MAC más baja",
            "Gana el que tenga la MAC más alta",
            "Gana el que se haya iniciado antes",
            "Gana el que tenga más puertos"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué función cumple el ID de sistema extendido?",
          "answers": [
            "Almacenar el nombre DNS",
            "Medir el coste del cable",
            "Incorporar información de VLAN al identificador del puente",
            "Asignar direcciones IP"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué efecto tiene utilizar el ID de sistema extendido sobre los valores de prioridad?",
          "answers": [
            "Se utilizan incrementos de 4096",
            "La prioridad depende del TTL",
            "La prioridad solo puede ser 0 o 1",
            "La prioridad deja de intervenir"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué prioridad base suele emplearse por defecto en STP con ID extendido?",
          "answers": [
            "32768",
            "19",
            "100",
            "65535"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué dispositivo se convierte en puente raíz?",
          "answers": [
            "El que tiene el BID numéricamente más bajo",
            "El de mayor prioridad numérica",
            "El que tiene más direcciones IP",
            "El que transmite más broadcasts"
          ],
          "correct": 0
        },
        {
          "question": "¿Cómo puede un administrador influir en qué switch será raíz?",
          "answers": [
            "Configurando una prioridad de puente más baja",
            "Reduciendo la velocidad de todos los puertos",
            "Aumentando la MTU de un PC",
            "Cambiando el servidor DNS"
          ],
          "correct": 0
        },
        {
          "question": "¿Cuál es el tamaño de la dirección MAC incluida en el identificador?",
          "answers": [
            "2 bytes",
            "4 bytes",
            "6 bytes",
            "16 bytes"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué sucede al arrancar un switch antes de conocer otras BPDU?",
          "answers": [
            "Su Root ID siempre es cero",
            "Su Root ID coincide inicialmente con su propio BID",
            "Elige el switch con más VLAN",
            "Conoce inmediatamente el puente raíz real"
          ],
          "correct": 1
        },
        {
          "question": "Para una misma VLAN, los switches S1, S2 y S3 tienen prioridades 12288, 24576 y 32768, respectivamente. ¿Quién gana la elección del puente raíz?",
          "answers": [
            "S1",
            "No se puede decidir aunque las prioridades difieran",
            "S3",
            "S2"
          ],
          "correct": 0
        },
        {
          "question": "S1, S2 y S3 comparten prioridad 32768 y tienen MAC 00:00:00:00:00:D1, 00:00:00:00:00:6E y 00:00:00:00:00:7D, respectivamente. ¿Cuál será el puente raíz?",
          "answers": [
            "S2",
            "S1",
            "S3",
            "El de mayor dirección MAC"
          ],
          "correct": 0
        },
        {
          "question": "Para una misma VLAN, los switches S1, S2 y S3 tienen prioridades 32768, 16384 y 28672, respectivamente. ¿Quién gana la elección del puente raíz?",
          "answers": [
            "No se puede decidir aunque las prioridades difieran",
            "S2",
            "S1",
            "S3"
          ],
          "correct": 1
        },
        {
          "question": "S1, S2 y S3 comparten prioridad 32768 y tienen MAC 00:00:00:00:00:71, 00:00:00:00:00:BC y 00:00:00:00:00:D7, respectivamente. ¿Cuál será el puente raíz?",
          "answers": [
            "S3",
            "S2",
            "El de mayor dirección MAC",
            "S1"
          ],
          "correct": 3
        },
        {
          "question": "Para una misma VLAN, los switches S1, S2 y S3 tienen prioridades 20480, 32768 y 40960, respectivamente. ¿Quién gana la elección del puente raíz?",
          "answers": [
            "S1",
            "S3",
            "No se puede decidir aunque las prioridades difieran",
            "S2"
          ],
          "correct": 0
        },
        {
          "question": "S1, S2 y S3 comparten prioridad 32768 y tienen MAC 00:00:00:00:00:C5, 00:00:00:00:00:E6 y 00:00:00:00:00:6C, respectivamente. ¿Cuál será el puente raíz?",
          "answers": [
            "S2",
            "S1",
            "El de mayor dirección MAC",
            "S3"
          ],
          "correct": 3
        },
        {
          "question": "Para una misma VLAN, los switches S1, S2 y S3 tienen prioridades 24576, 8192 y 36864, respectivamente. ¿Quién gana la elección del puente raíz?",
          "answers": [
            "S3",
            "S2",
            "No se puede decidir aunque las prioridades difieran",
            "S1"
          ],
          "correct": 1
        },
        {
          "question": "S1, S2 y S3 comparten prioridad 32768 y tienen MAC 00:00:00:00:00:42, 00:00:00:00:00:96 y 00:00:00:00:00:17, respectivamente. ¿Cuál será el puente raíz?",
          "answers": [
            "S3",
            "S2",
            "S1",
            "El de mayor dirección MAC"
          ],
          "correct": 0
        },
        {
          "question": "Para una misma VLAN, los switches S1, S2 y S3 tienen prioridades 20480, 32768 y 8192, respectivamente. ¿Quién gana la elección del puente raíz?",
          "answers": [
            "S1",
            "No se puede decidir aunque las prioridades difieran",
            "S3",
            "S2"
          ],
          "correct": 2
        },
        {
          "question": "S1, S2 y S3 comparten prioridad 32768 y tienen MAC 00:00:00:00:00:32, 00:00:00:00:00:9B y 00:00:00:00:00:6F, respectivamente. ¿Cuál será el puente raíz?",
          "answers": [
            "El de mayor dirección MAC",
            "S1",
            "S3",
            "S2"
          ],
          "correct": 1
        },
        {
          "question": "Para una misma VLAN, los switches S1, S2 y S3 tienen prioridades 32768, 12288 y 8192, respectivamente. ¿Quién gana la elección del puente raíz?",
          "answers": [
            "No se puede decidir aunque las prioridades difieran",
            "S3",
            "S2",
            "S1"
          ],
          "correct": 1
        },
        {
          "question": "S1, S2 y S3 comparten prioridad 32768 y tienen MAC 00:00:00:00:00:91, 00:00:00:00:00:97 y 00:00:00:00:00:D6, respectivamente. ¿Cuál será el puente raíz?",
          "answers": [
            "S1",
            "S3",
            "S2",
            "El de mayor dirección MAC"
          ],
          "correct": 0
        },
        {
          "question": "Para una misma VLAN, los switches S1, S2 y S3 tienen prioridades 40960, 0 y 36864, respectivamente. ¿Quién gana la elección del puente raíz?",
          "answers": [
            "S3",
            "S1",
            "No se puede decidir aunque las prioridades difieran",
            "S2"
          ],
          "correct": 3
        },
        {
          "question": "S1, S2 y S3 comparten prioridad 32768 y tienen MAC 00:00:00:00:00:EA, 00:00:00:00:00:18 y 00:00:00:00:00:4B, respectivamente. ¿Cuál será el puente raíz?",
          "answers": [
            "El de mayor dirección MAC",
            "S3",
            "S1",
            "S2"
          ],
          "correct": 3
        },
        {
          "question": "Para una misma VLAN, los switches S1, S2 y S3 tienen prioridades 16384, 28672 y 32768, respectivamente. ¿Quién gana la elección del puente raíz?",
          "answers": [
            "S3",
            "S1",
            "No se puede decidir aunque las prioridades difieran",
            "S2"
          ],
          "correct": 1
        },
        {
          "question": "S1, S2 y S3 comparten prioridad 32768 y tienen MAC 00:00:00:00:00:E7, 00:00:00:00:00:DB y 00:00:00:00:00:74, respectivamente. ¿Cuál será el puente raíz?",
          "answers": [
            "S1",
            "El de mayor dirección MAC",
            "S3",
            "S2"
          ],
          "correct": 2
        },
        {
          "question": "Para una misma VLAN, los switches S1, S2 y S3 tienen prioridades 32768, 36864 y 8192, respectivamente. ¿Quién gana la elección del puente raíz?",
          "answers": [
            "S3",
            "No se puede decidir aunque las prioridades difieran",
            "S2",
            "S1"
          ],
          "correct": 0
        },
        {
          "question": "S1, S2 y S3 comparten prioridad 32768 y tienen MAC 00:00:00:00:00:F3, 00:00:00:00:00:BF y 00:00:00:00:00:1C, respectivamente. ¿Cuál será el puente raíz?",
          "answers": [
            "S1",
            "El de mayor dirección MAC",
            "S3",
            "S2"
          ],
          "correct": 2
        },
        {
          "question": "Para una misma VLAN, los switches S1, S2 y S3 tienen prioridades 12288, 8192 y 40960, respectivamente. ¿Quién gana la elección del puente raíz?",
          "answers": [
            "S1",
            "No se puede decidir aunque las prioridades difieran",
            "S2",
            "S3"
          ],
          "correct": 2
        },
        {
          "question": "S1, S2 y S3 comparten prioridad 32768 y tienen MAC 00:00:00:00:00:E8, 00:00:00:00:00:20 y 00:00:00:00:00:15, respectivamente. ¿Cuál será el puente raíz?",
          "answers": [
            "S3",
            "S2",
            "S1",
            "El de mayor dirección MAC"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "t5-6",
      "nombre": "Test T5.6 - Funciones y estados de los puertos STP",
      "preguntas": [
        {
          "question": "¿Qué es un puerto raíz en un switch no raíz?",
          "answers": [
            "Un puerto siempre administrativamente apagado",
            "Cualquier puerto conectado a un PC",
            "El puerto que proporciona la mejor ruta hacia el puente raíz",
            "El puerto con la IP más alta"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué es un puerto designado?",
          "answers": [
            "Un puerto seleccionado para reenviar tráfico en su segmento",
            "Un puerto sin cable",
            "El puerto exclusivo de DHCP",
            "Un puerto que siempre queda bloqueado"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué función tiene un puerto no designado en STP clásico?",
          "answers": [
            "Asignar direcciones MAC",
            "Encaminar paquetes IP",
            "Reenviar todos los broadcasts",
            "Permanecer bloqueado para evitar bucles"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué caracteriza a un puerto deshabilitado?",
          "answers": [
            "Aprende MAC y reenvía tramas",
            "Es el único que envía BPDU",
            "Es siempre puerto raíz",
            "Está administrativamente desconectado y no participa en STP"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué hace un puerto en estado de bloqueo?",
          "answers": [
            "Asigna direcciones IP",
            "No reenvía datos, pero puede recibir BPDU",
            "Aprende nuevas MAC de usuarios",
            "Reenvía todo el tráfico"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué hace un puerto en estado de escucha?",
          "answers": [
            "Aprende todas las MAC de usuarios",
            "Intercambia BPDU, pero todavía no reenvía datos de usuario",
            "Permanece administrativamente apagado",
            "Reenvía datos sin restricciones"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué hace un puerto en estado de aprendizaje?",
          "answers": [
            "Comienza a poblar su tabla MAC sin reenviar aún datos de usuario",
            "Descarta todas las BPDU",
            "Reenvía todos los datos",
            "Se convierte automáticamente en raíz"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué hace un puerto en estado de envío?",
          "answers": [
            "Reenvía tramas de datos y participa en STP",
            "Está apagado administrativamente",
            "No aprende direcciones MAC",
            "Solo recibe tramas de BPDU"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué puerto del puente raíz se considera designado en un segmento activo?",
          "answers": [
            "Un puerto de usuario aleatorio",
            "Un puerto siempre deshabilitado",
            "El puerto del puente raíz conectado al segmento",
            "Un puerto raíz del mismo puente"
          ],
          "correct": 2
        },
        {
          "question": "¿Cuántos puertos raíz tiene normalmente cada switch que no es raíz en una instancia STP?",
          "answers": [
            "Dos siempre",
            "Uno",
            "Todos sus puertos",
            "Ninguno"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué puerto raíz posee el switch S2 en el ejemplo del tema?",
          "answers": [
            "Ninguno",
            "F0/3",
            "F0/1",
            "F0/2"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué puerto queda no designado en el switch S3 del ejemplo?",
          "answers": [
            "F0/1",
            "Todos",
            "F0/3",
            "F0/2"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué puertos designados muestra el ejemplo en el puente raíz S1?",
          "answers": [
            "F0/1 y F0/2",
            "Solo F0/2",
            "Solo F0/1",
            "Ninguno"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué característica define un puerto raíz?",
          "answers": [
            "Tiene siempre la MAC más alta",
            "Siempre está conectado a un host",
            "Tiene el menor número físico en toda la red",
            "Ofrece la menor ruta de coste hacia el puente raíz"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué permite decidir la función designada en un segmento?",
          "answers": [
            "Qué VLAN utiliza IPv6",
            "Qué cable tiene la mayor longitud",
            "Qué switch ofrece la mejor ruta anunciada hacia la raíz",
            "Qué PC tiene el DNS más rápido"
          ],
          "correct": 2
        },
        {
          "question": "Escenario 1: un puerto STP clásico recibe BPDU pero no reenvía datos ni aprende MAC. ¿En qué estado se encuentra?",
          "answers": [
            "bloqueo",
            "envío",
            "escucha",
            "deshabilitado"
          ],
          "correct": 0
        },
        {
          "question": "Escenario 2: un puerto STP clásico envía y recibe BPDU sin aprender MAC ni reenviar datos. ¿En qué estado se encuentra?",
          "answers": [
            "envío",
            "deshabilitado",
            "escucha",
            "aprendizaje"
          ],
          "correct": 2
        },
        {
          "question": "Escenario 3: un puerto STP clásico aprende MAC pero todavía no reenvía tramas de usuario. ¿En qué estado se encuentra?",
          "answers": [
            "deshabilitado",
            "escucha",
            "aprendizaje",
            "bloqueo"
          ],
          "correct": 2
        },
        {
          "question": "Escenario 4: un puerto STP clásico aprende MAC y reenvía tráfico de usuario. ¿En qué estado se encuentra?",
          "answers": [
            "escucha",
            "aprendizaje",
            "envío",
            "deshabilitado"
          ],
          "correct": 2
        },
        {
          "question": "Escenario 5: un puerto STP clásico no participa en STP por estar administrativamente apagado. ¿En qué estado se encuentra?",
          "answers": [
            "bloqueo",
            "deshabilitado",
            "escucha",
            "envío"
          ],
          "correct": 1
        },
        {
          "question": "Escenario 6: un puerto STP clásico recibe BPDU pero no reenvía datos ni aprende MAC. ¿En qué estado se encuentra?",
          "answers": [
            "bloqueo",
            "deshabilitado",
            "envío",
            "aprendizaje"
          ],
          "correct": 0
        },
        {
          "question": "Escenario 7: un puerto STP clásico envía y recibe BPDU sin aprender MAC ni reenviar datos. ¿En qué estado se encuentra?",
          "answers": [
            "bloqueo",
            "escucha",
            "aprendizaje",
            "deshabilitado"
          ],
          "correct": 1
        },
        {
          "question": "Escenario 8: un puerto STP clásico aprende MAC pero todavía no reenvía tramas de usuario. ¿En qué estado se encuentra?",
          "answers": [
            "envío",
            "aprendizaje",
            "bloqueo",
            "escucha"
          ],
          "correct": 1
        },
        {
          "question": "Escenario 9: un puerto STP clásico aprende MAC y reenvía tráfico de usuario. ¿En qué estado se encuentra?",
          "answers": [
            "bloqueo",
            "deshabilitado",
            "escucha",
            "envío"
          ],
          "correct": 3
        },
        {
          "question": "Escenario 10: un puerto STP clásico no participa en STP por estar administrativamente apagado. ¿En qué estado se encuentra?",
          "answers": [
            "escucha",
            "deshabilitado",
            "bloqueo",
            "aprendizaje"
          ],
          "correct": 1
        },
        {
          "question": "Escenario 11: un puerto STP clásico recibe BPDU pero no reenvía datos ni aprende MAC. ¿En qué estado se encuentra?",
          "answers": [
            "envío",
            "escucha",
            "bloqueo",
            "deshabilitado"
          ],
          "correct": 2
        },
        {
          "question": "Escenario 12: un puerto STP clásico envía y recibe BPDU sin aprender MAC ni reenviar datos. ¿En qué estado se encuentra?",
          "answers": [
            "envío",
            "bloqueo",
            "deshabilitado",
            "escucha"
          ],
          "correct": 3
        },
        {
          "question": "Escenario 13: un puerto STP clásico aprende MAC pero todavía no reenvía tramas de usuario. ¿En qué estado se encuentra?",
          "answers": [
            "envío",
            "escucha",
            "bloqueo",
            "aprendizaje"
          ],
          "correct": 3
        },
        {
          "question": "Escenario 14: un puerto STP clásico aprende MAC y reenvía tráfico de usuario. ¿En qué estado se encuentra?",
          "answers": [
            "bloqueo",
            "deshabilitado",
            "envío",
            "escucha"
          ],
          "correct": 2
        },
        {
          "question": "Escenario 15: un puerto STP clásico no participa en STP por estar administrativamente apagado. ¿En qué estado se encuentra?",
          "answers": [
            "deshabilitado",
            "aprendizaje",
            "escucha",
            "envío"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "t5-7",
      "nombre": "Test T5.7 - Temporizadores, PortFast y convergencia",
      "preguntas": [
        {
          "question": "¿Qué tres temporizadores principales afectan a STP clásico?",
          "answers": [
            "Hello Time, Forward Delay y Max Age",
            "TTL, RTT y MTU",
            "ARP, DNS y DHCP",
            "TCP, UDP y ICMP"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué valor predeterminado se indica para Hello Time?",
          "answers": [
            "2 segundos",
            "30 segundos",
            "20 segundos",
            "15 segundos"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué valor predeterminado se indica para Forward Delay?",
          "answers": [
            "5 segundos",
            "20 segundos",
            "15 segundos",
            "2 segundos"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué valor predeterminado se indica para Max Age?",
          "answers": [
            "20 segundos",
            "2 segundos",
            "15 segundos",
            "50 segundos"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué switch puede propagar ajustes de temporizadores STP por el árbol?",
          "answers": [
            "Solo el router WAN",
            "El puente raíz",
            "Solo el último switch conectado",
            "Cualquier host DHCP"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué es la convergencia STP?",
          "answers": [
            "La asignación de una IP a cada host",
            "El borrado de todas las VLAN",
            "El proceso de establecer una topología estable y sin bucles",
            "La creación de enlaces físicos nuevos"
          ],
          "correct": 2
        },
        {
          "question": "¿Cuál es el primer paso de convergencia indicado en el tema?",
          "answers": [
            "Elegir un puente raíz",
            "Desactivar las BPDU",
            "Elegir puertos no designados",
            "Configurar DHCP"
          ],
          "correct": 0
        },
        {
          "question": "¿Cuál es el segundo paso de convergencia indicado en el tema?",
          "answers": [
            "Elegir los puertos raíz",
            "Asignar prioridades a los hosts",
            "Elegir el servidor DNS",
            "Bloquear todos los puertos"
          ],
          "correct": 0
        },
        {
          "question": "¿Cuál es el tercer paso de convergencia indicado en el tema?",
          "answers": [
            "Elegir puertos designados y no designados",
            "Asignar direcciones IPv4",
            "Deshabilitar los enlaces redundantes físicamente",
            "Elegir el puente raíz de nuevo"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué permite PortFast en un puerto de acceso?",
          "answers": [
            "Pasar rápidamente a envío sin esperar escucha y aprendizaje",
            "Eliminar las BPDU de toda la red",
            "Convertir el puerto en enlace troncal",
            "Asignar una dirección IP estática"
          ],
          "correct": 0
        },
        {
          "question": "¿Dónde recomienda el tema utilizar PortFast?",
          "answers": [
            "En cualquier enlace troncal entre switches",
            "En enlaces redundantes entre switches sin precauciones",
            "En puertos de acceso hacia una estación de trabajo o servidor",
            "En interfaces WAN exclusivamente"
          ],
          "correct": 2
        },
        {
          "question": "¿Por qué PortFast ayuda a equipos que usan DHCP?",
          "answers": [
            "Sustituye DHCP por ARP",
            "Cambia el servidor DHCP",
            "Evita que la solicitud DHCP llegue antes de que el puerto pueda reenviar",
            "Aumenta el tamaño de los paquetes DHCP"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué protección puede bloquear un puerto PortFast que recibe BPDU?",
          "answers": [
            "Protección NAT",
            "Protección BPDU",
            "Filtrado DNS",
            "Control de TTL"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué dos estados clásicos evita esperar PortFast al habilitar el puerto?",
          "answers": [
            "Enviar y deshabilitado",
            "Escuchar y aprender",
            "Bloqueo y deshabilitado",
            "Enviar y bloqueo"
          ],
          "correct": 1
        },
        {
          "question": "¿Por qué STP clásico no converge instantáneamente?",
          "answers": [
            "Por las transiciones y temporizadores de coordinación",
            "Porque cada switch cambia de dirección IP",
            "Porque Ethernet tiene TTL infinito",
            "Porque exige siempre reiniciar el router"
          ],
          "correct": 0
        },
        {
          "question": "El administrador fija Hello Time en 5 segundos. ¿Qué controla ese valor?",
          "answers": [
            "La velocidad del enlace",
            "El intervalo entre BPDU de saludo",
            "El número de VLAN",
            "El tamaño de la tabla MAC"
          ],
          "correct": 1
        },
        {
          "question": "En una configuración STP se establece Forward Delay en 10 segundos. ¿A qué se aplica?",
          "answers": [
            "A las transiciones temporizadas de escucha y aprendizaje",
            "A la velocidad de la interfaz",
            "Al intervalo de DHCP",
            "Al TTL de los paquetes IP"
          ],
          "correct": 0
        },
        {
          "question": "Una instancia STP configura Max Age en 10 segundos. ¿Qué sucede cuando la información supera ese límite?",
          "answers": [
            "El puerto se vuelve automáticamente troncal",
            "Se amplía el ancho de banda",
            "Se asigna otra dirección IP",
            "La información caduca y puede desencadenar un nuevo cálculo"
          ],
          "correct": 3
        },
        {
          "question": "El administrador fija Hello Time en 2 segundos. ¿Qué controla ese valor?",
          "answers": [
            "El tamaño de la tabla MAC",
            "El intervalo entre BPDU de saludo",
            "La velocidad del enlace",
            "El número de VLAN"
          ],
          "correct": 1
        },
        {
          "question": "El administrador fija Hello Time en 3 segundos. ¿Qué controla ese valor?",
          "answers": [
            "El tamaño de la tabla MAC",
            "La velocidad del enlace",
            "El intervalo entre BPDU de saludo",
            "El número de VLAN"
          ],
          "correct": 2
        },
        {
          "question": "En una configuración STP se establece Forward Delay en 12 segundos. ¿A qué se aplica?",
          "answers": [
            "A las transiciones temporizadas de escucha y aprendizaje",
            "A la velocidad de la interfaz",
            "Al TTL de los paquetes IP",
            "Al intervalo de DHCP"
          ],
          "correct": 0
        },
        {
          "question": "Una instancia STP configura Max Age en 20 segundos. ¿Qué sucede cuando la información supera ese límite?",
          "answers": [
            "El puerto se vuelve automáticamente troncal",
            "Se asigna otra dirección IP",
            "Se amplía el ancho de banda",
            "La información caduca y puede desencadenar un nuevo cálculo"
          ],
          "correct": 3
        },
        {
          "question": "El administrador fija Hello Time en 4 segundos. ¿Qué controla ese valor?",
          "answers": [
            "El número de VLAN",
            "La velocidad del enlace",
            "El tamaño de la tabla MAC",
            "El intervalo entre BPDU de saludo"
          ],
          "correct": 3
        },
        {
          "question": "En una configuración STP se establece Forward Delay en 18 segundos. ¿A qué se aplica?",
          "answers": [
            "Al intervalo de DHCP",
            "A la velocidad de la interfaz",
            "A las transiciones temporizadas de escucha y aprendizaje",
            "Al TTL de los paquetes IP"
          ],
          "correct": 2
        },
        {
          "question": "Una instancia STP configura Max Age en 16 segundos. ¿Qué sucede cuando la información supera ese límite?",
          "answers": [
            "El puerto se vuelve automáticamente troncal",
            "La información caduca y puede desencadenar un nuevo cálculo",
            "Se asigna otra dirección IP",
            "Se amplía el ancho de banda"
          ],
          "correct": 1
        },
        {
          "question": "Caso de convergencia 1: se conecta un equipo nuevo a un puerto de acceso con PortFast. ¿Qué ocurre al establecerse el enlace?",
          "answers": [
            "Se convierte en puente raíz",
            "El puerto pasa a envío inmediatamente",
            "Deshabilita DHCP",
            "Espera siempre dos intervalos Forward Delay"
          ],
          "correct": 1
        },
        {
          "question": "Caso de convergencia 2: se conecta un equipo nuevo a un puerto de acceso con PortFast. ¿Qué ocurre al establecerse el enlace?",
          "answers": [
            "Espera siempre dos intervalos Forward Delay",
            "El puerto pasa a envío inmediatamente",
            "Deshabilita DHCP",
            "Se convierte en puente raíz"
          ],
          "correct": 1
        },
        {
          "question": "Caso de convergencia 3: se conecta un equipo nuevo a un puerto de acceso con PortFast. ¿Qué ocurre al establecerse el enlace?",
          "answers": [
            "Se convierte en puente raíz",
            "Espera siempre dos intervalos Forward Delay",
            "El puerto pasa a envío inmediatamente",
            "Deshabilita DHCP"
          ],
          "correct": 2
        },
        {
          "question": "Caso de convergencia 4: se conecta un equipo nuevo a un puerto de acceso con PortFast. ¿Qué ocurre al establecerse el enlace?",
          "answers": [
            "Espera siempre dos intervalos Forward Delay",
            "El puerto pasa a envío inmediatamente",
            "Deshabilita DHCP",
            "Se convierte en puente raíz"
          ],
          "correct": 1
        },
        {
          "question": "Caso de convergencia 5: se conecta un equipo nuevo a un puerto de acceso con PortFast. ¿Qué ocurre al establecerse el enlace?",
          "answers": [
            "Deshabilita DHCP",
            "Espera siempre dos intervalos Forward Delay",
            "Se convierte en puente raíz",
            "El puerto pasa a envío inmediatamente"
          ],
          "correct": 3
        }
      ]
    },
    {
      "id": "t5-8",
      "nombre": "Test T5.8 - Variantes de STP: PVST, PVST+ y RSTP",
      "preguntas": [
        {
          "question": "¿Qué estándar identifica a STP clásico?",
          "answers": [
            "IEEE 802.3af",
            "IEEE 802.1w",
            "IEEE 802.1D",
            "IEEE 802.11ax"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué estándar identifica a RSTP?",
          "answers": [
            "IEEE 802.11n",
            "IEEE 802.1w",
            "IEEE 802.1Q exclusivamente",
            "IEEE 802.1D"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué mantiene PVST?",
          "answers": [
            "Una instancia por host",
            "Una instancia de STP por VLAN",
            "Una instancia por dirección IP",
            "Una única instancia para todas las VLAN"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué encapsulación troncal utiliza PVST según el tema?",
          "answers": [
            "ISL de Cisco",
            "PPP",
            "802.11",
            "HDLC exclusivamente"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué aporta PVST+ frente a PVST en cuanto a enlaces troncales?",
          "answers": [
            "Sustitución de STP por DHCP",
            "Eliminación de las VLAN",
            "Solo compatibilidad con ISL",
            "Soporte para IEEE 802.1Q"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué funcionalidad de PVST+ permite distribuir tráfico entre enlaces?",
          "answers": [
            "Utilizar diferentes puentes raíz según la VLAN",
            "Asignar direcciones IP por puerto",
            "Deshabilitar STP para todas las VLAN",
            "Enviar todas las VLAN por un único enlace"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué limitación indica el tema sobre PVST+?",
          "answers": [
            "No utiliza BPDU",
            "No está soportado en dispositivos que no son Cisco",
            "No admite enlaces troncales",
            "Solo funciona sin VLAN"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué sobrecarga puede implicar ejecutar STP por cada VLAN?",
          "answers": [
            "Pérdida obligatoria de conectividad IP",
            "Menos direcciones MAC posibles",
            "Más instancias y tráfico BPDU",
            "Desactivación automática de todos los puertos"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué switch es raíz de la VLAN 10 en el ejemplo PVST+?",
          "answers": [
            "S3",
            "S2",
            "Ninguno",
            "S1"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué switch es raíz de la VLAN 20 en el ejemplo PVST+?",
          "answers": [
            "Ninguno",
            "S1",
            "S3",
            "S2"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué estados de puerto define RSTP según el tema?",
          "answers": [
            "Bloqueo, escucha, aprendizaje, envío y deshabilitado",
            "Inicio, pausa y finalización",
            "Solo escucha y envío",
            "Descarte, aprendizaje y envío"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué nueva función de puerto RSTP aparece en el ejemplo?",
          "answers": [
            "Puerto DNS",
            "Puerto alternativo",
            "Puerto NAT",
            "Puerto de difusión IP"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué ventaja principal aporta RSTP respecto a STP clásico?",
          "answers": [
            "Convergencia más rápida tras cambios de topología",
            "Usar solo enlaces de 10 Mb/s",
            "No intercambiar información de control",
            "Eliminar la necesidad de enlaces redundantes"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué versión se establece en la BPDU de RSTP?",
          "answers": [
            "0",
            "4",
            "1",
            "2"
          ],
          "correct": 3
        },
        {
          "question": "¿Cómo se relaciona RSTP con switches que solo admiten 802.1D?",
          "answers": [
            "Requiere usar IPv6",
            "Exige eliminar las VLAN",
            "Puede interoperar retrocediendo a 802.1D por puerto",
            "No puede conectarse físicamente"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué mejoras propietarias antiguas no son compatibles con RSTP según el tema?",
          "answers": [
            "VLAN y enlaces troncales",
            "BPDU y Root ID",
            "UplinkFast y BackboneFast",
            "DHCP y ARP"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué función RSTP permite disponer de una alternativa a un enlace activo?",
          "answers": [
            "Puerto espejo exclusivamente",
            "Puerto de consola",
            "Puerto de administración IP",
            "Puerto alternativo o de respaldo"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué campo cambia de valor de versión al comparar BPDU 802.1D y RSTP?",
          "answers": [
            "La dirección MAC del host",
            "El MTU",
            "El campo Version",
            "El número de VLAN nativa"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué ocurre con los bits de señaladores en BPDU RSTP según el tema?",
          "answers": [
            "Se eliminan por completo",
            "Se reducen a un solo bit",
            "Se sustituyen por TTL",
            "Se utilizan los 8 bits"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué mejora de PortFast menciona el tema en PVST+?",
          "answers": [
            "VLAN sin etiquetas",
            "Protección BPDU y protección de raíz",
            "Fragmentación IP",
            "NAT dinámico"
          ],
          "correct": 1
        },
        {
          "question": "En PVST+, la VLAN 10 tiene como puente raíz S1 y la VLAN 11 tiene como raíz S3. ¿Qué objetivo permite esta configuración?",
          "answers": [
            "Eliminar todas las BPDU",
            "Repartir el tráfico de VLAN entre caminos diferentes",
            "Impedir el uso de troncales",
            "Forzar un solo puente raíz para toda la red"
          ],
          "correct": 1
        },
        {
          "question": "Un puerto alternativo de RSTP en una red de la VLAN 11 pierde su camino activo hacia la raíz. ¿Qué ventaja permite RSTP?",
          "answers": [
            "Habilitar rápidamente una ruta alternativa sin la espera clásica completa",
            "Aumentar automáticamente el número de VLAN",
            "Desactivar el puente raíz",
            "Cambiar la MAC de todos los hosts"
          ],
          "correct": 0
        },
        {
          "question": "En PVST+, la VLAN 12 tiene como puente raíz S1 y la VLAN 13 tiene como raíz S3. ¿Qué objetivo permite esta configuración?",
          "answers": [
            "Eliminar todas las BPDU",
            "Impedir el uso de troncales",
            "Forzar un solo puente raíz para toda la red",
            "Repartir el tráfico de VLAN entre caminos diferentes"
          ],
          "correct": 3
        },
        {
          "question": "Un puerto alternativo de RSTP en una red de la VLAN 13 pierde su camino activo hacia la raíz. ¿Qué ventaja permite RSTP?",
          "answers": [
            "Desactivar el puente raíz",
            "Cambiar la MAC de todos los hosts",
            "Habilitar rápidamente una ruta alternativa sin la espera clásica completa",
            "Aumentar automáticamente el número de VLAN"
          ],
          "correct": 2
        },
        {
          "question": "En PVST+, la VLAN 14 tiene como puente raíz S1 y la VLAN 15 tiene como raíz S3. ¿Qué objetivo permite esta configuración?",
          "answers": [
            "Forzar un solo puente raíz para toda la red",
            "Impedir el uso de troncales",
            "Eliminar todas las BPDU",
            "Repartir el tráfico de VLAN entre caminos diferentes"
          ],
          "correct": 3
        },
        {
          "question": "Un puerto alternativo de RSTP en una red de la VLAN 15 pierde su camino activo hacia la raíz. ¿Qué ventaja permite RSTP?",
          "answers": [
            "Aumentar automáticamente el número de VLAN",
            "Desactivar el puente raíz",
            "Cambiar la MAC de todos los hosts",
            "Habilitar rápidamente una ruta alternativa sin la espera clásica completa"
          ],
          "correct": 3
        },
        {
          "question": "En PVST+, la VLAN 16 tiene como puente raíz S1 y la VLAN 17 tiene como raíz S3. ¿Qué objetivo permite esta configuración?",
          "answers": [
            "Impedir el uso de troncales",
            "Eliminar todas las BPDU",
            "Forzar un solo puente raíz para toda la red",
            "Repartir el tráfico de VLAN entre caminos diferentes"
          ],
          "correct": 3
        },
        {
          "question": "Un puerto alternativo de RSTP en una red de la VLAN 17 pierde su camino activo hacia la raíz. ¿Qué ventaja permite RSTP?",
          "answers": [
            "Habilitar rápidamente una ruta alternativa sin la espera clásica completa",
            "Desactivar el puente raíz",
            "Cambiar la MAC de todos los hosts",
            "Aumentar automáticamente el número de VLAN"
          ],
          "correct": 0
        },
        {
          "question": "En PVST+, la VLAN 18 tiene como puente raíz S1 y la VLAN 19 tiene como raíz S3. ¿Qué objetivo permite esta configuración?",
          "answers": [
            "Forzar un solo puente raíz para toda la red",
            "Repartir el tráfico de VLAN entre caminos diferentes",
            "Eliminar todas las BPDU",
            "Impedir el uso de troncales"
          ],
          "correct": 1
        },
        {
          "question": "Un puerto alternativo de RSTP en una red de la VLAN 19 pierde su camino activo hacia la raíz. ¿Qué ventaja permite RSTP?",
          "answers": [
            "Aumentar automáticamente el número de VLAN",
            "Cambiar la MAC de todos los hosts",
            "Desactivar el puente raíz",
            "Habilitar rápidamente una ruta alternativa sin la espera clásica completa"
          ],
          "correct": 3
        }
      ]
    }
  ]
};
