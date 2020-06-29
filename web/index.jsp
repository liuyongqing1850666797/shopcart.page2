<%--
  Created by IntelliJ IDEA.
  User: LiuYQ
  Date: 2020/6/29
  Time: 15:46
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>Five Steps Chess</title>
    <style>
      *{margin:0;}/*解决浏览器的兼容问题*/
      /js/jquery.js
      #canvas{background:#f4f4f4;
        margin:100px auto auto auto;
        display:block;
        border:7px solid #3d3d3d;
        box-shadow:0 0 30px;
      }
      body{
        background:blue;
        background-size:cover;;
      }
      button{
        height:40px;
        width:100px;
        display:block;
        margin:45px auto ;
        border-radius: 25px;
      }
    </style>

  </head>
  <body>
  <canvas id="canvas" height="450" width="450"></canvas>
  <button id="restart">重新开始</button>
  </body>
  </head>
</html>
