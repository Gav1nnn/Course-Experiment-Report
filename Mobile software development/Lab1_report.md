# 2022年夏季《移动软件开发》实验报告



<center>姓名：张家玮  学号：23020007157</center>

| 姓名和学号？         | 张家玮，23020007157                                          |
| -------------------- | ------------------------------------------------------------ |
| 本实验属于哪门课程？ | 中国海洋大学22夏《移动软件开发》                             |
| 实验名称？           | 实验1：第一个微信小程序                                      |
| 博客地址？           | 暂无                                                         |
| Github仓库地址？     | https://github.com/Gav1nnn/Course-Experiment-Report/tree/main/Mobile%20software%20development |

（备注：将实验报告发布在博客、代码公开至 github 是 **加分项**，不是必须做的）



## **一、实验目标**

1、学习使用快速启动模板创建小程序的方法；2、学习不使用模板手动创建小程序的方法。



## 二、实验步骤

列出实验的关键步骤、代码解析、截图。

### 2.1 环境搭建

2.1.1 登录微信公众平台https://mp.weixin.qq.com/下载并注册小程序账号

2.1.2 [下载](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)对应版本的微信开发者工具

### 2.2 模板创建

2.2.1 打开微信开发者工具，并使用注册时一致的微信扫码登录

2.2.2 选择小程序选项进入对应的界面，依次填写项目名称、目录、AppID等来创建一个小程序项目

<img src="C:\Users\23724\Pictures\Screenshots\屏幕截图 2025-08-25 152924.png" alt="屏幕截图 2025-08-25 152924" style="zoom:50%;" />

2.2.3 新建之后会进入开发者界面

<img src="C:\Users\23724\Pictures\Screenshots\屏幕截图 2025-08-25 152947.png" alt="屏幕截图 2025-08-25 152947" style="zoom: 67%;" />

目前有设置头像和昵称的功能设置之后可以在预览区看到目前的画面，或者通过工具栏中的真机调试在手机中查看页面来保证没有出现错误。预览图如下：

<img src="C:\Users\23724\Pictures\Screenshots\屏幕截图 2025-08-25 153012.png" alt="屏幕截图 2025-08-25 153012" style="zoom:50%;" />

### 3.手动创建

2.3.1 只保留首页将其余内容删除

具体如下：

（一）将app.json文件内pages属性中的“pages/logs/logs"删除，并删除上一行末尾的逗号。

（二）按快捷键Ctrl+S保存当前修改。

<img src="C:\Users\23724\Pictures\Screenshots\屏幕截图 2025-08-25 163018.png" alt="屏幕截图 2025-08-25 163018" style="zoom: 67%;" />

2.3.2 手动开发

我们创建对应的文件

`index.js`

```js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Page({
  data: {
    avatarUrl: defaultAvatarUrl,
    nickname: ''
  },

  onChooseAvatar(e){
    const { avatarUrl } = e.detail;
    this.setData({ avatarUrl });
  },

  getName(e){
    const { value } = e.detail;
    this.setData({ nickname: value });
  }
})

```

`index.wxml`

```html
<view class="container">
  <!-- 顶部标题 -->
  <view class="top">
    <text class="title">Hello World</text>
  </view>

  <!-- 中间头像 -->
  <view class="middle">
    <button class="avatar-wrapper" open-type="chooseAvatar" bind:chooseavatar="onChooseAvatar">
      <image class="avatar" src="{{avatarUrl}}"></image>
    </button>
  </view>

  <!-- 底部昵称输入框 -->
  <view class="bottom">
    <view wx:if="{{nickname}}" class="nickname-text">{{nickname}}</view>
    <input wx:else type="nickname" bindinput="getName" class="nickname-input" placeholder="请输入昵称"/>
  </view>
</view>
```

`index.wxss`

```css
.container {
  position: relative;
  width: 100%;
  height: 100vh;
  background: #f9f9f9;
}

/* 顶部标题 */
.top {
  position: absolute;
  top: 60rpx;
  width: 100%;
  display: flex;
  justify-content: center;
}
.title {
  font-size: 48rpx;
  font-weight: bold;
  color: #333;
}

/* 中间头像 */
.middle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.avatar-wrapper {
  width: 220rpx;
  height: 220rpx;
  padding: 0;
  border: none;
  background-color: transparent;
}
.avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0 8rpx 16rpx rgba(0,0,0,0.15);
  background: linear-gradient(135deg, #f6f8fa, #e9ebee);
  transition: transform 0.2s ease-in-out;
}
.avatar-wrapper:active .avatar {
  transform: scale(0.92);
}

/* 底部昵称输入框 */
.bottom {
  position: absolute;
  bottom: 60rpx;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 输入框样式 */
.nickname-input {
  width: 70%;
  padding: 16rpx;
  font-size: 32rpx;
  border: 2rpx solid #ddd;
  border-radius: 12rpx;
  background: #fff;
  text-align: center; 
  box-shadow: inset 0 2rpx 6rpx rgba(0,0,0,0.05);
}

/* 显示文本昵称 */
.nickname-text {
  font-size: 36rpx;
  font-weight: 500;
  color: #333;
  text-align: center;  
  width: 70%;           
}
```

将其放入index目录下即可

## 三、程序运行结果

运行后得到结果如图，可以得到头像和昵称

<img src="C:\Users\23724\Pictures\Screenshots\屏幕截图 2025-08-25 173430.png" alt="屏幕截图 2025-08-25 173430" style="zoom:50%;" />

![屏幕截图 2025-08-25 173439](C:\Users\23724\Pictures\Screenshots\屏幕截图 2025-08-25 173439.png)

## 四、问题总结与体会

**问题：**手动创建时，使用getUserInfo 和 getUserProfile时只能得到默认的头像和昵称，查询得知这是 **微信平台的保护机制**，不是代码写错。微信现在推荐使用以下方式来主动填写：

**获取头像**：

```html
<button open-type="chooseAvatar" bind:chooseavatar="onChooseAvatar">
  <image src="{{avatarUrl}}" class="avatar"></image>
</button>
```

```js
onChooseAvatar(e) {
  const { avatarUrl } = e.detail;
  this.setData({ avatarUrl });
}
```

**填写昵称**：

```html
<input type="nickname" placeholder="请输入昵称" bindinput="onNicknameInput" />
```

```js
onNicknameInput(e) {
  this.setData({ nickName: e.detail.value });
}
```

 初次尝试了小程序开发，体验了微信开发者工具，与前端三件套类似，总体来说还算顺利。