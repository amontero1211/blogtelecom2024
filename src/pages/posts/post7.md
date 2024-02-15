---
layout: '@/templates/BasePost.astro'
title: Sistema satelital de comunicaciones personales
description: El canal inferior CDMA en la banda A está en el canal 283 de AMPS, y la portadora inferior CDMA en la banda B está en el canal 384 AMPS. 
pubDate: 2024-02-04T00:00:00Z
imgSrc: '/assets/images/figura20-16.png'
imgAlt: 'Image post 3'
---

<img src="/assets/images/figura20-16.png"/>

El canal inferior CDMA en la banda A está en el canal 283 de AMPS, y la portadora inferior CDMA en la banda B está en el canal 384 AMPS. Como la banda disponible entre los canales 667 y 716 sólo es 1.5 MHz en la banda A, los operadores de banda A deben obtener autorización de las portadoras de banda B, para usar una portadora CDMA en esa parte del espectro de frecuencias. Cuando una portadora CDMA se está usando junto a una portadora no de CDMA, la distancia de portadoras debe ser 1.77 MHz. Hay hasta 9 portadoras CDMA disponibles para el operador de banda A y B en el espectro de frecuencias AMPS. Sin embargo, los operadores de banda A y B tienen un ancho de banda de 30 MHz en la banda de frecuencias PCS de 1900 MHz, donde pueden proporcionar hasta 11 canales CDMA. 

En el sistema CDMA, muchos usuarios pueden compartir canales comunes de transmisión y recepción, con velocidad de transmisión de datos de 9.6 kbps. Sin embargo, con ciertas técnicas, la información del usuario se dispersa con un factor de 128 hasta una velocidad de pulsos del canal de 1.2288 Mpulsos/s, y los canales de transmisión y recepción usan distintos procesos de dispersión. En el canal de sentido directo se codifican los datos del suscriptor con un código de 1/2 convolucional de rapidez, intercalado y difundido por 1 de 64 secuencias de difusión ortogonal, usando funciones de Walsh. 

Se mantiene la ortogonalidad entre todos los suscriptores en el canal celular de sentido directo dentro de determinada célula, porque todas las señales de la célula se desorganizan en forma síncrona. Los canales de sentido inverso usan una estrategia distinta de dispersión, porque la señal recibida por cada unidad móvil toma una trayectoria distinta de transmisión y, en consecuencia, llega a la estación base en un tiempo distinto. Las corrientes de datos en el canal de sentido inverso se codifican primero en forma convolucional con un código de convolución de rapidez de 1/3. Después de intercalarlos, cada bloque de seis símbolos codificados se distribuye en una de las funciones ortogonales de Walsh disponibles, asegurando una señalización ortogonal 64-aria. Se hace una dispersión adicional de cuatro veces con códigos específicos de suscriptor y de estación base, con periodos de pulso de 242 1 y 215 pulsos, respectivamente, con lo que aumenta la velocidad de transmisión a 1.2288 Mpulsos/s. 

Se imponen estrictos requisitos en la potencia de transmisión del canal de sentido inverso, para evitar el problema cercano-lejano causado por diversos niveles de potencia de recepción. A cada unidad móvil en determinada celda se le asigna una secuencia única de dispersión, con lo que se asegura una separación casi perfecta entre las señales de distintas unidades de suscriptor, y se permite diferenciar transmisiones entre usuarios. Todas las señales en determinada célula se desorganizan mediante una secuencia pseudoaleatoria de 215 pulsos de longitud. Así se reduce la interferencia de radiofrecuencia entre unidades móviles en celdas vecinas, que puedan estar usando la misma secuencia de dispersión, y se proporcionan las características espectrales deseadas de banda ancha, aun cuando todos los códigos de Walsh no produzcan un espectro de potencias de banda ancha. Hay dos técnicas que se suelen usar para dispersar el espectro: salto (o cambio) de frecuencia y secuencia directa. Las dos son características de transmisiones por un ancho de banda mucho mayor que el que normalmente se usa en los sistemas telefónicos celulares FDMA/TDMA de banda angosta, como AMPS y USDC. Para conocer una descripción más detallada del cambio de frecuencia y del secuenciamiento directo.

<h2>Dispersión del espectro por cambio de frecuencia. </h2>

 Este sistema se usó por primera vez en aplicaciones militares, para asegurar comunicaciones confiables sin interferencia en un ambiente de campo de batalla. El concepto fundamental del cambio de frecuencia es dividir un mensaje en bloques de datos de tamaño fijo, y transmitir cada bloque en secuencia, pero en distintas frecuencias de portadora. En los saltos de frecuencia se usa un código pseudoaleatorio para generar una secuencia única de saltos. La secuencia en que se seleccionan las frecuencias debe ser conocida por el transmisor y el receptor, antes de iniciar la transmisión. El transmisor manda un bloque en una portadora de radiofrecuencia, y a continuación cambia o salta a la siguiente frecuencia de la secuencia, y así sucesivamente. Después de recibir una recepción de datos en una frecuencia, el receptor cambia a la siguiente de la secuencia. Cada transmisor del sistema tiene una secuencia distinta de cambios, para evitar que un suscriptor interfiera las transmisiones de otros suscriptores que usen la misma frecuencia de canal de radio.

