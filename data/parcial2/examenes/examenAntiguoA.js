/* Test antiguo A: 25 preguntas unicas extraidas de los examenes 2024 (PDF 2-5). */
const examenParcial2_AntiguoA = {
  "id": "examen-antiguo-a",
  "nombre": "Examen antiguo A — 25 preguntas",
  "preguntas": [
    {
      "question": "Los switches que incorporan la tecnología StackWise son de tipo",
      "answers": [
        "Apilable",
        "Fijo",
        "StackWise",
        "Modular"
      ],
      "correct": 2
    },
    {
      "question": "Respecto al diseño de una red, indica la afirmación errónea:",
      "answers": [
        "los servidores que necesitan acceso frecuente a ciertos recursos se deben ubicar a muy corta distancia",
        "Se debe considerar dónde se ubican los medios de almacenamiento y los servidores de datos para determinar el impacto del tráfico en la red.",
        "Los switches seleccionados para los centros de datos suelen ser del mismo tipo que el resto de switches de acceso",
        "El tráfico entre servidor y servidor es el tráfico generado entre los dispositivos de almacenamiento de datos en la red."
      ],
      "correct": 2
    },
    {
      "question": "Indica cual de las siguientes no es una característica de los switches de capa de acceso",
      "answers": [
        "Agregado de enlaces",
        "Componentes redundantes",
        "Seguridad de puerto",
        "VLAN"
      ],
      "correct": 1
    },
    {
      "question": "Dispositivos como un Punto de Acceso o un telefono IP, es recomendable conectarlos a un switch con tecnología:",
      "answers": [
        "PoE",
        "IPv6",
        "NAT",
        "Ninguna de las anteriores"
      ],
      "correct": 0
    },
    {
      "question": "Aquellos switches con características y opciones limitadas por el modelo se denominan",
      "answers": [
        "switchs de configuración fija",
        "switchs de configuración modular",
        "Ninguna de las anteriores",
        "switchs de configuración original"
      ],
      "correct": 0
    },
    {
      "question": "Indica cual de las siguientes no es una característica de los switches de capa de acceso",
      "answers": [
        "WLAN",
        "Seguridad de puerto",
        "Agregado de enlaces",
        "Fast/Gigabit Ethernet"
      ],
      "correct": 0
    },
    {
      "question": "En una red jerárquica, la capa que agrega los datos recibidos de los switches de la capa inferior antes de que se transmitan a la capa superior para el enrutamiento hacia su destino es:",
      "answers": [
        "Capa de acceso",
        "Ninguna de las anteriores",
        "Capa de Red",
        "Capa de núcleo"
      ],
      "correct": 1
    },
    {
      "question": "El proceso de medición del uso del ancho de banda en una red y el análisis de datos con el fin de lograr ajustes del rendimiento, se denomina",
      "answers": [
        "Análisis del flujo de tráfico",
        "Análisis de la escalabilidad de la red",
        "Análisis de las perdidas de datos",
        "Ninguna de las anteriores"
      ],
      "correct": 0
    },
    {
      "question": "Cuando el tráfico de la red no puede ingresar ni salir del puerto, sin incluir las tramas de unidad de datos del protocolo de puentes (BPDU) utilizadas por STp para evitar bucles, el puerto se considera",
      "answers": [
        "Apagado",
        "Aprendizaje",
        "Activo",
        "Ninguna de las anteriores"
      ],
      "correct": 3
    },
    {
      "question": "El arbol de expansión de menor coste es",
      "answers": [
        "aquel que proporciona menor coste total",
        "aquel cuyo camino más largo tiene el mayor coste",
        "Ninguna de las anteriores",
        "aquel cuyo camino más largo tiene el menor coste"
      ],
      "correct": 0
    },
    {
      "question": "El estado inicial de todos los puertos cuando se inicia el switch es :",
      "answers": [
        "Apagado",
        "Ninguna de las anteriores",
        "Envío",
        "Aprendizaje"
      ],
      "correct": 1
    },
    {
      "question": "El STA designa un único switch como puente raíz y lo utiliza como punto de referencia para todos los cálculos de rutas. Dicho puente raíz se elige a partir de",
      "answers": [
        "Siempre en función de su MAC",
        "La elección es aleatoria",
        "Si pertenece a la capa de nucleo",
        "Ninguna de la anteriores"
      ],
      "correct": 3
    },
    {
      "question": "El tiempo de envío de las actualizaciones STP se denomina",
      "answers": [
        "Ninguna de las anteriores",
        "Antigüedad máxima",
        "Retardo de envío",
        "Tiempo de saludo"
      ],
      "correct": 3
    },
    {
      "question": "El tiempo que transcurre el protocolo STP de pasar del estado de bloqueo a escucha se denomina",
      "answers": [
        "Ninguna de las anteriores",
        "Antigüedad máxima",
        "Tiempo de saludo",
        "Retardo de envio"
      ],
      "correct": 3
    },
    {
      "question": "En los pasos de convergencia STP, indica cual es el primer paso a realizar",
      "answers": [
        "Elegir los puertos raiz",
        "Elegir los puertos designados y no designados",
        "Ninguna de las anteriores",
        "Elegir un puente raiz"
      ],
      "correct": 3
    },
    {
      "question": "En STP, los puertos configurados en estado de bloqueo se denominan",
      "answers": [
        "Puertos raiz",
        "Puertos no designados",
        "Puertos designados",
        "Puertos bloqueados"
      ],
      "correct": 1
    },
    {
      "question": "Respecto a las funciones de los puertos en STP, indique la afirmación errónea",
      "answers": [
        "El puerto no designado es aquel puerto de switch que está bloqueado",
        "El puerto designado existe en los puentes raíz y en los que no son raíz",
        "El puente raíz es elegido para la instancia de spanning-tree",
        "Todos los puentes tienen al menos un puerto raíz"
      ],
      "correct": 3
    },
    {
      "question": "Respecto al algoritmo STA utilizado en STP, indica la afirmación errónea:",
      "answers": [
        "El STA considera los costos tanto de la ruta como del puerto cuando determina la ruta que debe permanecer desbloqueada",
        "Todos los switches (menos los switches en modo transparente) utilizan el STA para determinar los puertos que deben bloquearse",
        "Todos los switches que comparten STP intercambian tramas de BPDU para determinar el switch que posee el menor ID de puente (BID)",
        "El STA designa un único switch como puente raíz y lo utiliza como punto de referencia para todos los cálculos de rutas"
      ],
      "correct": 1
    },
    {
      "question": "Selecciona el protocolo introducido por IEEE que permite una rapida convergencia de STP",
      "answers": [
        "RTP",
        "RSTP",
        "FSTP",
        "Ninguna de las anteriores"
      ],
      "correct": 1
    },
    {
      "question": "Ante la presencia de VLANs, los dominios de broadcasts",
      "answers": [
        "se unifican",
        "Ninguna de las anteriores",
        "se solapan",
        "se expanden"
      ],
      "correct": 1
    },
    {
      "question": "El ID por defecto en un switch de la VLAN nativa es:",
      "answers": [
        "1",
        "99",
        "150",
        "Ninguna de las Anteriores"
      ],
      "correct": 0
    },
    {
      "question": "En una red conmutada sin existencia de VLAN's...",
      "answers": [
        "Tenemos varios dominios de colisión y difusión",
        "Ninguna de las anteriores",
        "Tenemos un único dominio de difusión",
        "Tenemos un único dominio de colisión y multiples dominios de difusión"
      ],
      "correct": 2
    },
    {
      "question": "Existen diversos tipos de VLAN pero aquella que exige características especiales de retardo y ancho de banda garantizado es:",
      "answers": [
        "VLAN de voz",
        "VLAN de datos",
        "VLAN predeterminada",
        "VLAN nativa"
      ],
      "correct": 0
    },
    {
      "question": "Indica cual de los siguientes no es un beneficio de las VLAN",
      "answers": [
        "Aumento de costos",
        "Mitigación de la tormenta de difusión",
        "Administración de aplicación o de proyectos más simples",
        "Seguridad"
      ],
      "correct": 0
    },
    {
      "question": "Para la comunicación intra VLAN es necesaria la presencia de ...",
      "answers": [
        "únicamente un router",
        "un switch de capa 3 o un router",
        "Ninguna de las anteriores",
        "ninguna entidad de nivel 3, unicamente una red conmutada"
      ],
      "correct": 3
    }
  ]
};
