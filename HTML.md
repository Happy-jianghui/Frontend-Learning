# 1. 网页&#x1F34E;
## 1.1 什么是网页
**网站**是指因特网上根据一定的规则，使用HTML等制作的用于展示特定内容**相关的网页集合**。  
**网页**是网站中的一“页”，通常是**HTML格式的文件**，它要通过浏览器来阅读。  
**网页是构成网站的基本元素**，它通常由图片、链接、文字、声音、视频等元素组成。  
通常我们看到的网页，常见以&#x1F539;.htm &#x1F539;或&#x1F539; .html&#x1F539; 后缀结尾的文件，因此将其俗称为**HTML文件**。
  
## 1.2 什么是HTML
**HTML**指的是**超文本标记语言(Hyper Text Markup Language)**, 它用来描述网页的一种语言。  
HTML不是一种编程语言，而是一种标记语言(Markup Language)。
标记语言是一套标记标签(sMarkup tag)。

### 1.2.1 所谓的超文本，有2层含义
1.它可以加入图片、声音、动画、多媒体等内容（超越了文本限制）。  
2.它还可以从一个文件跳转到另一个文件，与世界各地主机的文件连接（超链接文本）。

## 1.3 网页的形成
网页是由网页元素组成的，这些元素是利用html标签描述出来，然后通过浏览器解析来显示给用户的。  
前端人员开发代码 ---> 浏览器显示代码（解析、渲染） ---> 生成最后的Web页面


# 2. 常用浏览器&#x1F34E;
网页是通过浏览器来展示的，关于浏览器我们要介绍以下两点：
## 2.1 常用浏览器
浏览器是网页显示、运行的平台。常用的浏览器有谷歌、Safari和Edge等
## 2.2 浏览器内核
浏览器内核（渲染引擎）：负责读取网页内容，整理讯息，计算网页的显示方式并显示页面。
![image](https://github.com/Happy-jianghui/Frontend-Learning/assets/98568967/59e7b2a0-951b-407b-b9b7-824d1829ef6b)

# 3. Web 标准&#x1F34E;
**Web标准**是由W3C组织和其他标准化组织制定的**一系列标准的集合**。W3C（万维网联盟）是国际最著名的标准化组织。
## 3.1 为什么需要Web 标准
遵循 Web 标准除了可以让不同的开发人员写出的页面更标准、更统一外，还有以下优点：  
1. 让 Web 的发展前景更广阔
2. 内容能被更广泛的设备访问
3. 更容易被搜寻引擎搜索
4. 降低网站流量费用
5. 使网站更易于维护
6. 提高页面浏览速度

## 3.2 Web 标准的构成
主要包括 **结构(Structure)、表现(Presentation)** 和 **行为(Behavior)** 三个方面
![image](https://github.com/Happy-jianghui/Frontend-Learning/assets/98568967/cc4dcc72-522a-40eb-b8ac-5cf28ab69a3a)
Web 标准提出的最佳体验方案：**结果、样式、行为相分离**  
简单理解：**结构写到HTML文件中，表现写到CSS文件中，行为写到Javascript文件中。**
![image](https://github.com/Happy-jianghui/Frontend-Learning/assets/98568967/2e75decf-5c53-4bad-918f-8626812649ce)


# 4. HTML 标签&#x1F34E;
## 4.1 HTML 语法规范
### 4.1.1 基本语法概述
1. HTMl 标签是由尖括号包围的关键词，例如 **< html >**
2. HTML 标签**通常是成对出现的**，例如< html > 和 < /html >， 我们称为**双标签**。标签对中的第一个标签是开始标签，第二个标签是结束标签。
3. 有些特殊的标签必须是单个标签（极少情况），例如**< br/ >，我们成为**单标签**。

### 4.1.2 标签关系
双标签关系可以分为两类：**包含关系**和**并列关系**
![image](https://github.com/Happy-jianghui/Frontend-Learning/assets/98568967/a049ab1c-a428-4068-8c32-74fe817a77ce)

## 4.2 HTML 基本结构标签
### 4.2.1 第一个 HTML 网页
每个网页都会有一个基本的结构标签（也成为骨架标签），页面内容也是在这些基本标签上书写。  
HTML页面也成为HTML文档
``` html
<html>
    <head>
        <title>我的第一个网页</title>
    </head>
    <body>
        我的第一个网页
    </body>
</html>
```
![image](https://github.com/Happy-jianghui/Frontend-Learning/assets/98568967/367fe4de-19f6-48eb-958c-b02cf3c57018)
HTML 文档的后缀名必须是 .html 或 .htm，浏览器的作用是读取 HTML 文档，并以网页的形式显示出它们。
此时，用浏览器打开这个网页，预览HTML文件
![image](https://github.com/Happy-jianghui/Frontend-Learning/assets/98568967/569db016-cac6-417e-9180-775b55dfcdb1)
































