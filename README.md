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
      background: #121212; /* Fondo oscuro general */
      color: white;
    }

    header {
      width: 100%;
      background-color: #000000; /* fondo negro sólido */
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
    }

    header i {
      font-size: 28px;
      color: #f39c12; /* color dorado para icono */
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
      padding-top: 70px; /* para que no quede tapado por el header */
    }
  </style>
</head>
<body>
  <header>
    <i class="fas fa-mask"></i>
    <h1>DOULE HOOD</h1>
  </header>
