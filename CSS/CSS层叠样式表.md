# 1.CSS简介
CSS的主要使用场景就是美化网页，布局页面的。
## 1.1 HTML的局限性
**只关注内容的语义**，比如< h1 >表面这是一个大标题，< p >表明这是一个段落，< img >表明这有一个图片等  
虽然HTML可以做简单的样式，但是带来的是无尽的**臃肿和繁琐**......

## 1.2 CSS-网页的美容师
**CSS**是**层叠样式表（Cascading style sheets）** 的简称。  
有时我们也会称之为**CSS样式表**或**级联样式表**。  
CSS是一种标记语言，主要用于设置HTML页面中的**文本内容**（字体、大小、对齐方式等）、**图片的外形**（宽高、边框样式、边距等）以及**版面的布局和外观显示样式**。  
CSS让我们的网页更加丰富多彩，布局更加灵活自如。简单理解：**CSS可以美化HTML，让HTML更漂亮，让页面布局更简单**。

## 1.3 CSS语法规范
使用HTML时，需要遵从一定的规范，CSS也是如此。**CSS规则由两个主要的部分构成：选择器以及一条或多条声明**。  
![image](https://github.com/Happy-jianghui/Frontend-Learning/assets/98568967/337be6e1-7221-4011-8add-3c8760d993f3)  
**选择器**是用于指定CSS样式的**HTML标签**，花括号内是对该对象设置的具体样式  
属性和属性值以“键值对”的形式出现  
属性是对指定的对象设置的样式属性，例如字体大小、文本颜色等  
属性和属性值之间用英文“:”分开  
多个“键值对”之间用英文“;”进行区分

# 2.CSS基础选择器
## 2.1 CSS选择器的作用
选择器（选择符）就是根据不同需求把不同的标签选出来这就是选择器的作用。简单来说，就是**选择标签用**。  
**选择器**分为**基础选择器**和**复合选择器**两个大类。
1. 基础选择器是由**单个选择器组成的**
2. 基础选择器有包括：**标签选择器**、**类选择器**、**id选择器**和**通配符选择器**

### 2.1.1 标签选择器
**标签选择器**（元素选择器）是指用**HTML标签名称**作为选择器，按标签名称分类，为页面中某一类标签指定统一的CSS样式。
![image](https://github.com/Happy-jianghui/Frontend-Learning/assets/98568967/ff290a57-d41a-4169-8f25-81e45ab29426)
**作用**：标签选择器可以把某一类标签全部选择出来，比如所有的< div >标签和所有的< span >标签。
**优点**：能快速为页面中同类型的标签统一设置样式。
**缺点**：不能设计差异化样式，只能选择全部的当前标签。

### 2.1.2 类选择器
如果想要差异选择不同的标签 ，单独选一个或者某几个标签，可以使用**类选择器**。
![image](https://github.com/Happy-jianghui/Frontend-Learning/assets/98568967/7fae0ef4-372e-4c7e-92d0-83448c771510)
结构需要用**class属性**来调用class类的意思
![image](https://github.com/Happy-jianghui/Frontend-Learning/assets/98568967/fea232ed-95bc-4073-8c2c-3e0e3b27fc5a)
类选择器在HTML中以**class**属性表示，在CSS中，类选择器以一个点“.”号显示。
**注意**：
1. 类选择器使用“.”（英文点号）进行标识，后面紧跟类名（自定义，我们自己命名的）。
2. 可以理解为给这个标签一个名字来表示。
3. 长名称或词组可以使用中横线来为选择器命名。
4. 不要使用纯数字、中文等命名，尽量使用英文字母来表示。
5. 命名要有意义的，尽量使别人一眼就知道这类目的目的。


### 2.1.3 类选择器-多类名
我们可以给一个标签指定多个类名，从而达到更多的选择目的。这些类名都可以选出这个标签。  
简单理解就是一个标签有多个名字。
#### 2.1.3.1 多类名使用方式
![image](https://github.com/Happy-jianghui/Frontend-Learning/assets/98568967/da00ce51-cc32-4555-a323-725a6ec5c867)
1. 在标签class属性中写多个类名
2. 多个类名中间必须用空格分开
3. 这个标签就可以分别具有这些类名的样式

#### 2.1.3.1 多类名开发中使用场景
1. 可以把一些标签元素相同的样式（共同的部分）放到一个类里面。
2. 这些标签都可以调用这个公共的类，然后在调用自己独有的类。
3. 从而节省CSS代码，统一修改也非常方便。

### 2.1.4 id选择器
ID选择器可以作为标有特定id的HTML元素指定特定的样式。  
HTML元素以**id属性**来设置id选择器，CSS中id选择器以“**#**”来定义。
![image](https://github.com/Happy-jianghui/Frontend-Learning/assets/98568967/244de724-c0a1-477c-b83c-392bdcb41ecb)
**区别**：
1. 类选择器好比人的名字，一个人可以有多个名字，同时一个名字也可以被多个人使用。
2. id选择器好比人的身份证号码，全中国是唯一的，不得重复。
3. id选择器和类选择器最大的不同在于使用次数上。
4. 类选择器在修改样式中用的最多，ID选择器一般用于页面唯一性的元素上，经常和JavaScript搭配使用。

### 2.1.5 通配符选择器
在CSS中，通配符选择器使用“ * ”定义，他表示选取页面中所有元素（标签）。
![image](https://github.com/Happy-jianghui/Frontend-Learning/assets/98568967/ace2f630-994e-49f6-ad8a-9b5dcb7ee73c)
1. 通配符选择器不需要调用，自动就给所有元素使用样式
2. 特殊情况才使用，比如清除所有的元素标签的内外边距


### 总结
![image](https://github.com/Happy-jianghui/Frontend-Learning/assets/98568967/4b553cc0-564f-4fee-9cf6-cd066038c7ea)

# 3.CSS字体属性
CSS Fonts(字体)属性用于定义**字体系列**、大小、粗细、和文字样式（如斜体）。

## 3.1 字体系列
CSS使用**font-family**属性定义文本的字体系列。
![image](https://github.com/Happy-jianghui/Frontend-Learning/assets/98568967/b96fcab3-c08b-4763-b32e-f816988c1e9f)
1. 各种字体之间必须使用英文状态下的逗号隔开
2. 一般情况下，如果有空格隔开的多个单词组成的字符，加引号
3. 尽量使用系统默认自带字体，保证在任何用户的浏览器中都能正确显示。

## 3.2 字体大小
CSS使用**font-size**属性定义字体大小。
![image](https://github.com/Happy-jianghui/Frontend-Learning/assets/98568967/096dbb7b-e548-4330-a2c5-da0b016845e4)
1. px（像素）大小是我们网页的最常用的单位
2. 谷歌浏览器默认的文字大小为16px
3. 不同浏览器可能默认显示的字号大小不一致，我们尽量给一个明确值大小，不要默认大小
4. 可以给body指定整个页面文字的大小
5. 标题标签比较特殊，需要单独指定文字大小

## 3.3 字体粗细
CSS使用**font-weight**属性来设置文本字体的粗细。
![image](https://github.com/Happy-jianghui/Frontend-Learning/assets/98568967/71b65517-cde6-4b93-b243-50d2ccc89078)

## 3.4 文字样式
CSS使用**font-style**属性设置文本风格。
![image](https://github.com/Happy-jianghui/Frontend-Learning/assets/98568967/82b6f802-81c5-4a84-8d5c-15e43cf6fb62)
**注意**：平时很少给文字加斜体，反而要给斜体标签(em、i)改为不倾斜字体。

## 3.5 字体复合属性
字体属性可以把以上文字样式综合来写，这样可以更节约代码
![image](https://github.com/Happy-jianghui/Frontend-Learning/assets/98568967/e70e5c21-6e0b-40f2-bb1b-68d7d008169b)
1. 使用font属性时，必须按上面语法格式中顺序书写，**不能更换顺序**，并且各个属性间以**空格**隔开
2. 不需要设置的属性可以省略（取默认值），但**必须保留font-size和font-family属性**，否则font属性将不起作用。

## 3.6 字体属性总结
 ![image](https://github.com/Happy-jianghui/Frontend-Learning/assets/98568967/cf4add9c-67c5-4c67-a038-87d91b28a1e2)


# 4.CSS文本属性
CSS Text（文本）属性可定义文本的**外观**，比如文本的颜色、对齐文本、装饰文本、文本缩进、行间距等。

## 4.1 文本颜色
**color**属性用于定义文本的颜色
![image](https://github.com/Happy-jianghui/Frontend-Learning/assets/98568967/8f3b0563-c48f-4b41-baf8-0dc1f700e390)
**开发中最常用的是十六进制**

## 4.2 对齐文本
**text-align**属性用于设置元素内文本内容的水平对齐方式。
![image](https://github.com/Happy-jianghui/Frontend-Learning/assets/98568967/68f15c50-4594-4496-8711-bb0110bd74d7)

## 4.3 装饰文本
**text-decoration**属性规定添加到文本的修饰。可以给文本添加下划线、删除线、上划线等。
![image](https://github.com/Happy-jianghui/Frontend-Learning/assets/98568967/92a3dd2d-dfe1-49c6-8755-b7908ad8351a)

## 4.4 文本缩进
**text-indent**属性用来指定文本的第一行的缩进，通常是将**段落的首行缩进**。





















