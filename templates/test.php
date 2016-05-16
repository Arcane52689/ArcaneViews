<?php
header("Access-Control-Allow-Origin: *");
?>
<h1> Hello World </h1>

<p>
  Hello World! My name is {{ person.name}}
  I am {{ person.age }} years old.
  I am very {{ person.trait}}.
</p>