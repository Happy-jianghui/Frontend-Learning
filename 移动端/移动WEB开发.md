# 1. 移动端基础
## 1.1 浏览器现状
![image](https://github.com/Happy-jianghui/Frontend-Learning/assets/98568967/20006aa2-3bde-4067-85aa-e016da70fcad)
**总结：兼容移动端主流浏览器，处理Webkit内核浏览器即可。**  

## 1.2 手机屏幕现状
![image](https://github.com/Happy-jianghui/Frontend-Learning/assets/98568967/a7720bb2-f287-428c-918a-bbff740236a1)

## 1.3 常见移动端屏幕尺寸
![image](https://github.com/Happy-jianghui/Frontend-Learning/assets/98568967/a80ad8d3-ca65-4801-b6e4-6977805fb354)

## 1.4 移动端调式方法
![image](https://github.com/Happy-jianghui/Frontend-Learning/assets/98568967/9cdd38aa-ac50-40d3-afa8-73c8b41d4fc1)


# 2. 视口
**视口（viewport）** 就是浏览器显示页面内容的屏幕区域。视口可以分为布局视口、视觉视口和理想视口

## 2.1 布局视口 layout viewport
![image](https://github.com/Happy-jianghui/Frontend-Learning/assets/98568967/2df4ed29-1693-44e1-ae90-93420e8a4ad9)
![image](https://github.com/Happy-jianghui/Frontend-Learning/assets/98568967/1a146aa0-e8c5-435f-9c73-8524c2b9a920)

## 2.2 视觉视口 visual viewport
 - 字面意思，它是用户正在看到的网站区域。**注意：是网站的区域**。
 - 我们可以通过缩放去操作视觉视口，但不会影响布局视口，布局视口仍保持原来的宽度。
![image](https://github.com/Happy-jianghui/Frontend-Learning/assets/98568967/ecc02ea8-a6f3-4c53-9f99-f3596da2b4ac)

## 2.3 理想视口 ideal viewport
 - 为了使网站在移动端有最理想的浏览和阅读宽度而设定
 - 理想视口，对设备来讲，是最理想的视口尺寸
 - 需要手动添加meta视口标签通知浏览器操作
 - meta视口标签主要目的：布局视口的宽度应该和理想视口的宽度一致，简单理解就是设备多宽，我们布局视口就多宽
   

## 2.4 meta视口标签
![image](https://github.com/Happy-jianghui/Frontend-Learning/assets/98568967/baedfd6e-3c48-4223-9c59-3de53172a0a8)
![image](https://github.com/Happy-jianghui/Frontend-Learning/assets/98568967/7245bbef-69ba-49c5-946c-b4e189743539)

## 2.6 标准的viewport设置
 - 视口宽度和设备保持一致
 - 视口的默认缩放比例1.0
 - 不允许用户自行缩放
 - 最大允许的缩放比例1.0
 - 最小允许的缩放比例1.0

# 3 二倍图
## 3.1 物理像素&物理像素比
![image](https://github.com/Happy-jianghui/Frontend-Learning/assets/98568967/694d429e-6ae1-4001-8f26-ba3df87a69f2)
![image](https://github.com/Happy-jianghui/Frontend-Learning/assets/98568967/a2f50618-06de-4f66-ac54-013a24e8b55b)

## 3.2 多倍图
![image](https://github.com/Happy-jianghui/Frontend-Learning/assets/98568967/1644e82f-2844-4cff-a1a0-c656f997f75b)


## 3.3 背景缩放background-size
![image](https://github.com/Happy-jianghui/Frontend-Learning/assets/98568967/d5d06bf7-141a-4e94-ba26-c6c4f1ac1a1c)
![image](https://github.com/Happy-jianghui/Frontend-Learning/assets/98568967/688d8403-5439-4157-9d55-399f102fedbd)































