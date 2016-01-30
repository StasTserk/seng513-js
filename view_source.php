<pre>
  <?php if(isset($_GET['pagename'])) {
    // don't allow browsing into subdirectories - just look in the current directory
    $filename = basename($_GET['pagename']);

    // print if if it exists and isn't PHP
    if(file_exists($filename) && pathinfo($filename, PATHINFO_EXTENSION) != "php") {
      $contents = file_get_contents($filename);
      echo highlight_string($contents, true);
    }
  } ?>
</pre>
