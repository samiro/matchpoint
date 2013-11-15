Match Point
==========

Plataforma para que clientes obtengan ofertas en forma de subasta de pymes



API REST
========

#GET

* GET http://localhost:8080/api/need

Consulta todas las necesidades que hay en el sistema


* GET http://localhost:8080/api/need/<ID>

Consulta una necesidad por ID


* GET http://localhost:8080/api/user/<ID>/needs

Consulta la necesidades que ha publicado un usuario


* GET http://localhost:8080/api/user/<ID>

Consulta la información de un usuario


* GET http://localhost:8080/api/service

Consulta todos los servicios que pueden prestar las pymes o que los clientes pueden solicitar


* GET http://localhost:8080/api/service/<ID>

Consulta la información específica de un servicio


#POST

* POST http://localhost:8080/api/need

Publicar una necesidad de un usuario

> service: ID del servicio
> delivery_time: Rango de tiempo de entrega. Ejemplo "1 a 2 semanas"
> budget: Rango de presupuesto. Ejemplo: "$0 a $100.000"
> life: Número de días que va a estar publicada la necesidad.
> local_ubication: "true" o "false". Si necesita que sea local la oferta.
> ubication: Ubicación en caso de que la anterior sea "true"

