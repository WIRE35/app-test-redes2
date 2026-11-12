/* Test antiguo B: 25 preguntas unicas extraidas de los examenes 2024 (PDF 2-5). */
const examenParcial2_AntiguoB = {
  "id": "examen-antiguo-b",
  "nombre": "Examen antiguo B — 25 preguntas",
  "preguntas": [
    {
      "question": "Si la asignación de la VLAN de un puerto se realiza por la MAC del dispositivo conectado a dicho puerto, nos encontramos ante un modo de pertenencia de ...",
      "answers": [
        "VLAN estática",
        "VLAN dinámica",
        "VLAN física",
        "Ninguna de las anteriores"
      ],
      "correct": 1
    },
    {
      "question": "Si queremos configurar una indentidad IP al swicth , deberemos configurarle un",
      "answers": [
        "IPS",
        "PCI",
        "Ninguna de las anteriores",
        "VID"
      ],
      "correct": 2
    },
    {
      "question": "A medida que aumenta el tamaño de las redes",
      "answers": [
        "La gestión de la VLAN se hace más compleja y costosa",
        "Ninguna de las anteriores",
        "No afecta el tamaño a la gestión de VLAN",
        "La gestión de la VLAN se hace más sencilla y fácil"
      ],
      "correct": 0
    },
    {
      "question": "Dentro de los pasos recomendados en la configuración de un cliente VTP, indique cual de los siguientes no es un paso de configuración de un cliente",
      "answers": [
        "Configurar puertos de acceso",
        "Configurar enlaces troncales",
        "Configurar las VLAN y puertos troncales",
        "Todos son pasos de configuracion de un cliente VTP"
      ],
      "correct": 2
    },
    {
      "question": "El conmutador que reenvía publicaciones VTP pero que no utiliza la configuración de VTP se denomina:",
      "answers": [
        "VTP Transparente",
        "Ninguna de las anteriores",
        "Servidor VTP",
        "Cliente VTP"
      ],
      "correct": 0
    },
    {
      "question": "Indica cual de los siguientes no es un beneficio de VTP",
      "answers": [
        "Consistencia en la configuración VLAN",
        "Todos son beneficios de VTP",
        "Seguimiento y monitorización",
        "Configuración de enlace troncal dinámico cuando las VLAN se agregan a la red"
      ],
      "correct": 1
    },
    {
      "question": "Indica la afirmación errónea de VTP",
      "answers": [
        "permite al administrador de red realizar cambios en un switch que está configurado como servidor del VT",
        "El VTP guarda las configuraciones de la VLAN en la base de datos de la VLAN denominada vlan.dat",
        "el servidor del VTP distribuye y sincroniza la información de la VLAN a todos los switches de la red conmutada",
        "permite a un administrador de red configurar un switch de modo que propagará las configuraciones de la VLAN hacia los otros switches en la red"
      ],
      "correct": 2
    },
    {
      "question": "La capacidad principal y diferenciadora de un switch de capa 3 es la de ....",
      "answers": [
        "Dividir los dominios de colision",
        "Distinguir la VLAN a la que pertenece cada paquete recibido en sus enlaces troncales",
        "Conmutar paquetes entre diferentes puertos troncales.",
        "Ninguna de las anteriores"
      ],
      "correct": 3
    },
    {
      "question": "Respecto a las publicaciones de subconjunto de VTP indica la afirmación errónea:",
      "answers": [
        "Se envia automáticamente cada 5 minutos",
        "contiene el nombre de dominio del VTP, el número actual de revisión y otros detalles de la configuración del VTP",
        "Se envía inmediatamente cuando hay un cambio en el servidor o en alguno de los switches clientes",
        "Todas son ciertas"
      ],
      "correct": 0
    },
    {
      "question": "Todos los puertos de un switch se convierten en miembros de la VLAN ______ despues del arranque inicial",
      "answers": [
        "nativa",
        "de datos",
        "de usuario",
        "predeterminada"
      ],
      "correct": 3
    },
    {
      "question": "En el enrutamiento entre VLAN definido como tradicional necesitaremos tantos interfaces en el Router como ...",
      "answers": [
        "Ninguna de las anteriores",
        "direcciones IP tengamos utilizadas en todos los dispositivos de red",
        "Puertos tenga el switch al que está conectado",
        "Un sólo interfaz conectado a el switch"
      ],
      "correct": 0
    },
    {
      "question": "Indique cual de las siguientes clasificaciones de redes, se adapta mejor a las redes de instituciones o empresas:",
      "answers": [
        "LAN",
        "MAN",
        "Ninguna de las anteriores",
        "WAN"
      ],
      "correct": 0
    },
    {
      "question": "La creación de subinterfaces permite el enrutamiento entre VLAN denominado:",
      "answers": [
        "Ninguna de las anteriores",
        "Enrutamiento entre VLAN del router on-a-stick",
        "Subnetting",
        "Enrutamiento por subinterfaz"
      ],
      "correct": 1
    },
    {
      "question": "Para determinar el número de total necesario de switches de las tres capas debemos primero determinar el numero de switches necesarios en la capa de ....",
      "answers": [
        "Acceso",
        "Ninguna de las anteriores",
        "Distribución",
        "Nucleo"
      ],
      "correct": 0
    },
    {
      "question": "Un agregado de ancho de banda...",
      "answers": [
        "permite que se combinen dos switches para trabajar como un sólo witch a fin de lograr un rendimiento superior entre los switches.",
        "permite que se combinen los enlaces de puerto de los switches múltiples a fin de lograr un rendimiento superior entre los switches.",
        "Ninguna de las anteriores",
        "permite utilicen interfaces simples a fin de lograr un rendimiento superior entre los switches.."
      ],
      "correct": 1
    },
    {
      "question": "Indica cual de las siguientes no es una característica de un switch de la capa de nucleo",
      "answers": [
        "Agregado de enlaces",
        "Políticas de seguridad/Listas de Acceso",
        "Gigabit/ 10Gigabit Ethernet",
        "Componentes redundantes"
      ],
      "correct": 1
    },
    {
      "question": "Dispositivos como un Punto de Acceso o un telefono IP, es recomendable conectarlos a un switch con tecnología:",
      "answers": [
        "NAT",
        "EoF",
        "IPv6",
        "Ninguna de las anteriores"
      ],
      "correct": 3
    },
    {
      "question": "Los switches que pueden interconectarse con el uso de un cable especial del backplane que otorga rendimiento de ancho de banda alto entre los switches se denominan",
      "answers": [
        "Apilables",
        "Agregados",
        "Modulares",
        "Ninguna de las anteriores"
      ],
      "correct": 0
    },
    {
      "question": "Respecto a las redes convergentes, indica la afirmación errónea:",
      "answers": [
        "Los costos de red asociados con la convergencia eran altos",
        "La convergencia es el proceso de combinación de las comunicaciones con voz y video en una red de datos",
        "En el futuro, la totalidad de las redes serán convergentes.",
        "Las redes convergentes permiten la integración con centralitas PBX y grandes switches telefónicos"
      ],
      "correct": 0
    },
    {
      "question": "Cuando se permite que se combinen los enlaces de puerto de switches múltiples a fin de lograr un rendimiento superior entre los switches, se denomina",
      "answers": [
        "Diámetro de la red",
        "Ampliado de ancho de banda",
        "Redundancia",
        "Ninguna de las anteriores"
      ],
      "correct": 3
    },
    {
      "question": "La red debe detectar los problemas existentes y activar los dispositivos de backup de forma automática. Dentro de los mecanismos de nivel 2, se utiliza:",
      "answers": [
        "Ninguna de las anteriores",
        "Direccionamiento IP",
        "Spanning Tree",
        "VLANs"
      ],
      "correct": 2
    },
    {
      "question": "Respecto a la densidad de puerto de un switch, indica la afirmación errónea.",
      "answers": [
        "Las altas densidades de puerto permiten un mejor uso del espacio y de la energía cuando la fuente de ambos es limitada",
        "Todas las afirmaciones son correctas",
        "Los switches modulares pueden admitir densidades de puerto muy altas mediante el agregado de tarjetas de línea de puerto de switch múltiples",
        "Es el número de puertos disponibles en un sólo switch"
      ],
      "correct": 1
    },
    {
      "question": "Cuando se permite que se combinen los enlaces de puerto de switches múltiples a fin de lograr un rendimiento superior entre los switches, se denomina",
      "answers": [
        "Agregado de ancho de banda",
        "Diámetro de la red",
        "Ninguna de las anteriores",
        "Redundancia"
      ],
      "correct": 0
    },
    {
      "question": "Indica cual de los siguientes no es un beneficio obtenido directamente del uso de redes jerarquicas",
      "answers": [
        "Escalabilidad",
        "Seguridad",
        "Rendimiento",
        "Ninguna de las anteriores"
      ],
      "correct": 3
    },
    {
      "question": "La red debe detectar los problemas existentes y activar los dispositivos de backup de forma automática. Dentro de los mecanismos de nivel 2, se utiliza:",
      "answers": [
        "VLANs",
        "Ninguna de las anteriores",
        "Depuración VTP",
        "Direccionamiento IP"
      ],
      "correct": 1
    }
  ]
};
