const tema7 = {
  "id": "tema7",
  "tema": "Tema 7 — Protocolo VTP",
  "tests": [
    {
      "id": "t7-1",
      "nombre": "Test T7.1 - Fundamentos, beneficios, componentes y dominios VTP",
      "preguntas": [
        {
          "question": "¿Qué significan las siglas VTP?",
          "answers": [
            "VLAN Transfer Process",
            "Virtual Transport Path",
            "VLAN Trunking Protocol",
            "Variable Trunk Port"
          ],
          "correct": 2
        },
        {
          "question": "¿Cuál es la finalidad central de VTP?",
          "answers": [
            "Enrutar paquetes entre VLAN",
            "Asignar direcciones IP mediante DHCP",
            "Evitar todos los bucles Ethernet",
            "Distribuir y sincronizar información de VLAN entre switches habilitados"
          ],
          "correct": 3
        },
        {
          "question": "¿En qué dispositivo se realizan los cambios de VLAN en el ejemplo básico de VTP?",
          "answers": [
            "En el router de salida obligatoriamente",
            "En cada PC conectada",
            "En todos los switches cliente por separado",
            "En el switch configurado como servidor VTP"
          ],
          "correct": 3
        },
        {
          "question": "¿Cómo llegan los cambios del servidor VTP al resto de switches habilitados?",
          "answers": [
            "Mediante ARP entre los hosts",
            "Mediante solicitudes DNS de cada PC",
            "A través de mensajes ICMP Echo",
            "Mediante publicaciones VTP a través de la red conmutada"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué beneficio de VTP evita discrepancias en las VLAN de los switches?",
          "answers": [
            "Cifrado de los enlaces troncales",
            "Consistencia de configuración VLAN",
            "Eliminación del direccionamiento IP",
            "Aumento automático de velocidad de puerto"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué beneficio aparece expresamente en las diapositivas?",
          "answers": [
            "Seguimiento y monitorización de VLAN",
            "Conversión de switches en routers",
            "Reducción del tamaño de las MAC",
            "Eliminación de STP"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué tipo de informes se cita como beneficio de VTP?",
          "answers": [
            "Informes sobre contraseñas de usuarios",
            "Informes meteorológicos",
            "Informes dinámicos en una red",
            "Informes de consumo eléctrico de PCs"
          ],
          "correct": 2
        },
        {
          "question": "Según el tema, ¿qué puede facilitar VTP al agregar VLAN a la red?",
          "answers": [
            "Sustitución de Ethernet por Wi-Fi",
            "Configuración dinámica de enlaces troncales",
            "Asignación de IP públicas",
            "Desactivación de las interfaces físicas"
          ],
          "correct": 1
        },
        {
          "question": "¿Cuál de estos elementos es un componente de VTP enumerado en el tema?",
          "answers": [
            "Dominio del VTP",
            "Servidor DHCP",
            "Puerta de enlace predeterminada",
            "Máscara de subred"
          ],
          "correct": 0
        },
        {
          "question": "¿Cuál de los siguientes NO es un modo VTP listado en el tema?",
          "answers": [
            "Modo enrutador",
            "Modo transparente",
            "Modo servidor",
            "Modo cliente"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué se entiende por dominio VTP?",
          "answers": [
            "Un segmento de cable de cobre",
            "Una subred IP creada por cada host",
            "El nombre del servidor DNS",
            "Conjunto de switches que comparten un ámbito de administración VTP"
          ],
          "correct": 3
        },
        {
          "question": "En el diagrama de dominios, ¿qué nombres de dominio aparecen?",
          "answers": [
            "vlan10, vlan20 y vlan30",
            "cisco1, cisco2 y cisco3",
            "switchA, switchB y switchC",
            "root1, root2 y root3"
          ],
          "correct": 1
        },
        {
          "question": "En el esquema de la página 8, ¿qué dominio comparten S1, S2 y S3?",
          "answers": [
            "cisco2",
            "cisco3",
            "cisco1",
            "Ninguno"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué condición deben cumplir S1, S2 y S3 en el ejemplo de la página 8 para compartir las publicaciones del dominio?",
          "answers": [
            "Conectarse al mismo puerto físico",
            "Tener idéntica dirección IP",
            "Tener la misma dirección MAC",
            "Tener el mismo nombre de dominio VTP"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué comando se muestra para consultar el estado VTP?",
          "answers": [
            "show ip route",
            "show arp",
            "show spanning-tree summary",
            "show vtp status"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué versión VTP muestra el ejemplo de estado de la página 6?",
          "answers": [
            "Versión 4",
            "Versión 2",
            "Versión 3",
            "Versión 1"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué modo operativo aparece en la salida de estado VTP del ejemplo?",
          "answers": [
            "Client",
            "Transparent",
            "Disabled",
            "Server"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué valor de revisión de configuración aparece en la salida de ejemplo?",
          "answers": [
            "10",
            "2",
            "0",
            "255"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué dato del estado VTP indica cuántas VLAN existen?",
          "answers": [
            "VTP Pruning Mode",
            "Number of existing VLANs",
            "MD5 digest",
            "VTP Traps Generation"
          ],
          "correct": 1
        },
        {
          "question": "Si un administrador necesita ver el dominio y el modo de un switch, ¿qué salida del tema debe consultar?",
          "answers": [
            "La tabla de rutas de un router",
            "El resultado de ping a Internet",
            "La tabla ARP de un PC",
            "El estado VTP del switch"
          ],
          "correct": 3
        }
      ]
    },
    {
      "id": "t7-2",
      "nombre": "Test T7.2 - Tramas y publicaciones VTP",
      "preguntas": [
        {
          "question": "¿Qué dos grandes partes del mensaje se distinguen en la página 9?",
          "answers": [
            "Cabecera IP y cabecera TCP",
            "Encabezado VTP y mensaje VTP",
            "Solicitud ARP y respuesta ARP",
            "Cabecera DNS y respuesta DNS"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué encapsulación Ethernet se representa en la página 10 para transportar VTP?",
          "answers": [
            "802.11ax",
            "PPP",
            "802.1Q",
            "HDLC serial"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué campos se señalan dentro de la etiqueta 802.1Q de la página 10?",
          "answers": [
            "PRI e ID de VLAN",
            "Puerto TCP origen y destino",
            "Dirección IP origen y destino",
            "TTL y checksum IP"
          ],
          "correct": 0
        },
        {
          "question": "¿Cuál es la dirección MAC de destino mostrada en la trama VTP de la página 11?",
          "answers": [
            "01-00-0C-CC-CC-CC",
            "FF-FF-FF-FF-FF-FF",
            "01-80-C2-00-00-00",
            "00-00-00-00-00-00"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué valores DSAP y SSAP aparecen en el encapsulado LLC del ejemplo?",
          "answers": [
            "00 y 00",
            "AA y AA",
            "FF y FF",
            "08 y 00"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué valor PID aparece en la cabecera SNAP de VTP?",
          "answers": [
            "0800",
            "2003",
            "0806",
            "8100"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué identificador OUI se indica para Cisco en la trama VTP?",
          "answers": [
            "00000C",
            "FFFFFF",
            "000001",
            "080600"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué dato aparece siempre entre los campos del mensaje VTP, según el esquema?",
          "answers": [
            "Puerto UDP del usuario",
            "TTL del paquete",
            "Dirección IP del host",
            "Número de revisión"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué información de dominio global transportan las publicaciones VTP?",
          "answers": [
            "Nombre de dominio VTP",
            "Contraseña de cada usuario",
            "Dirección IP de cada ordenador",
            "Tabla ARP de los hosts"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué elemento de control se cita en la información global de VTP?",
          "answers": [
            "Número de secuencia TCP",
            "Número de puerto DHCP",
            "MAC de la impresora",
            "MD5 digest"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué dato de cada VLAN se incluye en la información distribuida?",
          "answers": [
            "Contraseña Wi-Fi",
            "ID de la VLAN",
            "Tabla de enrutamiento del ISP",
            "Dirección IP de cada host"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué información adicional de VLAN figura en las diapositivas?",
          "answers": [
            "Solo el número de PCs encendidos",
            "Nombre, tipo y estado de la VLAN",
            "Solo el cable conectado",
            "La contraseña del switch"
          ],
          "correct": 1
        },
        {
          "question": "¿Cuáles son los tres tipos de publicaciones VTP descritos?",
          "answers": [
            "ARP, ICMP y DNS",
            "Resumen, subconjunto y petición",
            "Hello, LSA y ACK",
            "Discover, Offer y Request"
          ],
          "correct": 1
        },
        {
          "question": "¿Cada cuánto se envían las publicaciones de resumen desde un servidor VTP según el tema?",
          "answers": [
            "Cada 5 minutos",
            "Cada 30 minutos",
            "Solo al reiniciar",
            "Cada 5 segundos"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué otro evento provoca una publicación de resumen según la diapositiva 13?",
          "answers": [
            "Un cambio de fondo de pantalla",
            "Un cambio en la configuración",
            "La apertura de un navegador",
            "Un ping fallido"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué mensaje comunica detalles sobre adiciones o eliminaciones de VLAN?",
          "answers": [
            "Trama ICMP",
            "Publicación de petición DNS",
            "Publicación de subconjunto",
            "Publicación ARP"
          ],
          "correct": 2
        },
        {
          "question": "¿Cuándo puede enviarse una publicación de petición VTP?",
          "answers": [
            "Cuando un switch necesita detalles de la configuración VLAN",
            "Cuando se establece una sesión SSH",
            "Cuando se quiere conocer una MAC mediante ARP",
            "Cuando un host solicita IP por DHCP"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué campo figura en la publicación de resumen de la página 16?",
          "answers": [
            "Dirección IP de cada usuario",
            "Puerto TCP destino",
            "Tabla de rutas OSPF",
            "Identidad del actualizador"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué campo identifica el orden de publicaciones de subconjunto?",
          "answers": [
            "Tiempo de vida IP",
            "Dirección MAC de broadcast",
            "Número de secuencia",
            "Número de puerto HTTP"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué campo aparece en el formato de publicación de petición de la página 18?",
          "answers": [
            "Valor de inicio",
            "Longitud de contraseña SSH",
            "Identificador de proceso OSPF",
            "Dirección IPv6 de destino"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "t7-3",
      "nombre": "Test T7.3 - Modos VTP y funcionamiento práctico",
      "preguntas": [
        {
          "question": "¿Qué modo VTP administra las configuraciones de VLAN del dominio?",
          "answers": [
            "Servidor",
            "Cliente",
            "Acceso",
            "Transparente"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué modo VTP actualiza sus configuraciones a partir de publicaciones y no puede cambiarlas localmente?",
          "answers": [
            "Troncal",
            "Servidor",
            "Transparente",
            "Cliente"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué modo VTP puede administrar VLAN locales sin compartir esa configuración con el dominio?",
          "answers": [
            "Dinámico",
            "Servidor",
            "Transparente",
            "Cliente"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué modos participan completamente en las publicaciones VTP según la tabla?",
          "answers": [
            "Cliente y transparente exclusivamente",
            "Solo transparente",
            "Solo servidor",
            "Servidor y cliente"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué hace un switch transparente con las publicaciones VTP según la tabla del tema?",
          "answers": [
            "Descarta todo tráfico Ethernet",
            "Actualiza su base de VLAN desde ellas",
            "Se convierte en servidor automáticamente",
            "Solo reenvía publicaciones VTP"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué modos conservan la configuración de VLAN global en NVRAM según la tabla?",
          "answers": [
            "Solo modo deshabilitado",
            "Servidor y transparente",
            "Cliente y servidor",
            "Solo cliente"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué modo no guarda en NVRAM las configuraciones VLAN del dominio según la tabla?",
          "answers": [
            "Transparente",
            "Servidor",
            "Todos las guardan",
            "Cliente"
          ],
          "correct": 3
        },
        {
          "question": "¿En qué modos indica la tabla que se actualizan otros switches del dominio VTP?",
          "answers": [
            "Servidor y cliente",
            "Solo transparente y cliente",
            "Solo transparente",
            "En ninguno"
          ],
          "correct": 0
        },
        {
          "question": "En el estado inicial de VTP en Acción 1, ¿qué modo tiene S1?",
          "answers": [
            "Deshabilitado",
            "Servidor",
            "Cliente",
            "Transparente"
          ],
          "correct": 1
        },
        {
          "question": "En VTP en Acción 1, ¿qué modo tiene S2?",
          "answers": [
            "Cliente",
            "Servidor",
            "Transparente",
            "Deshabilitado"
          ],
          "correct": 0
        },
        {
          "question": "En VTP en Acción 1, ¿qué modo tiene S3?",
          "answers": [
            "Cliente",
            "Transparente",
            "Servidor",
            "Deshabilitado"
          ],
          "correct": 1
        },
        {
          "question": "¿Cuál es la revisión de configuración de S1 al inicio del ejemplo?",
          "answers": [
            "2",
            "0",
            "5",
            "1"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué VLAN se muestran inicialmente en S1 en VTP en Acción 1?",
          "answers": [
            "1, 2 y 3",
            "10, 20 y 30",
            "Solo 1",
            "1 y 10"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué revisión tienen inicialmente S2 y S3 en VTP en Acción 1?",
          "answers": [
            "3",
            "2",
            "0",
            "5"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué publicación envía S1 a S2 y S3 en VTP en Acción 2?",
          "answers": [
            "ARP",
            "Resumen",
            "Petición",
            "Subconjunto"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué hace S2 tras recibir el resumen en VTP en Acción 3?",
          "answers": [
            "Borra todas las VLAN",
            "Cambia a modo servidor",
            "Desactiva el enlace troncal",
            "Solicita detalles de configuración de VLAN a S1"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué tipo de publicación envía S2 a S1 para pedir los detalles?",
          "answers": [
            "Petición",
            "Resumen",
            "STP BPDU",
            "Subconjunto"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué publicación envía S1 con los detalles de las VLAN en VTP en Acción 4?",
          "answers": [
            "Subconjunto",
            "ICMP",
            "ARP",
            "Petición"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué revisión de configuración figura en el servidor S1 durante la secuencia VTP en Acción?",
          "answers": [
            "1",
            "0",
            "2",
            "10"
          ],
          "correct": 2
        },
        {
          "question": "En la diapositiva Modo Transparente en Acción, ¿qué switch está en modo transparente?",
          "answers": [
            "S2",
            "S4",
            "S3",
            "S1"
          ],
          "correct": 2
        }
      ]
    },
    {
      "id": "t7-4",
      "nombre": "Test T7.4 - Depuración, verificación y configuración VTP",
      "preguntas": [
        {
          "question": "En la topología de depuración de la página 25, ¿qué switch ocupa la posición superior?",
          "answers": [
            "S1",
            "S3",
            "S4",
            "S2"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué switches están conectados a S1 mediante enlaces troncales en el esquema de depuración?",
          "answers": [
            "PC1 y PC2",
            "S2 y S3",
            "Solo S2",
            "PC4 y PC5"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué VLAN se asigna a PC1 en el diagrama de depuración?",
          "answers": [
            "VLAN 1",
            "VLAN 20",
            "VLAN 99",
            "VLAN 10"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué VLAN se asigna a PC2 en el diagrama de depuración?",
          "answers": [
            "VLAN 99",
            "VLAN 20",
            "VLAN 10",
            "VLAN 1"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué VLAN se asigna a PC3 en el diagrama de depuración?",
          "answers": [
            "VLAN 20",
            "VLAN 10",
            "VLAN 99",
            "VLAN 1"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué VLAN se asigna a PC4 en el diagrama de depuración?",
          "answers": [
            "VLAN 10",
            "VLAN 99",
            "VLAN 1",
            "VLAN 20"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué VLAN se asigna a PC5 en el diagrama de depuración?",
          "answers": [
            "VLAN 99",
            "VLAN 1",
            "VLAN 10",
            "VLAN 20"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué VLAN se asigna a PC6 en el diagrama de depuración?",
          "answers": [
            "VLAN 10",
            "VLAN 99",
            "VLAN 1",
            "VLAN 20"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué comando aparece en las capturas de depuración de S1 y S2?",
          "answers": [
            "show mac address-table dynamic",
            "show vtp password",
            "show interfaces trunk",
            "show ip route"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué encapsulación muestran los puertos troncales de las capturas?",
          "answers": [
            "ISL",
            "PPP",
            "802.1Q",
            "HDLC"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué estado muestran los enlaces de las capturas de S1 y S2?",
          "answers": [
            "err-disabled",
            "administratively down",
            "trunking",
            "notconnect"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué VLAN nativa aparece en las capturas de enlaces troncales?",
          "answers": [
            "99",
            "1",
            "20",
            "10"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué rango aparece como VLAN permitidas en los trunks mostrados?",
          "answers": [
            "1-4094",
            "10-20",
            "1006-4094",
            "1-1005"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué VLAN activas se observan en el dominio de gestión de la captura de S2?",
          "answers": [
            "Solo 1",
            "1, 30 y 40",
            "Solo 10 y 20",
            "1, 10, 20, 1002, 1003, 1004 y 1005"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué VLAN se observa en la captura de S1 pero no entre las activas de S2?",
          "answers": [
            "VLAN 10",
            "VLAN 20",
            "VLAN 1",
            "VLAN 30"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué se debe comprobar primero en el servidor VTP según la guía?",
          "answers": [
            "La ruta por defecto del router",
            "El servidor DNS",
            "La contraseña Wi-Fi",
            "Las configuraciones predeterminadas"
          ],
          "correct": 3
        },
        {
          "question": "¿Cuántos switches se indica configurar como servidores VTP en la guía?",
          "answers": [
            "Cuatro",
            "Dos",
            "Uno",
            "Tres"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué debe configurarse en el servidor antes de comprobar la distribución de VLAN?",
          "answers": [
            "Dirección pública de cada PC",
            "Una ruta estática por VLAN",
            "NAT en todos los enlaces",
            "Dominio VTP en el primer switch"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué debe hacerse con los enlaces entre switches en la guía?",
          "answers": [
            "Configurar los puertos troncales",
            "Desactivar todos los puertos",
            "Asignarles direcciones IP de host",
            "Conectarlos solo mediante consola"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué verificación se indica expresamente en la guía del cliente VTP?",
          "answers": [
            "Ejecutar traceroute a Internet",
            "Deshabilitar las VLAN de acceso",
            "Verificar el estado del VTP",
            "Reiniciar el router ISP"
          ],
          "correct": 2
        }
      ]
    }
  ]
};
