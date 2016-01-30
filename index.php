<html>
  <head>
    <title>SENG 513 JavaScript Examples</title>
  </head>

  <body>
    <h1>SENG 513 JavaScript Examples</h1>
    <ul>
      <?php
      foreach(scandir('.') as $file) {
        if(substr($file, 0, 1) != "." && !is_dir($file) && $file != basename(__FILE__)) {
          echo "<li><a href='$file'>$file</a></li>";
        }
      }
      ?>
    </ul>
  </body>
</html>
