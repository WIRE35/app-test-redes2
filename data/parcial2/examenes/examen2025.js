/* Examen 2025: banco original de 40 preguntas. */
const examenParcial2_2025 = {
  "id": "examen-2025",
  "nombre": "Examen 2025 — 40 preguntas",
  "preguntas": [
    {
      "question": "En una red jerárquica bien diseñada, ¿qué ocurre típicamente si falla un switch de la capa de acceso?",
      "answers": [
        "Se produce un bucle de capa 2 en toda la topología.",
        "Solo se ven afectados los dispositivos conectados a ese switch; el resto de la red sigue operativa.",
        "Se pierde la conectividad hacia Internet para toda la red.",
        "Se interrumpe la conectividad de todos los switches de distribución."
      ],
      "correct": 1
    },
    {
      "question": "¿Qué ocurre si un puerto troncal 802.1Q en un switch Cisco recibe una trama etiquetada perteneciente a la VLAN nativa?",
      "answers": [
        "La trama se envía a todas las VLAN configuradas en el troncal.",
        "La trama se reetiqueta con VLAN 1 antes de reenviarse.",
        "La trama se acepta y se trata como tráfico untagged normal.",
        "La trama se descarta, ya que el tráfico de la VLAN nativa debe recibirse sin etiquetar."
      ],
      "correct": 3
    },
    {
      "question": "En una red con enlaces troncales 802.1Q, un error común de configuración que puede permitir tráfico no deseado entre VLAN es:",
      "answers": [
        "Configurar un enlace troncal como full dúplex.",
        "Asignar todos los puertos de acceso a VLAN distintas.",
        "Utilizar el mismo ID de VLAN en dos switches.",
        "Configurar diferentes VLAN nativas en los extremos de un mismo enlace troncal."
      ],
      "correct": 3
    },
    {
      "question": "Un beneficio específico de VTP mencionado en las transparencias es:",
      "answers": [
        "La configuración de las bases de datos de VLANs en los switchs clientes cuando se añaden nuevas VLAN.",
        "La negociación automática de las direcciones IP de gestión de los switches.",
        "La creación automática de enlaces EtherChannel entre switches.",
        "La detección y corrección automática de bucles de capa 2 sin necesidad de STP."
      ],
      "correct": 0
    },
    {
      "question": "¿Cuál es la principal función de VTP (VLAN Trunking Protocol) en una red conmutada?",
      "answers": [
        "Implementar el etiquetado 802.1Q en los enlaces troncales.",
        "Proporcionar autenticación de usuarios al acceder a la red.",
        "Asignar dinámicamente direcciones IP a los hosts pertenecientes a una VLAN.",
        "Distribuir y sincronizar la información de las VLAN entre switches dentro de un mismo dominio VTP."
      ],
      "correct": 3
    },
    {
      "question": "¿Qué afirmación sobre el número de revisión de configuración (configuration revision number) en VTP es correcta?",
      "answers": [
        "El número de revisión depende únicamente de la versión de IOS del switch.",
        "Si un switch con un número de revisión menor y base de datos vacía se conecta al dominio, solicita mediante una petición la información de las VLAN al servidor VTP",
        "El número de revisión solo aumenta si se añaden VLAN de rango extendido.",
        "El número de revisión se resetea automáticamente en todos los switches cada 24 horas."
      ],
      "correct": 1
    },
    {
      "question": "¿Cuál es el objetivo principal del protocolo Spanning Tree (STP) en redes de Capa 2 con enlaces redundantes?",
      "answers": [
        "Asignar prioridades de tráfico según el tipo de aplicación.",
        "Aumentar el ancho de banda efectivo entre todos los switches utilizando todos los enlaces a la vez.",
        "Dividir dinámicamente las VLAN en función de la carga de tráfico.",
        "Evitar bucles de conmutación desactivando selectivamente algunos puertos para producir una topología lógica sin ciclos."
      ],
      "correct": 3
    },
    {
      "question": "Para que un switch multicapa pueda enrutar tráfico entre VLAN, ¿cuál de las siguientes acciones es necesaria además de crear las VLAN y sus SVI?",
      "answers": [
        "Configurar enlaces de capa 3 únicamente en la capa de acceso.",
        "Deshabilitar STP en todos los puertos de acceso.",
        "Habilitar explícitamente el encaminamiento IP en el switch (por ejemplo, comando “ip routing”).",
        "Configurar el switch en modo VTP servidor."
      ],
      "correct": 2
    },
    {
      "question": "¿Cuál es el comportamiento de un switch configurado en modo VTP cliente?",
      "answers": [
        "Actúa igual que un servidor, pudiendo crear VLAN y distribuirlas.",
        "No participa en VTP en absoluto y solo reenvía las tramas etiquetadas.",
        "Solo guarda la base de datos de VLAN en NVRAM y no la actualiza desde la red.",
        "No permite crear ni borrar VLAN localmente, pero recibe y aplica las actualizaciones que envían los servidores VTP."
      ],
      "correct": 3
    },
    {
      "question": "Según la definición de VLAN de rango normal en switches Cisco, ¿qué rango de IDs de VLAN se utiliza para VLAN de rango normal (sin considerar los ID reservados)?",
      "answers": [
        "Del 1006 al 4094.",
        "Del 2 al 1001.",
        "Del 1 al 4094.",
        "Del 1 al 1005."
      ],
      "correct": 3
    },
    {
      "question": "Para que un switch reciba y aplique correctamente las actualizaciones de VTP enviadas por un servidor VTP, es imprescindible que:",
      "answers": [
        "Sea siempre un switch de capa 3.",
        "Tenga configurado cualquier nombre de dominio VTP pero la misma contraseña de consola.",
        "Esté en modo transparente y conectado por un puerto de acceso.",
        "Comparta el mismo nombre de dominio VTP y la misma versión VTP, y esté conectado mediante un enlace troncal válido."
      ],
      "correct": 3
    },
    {
      "question": "En un diseño de red jerárquica de tres capas, ¿cuál es la función principal de la capa de distribución respecto a la capa de acceso?",
      "answers": [
        "Proveer conectividad directa con Internet para todos los usuarios finales.",
        "Agregar el tráfico de la capa de acceso y aplicar políticas de Capa 3, como control de dominios de broadcast y filtrado.",
        "Conectar únicamente servidores y sistemas de almacenamiento sin conmutación de usuarios.",
        "Actuar exclusivamente como backbone físico de alta velocidad sin funciones de filtrado."
      ],
      "correct": 1
    },
    {
      "question": "En una red jerárquica moderna, ¿en qué capa se recomienda realizar el enrutamiento InterVLAN cuando se dispone de switches multicapa?",
      "answers": [
        "Exclusivamente en la capa núcleo.",
        "Solo en dispositivos situados fuera de la jerarquía (por ejemplo, en un firewall externo).",
        "En la capa de acceso.",
        "En la capa de distribución."
      ],
      "correct": 3
    },
    {
      "question": "En una red jerárquica con MLS en la capa de distribución, ¿qué efecto positivo tiene sobre el dominio de difusión global?",
      "answers": [
        "Permite mantener dominios de broadcast más pequeños y controlados, ya que el tráfico de cada VLAN se enruta localmente sin inundar el núcleo.",
        "Duplica el tamaño de todos los dominios de broadcast para mejorar la redundancia.",
        "Impide la existencia de múltiples dominios de broadcast en la red.",
        "Hace que todo el tráfico broadcast sea centralizado en el núcleo para facilitar su gestión."
      ],
      "correct": 0
    },
    {
      "question": "Una de las motivaciones para utilizar switches multicapa (MLS) en lugar de routers tradicionales para el enrutamiento InterVLAN es que:",
      "answers": [
        "Los MLS permiten mezclar tramas Token Ring y Ethernet sin etiquetado.",
        "Los MLS eliminan la necesidad de STP al no generar bucles.",
        "Los MLS no requieren configuración de direcciones IP en las interfaces.",
        "El enrutamiento entre VLAN se realiza por hardware a alta velocidad, reduciendo la necesidad de enviar el tráfico hasta el router de núcleo."
      ],
      "correct": 3
    },
    {
      "question": "En un diseño de núcleo colapsado, ¿qué capas se integran en una sola desde el punto de vista lógico?",
      "answers": [
        "La capa de acceso y la capa núcleo.",
        "Las tres capas (acceso, distribución y núcleo) en un único dispositivo.",
        "La capa de acceso y la capa de distribución.",
        "La capa de distribución y la capa núcleo."
      ],
      "correct": 3
    },
    {
      "question": "¿Cuál de las siguientes afirmaciones describe mejor el beneficio del agregado de enlaces (EtherChannel) entre switches en una red jerárquica?",
      "answers": [
        "Evita la necesidad de utilizar protocolos de spanning tree.",
        "Permite combinar varios enlaces físicos en un único enlace lógico para incrementar el ancho de banda y aportar redundancia.",
        "Reduce el número de direcciones MAC que un switch necesita aprender.",
        "Permite que un solo enlace físico transporte tramas de varias VLAN sin etiquetado."
      ],
      "correct": 1
    },
    {
      "question": "En una red jerárquica, ¿qué se entiende por diámetro de la red?",
      "answers": [
        "El número máximo de dispositivos de red que debe atravesar un paquete desde el origen hasta el destino.",
        "La suma de todos los anchos de banda disponibles en la red.",
        "El número de usuarios simultáneos que puede soportar la red sin congestión.",
        "La distancia física en metros entre los dos nodos más alejados."
      ],
      "correct": 0
    },
    {
      "question": "¿Qué efecto tiene reducir manualmente la prioridad STP de un switch por debajo del valor por defecto?",
      "answers": [
        "Hace que el switch bloquee todos sus puertos hasta completar la convergencia.",
        "No tiene ningún efecto sobre la elección del puente raíz.",
        "Aumenta la probabilidad de que dicho switch sea elegido como puente raíz.",
        "Impide que el switch pueda ser puente raíz."
      ],
      "correct": 2
    },
    {
      "question": "Una ventaja importante de las VLAN es que permiten:",
      "answers": [
        "Asignar a todos los usuarios la misma política de seguridad de forma global.",
        "Eliminar la necesidad de utilizar switches de nivel 2.",
        "Evitar completamente el uso de routers en la red.",
        "Segmentar lógicamente la red en función de criterios organizativos (departamentos, proyectos) independientemente de la ubicación física."
      ],
      "correct": 3
    },
    {
      "question": "En el esquema de “enrutamiento InterVLAN tradicional” (router con varias interfaces físicas), uno de sus inconvenientes principales es que:",
      "answers": [
        "Requiere una interfaz física independiente en el router y en el switch para cada VLAN, lo que no escala bien.",
        "No permite aplicar listas de control de acceso entre VLAN.",
        "No funciona si se utilizan enlaces troncales 802.1Q.",
        "Impide utilizar direcciones IP privadas en las VLAN."
      ],
      "correct": 0
    },
    {
      "question": "En STP, el puerto que proporciona el mejor camino (menor costo) desde un switch no raíz hacia el puente raíz se denomina:",
      "answers": [
        "Puerto raíz (Root Port).",
        "Puerto designado.",
        "Puerto alternativo.",
        "Puerto bloqueado."
      ],
      "correct": 0
    },
    {
      "question": "¿Cuál es la secuencia correcta de estados de un puerto STP que pasa de bloqueado a reenviar (forwarding) en 802.1D clásico?",
      "answers": [
        "Listening → Blocking → Learning → Forwarding.",
        "Listening → Learning → Blocking → Forwarding.",
        "Blocking (o Disabled) → Listening → Learning → Forwarding.",
        "Disabled → Forwarding → Learning → Listening."
      ],
      "correct": 2
    },
    {
      "question": "En un dominio VTP, ¿qué tipo de mensaje se utiliza cuando un switch se inicia sin información de VLAN y necesita obtener la base de datos desde el servidor VTP?",
      "answers": [
        "Un mensaje de Subconjunto (Subset Advertisement).",
        "Un mensaje de Resumen (Summary Advertisement).",
        "Un mensaje de Keepalive de BPDU.",
        "Un mensaje de Petición (Request Advertisement)."
      ],
      "correct": 3
    },
    {
      "question": "La característica PortFast en un switch Cisco está diseñada principalmente para:",
      "answers": [
        "Permitir que los puertos troncales aprendan direcciones MAC más rápido.",
        "Evitar la necesidad de STP en enlaces de acceso.",
        "Acelerar la elección del puente raíz en topologías complejas.",
        "Permitir que los puertos conectados a hosts finales pasen inmediatamente al estado de reenvío, reduciendo problemas con DHCP."
      ],
      "correct": 3
    },
    {
      "question": "¿Cuál es un riesgo importante de habilitar PortFast en un puerto al que se conecta otro switch en lugar de un host?",
      "answers": [
        "Se pueden introducir bucles de capa 2 porque el puerto comienza a reenviar tráfico sin pasar por estados de escucha y aprendizaje.",
        "El switch quedará excluido del proceso de elección del puente raíz.",
        "Se reducirá el ancho de banda disponible a la mitad en ese enlace.",
        "Las BPDUs dejarán de circular por toda la red."
      ],
      "correct": 0
    },
    {
      "question": "¿Cuál de las siguientes situaciones representa un uso prudente de VTP en una red de producción?",
      "answers": [
        "Conectar switches nuevos sin revisar el número de revisión de VTP.",
        "Usar un único dominio VTP para toda la organización, incluyendo entornos de laboratorio.",
        "Configurar todos los switches en modo servidor para aumentar la redundancia.",
        "Limitar el rol de servidor VTP a pocos switches controlados y documentar cuidadosamente cambios de VLAN."
      ],
      "correct": 3
    },
    {
      "question": "En el modelo de red jerárquica, ¿por qué es recomendable limitar el diámetro de la red?",
      "answers": [
        "Porque disminuye el número de dominios de colisión necesarios.",
        "Porque reduce el tamaño máximo de las tablas de direccionamiento IP en los routers.",
        "Porque permite prescindir por completo de protocolos de routing dinámico.",
        "Porque cada salto adicional introduce latencia de conmutación, lo que aumenta el retardo extremo a extremo."
      ],
      "correct": 3
    },
    {
      "question": "En una red con múltiples VLAN, ¿por qué es necesario un dispositivo de Capa 3 para permitir la comunicación entre ellas?",
      "answers": [
        "Porque las VLAN comparten el mismo dominio de broadcast.",
        "Porque los switches solo pueden reenviar tráfico de broadcast.",
        "Porque cada VLAN suele asociarse a una red IP distinta y el encaminamiento entre redes requiere funciones de Capa 3.",
        "Porque los routers son los únicos dispositivos capaces de interpretar direcciones MAC."
      ],
      "correct": 2
    },
    {
      "question": "Durante la elección del puente raíz en STP, ¿qué criterio se utiliza para decidir qué switch se convierte en root bridge?",
      "answers": [
        "El switch con el Bridge ID (BID) numéricamente más bajo, combinando prioridad y dirección MAC.",
        "El switch con la dirección IP de gestión más baja.",
        "El switch con el mayor número de puertos activos.",
        "El switch configurado con mayor prioridad STP."
      ],
      "correct": 0
    },
    {
      "question": "En un switch multicapa (MLS), la interfaz lógica que se asocia a una VLAN concreta y a la que se asigna una dirección IP se denomina:",
      "answers": [
        "SVI (Switch Virtual Interface).",
        "Subinterfaz física.",
        "Loopback Interface.",
        "Interfaz trunk punto a punto."
      ],
      "correct": 0
    },
    {
      "question": "En un enlace troncal 802.1Q en un switch Cisco, ¿qué ocurre con una trama que llega SIN etiqueta VLAN por ese puerto?",
      "answers": [
        "Se descarta por considerarse no válida.",
        "Se etiqueta automáticamente con la VLAN de menor ID configurada en el switch.",
        "Se reenvía por todos los puertos como si fuera broadcast global.",
        "Se asocia a la VLAN nativa configurada en ese puerto troncal."
      ],
      "correct": 3
    },
    {
      "question": "En una red jerárquica, ubicar físicamente los servidores de una comunidad de usuarios cerca de dicha comunidad tiene como principal ventaja que:",
      "answers": [
        "Se incrementa el tamaño del dominio de broadcast, lo que mejora la difusión de servicios.",
        "Se eliminan completamente las colas de espera en los servidores de aplicaciones.",
        "Se evita la necesidad de enlaces troncales entre switches.",
        "Se reduce el impacto del tráfico cliente-servidor sobre el resto de la red al disminuir el número de saltos necesarios."
      ],
      "correct": 3
    },
    {
      "question": "¿Cuál de las siguientes afirmaciones describe correctamente la relación entre VLAN y dominios de difusión (broadcast)?",
      "answers": [
        "Las VLAN solo segmentan el tráfico unicast, no el broadcast.",
        "Los dominios de broadcast se definen únicamente mediante routers, no mediante VLAN.",
        "Todas las VLAN de un mismo switch comparten el mismo dominio de broadcast.",
        "Cada VLAN define su propio dominio de broadcast independiente."
      ],
      "correct": 3
    },
    {
      "question": "En el estándar 802.1Q, ¿cuántos bits tiene el campo ID de VLAN (VID) y cuántas VLAN diferentes permite identificar?",
      "answers": [
        "10 bits, permitiendo hasta 1024 VLAN diferentes.",
        "12 bits, permitiendo hasta 4096 VLAN diferentes (0–4095, aunque algunas se reservan).",
        "8 bits, permitiendo hasta 256 VLAN diferentes.",
        "16 bits, permitiendo hasta 65536 VLAN diferentes."
      ],
      "correct": 1
    },
    {
      "question": "En la configuración por defecto de STP 802.1D, ¿cuáles son los valores típicos de los temporizadores Hello, Max Age y Forward Delay respectivamente?",
      "answers": [
        "5 s, 15 s y 5 s.",
        "2 s, 20 s y 15 s.",
        "10 s, 20 s y 2 s.",
        "1 s, 10 s y 30 s."
      ],
      "correct": 1
    },
    {
      "question": "En la solución “Router on a Stick” para enrutamiento InterVLAN:",
      "answers": [
        "No se permite el uso de etiquetado 802.1Q.",
        "Se utiliza un único enlace físico troncal entre el router y el switch, con subinterfaces en el router para cada VLAN.",
        "Cada VLAN debe conectarse a un router distinto.",
        "El enlace entre router y switch debe ser siempre de acceso, no troncal."
      ],
      "correct": 1
    },
    {
      "question": "¿Dónde se almacena la base de datos de VLAN de rango normal en un switch Cisco que utiliza VTP en modo servidor?",
      "answers": [
        "En la NVRAM, dentro del archivo startup-config.",
        "En la RAM, dentro de la running-config.",
        "En la ROM, como parte del IOS.",
        "En el archivo vlan.dat ubicado en la memoria flash del switch."
      ],
      "correct": 3
    },
    {
      "question": "¿Qué modo VTP es el más adecuado para un switch perimetral en el que se desea tener VLAN locales que no se propaguen al resto de la red?",
      "answers": [
        "Modo servidor.",
        "Modo transparente.",
        "Modo cliente.",
        "Modo híbrido."
      ],
      "correct": 1
    },
    {
      "question": "En un entorno convergente datos/voz/vídeo, una ventaja clave frente a mantener tres infraestructuras separadas es que:",
      "answers": [
        "Se eliminan los requisitos de Calidad de Servicio (QoS) para el tráfico de voz.",
        "La administración de la red se simplifica al gestionar una sola infraestructura física con políticas de QoS integradas.",
        "Los teléfonos IP pueden funcionar sin alimentación eléctrica adicional.",
        "La red de datos queda aislada de cualquier problema en la red de voz."
      ],
      "correct": 1
    }
  ]
};
