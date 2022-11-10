<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="csrf-token" content="{{ scrf_token()}}">
    <title>MI6</title>



    @vite("resources/css/app.scss")
  </head>
  <body>
    <div class="sidebar">
      <div class="closing-button">
        <span>◄</span>
        
    </div>
      <img src="./img/mi6-seal.png" alt="" />
      <nav>
        <a href=""> Home </a>
        <a href=""> Poeple of interest </a>
      </nav>
    </div>

    <div class="content">
      @yield('content')
    </div>

     @vite('resources/js/app.js')
  </body>
</html>
