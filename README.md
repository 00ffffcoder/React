# React
 some projects about React

### 20200423- 01：40

```
1. 添加：comment-2-pureJS.html，comment-2.js，main.css
	这是一个评论区网页，可以手动添加用户名、评论和删除评论。coment.jpg可以看网页效果。
	对应js文件采用原生js代码实现评论添加和删除功能。

2. 添加：comment-3-reactVersion.html
	基于comment-2网页，使用react.js框架同样实现静态网页和评论增、删功能。
	js文件夹中相关js文件为react的相关包。
```



### 20200423- 10：40   更新

```
1. 修改：comment-2-pureJS.html，comment-2.js
	修改功能：当评论区无评论时，显示相应文字提示。
			提交用户名和评论后，恢复默认空白。
			提交或删除评论，都会有提示弹框。
```

### 20200423- 14：50   更新

```
1. 添加：基于comment-3-reactVersion.html使用【create-react-app脚手架】创建一个react应用；
	技术架构:  react + webpack + es6 + eslint；
2. 主文件夹: ./react_app01/src
	components文件夹：四个组件；
		在comment-add.jsx中，CommentAdd组件采用了受控组件写法；
		而之前comment-3-reactVersion中对应的是非受控组件写法；
```

### 20200425

```
修改：原来src文件夹改名为src-comment-originVersion,
新增：新增src文件夹中，组件代码中，使用了 pubsub-js 工具库实现组件间通信，简化了代码。
```

