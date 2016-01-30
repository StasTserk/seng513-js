<pre>
  <?php if(isset($_GET['pagename'])) {
    $filename = basename($_GET['pagename']);
    if(file_exists($filename)) {
      $contents = file_get_contents($filename);
      echo highlight_string($contents, true);
    }
  } ?>
</pre>
