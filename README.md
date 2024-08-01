# Cripto SPA

Cripto SPA es una aplicación web que muestra información actualizada sobre criptomonedas utilizando la API de Coinlore. La aplicación está desarrollada con JavaScript, utiliza Webpack para la gestión de módulos y Chart.js para la visualización de datos.

## Características

- Mostrar información del mercado global de criptomonedas.
- Listar las principales criptomonedas con datos actualizados.
- Visualización de gráficos con las variaciones porcentuales de las criptomonedas.
- Detalles individuales de cada criptomoneda, incluyendo variaciones de precio y otros datos relevantes.

## Tecnologías Utilizadas

- JavaScript
- Webpack
- Chart.js
- HTML5
- CSS3
- API de Coinlore

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/cristianchivisky/SPA-Coinlore.git
   ```

2. Navega al directorio del proyecto:
    ```bash
    cd SPA-Coinlore
    ```

3. Instala las dependencias necesarias:
    ```bash
    npm install
    ```

## Uso

1. Inicia la aplicación:
    ```bash
    npm run start
    ```

2. Abre tu navegador y navega a http://localhost:8080 para ver la aplicación en funcionamiento.

## Funcionalidades

### Página de Inicio

La página de inicio muestra:

- Información general del mercado global de criptomonedas.
- Lista de criptomonedas con datos básicos como símbolo, nombre, rank y precio en USD.
- Gráfico con la variación porcentual de las principales 20 criptomonedas en las últimas 24 horas.

### Detalle de Criptomonedas

Al hacer clic en una criptomoneda, se muestran los detalles específicos de la misma, incluyendo:

- Variación porcentual en las últimas 24 horas y 7 días
- Precio en BTC
- Capitalización de mercado en USD
- Volumen de transacciones en las últimas 24 horas
- Suministro circulante, total y máximo

## Estilos

Los estilos CSS se encuentran en el directorio styles y están diseñados para proporcionar una experiencia de usuario agradable y una interfaz intuitiva.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

- Haz un fork del repositorio.
- Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
- Realiza tus cambios y haz commit (git commit -am 'Agrega nueva funcionalidad').
- Haz push a la rama (git push origin feature/nueva-funcionalidad).
- Abre un Pull Request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para obtener más detalles.