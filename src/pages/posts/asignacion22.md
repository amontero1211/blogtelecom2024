---
layout: '@/templates/BasePost.astro'
title:  Series de Fourier y Transformada de Fourier
description: Los sistemas de comunicación digital están conformados por dispositivos reservados parala transmisión o procesamiento de señales exclusivamente digitales. 
pubDate: 2024-02-05T00:00:00Z
imgSrc: '/assets/images/fourier2.png'
imgAlt: 'Image post 2'
---

Las series de Fourier, constituyen la herramienta matemática básica del análisis de Fourier empleado para analizar funciones periódicas a través de la descomposición de dicha función en una suma innitesimal de funciones como combinación de senos y cosenos con frecuencia enteras. Las series de Fourier tienen la forma en el intervalo −L ≤ x ≤ L

<img src="/assets/images/seriedefourier.png"/>

Recordando la expresión (C.1.1) , vamos a introducir en cada sumatorio el incremento en el número de onda entre dos términos consecutivos, el cual es ∆kn = 2π/L, y en el límite L → ∞, el número de onda se convierte en una variable continua. En forma de exponenciales complejas se obtiene

<img src="/assets/images/fourier2.png"/>