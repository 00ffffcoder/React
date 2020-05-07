# React
 some projects about React

### 20200423- 01：40

> 1. 添加：comment-2-pureJS.html，comment-2.js，main.css
> 	这是一个评论区网页，可以手动添加用户名、评论和删除评论。coment.jpg可以看网页效果。
> 	对应js文件采用原生js代码实现评论添加和删除功能。
>
> 2. 添加：comment-3-reactVersion.html
> 	基于comment-2网页，使用react.js框架同样实现静态网页和评论增、删功能。
> 	js文件夹中相关js文件为react的相关包。



### 20200423- 10：40   更新

> 1. 修改：comment-2-pureJS.html，comment-2.js
> 修改功能：当评论区无评论时，显示相应文字提示。
> 	提交用户名和评论后，恢复默认空白。
> 	提交或删除评论，都会有提示弹框。

### 20200423- 14：50   更新

> 1. 添加：基于comment-3-reactVersion.html使用【create-react-app脚手架】创建一个react应用；
> 	技术架构:  react + webpack + es6 + eslint；
> 2. 主文件夹: ./react_app01/src
> 	components文件夹：四个组件；
> 		在comment-add.jsx中，CommentAdd组件采用了受控组件写法；
> 		而之前comment-3-reactVersion中对应的是非受控组件写法；

### 20200425-更新

> 修改：原来src文件夹改名为src-comment-originVersion,
> 新增：新增src文件夹中，组件代码中，使用了 pubsub-js 工具库实现组件间通信，简化了代码。

------

### 20200426-18：50更新

**各文件统一说明：**

1. **project-comment**文件夹：【评论区网页项目】
   - comment-2-pureJS.html及相应js, css:   功能实现由【原生js】完成；
   - comment-3-reactVersion.html :   使用【react.js框架】完成组件化搭建并实现相应功能，css同上共用。
2. **CSSandJS.md** 文件：  自己整理总结 js 和 css 相关知识点，会慢慢更新。
3. **react_app01** 文件夹：运用【create-react-app脚手架】完成的多个项目，主文件为内部src 文件夹。
   - src01-comment-originVersion文件夹：【评论区网页项目】，由脚手架搭建的版本。
   - src02-comment-pubsub文件夹：【评论区网页项目】优化版，使用了 pubsub-js 工具库实现组件间通信。
   - src03-react router demo文件夹：【react 路由demo】, 为前端路由，实现多级路由跳转功能。
   - src文件夹： 【React UI demo】, 使用antd-mobile UI框架进行练习。

------

### 20200428-09：14更新

**修改：**

​	1. src文件夹：【评论区网页项目】，使用redux,  react-redux 进行状态管理，实现异步加载。配合redux-devtools-extension和redux-devtools谷歌插件进行状态查看和调试。

  		2. 原来的src文件夹改为：src04-react router demo文件夹

**增加：**

1. src05-react-redux demo1文件夹: 【react-redux demo】计数器demo

 	2. src06-counter-react-redux文件夹：【react-redux demo】计数器demo，添加了异步加载。

### 20200428-23：48添加说明：

**关于使用脚手架搭建react项目引入antd-mobile后定制主题无效的说明**

1. 用这个方法：https://www.jianshu.com/p/7097348cd900

   创建一个 `config-overrides.js`，用于修改默认配置：

   ```csharp
   const { override, fixBabelImports, addLessLoader } = require('customize-cra');
   
   module.exports = override(
       addLessLoader({
         javascriptEnabled: true,
         modifyVars: {'@brand-primary': '#1DA57A'},
       }),
       fixBabelImports('import', {
         libraryName: 'antd-mobile',
         libraryDirectory: 'es',
         style: true,
       }),
   );
   ```

   网上最多的就是这种方法，但结果报错：

   ```
   ValidationError: Invalid options object. Less Loader has been initialized using an options object that does not match the API schema.options has an unknown property 'source'. 
   These properties are valid: object { lessOptions?, prependData?, appendData?, sourceMap? }
   ```

   

   2. 用老方法： 改写`config-overrides.js`，用到了injectBabelPlugin函数，但报错：injectBabelPlugin函数在依赖包react-app-rewired 2.0之后的版本已经不再被支持，新版本支持的是依赖包customize-cra。

      依旧用老方法，请看 https://blog.csdn.net/D1sappearRy/article/details/103081743

   3. 如果仅仅是想实现按需打包功能，应用新版本的处理方法（即官网对应方法）即可。
   4. 官网的定制主题方法，试了后无效。