<h2>Dispersión de espectro por secuencia directa </h2>

 En los sistemas de secuencia directa se agrega un código pseudoaleatorio con alta velocidad de bits, a una señal de información de baja velocidad de bits, para generar una señal pseudoaleatoria que se parece mucho al ruido, y contiene tanto la señal de datos originales como el código pseudoaleatorio. También aquí es necesario que el transmisor y el receptor conozcan el código pseudoaleatorio. Cuando un receptor detecta una transmisión de secuencia directa, sólo resta la señal pseudoaleatoria de la señal recibida compuesta, para extraer los datos de información. En los sistemas telefónicos celulares CDMA, el ancho de banda de radiofrecuencias total se divide en unos pocos canales de radio de banda ancha, cuyo ancho es mucho mayor que la señal de voz digitalizada. Esta señal digitalizada se suma a la señal generada de alta frecuencia de bits y se transmite en tal forma que ocupe toda la banda ancha del canal de radio. Al sumar una señal pseudoaletoria de alta frecuencia de bits a la información de voz hace que la señal sea más dominante y menos susceptible a la interferencia, permitiendo una transmisión de menor potencia y, en consecuencia, menor cantidad de transmisores y receptores menos costosos.

<h2>Canales de tráfico CDMA </h2>

Los canales de tráfico CDMA consisten en un canal de sentido inverso o enlace descendente (estación base a unidad móvil) y uno de enlace ascendente o de sentido directo (estación móvil a estación base). En la fig. 20-17a se ve un canal de tráfico de enlace descendente. Se ve que ese canal consiste en hasta 62 canales, que incluyen uno de radiodifusión, usado para control, y canales de tráfico para llevar información de suscriptor. El canal de radiodifusión consiste en un canal piloto, un canal de sincronización, hasta siete canales de voceo y hasta 63 canales de tráfico. Todos estos canales comparten la misma asignación de frecuencias CDMA de 1.25 MHz.

 El canal de tráfico se identifica con una secuencia distinta de código largo, y específica del usuario, y cada canal de acceso se identifica con una secuencia distinta de código largo. El canal piloto está incluido en cada célula, con el fin de proporcionar una señal para que use el receptor en la adquisición de sincronización, y proporcionar una referencia de fase para demodulación coherente. También lo usan las unidades móviles para comparar las intensidades de señal entre estaciones base, y determinar cuándo se debe iniciar una transferencia. El canal de sincronización usa un código Walsh W32, y la misma secuencia pseudoaleatoria y desplazamiento de fase que el canal piloto, permitiéndole ser demodulado por cualquier receptor que pueda adquirir la señal piloto. El canal de sincronización difunde mensajes de sincronización a las unidades móviles y funciona a 1200 bps. Los canales de voceo conducen información de la estación base a la móvil, como por ejemplo, mensajes de parámetro de sistema o de acceso, mensajes de lista de canales CDMA y mensajes de asignación de canal. Los canales de voceo son opcionales, y su cantidad puede ir de 0 a 7. Se usan para transmitir información de control y mensajes de voceo de la estación base a las unidades móviles, y puede funcionar a 9600 bps, 4800 bps o 2400 bps. Un solo canal piloto de 9600 bps puede soportar, en forma característica, unos 180 voceos por segundo, haciendo una capacidad total de 1260 voceos por segundo. Los datos del tráfico en el canal de enlace descendente, o de sentido inverso, se agrupan en tramas de 20 ms. Primero se codifican en forma convolucional, y a continuación se formatean e intercalan para compensar las diferencias de las velocidades reales de usuario, que son variables. La señal resultante se dispersa con un código de Walsh y una secuencia pseudoaleatoria larga, a la velocidad de 1.2288 Mpulsos/s. El canal de transmisión de enlace en sentido directo se ve en la fig. 20-17b, y está formado por canales de acceso y hasta 62 canales de tráfico en sentido directo. 

Los canales de acceso y de tráfico de canal de enlace ascendente usan la misma asignación de frecuencias, con técnicas CDMA de secuencia directa. Los canales de acceso son sólo canales de sentido directo, compartidos y de punto a punto, que proporcionan comunicaciones de unidades móviles a estaciones base, cuando la unidad móvil no usa un canal de tráfico.

 La unidad móvil usa los canales de tráfico para iniciar comunicaciones con una estación base, y para responder a mensajes del canal de voceo. Entre los mensajes normales del canal de acceso están de reconocimiento y número de secuencia, parámetros de identificación del usuario móvil y parámetros de comprobación. El canal es de acceso aleatorio, y cada canal de suscriptor está identificado en forma única por su código pseudoaleatorio.

 El canal CDMA de sentido directo puede contener un máximo de 32 canales de acceso por cada canal soportado de voceo. Este canal de acceso en sentido directo funciona en modo de velocidad variable de datos, y los canales de acceso funcionan a una velocidad de datos fija, de 4800 bps. Los mensajes del canal de acceso consisten en registro, orden, ráfaga de datos, origen, respuesta al voceo, respuesta al desafío de comprobación, respuesta de estado y terminación de asignación. Los datos del suscriptor en el canal de radio de enlace en sentido directo también se agrupan en tramas de 20 ms codificadas en forma convolucional, intercaladas en bloque, con modulación ortogonal 64-aria y dispersados antes de su transmisión.

<img src="/assets/images/figura2017.png"/>