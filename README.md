# Proxy de la API de las carátulas UCSP
No deberia existir pero debido a que AWS no nos provee un certificado SSL para permitir peticiones https para
que la parte front-end se conecte con la back-end sin el problema de [Content-Mixed](https://stackoverflow.com/questions/47648656/got-blockedmixed-content-on-https-website?rq=1).

Otra solución es conseguirse un dominio y un certificado... pero... pagar el alquiler de un dominio anualmente para
algo que otros proveedores dan [gratis](https://www.heroku.com/home)... no me parece adecuado.

## Despliegue
Usa vercel y está disponible en esta url `https://caratulas-ucsp-api-proxy.vercel.app/api/cover`