------



### 20200428-09：14更新

**修改：**

​	原来的src文件夹改为：【评论区网页项目】，src07-comment-react-redux文件夹。

**新增：**

当前src文件夹： 【SunnyJob求职招聘App项目】

#### 	项目总概况：

  1. 此项目为一个前后台分离的 SPA, 包括前端应用和后端应用；

  2. 包括用户注册/登陆, 求职者/老板列表, 实时聊天等模块	；	

  3. 前端: 使用 React 全家桶+ES6+Webpack 等技术；		

  4. 后端: 使用 Node + express + mongodb + socketIO 等技术；

  5. 采用模块化、 组件化、 工程化的模式开发。  

     **前端应用：（客户端）**

1. api 文件夹：ajax 请求相关模块文件；

2. assets文件夹： 共用资源文件夹，存放了用户头像图片；

3. components文件夹：UI组件模块；

4. containers文件夹：容器组件模块；

5. redux文件夹：redux相关状态管理模块；

6. utils文件夹：工具模块；

7. index.js  ： 入口js。

   **后端应用：（服务端）**

   启动mongodb；

   使用webstorm中Node.js Express App 创建SunnyJob-server：

   1. db文件夹： 数据库数据操作模块
   2. routes文件夹：后台路由模块

   运用postman测试接口

   **当前进度**：

     1. 已完成前台用户登录，注册，求职者用户和老板用户信息完善界面；路由已搭建，并使用redux进行注册/登录/信息完善等状态管理。
  2. 已搭建后台，测试接口，功能正常。实现了前台和后台数据交互，用户注册/登录 成功，数据可保存本地数据库；失败，则后台返回错误信息，前台提示错误。

### 20200503-16：14更新

​	登录界面： /login   

​	登录成功：

```
this.props.user:  {_id: "5eae76abf95bc727842cb006", username: "user12", type: "JobHunter"}
```

​	个人信息完善界面：

```
this.props.user:  {_id: "5eae76abf95bc727842cb006", username: "user12", type: "JobHunter"}
```

​	问题1： 进入个人信息完善界面，填好信息，点击保存，立马跳回到登录界面，而且返回：

```
response.data {code: 1, msg: "no user ID，请先登陆！"}
```

​	个人信息完善界面的**this.props.user**变成：

```
this.props.user:  {username: "", type: "", msg: "no user ID，请先登陆！"}
```

​	问题2：登录界面，登录成功后，浏览器未产生cookie，因此保存个人信息时，ajax请求里面无userid

解决办法： 个人信息完善界面的state默认指定userid: this.props.user._id

**功能3： 如果强行访问个人信息完善界，点击保存，后台提示先登录，自动返回登录界面**

​	问题4： 个人信息完善界面 保存后，下次登录成功，直接跳转对应个人主页。要修改个人信息后续再做。

### 20200506-14：14更新

​	1.问题： 安装socket.io失败npm ERR! Unexpected end of JSON input while parsing near '...gine.io/-/engine.io-0'

​	解决办法：**清除cache**

```
npm cache clean --force
```

​	或者进入下面这个文件夹，把文件夹**npm-cache下的内容删除掉**


​	路径：C:/Users/PC/AppData/Roaming/npm-cache

### 20200507-19：23更新

目前已实现功能:  

```
（1）注册/登录（与后台数据交互）；
（2）boss/jobhunter主界面；
（3）boss/jobhunter信息完善界面（与后台数据交互）；
（4）boss/jobhunter个人中心页面；
（5）多用户实时聊天界面，可发送文字，表情（与后台数据交互）
```