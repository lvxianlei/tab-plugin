##选项卡插件
- 此为利用面向对象封装的一款建议插件，意为日常工作使用之便利；
##使用方法[demo](https://github.com/lvxianlei/tab-plugin/blob/master/test.html);
```
    <html lang="zh">
    <head>
        <meta charset="UTF-8">
        <title>test Demo</title>
        <style>
            li{
                width: 50px;
                background-color: #00a854;
            }
            li.show{
                display: block;
                background-color: #108ee9;
            }
            p{
                display: none;
                width: 100px;
                background-color: #d73435;
            }
            p.show{
                display: block;
            }
        </style>
    </head>
    
    <body>
    <ul class="main">
        <li class="show">1</li>
        <li>2</li>
        <li>3</li>
    </ul>
    <div class="content">
        <p class="show">78</p>
        <p>87</p>
        <p>85</p>
    </div>
    </body>
    <script src="./Tab.js"></script>
    <script>
        //传入所要实现选项卡效果的父级DOM元素即可
        //注意：传入的DOM元素必须为Class  (内部实现为操作class实现效果)
        new Tab('main','content');
    </script>
    </html>
```
##由于源代码中使用的为【class="show"】所以只需要书写.show的css样式即可。