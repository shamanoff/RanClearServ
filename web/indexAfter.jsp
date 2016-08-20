<%--
  Created by IntelliJ IDEA.
  User: Michael
  Date: 19/08/2016
  Time: 20:15
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>Ok, ${inputData} fine today!</title>
    <link rel="stylesheet" href="./css/app.css">
    <link rel="stylesheet" href="./css/reset.css">
  </head>
  <body>
  <div id="wrapper">
    <h1 id="title">Ok, ${inputData} fine today!</h1>
    <div id="pic">

    </div>

      <ul id="input">
        <li><input type="text" name="name" id="name" onkeypress="return onlyAlphabets(event,this);" placeholder="Write your name and click a button"></li>
        <li><button id="submit" value="GO!" onclick="myF()" >Generate!</button>
        </li>
      </ul>


  </div>

  <div class="hiddenPics">

  </div>

  <script src="jquery/dist/jquery.js"></script>
  <script src="js/app.js"></script>
  </body>
</html>
