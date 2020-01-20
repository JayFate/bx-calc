# 小程序开发入门之便携计算器

[bx-calc](https://github.com/dunizb/sCalc) 微信小程序版，适合入门，由于重点不是实现计算器具体功能，主要是为了学习微信小程序开发，
所以一些非关注点问题就不要太在意

为了实现计算功能，被微信小程序坑死了，因为js文件中不支持window对象，没法使用eval函数

介绍文章：[小程序开发入门之便携计算器](http://www.imooc.com/article/13393)

其他微信小程序：[极简天气](https://github.com/dunizb/wxapp-weathermin)，[读你电影](https://github.com/dunizb/wxapp-movie)

## Previews

![Previews](./home.png)

## Description

涉及微信小程序开发相关知识：

1. CSS Flexbox布局
2. 事件绑定、页面跳转
3. Page、window、App全局设置
4. wxml、wxsss、js、json文件使用方法
5. view、text、icon、button组件使用方法
6. navigate、wx.setStorageSync、数据绑定等API

## Setup

1. Clone the repo
```
$ git clone https://github.com/dunizb/wxapp-sCalc.git
```
2. Import to Wechat DEV Tools

把项目导入到微信开发者工具中即可

## License

Copyright (c) 2016 Dunizb. MIT Licensed, see LICENSE for details.
