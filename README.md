<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>DOULE HOOD</title>
  <!-- Font Awesome -->
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
  <style>
    /* Quitar margen y padding a todo el body y html */
    html, body {
      margin: 0;
      padding: 0;
      height: 100%;
      font-family: Arial, sans-serif;
    }

    header {
      width: 100%; /* que abarque todo el ancho */
      background: linear-gradient(90deg, #ff7e5f, #feb47b);
      color: white;
      display: flex;
      align-items: center;
      padding: 15px 30px;
      gap: 15px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.3);
      position: fixed; /* para que quede fijo arriba al hacer scroll */
      top: 0;
      left: 0;
      z-index: 1000; /* para que esté arriba de todo */
    }

    header i {
      font-size: 28px;
      color: #fffacd;
    }

    header h1 {
      margin: 0;
      font-size: 28px;
      letter-spacing: 3px;
      font-weight: 700;
      text-transform: uppercase;
      text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
    }

    /* Para que el contenido no quede oculto debajo del header fijo */
    main {
      padding-top: 70px; /* un poco más que la altura del header */
    }
  </style>
</head>
<body>
  <header>
    <i class="fas fa-mask"></i>
    <h1>DOULE HOOD</h1>
  </header>

  <main>
    <p>Contenido de la página va aquí. Prueba hacer scroll y verás que el header queda fijo arriba y con fondo completo.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis, nunc sed varius blandit, sapien velit blandit enim, vitae facilisis sapien libero sed leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
    <p style="height: 1500px;"></p> <!-- espacio para scroll -->
  </main>
</body>
</html>
