var posts=["2024/07/07/Bp-sql/","2024/03/25/CORS跨域资源共享漏洞学习/","2024/08/09/CTF-web刷题/","2024/11/06/JDK动态代理/","2024/10/08/JWT漏洞学习/","2024/11/15/JavaDeserializeLabs/","2024/03/21/KalmarCTF-2024-Web-Challenges/","2024/10/15/MoeCTF复盘/","2024/05/25/PHP中出现Call-to-undefined-function-mysqli-connect/","2024/01/24/Linux命令笔记/","2023/10/05/hello-world/","2024/10/18/Java序列化、反序列化以及反射/","2024/03/12/SSTI靶场题解/","2024/07/25/imaginaryctf-writeup/","2024/10/24/java反序列化CommonsCollections/","2025/01/08/java反序列化之RMI-JRMP反序列化漏洞/","2024/12/26/java反序列化之RMI专题/","2024/11/23/java反序列化之CommonsBeanutils/","2024/11/21/java反序列化之shiro反序列化/","2024/10/24/java类加载/","2025/02/01/java反序列化之jndi/","2024/03/19/python沙盒逃逸/","2024/06/11/phar反序列化学习/","2024/02/27/php特性/","2024/07/27/java学习/","2024/03/01/ssti学习/","2024/09/20/test/","2024/03/19/ssrf学习/","2024/08/06/代码审计-thinkphp中的文件上传漏洞/","2024/08/17/代码审计-某TP6对接U支付系统/","2024/07/14/thinkphp学习/","2024/08/24/代码审计-某微商城系统RCE漏洞/","2024/05/18/云服务器部署Docker及搭建各类环境/","2024/03/30/命令执行刷题/","2024/04/06/校赛题解/","2024/07/10/代码审计：CVE-2023-1773/","2024/05/19/服务器上配置重定向文件/","2024/08/14/无字母数字webshell学习/","2023/10/05/第一篇博客/","2023/10/08/MySQl  max/MySQl/","2024/01/30/ROIS冬令营题解_max/ROIS冬令营题解/","2024/04/23/CSRF漏洞学习_max/CSRF漏洞学习/","2023/10/24/http协议，GET以及POST/http协议，GET以及POST/","2023/10/28/php/php/","2024/02/16/php反序列化学习_max/php反序列化学习/","2023/11/19/sql注入心得_max/sql注入心得/","2024/01/15/python_max/python笔记/","2024/01/20/JavaScript_max/JvaScript笔记/","2024/02/10/xss学习_max/xss学习/","2023/12/18/php伪代码协议和文件包含_max/php伪代码协议和文件包含/","2024/03/03/文件上传学习_max/文件上传学习/","2023/11/11/解题心得_max/解题心得/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};