const tema4 = {
  "id": "tema4",
  "tema": "Tema 4 — Redes jerárquicas",
  "tests": [
    {
      "id": "t4-1",
      "nombre": "Test T4.1 - Modelo de redes jerárquicas",
      "preguntas": [
        {
          "question": "¿Cuál es la principal ventaja de organizar una LAN mediante un modelo jerárquico?",
          "answers": [
            "Evitar el uso de switches",
            "Facilitar la administración, expansión y resolución de problemas",
            "Eliminar todas las VLAN",
            "Sustituir el cableado por enlaces inalámbricos"
          ],
          "correct": 1
        },
        {
          "question": "¿En cuántas capas se divide normalmente el modelo de diseño jerárquico?",
          "answers": [
            "Dos",
            "Cuatro",
            "Tres",
            "Cinco"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué conjunto recoge las tres capas del modelo jerárquico?",
          "answers": [
            "Física, enlace y red",
            "Acceso, distribución y núcleo",
            "Cliente, servidor y nube",
            "Transporte, sesión y aplicación"
          ],
          "correct": 1
        },
        {
          "question": "¿Por qué se considera modular un diseño de red jerárquico?",
          "answers": [
            "Porque separa funciones en capas independientes",
            "Porque todos los equipos deben ser iguales",
            "Porque utiliza una única VLAN",
            "Porque elimina la necesidad de routers"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué dos características facilita la separación de funciones en capas?",
          "answers": [
            "Congestión y latencia",
            "Escalabilidad y rendimiento",
            "Difusión y colisiones",
            "Cableado y alimentación"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué capa interactúa directamente con PC, impresoras y teléfonos IP?",
          "answers": [
            "Núcleo",
            "Distribución",
            "Acceso",
            "Internet"
          ],
          "correct": 2
        },
        {
          "question": "¿Cuál es el propósito principal de la capa de acceso?",
          "answers": [
            "Conectar dispositivos finales y controlar cuáles pueden comunicarse",
            "Actuar exclusivamente como salida a Internet",
            "Agregar todo el tráfico del núcleo",
            "Almacenar los datos corporativos"
          ],
          "correct": 0
        },
        {
          "question": "¿Cuál de estos dispositivos puede formar parte de la capa de acceso según el tema?",
          "answers": [
            "Solo routers",
            "Solo switches de capa 3",
            "Switches, routers, puentes, hubs y puntos de acceso",
            "Únicamente servidores"
          ],
          "correct": 2
        },
        {
          "question": "¿Dónde se conectaría normalmente una impresora de oficina dentro del modelo jerárquico?",
          "answers": [
            "En la capa núcleo",
            "En la capa de acceso",
            "En el backbone de Internet",
            "Directamente en un servidor de bases de datos"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué capa agrega los datos procedentes de los switches de acceso?",
          "answers": [
            "Física",
            "Núcleo",
            "Distribución",
            "Aplicación"
          ],
          "correct": 2
        },
        {
          "question": "¿Hacia qué capa reenvía la distribución el tráfico agregado para su encaminamiento posterior?",
          "answers": [
            "Acceso",
            "Núcleo",
            "Enlace",
            "Usuario"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué capa controla el flujo de tráfico mediante políticas?",
          "answers": [
            "Distribución",
            "Acceso exclusivamente",
            "Núcleo exclusivamente",
            "Capa física"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué capa delimita dominios de broadcast mediante el enrutamiento entre VLAN?",
          "answers": [
            "Acceso",
            "Núcleo",
            "Distribución",
            "Capa de aplicación"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué permiten hacer las VLAN en el ejemplo del tema?",
          "answers": [
            "Convertir un switch en un hub",
            "Separar el tráfico en subredes distintas",
            "Duplicar la velocidad de cada cable",
            "Eliminar la necesidad de direcciones IP"
          ],
          "correct": 1
        },
        {
          "question": "En el ejemplo de la universidad, ¿cómo se segmenta el tráfico mediante VLAN?",
          "answers": [
            "Por fabricantes de switches",
            "Por profesores, estudiantes y huéspedes",
            "Por longitud del cable",
            "Por velocidad de los discos"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué propiedades se destacan en los switches de distribución?",
          "answers": [
            "Baja disponibilidad y ausencia de redundancia",
            "Alta disponibilidad y redundancia",
            "Conexión exclusiva a impresoras",
            "Funcionamiento sin políticas"
          ],
          "correct": 1
        },
        {
          "question": "¿Por qué se exige fiabilidad en la capa de distribución?",
          "answers": [
            "Porque sus equipos suelen proporcionar disponibilidad y redundancia para el tráfico agregado",
            "Porque evita que existan usuarios finales",
            "Porque siempre sustituye a Internet",
            "Porque almacena las copias de seguridad"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué capa se describe como backbone de alta velocidad de la internetwork?",
          "answers": [
            "Acceso",
            "Distribución",
            "Núcleo",
            "Usuario"
          ],
          "correct": 2
        },
        {
          "question": "¿Cuál es una función esencial de la capa núcleo?",
          "answers": [
            "Conectar exclusivamente teléfonos IP",
            "Interconectar dispositivos de la capa de distribución",
            "Definir los grupos de alumnos",
            "Conectar impresoras de forma individual"
          ],
          "correct": 1
        },
        {
          "question": "¿Por qué debe reenviar datos rápidamente la capa núcleo?",
          "answers": [
            "Porque agrega el tráfico de todos los dispositivos de distribución",
            "Porque solo maneja una estación de trabajo",
            "Porque no tiene enlaces a otras capas",
            "Porque las VLAN no pueden atravesarla"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué características debe tener especialmente la capa núcleo?",
          "answers": [
            "Baja velocidad y configuración manual",
            "Alta disponibilidad y redundancia",
            "Un único puerto y ningún enlace alternativo",
            "Solo conectividad inalámbrica"
          ],
          "correct": 1
        },
        {
          "question": "Además de interconectar distribución, ¿a qué recursos puede conectarse el núcleo?",
          "answers": [
            "Solo impresoras USB",
            "Recursos de Internet",
            "Únicamente teléfonos analógicos",
            "Solo dispositivos Bluetooth"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué significa núcleo colapsado?",
          "answers": [
            "Eliminar por completo la capa de acceso",
            "Combinar distribución y núcleo en una capa",
            "Conectar todos los equipos a un hub",
            "Sustituir la red LAN por una WAN"
          ],
          "correct": 1
        },
        {
          "question": "¿En qué tipo de redes es habitual encontrar un núcleo colapsado?",
          "answers": [
            "Redes más pequeñas",
            "Exclusivamente redes mundiales",
            "Solo redes sin switches",
            "Únicamente centros de datos gigantes"
          ],
          "correct": 0
        },
        {
          "question": "Si un switch aplica políticas para controlar tráfico entre VLAN, ¿en qué capa encaja mejor según el tema?",
          "answers": [
            "Acceso",
            "Distribución",
            "Núcleo",
            "Terminal"
          ],
          "correct": 1
        },
        {
          "question": "Si un equipo se dedica a reenviar rápidamente tráfico agregado entre varios switches de distribución, ¿a qué capa pertenece?",
          "answers": [
            "Acceso",
            "Distribución",
            "Núcleo",
            "Dispositivo final"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué aporta la representación lógica de una red jerárquica?",
          "answers": [
            "Permite identificar fácilmente la función de cada switch",
            "Muestra siempre la posición exacta de los cables",
            "Impide instalar switches en el mismo armario",
            "Obliga a colocar cada capa en un piso diferente"
          ],
          "correct": 0
        },
        {
          "question": "En el ejemplo de la empresa mediana, ¿dónde se sitúan los servidores de correo y bases de datos?",
          "answers": [
            "En el mismo dispositivo que cada PC",
            "En otro piso respecto a las computadoras de usuarios",
            "Siempre fuera del edificio",
            "Únicamente en la capa de acceso inalámbrica"
          ],
          "correct": 1
        },
        {
          "question": "¿Dónde se instalan switches de acceso y distribución en el ejemplo del edificio?",
          "answers": [
            "En los armarios de cableado de cada piso",
            "Solo en el tejado",
            "En cada ordenador",
            "Exclusivamente junto al proveedor de Internet"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué demuestra que un switch de acceso y otro de distribución puedan estar apilados en el mismo armario?",
          "answers": [
            "Que acceso y distribución cumplen siempre la misma función",
            "Que la disposición física puede diferir de la organización lógica",
            "Que no existe capa núcleo",
            "Que cada planta requiere una red independiente"
          ],
          "correct": 1
        }
      ]
    },
    {
      "id": "t4-2",
      "nombre": "Test T4.2 - Beneficios de una red jerárquica",
      "preguntas": [
        {
          "question": "¿Qué propiedad permite reproducir módulos al crecer la red?",
          "answers": [
            "Latencia",
            "Difusión",
            "Escalabilidad",
            "Convergencia"
          ],
          "correct": 2
        },
        {
          "question": "¿Por qué la modularidad facilita la expansión?",
          "answers": [
            "Porque elimina las capas",
            "Porque impide añadir equipos",
            "Porque obliga a una malla completa",
            "Porque se replican componentes de diseño consistentes"
          ],
          "correct": 3
        },
        {
          "question": "En el ejemplo de crecimiento, ¿cuántos switches de acceso se conectan a dos de distribución?",
          "answers": [
            "Diez",
            "Veinte",
            "Cuarenta",
            "Dos"
          ],
          "correct": 0
        },
        {
          "question": "Si aumenta la carga de distribución, ¿qué capa puede necesitar más switches?",
          "answers": [
            "Terminales",
            "Aplicación",
            "Núcleo",
            "Acceso exclusivamente"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué mejora la disponibilidad frente al fallo de un switch de distribución?",
          "answers": [
            "Conectar cada switch de acceso a dos switches de distribución",
            "Conectar todos los PC a un hub",
            "Eliminar el núcleo",
            "Usar una sola ruta"
          ],
          "correct": 0
        },
        {
          "question": "Si falla uno de dos switches de distribución, ¿qué sucede con el tráfico del acceso?",
          "answers": [
            "Se elimina la VLAN",
            "Puede utilizar el otro switch de distribución",
            "Se pierde toda la red necesariamente",
            "Debe pasar por un teléfono IP"
          ],
          "correct": 1
        },
        {
          "question": "¿Cómo se mejora la redundancia de la capa núcleo?",
          "answers": [
            "Deshabilitando los puertos",
            "Conectando distribución con dos o más switches de núcleo",
            "Sustituyendo los switches por hubs",
            "Quitando los enlaces alternativos"
          ],
          "correct": 1
        },
        {
          "question": "¿En qué capa suele estar más limitada la redundancia?",
          "answers": [
            "Backbone",
            "Núcleo",
            "Distribución",
            "Acceso"
          ],
          "correct": 3
        },
        {
          "question": "¿Por qué los equipos finales suelen carecer de redundancia?",
          "answers": [
            "Porque todos usan rutas de núcleo",
            "Porque siempre tienen dos NIC",
            "Porque no necesitan conexión",
            "Normalmente no se conectan a varios switches de acceso"
          ],
          "correct": 3
        },
        {
          "question": "Si falla un switch de acceso, ¿qué dispositivos se ven normalmente afectados?",
          "answers": [
            "Solo los del núcleo",
            "Los conectados a ese switch",
            "Únicamente los servidores externos",
            "Todos los de la empresa"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué ventaja de rendimiento aporta el diseño jerárquico?",
          "answers": [
            "Obliga a que todos los enlaces sean lentos",
            "Evita atravesar switches intermediarios de bajo rendimiento",
            "Impide el agregado de tráfico",
            "Elimina el uso de cableado"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué capas realizan normalmente la conmutación de mayor rendimiento?",
          "answers": [
            "Solo acceso",
            "Solo terminales",
            "Acceso y aplicación",
            "Distribución y núcleo"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué significa acercarse a la velocidad de cable?",
          "answers": [
            "Transmitir siempre por radio",
            "Ignorar la capacidad del puerto",
            "Transmitir casi a la capacidad del enlace",
            "Usar un cable por usuario"
          ],
          "correct": 2
        },
        {
          "question": "¿Por qué se reduce la contención de ancho de banda?",
          "answers": [
            "Porque todos los puertos comparten un hub",
            "Porque los paquetes no se reenvían",
            "Porque distribución y núcleo procesan tráfico a alta velocidad",
            "Porque se deshabilitan las VLAN"
          ],
          "correct": 2
        },
        {
          "question": "¿Dónde suele configurarse la seguridad de puerto?",
          "answers": [
            "En las impresoras",
            "En switches de acceso",
            "En los monitores",
            "Solo en el núcleo"
          ],
          "correct": 1
        },
        {
          "question": "¿Dónde se suelen aplicar políticas avanzadas de control de acceso?",
          "answers": [
            "En la fuente de alimentación",
            "En distribución",
            "En un repetidor pasivo",
            "En el teclado del usuario"
          ],
          "correct": 1
        },
        {
          "question": "Para limitar HTTP a un grupo, ¿en qué capa propone el texto aplicar una política?",
          "answers": [
            "Presentación",
            "Distribución",
            "Solo en el cable",
            "Física"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué tipo de capacidad se necesita para filtrar por IP o HTTP?",
          "answers": [
            "Únicamente amplificación eléctrica",
            "Una tabla ARP vacía",
            "Conversión de fibra a cobre",
            "Procesamiento de políticas de capas superiores"
          ],
          "correct": 3
        },
        {
          "question": "¿Por qué suele procesar distribución las funciones de capa 3?",
          "answers": [
            "Porque solo usa direcciones físicas",
            "Porque acceso no tiene puertos",
            "Porque puede hacerlo de forma más eficaz",
            "Porque núcleo nunca reenvía tráfico"
          ],
          "correct": 2
        },
        {
          "question": "¿Pueden algunos switches de acceso admitir funciones de capa 3?",
          "answers": [
            "Sí, aunque normalmente se asignan a distribución",
            "No, está prohibido por Ethernet",
            "Solo si son hubs",
            "Solo cuando no hay VLAN"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué facilita la administración de equipos de una misma capa?",
          "answers": [
            "La ausencia de documentación",
            "El uso de marcas diferentes obligatoriamente",
            "La consistencia de sus funciones",
            "La configuración completamente aleatoria"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué práctica simplifica incorporar nuevos switches?",
          "answers": [
            "Eliminar las políticas existentes",
            "Copiar configuraciones con pequeños ajustes",
            "Configurar cada switch sin referencia",
            "Cambiar toda la topología"
          ],
          "correct": 1
        },
        {
          "question": "¿Por qué resulta más rápida la resolución de problemas?",
          "answers": [
            "Porque nunca hay fallos",
            "Porque no se usan enlaces",
            "Porque las funciones por capa son consistentes",
            "Porque todos los dispositivos son idénticos"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué debe hacerse con las configuraciones excepcionales?",
          "answers": [
            "Replicarlas sin comprobar",
            "Documentarlas para compararlas",
            "Borrarlas sin revisarlas",
            "Ocultarlas a los administradores"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué propiedad hace más fácil el mantenimiento de una red jerárquica?",
          "answers": [
            "Modularidad",
            "Un único punto de fallo",
            "Dependencia de hubs",
            "Ausencia de segmentos"
          ],
          "correct": 0
        },
        {
          "question": "¿Agregar switches a una capa elimina necesariamente los cuellos de botella de otra?",
          "answers": [
            "No, pueden persistir limitaciones en otras capas",
            "Sí, siempre",
            "Sí, si se apaga el núcleo",
            "Solo si no hay VLAN"
          ],
          "correct": 0
        },
        {
          "question": "¿Por qué una malla completa puede ser más cara?",
          "answers": [
            "No admite tráfico de datos",
            "Solo permite un switch",
            "No utiliza ningún enlace",
            "Todos los switches deben rendir bien en todas las funciones"
          ],
          "correct": 3
        },
        {
          "question": "¿Cómo se pueden optimizar costes en un diseño jerárquico?",
          "answers": [
            "Usando switches de acceso económicos y equipos más potentes arriba",
            "Comprando solo switches de núcleo para PC",
            "Eliminando la distribución",
            "Igualando el coste de cada puerto siempre"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué beneficio permite aplicar políticas de forma centralizada por funciones?",
          "answers": [
            "Conversión de señales",
            "Solo reducción del diámetro",
            "Únicamente cableado",
            "Seguridad y administración"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué afirmación resume la ventaja global del modelo jerárquico?",
          "answers": [
            "Separa funciones para escalar, asegurar y mantener mejor la red",
            "Todos los switches deben desempeñar cualquier tarea",
            "Evita diseñar redundancia",
            "Obliga a usar una malla completa"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "t4-3",
      "nombre": "Test T4.3 - Principios de diseño de redes jerárquicas",
      "preguntas": [
        {
          "question": "¿Basta con dibujar tres niveles para asegurar un buen diseño jerárquico?",
          "answers": [
            "Sí, si se usan hubs",
            "Solo cuando no hay usuarios",
            "No, deben aplicarse principios de diseño",
            "Sí, cualquier dibujo de tres niveles sirve"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué es el diámetro de red en este tema?",
          "answers": [
            "Longitud física del cable en metros",
            "Cantidad de direcciones IP disponibles",
            "Número de dispositivos atravesados por un paquete hasta el destino",
            "Número de VLAN configuradas"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué efecto tiene mantener bajo el diámetro?",
          "answers": [
            "Aumento inevitable de colisiones",
            "Mayor tiempo de procesamiento",
            "Latencia baja y predecible",
            "Eliminación de todos los switches"
          ],
          "correct": 2
        },
        {
          "question": "Si una ruta atraviesa seis switches, ¿cuál es el diámetro indicado en el ejemplo?",
          "answers": [
            "Uno",
            "Tres",
            "Doce",
            "Seis"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué contribuye a la latencia de cada switch?",
          "answers": [
            "Desconectar el puerto de salida",
            "Cambiar la IP del origen",
            "Generar siempre un nuevo broadcast",
            "Procesar la trama y consultar la tabla MAC"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué dirección consulta un switch para reenviar una trama Ethernet?",
          "answers": [
            "Nombre de usuario",
            "MAC de destino",
            "MAC del router remoto únicamente",
            "IP del DNS"
          ],
          "correct": 1
        },
        {
          "question": "¿Por qué aumenta la latencia al atravesar muchos switches?",
          "answers": [
            "El cable pierde la VLAN",
            "Todos hacen NAT obligatoriamente",
            "Cada switch elimina la trama",
            "Se acumulan los tiempos de procesamiento"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué consigue la segmentación de capa 2 en distribución respecto al diámetro?",
          "answers": [
            "Impide el acceso al núcleo",
            "Lo mantiene predecible y reduce su impacto",
            "Elimina la capa de acceso",
            "Lo vuelve infinito"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué se analiza antes de agregar enlaces?",
          "answers": [
            "La longitud del nombre de host",
            "El color del cable",
            "Los requisitos de ancho de banda de cada parte de la jerarquía",
            "El número de teclados"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué es el agregado de enlaces?",
          "answers": [
            "Desactivar puertos de distribución",
            "Duplicar direcciones IP",
            "Combinar varios enlaces entre switches para mayor rendimiento",
            "Unir varias VLAN en una sola"
          ],
          "correct": 2
        },
        {
          "question": "¿Cómo llama Cisco a su tecnología de agregado de enlaces Ethernet?",
          "answers": [
            "VTP",
            "DHCP",
            "NAT",
            "EtherChannel"
          ],
          "correct": 3
        },
        {
          "question": "¿Puede considerarse el agregado de ancho de banda en cualquier capa?",
          "answers": [
            "Sí, en cada capa del modelo jerárquico",
            "No, solo en el núcleo",
            "No, solo en acceso",
            "Solo en equipos finales"
          ],
          "correct": 0
        },
        {
          "question": "Si solo una zona requiere más tráfico, ¿qué conviene agregar?",
          "answers": [
            "Solo puertos sin uso de otra sede",
            "Únicamente teléfonos",
            "Todos los cables de la empresa",
            "Enlaces de los switches implicados en esa zona"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué representan los óvalos y líneas punteadas del esquema de agregado?",
          "answers": [
            "Puertos bloqueados por seguridad",
            "Rutas inalámbricas",
            "Enlaces agrupados",
            "Equipos apagados"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué dos métodos de redundancia describe el tema?",
          "answers": [
            "Usar dos VLAN idénticas",
            "Cambiar IP y DNS",
            "Duplicar conexiones o duplicar dispositivos",
            "Eliminar el backbone"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué objetivo persigue la redundancia?",
          "answers": [
            "Eliminar la necesidad de mantenimiento",
            "Garantizar energía durante terremotos",
            "Alta disponibilidad ante fallos",
            "Reducir todos los enlaces a uno"
          ],
          "correct": 2
        },
        {
          "question": "¿Dónde es más habitual implementar redundancia?",
          "answers": [
            "Solo en PC",
            "Distribución y núcleo",
            "Solo en teclados",
            "Únicamente en hubs"
          ],
          "correct": 1
        },
        {
          "question": "¿Por qué es difícil duplicar conexiones en acceso hasta cada equipo final?",
          "answers": [
            "Porque está prohibido conectar PC",
            "Por costes y limitaciones de los dispositivos finales",
            "Porque no existen cables Ethernet",
            "Porque los switches no tienen puertos"
          ],
          "correct": 1
        },
        {
          "question": "¿Cuál es el mínimo de switches de distribución indicado para redundancia?",
          "answers": [
            "Dos",
            "Uno",
            "Ocho",
            "Cuatro"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué hace el switch de acceso si falla una de sus rutas de distribución?",
          "answers": [
            "Redirige el tráfico por el otro switch de distribución",
            "Apaga todos los PC",
            "Envía los datos al servidor DNS",
            "Desactiva todas las VLAN"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué problema no pretende resolver la redundancia de enlaces?",
          "answers": [
            "La interrupción de una ruta",
            "El fallo de un enlace",
            "Un corte eléctrico de toda una ciudad",
            "La caída de un switch de distribución"
          ],
          "correct": 2
        },
        {
          "question": "¿En qué se diferencia redundancia de agregado de enlaces?",
          "answers": [
            "La redundancia elimina los switches",
            "El agregado impide usar varios cables",
            "Son siempre sinónimos",
            "La primera protege disponibilidad; el segundo aumenta capacidad"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué consecuencia tiene una ruta con muchos saltos?",
          "answers": [
            "Siempre más ancho de banda",
            "Más procesamiento acumulado y latencia",
            "Menos dispositivos atravesados",
            "Menor distancia lógica"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué información permite decidir dónde ampliar ancho de banda?",
          "answers": [
            "Número de pantallas",
            "Hora del reloj del switch",
            "Marca de los ratones",
            "Demanda real de tráfico de los segmentos"
          ],
          "correct": 3
        },
        {
          "question": "En el ejemplo, ¿qué PC realizan simulaciones climáticas intensivas?",
          "answers": [
            "PC1 y PC3",
            "PC4 y PC5",
            "Solo PC6",
            "PC2 y PC4"
          ],
          "correct": 0
        },
        {
          "question": "En el ejemplo de agregado, ¿qué switches de acceso necesitan ampliación?",
          "answers": [
            "D1 y D2 únicamente",
            "C1 y C2",
            "S2, S4 y S6",
            "S1, S3 y S5"
          ],
          "correct": 3
        },
        {
          "question": "¿Con qué switches de núcleo se conectan los de distribución en el ejemplo?",
          "answers": [
            "S1 y S3",
            "C1 y C2",
            "R1 y R2",
            "PC1 y PC3"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué se busca con enlaces redundantes entre capas?",
          "answers": [
            "Conservar rutas alternativas cuando falla un equipo o enlace",
            "Reducir la disponibilidad",
            "Usar un solo dispositivo de distribución",
            "Eliminar rutas alternativas"
          ],
          "correct": 0
        },
        {
          "question": "¿Por qué no se conecta necesariamente cada switch con todos los de la capa siguiente?",
          "answers": [
            "Porque la redundancia total puede resultar costosa",
            "Porque los enlaces solo funcionan de uno en uno",
            "Porque no existen puertos troncales",
            "Porque Ethernet no admite varios switches"
          ],
          "correct": 0
        },
        {
          "question": "¿Cuál es un criterio correcto al transformar una red plana en jerárquica?",
          "answers": [
            "Conectar todo en un único hub",
            "Reducir diámetro, planificar capacidad y crear redundancia útil",
            "Aumentar saltos sin necesidad",
            "Eliminar rutas de respaldo"
          ],
          "correct": 1
        }
      ]
    },
    {
      "id": "t4-4",
      "nombre": "Test T4.4 - Redes convergentes",
      "preguntas": [
        {
          "question": "¿Qué integra una red convergente?",
          "answers": [
            "Solo correo y DNS",
            "Voz, vídeo y datos en una misma infraestructura",
            "Solo impresoras y monitores",
            "Únicamente enlaces de fibra"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué significa VoIP?",
          "answers": [
            "Vídeo por interfaz óptica",
            "Voz sobre IP",
            "VLAN sobre Internet privado",
            "Velocidad operativa IP"
          ],
          "correct": 1
        },
        {
          "question": "¿Por qué la convergencia fue inicialmente propia de grandes empresas?",
          "answers": [
            "Porque todas las redes eran inalámbricas",
            "Porque no se podía usar IP",
            "Porque no existían teléfonos",
            "Por coste de infraestructura y complejidad de administración"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué recurso de red adicional exigía la voz y el vídeo?",
          "answers": [
            "Solo cable coaxial",
            "Ancho de banda adecuado",
            "Desactivar QoS",
            "Menos puertos siempre"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué significa QoS?",
          "answers": [
            "Consulta de servidores",
            "Control de sesiones",
            "Calidad de servicio",
            "Cantidad de switches"
          ],
          "correct": 2
        },
        {
          "question": "¿Por qué se necesita QoS en una red convergente?",
          "answers": [
            "Para eliminar todos los retardos físicamente",
            "Para clasificar y priorizar tráfico de voz, vídeo y datos",
            "Para impedir el tráfico de voz",
            "Para sustituir IP por MAC"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué obstáculo humano dificultaba la convergencia antigua?",
          "answers": [
            "Falta de personal con experiencia conjunta en datos, voz y vídeo",
            "Demasiados cables de ratón",
            "Exceso de usuarios con cámara",
            "Ausencia de impresoras"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué es un sistema PBX en el contexto del tema?",
          "answers": [
            "Protocolo de enrutamiento de Internet",
            "Formato de tramas Ethernet",
            "Sistema de almacenamiento NAS",
            "Central telefónica tradicional"
          ],
          "correct": 3
        },
        {
          "question": "¿Por qué podían coexistir PBX y teléfonos IP?",
          "answers": [
            "Porque muchas oficinas conservaban teléfonos analógicos",
            "Porque la voz digital no existe",
            "Porque los switches no admiten puertos",
            "Porque IP prohíbe las llamadas"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué evolución tecnológica facilitó la convergencia en pymes?",
          "answers": [
            "Abandono de la digitalización",
            "Equipos y administración más accesibles y económicos",
            "Sustitución de todos los PC por hubs",
            "Eliminación de la telefonía"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué ventaja administrativa tiene una infraestructura convergente?",
          "answers": [
            "Gestionar una sola red",
            "Duplicar todos los armarios",
            "Eliminar a los administradores",
            "Administrar tres redes separadas obligatoriamente"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué coste se reduce al converger voz, vídeo y datos?",
          "answers": [
            "Precio de todas las licencias a cero",
            "Número de direcciones MAC",
            "Cableado e infraestructura separados",
            "Consumo de memoria de cada PC siempre"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué ocurre al cambiar una red con tres infraestructuras separadas?",
          "answers": [
            "No se requieren coordinaciones",
            "Se elimina el cableado",
            "Hay que coordinar cambios entre redes",
            "Se desactiva el vídeo"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué coste organizativo puede reducirse con convergencia?",
          "answers": [
            "El coste de los ordenadores de todos los usuarios",
            "El coste de la electricidad a cero",
            "El precio de los proveedores de Internet",
            "Mantener equipos de administración separados para voz y datos"
          ],
          "correct": 3
        },
        {
          "question": "¿Por qué puede resultar difícil migrar a una red convergente?",
          "answers": [
            "Porque una red única no necesita diseño",
            "Porque ya existe inversión funcional en redes separadas",
            "Porque el vídeo no viaja por IP",
            "Porque VoIP no utiliza switches"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué dispositivo Cisco aparece como ejemplo para pequeñas y medianas empresas?",
          "answers": [
            "Router doméstico genérico",
            "Catalyst 6500 exclusivamente",
            "Catalyst Express 500",
            "Servidor NAS"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué modelo de teléfono Cisco se cita en el ejemplo?",
          "answers": [
            "7906G",
            "2960X",
            "1841",
            "6500"
          ],
          "correct": 0
        },
        {
          "question": "¿Para qué tamaño de empresa se muestra una combinación de switch y VoIP de mayor capacidad?",
          "answers": [
            "Más de 10000 empleados exclusivamente",
            "Entre 2 y 4 empleados",
            "Exactamente 10 empleados",
            "Entre 250 y 400 empleados"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué son las herramientas de telesoftware descritas?",
          "answers": [
            "Conmutadores de núcleo",
            "Servidores de impresión",
            "Cables de fibra óptica",
            "Programas que ofrecen telefonía desde el PC"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué herramienta concreta se menciona?",
          "answers": [
            "Cisco IOS ROMMON",
            "Cisco IP Communicator",
            "Wireshark",
            "Cisco Packet Tracer únicamente"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué equipo puede sustituir un softphone?",
          "answers": [
            "El cable Ethernet",
            "La tarjeta de red",
            "Un teléfono físico dedicado",
            "El switch de núcleo"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué se necesita para añadir videoconferencia al telesoftware según el tema?",
          "answers": [
            "Un segundo router de núcleo obligatorio",
            "Un disco SAN",
            "Una PBX analógica exclusivamente",
            "Una cámara web económica"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué ventaja de inversión tiene utilizar softphones?",
          "answers": [
            "Elimina la necesidad de PC",
            "Reduce la compra inicial de teléfonos IP físicos",
            "Obliga a comprar una PBX por empleado",
            "Duplica el cableado de voz"
          ],
          "correct": 1
        },
        {
          "question": "¿En qué equipo se integran voz y vídeo con telesoftware?",
          "answers": [
            "En un switch sin usuarios",
            "En una impresora",
            "En el ordenador personal del empleado",
            "En un hub pasivo exclusivamente"
          ],
          "correct": 2
        },
        {
          "question": "¿Una red convergente necesita dejar de clasificar el tráfico?",
          "answers": [
            "Sí, QoS desaparece",
            "Sí, voz y vídeo siempre tienen idénticas necesidades",
            "Solo si se usa PBX",
            "No, debe atender prioridades mediante QoS"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué tipo de red sustituyó progresivamente a grandes sistemas telefónicos antiguos?",
          "answers": [
            "Redes sin switches",
            "Infraestructura digital y telefonía IP",
            "Redes de broadcast sin control",
            "Redes exclusivamente analógicas"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué ahorro físico destaca el material?",
          "answers": [
            "Eliminar la alimentación eléctrica de edificios",
            "Evitar tres conjuntos independientes de cableado",
            "Evitar todas las conexiones de red",
            "Suprimir los armarios de comunicaciones"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué beneficio funcional aporta convergencia al empleado?",
          "answers": [
            "Acceso sin tarjeta de red",
            "Sustitución de todos los protocolos",
            "Impresión sin servidor siempre",
            "Comunicación de voz y vídeo desde su PC"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué debe valorarse antes de reemplazar una infraestructura separada?",
          "answers": [
            "Solo el color de los teléfonos",
            "Únicamente la edad de los usuarios",
            "El número de ratones",
            "La inversión existente frente a ventajas de la convergencia"
          ],
          "correct": 3
        },
        {
          "question": "¿Cuál es una afirmación correcta sobre la convergencia?",
          "answers": [
            "Evita administrar la red",
            "Solo admite teléfonos analógicos",
            "Unifica la gestión, pero requiere planificar tráfico y calidad",
            "Hace innecesario el ancho de banda"
          ],
          "correct": 2
        }
      ]
    },
    {
      "id": "t4-5",
      "nombre": "Test T4.5 - Consideraciones para switches en redes jerárquicas",
      "preguntas": [
        {
          "question": "¿Qué estudia el análisis de comunidades de usuarios?",
          "answers": [
            "Grupos de usuarios y su efecto en el rendimiento",
            "Únicamente direcciones MAC del núcleo",
            "El coste de licencias de ofimática",
            "Solo las contraseñas"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué dos factores se ven afectados por la agrupación de usuarios?",
          "answers": [
            "Número de impresoras USB",
            "Tipo de teclado y ratón",
            "Densidad de puertos y flujo de tráfico",
            "Frecuencia eléctrica y resolución de pantalla"
          ],
          "correct": 2
        },
        {
          "question": "¿Cómo suelen agruparse los usuarios en una oficina?",
          "answers": [
            "Por fabricante del PC",
            "Por funciones y necesidades de aplicaciones",
            "Por dirección MAC más baja",
            "Por orden alfabético del apellido"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué se debe prever al elegir un switch para un departamento?",
          "answers": [
            "Puertos, carga de tráfico y crecimiento",
            "Solo el color del chasis",
            "Únicamente el número de pisos",
            "Solo la marca de los PC"
          ],
          "correct": 0
        },
        {
          "question": "¿Cuántas estaciones se indican para Recursos Humanos en el ejemplo?",
          "answers": [
            "Veinte",
            "Treinta",
            "Diez",
            "Cincuenta"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué switch se propone inicialmente para veinte estaciones?",
          "answers": [
            "Uno de 8 puertos",
            "Uno de 12 puertos",
            "Uno de 24 puertos",
            "Uno de 4 puertos"
          ],
          "correct": 2
        },
        {
          "question": "¿Por qué no basta con calcular puertos actuales?",
          "answers": [
            "Porque el departamento puede crecer",
            "Porque los switches siempre duplican sus puertos",
            "Porque los usuarios no usan puertos",
            "Porque todos los equipos son inalámbricos"
          ],
          "correct": 0
        },
        {
          "question": "¿Cuántos nuevos empleados se añaden en el ejemplo de crecimiento?",
          "answers": [
            "Cinco",
            "Veinte",
            "Dos",
            "Diez"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué datos históricos ayudan a prever ampliaciones?",
          "answers": [
            "Número de correos de ayer",
            "Velocidad del ventilador",
            "Temperatura del CPD",
            "Crecimiento de plantilla de los últimos cinco años"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué tipo de switch puede adaptarse a superar 24 puertos?",
          "answers": [
            "Hub de cuatro puertos",
            "Adaptador USB individual",
            "Repetidor pasivo",
            "Apilable o modular"
          ],
          "correct": 3
        },
        {
          "question": "¿Por qué se mide el tráfico de aplicaciones de cada grupo?",
          "answers": [
            "Para conocer la edad de los usuarios",
            "Para identificar necesidades de capacidad y efectos del crecimiento",
            "Para evitar toda conexión a servidores",
            "Para contar pantallas"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué diferencia suele haber entre una pyme y una empresa mediana?",
          "answers": [
            "En la mediana solo hay un puerto",
            "En la mediana no hay servidores",
            "En la mediana las comunidades pueden usar muchos switches y recursos dispersos",
            "En la pyme no hay usuarios"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué ventaja puede tener situar usuarios cerca de sus servidores?",
          "answers": [
            "Duplicar todos los paquetes",
            "Eliminar el acceso a datos",
            "Aumentar los saltos",
            "Reducir diámetro y tráfico sobre el resto de la red"
          ],
          "correct": 3
        },
        {
          "question": "¿Puede una aplicación utilizada por un grupo abarcar varios departamentos?",
          "answers": [
            "No, cada aplicación pertenece a una sola planta",
            "Solo en redes sin switches",
            "Sí, el uso no siempre coincide con ubicación o departamento",
            "No, todas las aplicaciones son locales"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué se considera al ubicar almacenamiento y servidores?",
          "answers": [
            "Impacto de sus flujos de datos en la red",
            "Número de teclados conectados",
            "Color de los cables",
            "Solo la decoración de la sala"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué significa SAN?",
          "answers": [
            "Red de área de almacenamiento",
            "Servicio de ancho de nodo",
            "Switch de acceso numérico",
            "Sistema de acceso de nombres"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué significa NAS?",
          "answers": [
            "Nodo de aplicación serial",
            "Almacenamiento conectado a la red",
            "Núcleo de acceso seguro",
            "Nombre alternativo de switch"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué otro medio de almacenamiento menciona el tema?",
          "answers": [
            "Teclados mecánicos",
            "Monitores CRT",
            "Teléfonos analógicos",
            "Unidades de respaldo en cinta"
          ],
          "correct": 3
        },
        {
          "question": "¿Por qué importa la ubicación de servidores?",
          "answers": [
            "Porque modifica la MAC del switch",
            "Puede concentrar tráfico y crear cuellos de botella",
            "Porque elimina los enlaces",
            "Porque impide usar VLAN"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué se estudia en el flujo de tráfico de red?",
          "answers": [
            "Rutas de datos y demanda entre usuarios y recursos",
            "Solo los nombres de host",
            "Únicamente la velocidad de reloj del PC",
            "Solo el inventario de sillas"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué se puede hacer si una aplicación sufre falta de ancho de banda?",
          "answers": [
            "Eliminar el servidor sin análisis",
            "Desconectar la distribución",
            "Usar siempre hubs",
            "Agregar enlaces o reemplazar switches lentos"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué representa un diagrama de topología?",
          "answers": [
            "La infraestructura y conexiones entre dispositivos",
            "La lista de contraseñas",
            "La facturación mensual",
            "La plantilla de empleados únicamente"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué detalle de puertos debe mostrar un diagrama de topología?",
          "answers": [
            "Solo puertos cerrados de aplicaciones",
            "Qué puertos interconectan los switches",
            "Ningún puerto",
            "Solo los puertos USB de cada PC"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué conexiones especiales debe representar el diagrama?",
          "answers": [
            "Solo conexiones de teclado",
            "Solo cables de alimentación",
            "Únicamente Wi-Fi de invitados",
            "Rutas redundantes y enlaces agregados"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué información sobre usuarios puede incluir el diagrama?",
          "answers": [
            "Horarios de vacaciones",
            "Contraseñas personales",
            "Comunidades y densidad de dispositivos",
            "Notas de exámenes"
          ],
          "correct": 2
        },
        {
          "question": "¿Para qué sirve visualizar la topología al analizar tráfico?",
          "answers": [
            "Evitar toda medición de tráfico",
            "Sustituir los switches",
            "Eliminar la documentación",
            "Localizar posibles cuellos de botella"
          ],
          "correct": 3
        },
        {
          "question": "¿Por qué es difícil reconstruir una topología a posteriori?",
          "answers": [
            "Porque los switches no tienen etiquetas",
            "Porque todas las redes son idénticas",
            "Porque no existen puertos físicos",
            "Los cables discurren por paredes y techos y los equipos están dispersos"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué ubicaciones de recursos recoge el ejemplo del diagrama?",
          "answers": [
            "Solo teléfonos personales",
            "Servidores y almacenamiento",
            "Únicamente impresoras USB",
            "Solo ratones"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué permite focalizar un diagrama al investigar rendimiento?",
          "answers": [
            "La posición de los monitores",
            "La marca de las sillas",
            "Las zonas donde medir y mejorar tráfico tiene más impacto",
            "Solo la longitud de las contraseñas"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué relación existe entre planificación de usuarios y selección de switches?",
          "answers": [
            "No tienen relación",
            "Solo importa el número de VLAN",
            "La cantidad y uso de usuarios determinan puertos y rendimiento requeridos",
            "Solo importa el precio del cable"
          ],
          "correct": 2
        }
      ]
    },
    {
      "id": "t4-6",
      "nombre": "Test T4.6 - Características de los switches",
      "preguntas": [
        {
          "question": "¿Qué son los factores de forma de un switch?",
          "answers": [
            "Tipos de tramas ARP",
            "Protocolos de enrutamiento dinámico",
            "Opciones físicas como fijo, modular, apilable y tamaño",
            "Direcciones IP del fabricante"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué significa 1U en el contexto del switch?",
          "answers": [
            "Una unidad de altura de bastidor",
            "Un enlace universal",
            "Un usuario conectado",
            "Una VLAN única"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué limita a un switch de configuración fija?",
          "answers": [
            "No se le pueden añadir puertos más allá de su configuración",
            "No admite ningún dispositivo final",
            "No puede conectarse a otros switches",
            "Nunca puede usar Gigabit Ethernet"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué determina los puertos de un switch fijo?",
          "answers": [
            "El modelo adquirido",
            "El número de usuarios de la red mundial",
            "La cantidad de VLAN activas únicamente",
            "El nombre del dispositivo"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué componente aporta puertos en un switch modular?",
          "answers": [
            "Antenas Wi-Fi únicamente",
            "Tarjetas de sonido",
            "Tarjetas de línea",
            "Baterías externas"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué permite un chasis modular mayor?",
          "answers": [
            "Reducir el ancho de banda siempre",
            "Instalar más módulos",
            "Eliminar todos los puertos",
            "Sustituir los cables por radio"
          ],
          "correct": 1
        },
        {
          "question": "Si un modular tiene 24 puertos y se añade otra tarjeta de 24, ¿cuántos tendrá?",
          "answers": [
            "24",
            "72",
            "48",
            "36"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué conexión especial utilizan los switches apilables?",
          "answers": [
            "Cable de audio",
            "Cable HDMI",
            "Cable de backplane",
            "Cable de impresora USB"
          ],
          "correct": 2
        },
        {
          "question": "¿Cómo se denomina la tecnología Cisco para apilamiento citada?",
          "answers": [
            "StackWise",
            "VTP",
            "OSPF",
            "EtherChannel"
          ],
          "correct": 0
        },
        {
          "question": "¿Cuántos switches puede interconectar StackWise según el tema?",
          "answers": [
            "Hasta cuatro",
            "Hasta nueve",
            "Hasta dieciséis",
            "Hasta dos"
          ],
          "correct": 1
        },
        {
          "question": "¿Cómo funcionan lógicamente varios switches apilados?",
          "answers": [
            "Como repetidores sin puertos",
            "Como nueve routers aislados",
            "Como VLAN incompatibles",
            "Como un único switch de mayor tamaño"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué ventaja tienen las conexiones cruzadas en una pila?",
          "answers": [
            "Obligar a usar puertos de usuario",
            "Impedir la redundancia",
            "Eliminar todos los enlaces",
            "Recuperación rápida ante el fallo de un switch"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué puertos suelen usar los apilables para interconectarse?",
          "answers": [
            "Puertos de impresora",
            "Puertos de monitor",
            "Puertos especiales, no puertos de línea",
            "Solo puertos telefónicos"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué es densidad de puertos?",
          "answers": [
            "Número de direcciones DNS",
            "Número de puertos disponibles en un switch",
            "Tamaño de cada trama",
            "Número de VLAN por router"
          ],
          "correct": 1
        },
        {
          "question": "¿Cuántos puertos suelen ofrecer como máximo los fijos según el ejemplo?",
          "answers": [
            "2 exclusivamente",
            "48, con opciones de cuatro SFP adicionales",
            "8 sin excepciones",
            "1000 siempre"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué ventaja aporta mayor densidad de puertos?",
          "answers": [
            "Mejor aprovechamiento de espacio y energía",
            "Menor conectividad siempre",
            "Mayor consumo por definición",
            "Más armarios obligatorios"
          ],
          "correct": 0
        },
        {
          "question": "¿Cuántos dispositivos admite el ejemplo de dos switches de 24 puertos?",
          "answers": [
            "47",
            "48",
            "46",
            "24"
          ],
          "correct": 2
        },
        {
          "question": "¿Cuántos dispositivos admite el ejemplo de un switch de 48 puertos con un enlace de subida?",
          "answers": [
            "47",
            "48",
            "46",
            "24"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué familia se cita como ejemplo de más de 1000 puertos?",
          "answers": [
            "Catalyst 6500",
            "Cisco 7906G",
            "Cisco IP Communicator",
            "Catalyst Express 500 exclusivamente"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué mide la velocidad de reenvío?",
          "answers": [
            "Longitud del cable",
            "Número de empleados",
            "Cantidad de direcciones IPv4",
            "Capacidad de procesamiento de datos por segundo"
          ],
          "correct": 3
        },
        {
          "question": "¿Qué ocurre si el reenvío es menor que el tráfico total a velocidad de cable?",
          "answers": [
            "Todos los puertos duplican su velocidad",
            "El switch se convierte en router",
            "La red elimina los paquetes de control",
            "No todos los puertos pueden operar simultáneamente a máxima velocidad"
          ],
          "correct": 3
        },
        {
          "question": "¿Cuánto tráfico total ilustra el ejemplo de 48 puertos Gigabit a velocidad de cable?",
          "answers": [
            "480 Mb/s",
            "48 Gb/s",
            "32 Mb/s",
            "1 Gb/s"
          ],
          "correct": 1
        },
        {
          "question": "Si ese switch reenvía solo 32 Gb/s, ¿qué implica?",
          "answers": [
            "No puede tener enlaces Gigabit",
            "Todos los puertos transmiten a 10 Gb/s",
            "No soporta los 48 Gb/s simultáneamente",
            "Tiene capacidad sobrante de 16 Gb/s"
          ],
          "correct": 2
        },
        {
          "question": "¿Por qué pueden usarse switches de acceso más baratos?",
          "answers": [
            "Sus enlaces de distribución suelen limitar la demanda total",
            "Porque no necesitan puertos",
            "Porque no reenvían tramas",
            "Porque siempre tienen PoE"
          ],
          "correct": 0
        },
        {
          "question": "¿Qué límite de puertos agregados menciona el material para enlaces Gigabit?",
          "answers": [
            "Hasta treinta y dos",
            "Hasta ocho",
            "Hasta dieciséis",
            "Hasta dos"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué consigue un EtherChannel de cuatro enlaces de 1 Gb/s en el ejemplo?",
          "answers": [
            "Cuatro VLAN sin tráfico",
            "Capacidad agregada de 4 Gb/s",
            "Un único enlace de 100 Mb/s",
            "Un aumento a 40 Gb/s"
          ],
          "correct": 1
        },
        {
          "question": "¿Qué aporta PoE?",
          "answers": [
            "Direcciones MAC adicionales",
            "Cifrado IP automático",
            "Alimentación eléctrica por cable Ethernet",
            "Enrutamiento entre VLAN por sí solo"
          ],
          "correct": 2
        },
        {
          "question": "¿Qué dispositivos se citan como posibles beneficiarios de PoE?",
          "answers": [
            "Únicamente switches de núcleo",
            "Teléfonos IP y algunos puntos de acceso inalámbricos",
            "Solo impresoras de papel",
            "Solo discos duros SATA"
          ],
          "correct": 1
        },
        {
          "question": "¿Cómo se llaman también los switches de capa 3?",
          "answers": [
            "Puentes inalámbricos",
            "Repetidores",
            "Switches multicapa",
            "Hubs pasivos"
          ],
          "correct": 2
        },
        {
          "question": "¿En qué capa debe comenzar la selección de switches de un diseño nuevo?",
          "answers": [
            "En núcleo sin analizar usuarios",
            "En acceso, calculando primero los dispositivos finales",
            "En aplicación",
            "En el proveedor de Internet"
          ],
          "correct": 1
        }
      ]
    }
  ]
};
