<html>
  <head>
    <title>SENG 513 JavaScript Examples</title>
  </head>

  <body>
    <h1>SENG 513 JavaScript Examples</h1>
    <?php 
      $fiddles = array(
        "Namespace Pattern" => "https://jsfiddle.net/alexanderbird/vpnat41r/",
        "Scoping Pattern" => "https://jsfiddle.net/alexanderbird/14b70wyo/",
        "Revealing Module Pattern" => "https://jsfiddle.net/alexanderbird/hmh326yf/"
      );
      foreach($fiddles as $name => $url) {
        echo "<li><a href='$url'>$name</a></li>";
      }

    ?>
    <dl>
      <?php
      foreach(scandir('.') as $file) {
        if(substr($file, 0, 1) != "." && !is_dir($file) && $file != basename(__FILE__) && pathinfo($file, PATHINFO_EXTENSION) != "php") {
          $basename =basename($file, ".html");
          echo "<dt><b>$basename</b></dt>";
          echo "<dd>";
            $jsFile = "js/$basename.js";
            echo "<ul>";
              echo "<li>HTML (<a href='$file'>Rendered</a> | <a href='view_source.php?pagename=$file'>Raw</a>)</li>";
              echo "<li><a href='$jsFile'>JavaScript</a></li>";
            echo "</ul>";
          echo "</dd>";
        }
      }
      ?>
    </dl>
  </body>
</html>
