<!DOCTYPE html>
<html>
 <head>
  <title>Страница HTML5</title><meta charset="utf-8">
 </head>
  <body>
    <article></article>
    <script>
        function create() {
            for (let i=0; i<1000; i++) {
                document.querySelector('article').append( document.createElement('div', id=i));
            }
        }
    </script>
    
    <button onclick='create()'>Выполнить задание</button>
  </body>
</html>