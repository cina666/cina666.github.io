var posts=["2024/01/24/Linux命令笔记/","2024/03/01/ssti学习/","2023/10/05/第一篇博客/","2024/01/20/JavaScript_max/JvaScript笔记/","2023/10/05/hello-world/","2024/02/27/php特性/","2024/01/30/ROIS冬令营题解_max/ROIS冬令营题解/","2023/10/08/MySQl  max/MySQl/","2023/10/24/http协议，GET以及POST/http协议，GET以及POST/","2023/12/18/php伪代码协议和文件包含_max/php伪代码协议和文件包含/","2023/11/19/sql注入心得_max/sql注入心得/","2024/02/16/php反序列化学习_max/php反序列化学习/","2024/01/15/python_max/python笔记/","2024/02/10/xss学习_max/xss学习/","2023/10/28/php/php/","2024/03/03/文件上传学习_max/文件上传学习/","2023/11/11/解题心得_max/解题心得/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};