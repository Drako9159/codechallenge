CODE CHALLENGE
==============

### Dependencias
- JEST//Para pruebas unitarias.
- ESLint//Para mejorar código.
- EXPRESS//Para implementar API.

### Componentes
- Controller para aplicar métodos de filtrado.
- Base de datos visualpartners.
- Server API.

### API
Inicializar servidor
``` shell
node run server
```
- Se realizan tres consultas en localhost desde el puerto 3000
- Para consultar todos los estudiantes `localhost:3000/v1/students`
- Para consultar los emails de estudiantes certificados `localhost:3000/v1/students/certificates/emails`
- Para consultar los emails de estudiantes no certificados `localhost:3000/v1/students/nocertificates/emails`
- Para consultar estudiantes con más de 500 créditos `localhost:3000/v1/students/credits/500`
