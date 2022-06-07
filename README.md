<h1 align="center">PICKIT</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
</p>

## Instalación

```sh
npm i
```

## Uso

```sh
node .\server.js
```

## Acerca de esta app

La aplicación responde a los siguientes endpoints

REST API

GET     /v1/autos           		    Listado de autos con sus propietarios.(JSON)

GET     /v1/autos/patente   		    Obtiene auto con su respectivo propietario. (JSON)

GET     /v1/servicios/{patente}	    Historial de servicios por auto. (JSON)

POST    /v1/propietarios    		    Registra un propietario. (JSON)

POST    /v1/servicios   		        Registra una transaccion de varios servicios. 

POST    /v1/autos           		    Registra un auto. (JSON)

DELETE  /v1/autos/patente   		    Elimina un auto. (JSON)

PUT     /v1/autos/patente   		    Actualiza un auto. (JSON)

------------------------------------------------------------------------------------------------

## METODO : GET  REQUEST : http://localhost:8080/v1/autos
RESPONSE:

### Array Json
```json
[{"_id":"629f5476f038458250d43466",
"marca":"Volkswagen",
"modelo":"Gol",
"anio":"2004",
"patente":"ENM456",
"color":"Rojo",
"propietario":{	"_id":"629f5476f038458250d43465",
		"nombre":"Damian",
		"apellido":"Perez",
		"__v":0},
"__v":0},
{"_id":"629f5492f038458250d43468",
"marca":"Renaul",
"modelo":"Twingo",
"anio":"2005",
"patente":"ENM444",
"color":"Blanco",
"propietario":{	"_id":"629f5492f038458250d43467",
		"nombre":"Damian",
		"apellido":"Rodriguez",
		"__v":0},
"__v":0}]

```
------------------------------------------------------------------------------------------------
## METODO : GET  REQUEST : http://localhost:8080/v1/autos/{patente}
RESPONSE:

### Array Json
```json
{"_id":"629f5476f038458250d43466",
"marca":"Volkswagen",
"modelo":"Gol",
"anio":"2004",
"patente":"ENM456",
"color":"Rojo",
"propietario":{	"_id":"629f5476f038458250d43465",
		"nombre":"Damian",
		"apellido":"Perez",
		"__v":0},
"__v":0}
```

### METHOD : GET REQUEST : http://localhost:8080/v1/servicios/{patente}
RESPONSE:

### Array Json
```json
{
  {"_id":"629f939b12fceb8c50317541",
  "servicio":"Cambio de Aceite",
  "costo":5000,
  "auto":{"_id":"629f5476f038458250d43466",
        "marca":"Volkswagen",
        "modelo":"Gol",
        "anio":"2005",
        "patente":"ENM456",
        "color":"Rojo",
        "propietario":"629f5476f038458250d43465",
        "__v":0},
  "__v":0},
  {"_id":"629f939b12fceb8c50317542",
  "servicio":"Cambio de Filtro",
  "costo":3500,
  "auto":{"_id":"629f5476f038458250d43466",
        "marca":"Volkswagen",
        "modelo":"Gol",
        "anio":"2005",
        "patente":"ENM456",
        "color":"Rojo",
        "propietario":"629f5476f038458250d43465",
        "__v":0},
  "__v":0}
}
```
### METODO : POST  REQUEST : http://localhost:8080/v1/propietarios
RESPONSE:

### Array Json
```json
{
  "_id":"629f95aa12fceb8c50317546",
  "nombre":"Juan",
  "apellido":"Perez",
  "__v":0
}
```
### METODO : POST  REQUEST : http://localhost:8080/v1/servicios/{patente}
RESPONSE:

### Array Json
```json
{"Presupuesto Total $":35300}
```

### METODO : POST  REQUEST : http://localhost:8080/v1/autos
RESPONSE:

### Array Json
```json

{
  "_id":"629f9afef13c7d6618017eb0",
  "marca":"Mercedez Benz",
  "modelo":"Clase A",
  "anio":"2000",
  "patente":"EHG321",
  "color":"Verde",
  "propietario":"629f9afef13c7d6618017eaf",
  "__v":0
}
```
### METODO : DELETE  REQUEST : http://localhost:8080/v1/autos/{patente}
RESPONSE:

### Array Json
```json
{
  "Deleted":"ok"
}
```

### METODO : PUT  REQUEST : http://localhost:8080/v1/autos/{patente}
RESPONSE:

### Array Json
```json

{
  "Actualizado":"Ok"
}

```
## Author

👤 **Damián Contardi**