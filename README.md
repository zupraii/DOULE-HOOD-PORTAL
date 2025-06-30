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
    html, body {
      margin: 0;
      padding: 0;
      height: 100%;
      font-family: Arial, sans-serif;
      /* Fondo con GIF animado */
      background: url('https://i.pinimg.com/originals/6a/8e/4d/6a8e4d2b450f10d3733422efc4e95526.gif') no-repeat center center fixed;
     background-size: 50% auto; /* 50% de ancho y alto automático */

      color: white;
    }

    header {
      width: 100%;
      background-color: rgba(0, 0, 0, 0.9); /* fondo negro casi opaco */
      color: white;
      display: flex;
      align-items: center;
      padding: 15px 30px;
      gap: 15px;
      box-shadow: 0 4px 6px rgba(255, 255, 255, 0.1);
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1000;
      backdrop-filter: blur(5px); /* efecto desenfoque suave detrás */
      -webkit-backdrop-filter: blur(5px);
    }

    header i {
      font-size: 28px;
      color: #f39c12;
    }

    header h1 {
      margin: 0;
      font-size: 28px;
      letter-spacing: 3px;
      font-weight: 700;
      text-transform: uppercase;
      text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.2);
    }

    main {
      padding-top: 70px; /* para no tapar el contenido por el header fijo */
      padding-left: 30px;
      padding-right: 30px;
      min-height: 200vh; /* espacio para scroll y ver fondo */
      background: transparent; /* para dejar ver el fondo GIF */
    }
  </style>
</head>
<body>
  <header>
    <i class="fas fa-mask"></i>
    <h1>DOULE HOOD</h1>
  </header>

  <main>
    <p>Contenido de la página va aquí. El fondo es un GIF animado debajo del header.</p>
    <p>Haz scroll para verlo en acción.</p>
    <p style="height: 1500px;"></p> <!-- espacio para scroll -->
  </main>
</body>
</html>
