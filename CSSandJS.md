# JavaScript相关

## 1. 数据类型

- 基本数据类型：undefined、null、boolean、number、string、==**symbol**== (es6的新数据类型)；
- 引用数据类型：object、array、function (三个统称为object)；

## 2. 数据类型检测

- ==typeof  null;==  返回object    【其他都可以显示正确的类型】

```
typeof 5 // 'number'
typeof '5' // 'string'
typeof undefined // 'undefined'
typeof false// 'boolean'
typeof Symbol() // 'symbol'
console.log(typeof null)  //object
console.log(typeof NaN)   //number
typeof [] // 'object'
typeof {} // 'object'
typeof console.log // 'function'
```

- ==instanceof==    【通过原型链来判断数据类型】

```
p1 = new Person()
p1 instanceof Person // true
```

- ==Object.prototype.toString.call() ；== 【可以检测所有的数据类型】

```
var obj={}
var arr=[]
console.log(Object.prototype.toString.call(obj))    //[object Object]
console.log(Object.prototype.toString.call(arr))    //[object Array]
```

- ==isNaN()==  【函数用于检查其参数是否是非数字值。】

  要判断某个值是否是 NaN，不能使用 == 或 === 运算符。正因为如此，isNaN() 函数是必需的。

```
<script>
document.write(isNaN(123));   //false
document.write(isNaN(-1.23)); //false
document.write(isNaN(5-2));   //false
document.write(isNaN(0));     //false
document.write(isNaN("Hello")); //true
document.write(isNaN("2005/12/12")); //true 
</script>
```

isNaN(x)； 如果 x 是特殊的非数字值 NaN（或者能被转换为这样的值），返回的值就是 true。如果 x 是其他值,则返回 false。

提示：**isNaN() 函数通常用于检测 parseFloat() 和 parseInt() 的结果，以判断它们表示的是否是合法的数字。当然也可以用 isNaN() 函数来检测算数错误，比如用 0 作除数的情况。

- ==Array.isArray(obj)==  、

  【用于判断一个对象是否为数组，如果对象是数组返回 true，否则返回 false。】

  ECMAScript 5， IE9,9+

## 3. 深浅拷贝

- **浅拷贝**

  ```
  Object.assign(target, ...sources)
  ```

  （1）==Object.assign()==将所有可枚举属性的值从一个或多个源对象复制到目标对象target。它将返回目标对象。**target本身会改变**。

  （2）复制对象

  ```js
  const obj = { a: 1 };
  const copy = Object.assign({}, obj);
  console.log(copy); // { a: 1 }
  ```

  （3）合并对象

  ```js
  const o1 = { a: 1 };
  const o2 = { b: 2 };
  const o3 = { c: 3 };
  const obj = Object.assign(o1, o2, o3);
  console.log(obj); // { a: 1, b: 2, c: 3 }
  console.log(o1);  // { a: 1, b: 2, c: 3 }, 注意目标对象自身也会改变。
  ```

  （4）合并具有相同属性的对象，属性会被后续参数中具有相同属性的其他对象覆盖。

  ```js
  const o1 = { a: 1, b: 1, c: 1 };
  const o2 = { b: 2, c: 2 };
  const o3 = { c: 3 };
  const obj = Object.assign({}, o1, o2, o3);
  console.log(obj); // { a: 1, b: 2, c: 3 }
  ```

  ==Object.assign(obj1，obj2)== 会合并对象生成一个新对象。

  如果对象的属性是普通类型，改变原对象之后，新对象不会改变；

  如果对象的属性是引用类型（obj, arr），**改变原对象之后，新对象会改变**，所以**Object.assign实际上还是浅拷贝**。==浅拷贝仅仅是拷贝引用类型数据的地址。==

  ```
  let target = {
    webName: "aaaa"
  }
  let source = {
    url:"www.softwhy.com",
    num: {
      x: 1,
      y: 2
    }
  }
  var web = Object.assign(target, source);
  source.num.x=10;
  console.log(target.num.x); //10 ,发生改变
  source.url = 'new url';
  console.log(target.url); //"www.softwhy.com" , 并没变
  ```

  

- **深拷贝**：新的独立存在，改变原来的不影响新的。

```
JSON.parse(JSON.stringify(obj))
```

​		利用==JSON.stringify(obj)==将对象先转为**json字符串**，再JSON.parse(）转回为js对象可以实现深拷贝，这也是比较常用的一种方法。

### 4. 变量声明提升

- 在 JavaScript 中，函数声明（function aa(  ){  }）与变量声明（var）经常被 JavaScript 引擎隐式地提升到当前作用域的顶部。
- 函数声明的优先级高于变量，如果变量名跟函数名相同且未赋值，则函数声明会覆盖变量声明。
- 声明语句中的赋值部分并不会被提升，只有**变量的名称被提升**。

### 5. 作用域链

​		因为函数的嵌套形成作用域的层级关系。当函数执行时，从当前作用域开始搜，没有找到的变量，会向上层作用域查找，直至全局函数，这就是作用域链。

- 在 JavaScript 中，作用域为 function( ){  }内的区域，称为函数作用域。
- 全局函数无法查看局部函数的内部细节，但局部函数可以查看其上层的函数细节，直至全局细节。

### 6. 闭包

​		闭包：能够读取函数内部变量的函数。

​		闭包的原理就是链式作用域结构，比如函数F内部有一个函数G，函数 G可以访问到函数F中的变量，那么函数G就是闭包。

```text
function F() {
  let a = 1
  function G() {
      console.log(a)
  }
  return G();
}
F()  // 1
```

### 7. new 操作符具体干了什么？

执行new命令：

- 创建一个空对象{ }，作为要返回的实例对象；
- 将这个空对象的原型指向构造函数的prototype属性；
- 将这个空对象赋值给函数内部的this关键字，因此可以在构造函数中使用this来引用新建的对象；
- 开始执行构造函数内部的代码。

### 8. js 创建对象的几种方式

​		有不同的方法来创建对象：

- 定义和创建单个对象，使用对象文字，即==对象字面量==的方法。

  ```
  var obj={};
  ```

- 定义和创建单个对象，通过关键词 new。（使用内建构造器）

  ```
  var obj=new Object();
  ```

- 定义==对象构造器==，然后创建构造类型的对象。

  ```
  function Pel(){}
  var p = new Pel();
  p.name="hu";
  p.age="25";
  p.address=function(){
  }
  ```

- 在 ECMAScript 5 中，也可以通过函数 Object.create(obj) 来创建对象。

- ==**请不要把字符串、数值和布尔值声明为对象！**==

  如果通过关键词 "new" 来声明 JavaScript 变量，则该变量会被创建为对象：

```
var x = new String();        // 把 x 声明为 String 对象
var y = new Number();        // 把 y 声明为 Number 对象
var z = new Boolean();       //	把 z 声明为 Boolean 对象
```

​		请避免字符串、数值或逻辑对象。他们会**增加代码的复杂性并降低执行速度**。

------

### 8.1 对象访问器（ES5: Getter 和 Setter，IE9,9+）

- #### 为什么使用 Getter 和 Setter？

  - 它提供了更简洁的语法；
  - 它允许属性和方法的语法相同；
  - 它可以确保更好的数据质量；
  - 有利于后台工作；

- get 关键字

```
// 创建对象：
var person = {
  language : "en",
  get lang() {
    return this.language;
  }
};
// 使用 getter 来显示来自对象的数据：
console.log(person.lang);   //"en"
```

- set 关键字

```
var person = {
  language : "en",
  set lang(lang) {
    this.language = lang;
  }
};
// 使用 setter 来设置对象属性：
person.lang = "zh";
console.log(person.language);   //"zh"
```

- 虽然可以属性的值写成函数形式，然后外部对象==用函数形式==访问：person.funcName();

- 但get 和 set 关键字都是让对象==用属性形式访问==：person.funcName;

- 应用：常来操作一个计数器

  ```
  var obj = {
    counter : 0,
    get reset() {
      this.counter = 0;
    },
    get increment() {
      this.counter++;
    },
    get decrement() {
      this.counter--;
    },
    set add(value) {
      this.counter += value;
    },
    set subtract(value) {
      this.counter -= value;
    }
  };
  
  // 操作计数器：
  obj.reset;
  obj.add = 5;
  obj.subtract = 1;
  obj.increment;
  obj.decrement;
  ```

- `Object.defineProperty(obj, prop, desc)`方法也可用于添加 Getter 和 Setter：

  ```
  var obj = {counter : 0};
  
  Object.defineProperty(obj, "reset", {
    get : function () {this.counter = 0;}
  });
  Object.defineProperty(obj, "add", {
    set : function (value) {this.counter += value;}
  });
  obj.reset;
  obj.add=5;
  ```

  `Object.defineProperty()`的作用就是直接在一个对象上定义一个新属性，或者修改一个已经存在的属性。参数：obj 当前对象；prop 需要定义的属性名； desc 属性描述符，本质是一个对象，分数据描述符，存取描述符（上面例子就是这个）。

### 9. JS 如何实现一个‘’类‘’

- **构造函数法**

  缺点：用到了 this 和 prototype，编写复杂，可读性差

```text
function P(name, age){
     this.name = name;
     this.age= age;
   }
   P.prototype.sell= function(){
      console.log("hello");
   }
   var pel= new P("jj", 1);
   pel.sell()                  //"hello"
```

- ES6 语法糖 class

```text
class Point {
    constructor(x, y) {
    this.x = x;
    this.y = y;
    }
    toString() {
    return '(' + this.x + ', ' + this.y + ')';
    }
}
var point = new Point(2, 3);
```

### 10. Js如何实现继承？

- ==构造函数的继承==：

```text
//（1）先使用 call 或 apply 方法，在子类的构造函数中，调用父类的构造函数。
function Child(name,color){
 　Father.call(this);
 　this.name = name;
 　this.color = color;
}
//（2）然后将子对象的 prototype 指向父对象的 prototypes
Child.prototype = Object.create(Father.prototype);
Child.prototype.constructor = Child;

var kid = new Child();
kid instanceof Child;  //true
kid instanceof Father; //true
```

​		（1）如果是==单个方法的继承==，这时可以采用下面的写法。

```
ClassB.prototype.print = function() {
  ClassA.prototype.print.call(this);
  // some code.......
}
```

​		上面代码中，子类`B`的`print`方法先调用父类`A`的`print`方法，再部署自己的代码。这就等于继承了父类`A`的`print`方法。

​		（2）==多重继承==【一个对象同时继承多个对象】，这种模式又称为 **Mixin（混入）**。

```
function M1() {
  this.hello = 'hello';
}

function M2() {
  this.world = 'world';
}

//1.字类构造函数中调用父类的构造函数
function S() {
  M1.call(this);
  M2.call(this);
}

// 继承 M1
S.prototype = Object.create(M1.prototype);
// 继承链上加入 M2
Object.assign(S.prototype, M2.prototype);

// 指定构造函数
S.prototype.constructor = S;

var s = new S();
s.hello // 'hello'
s.world // 'world'
```

- ==实例继承==：将子对象的 prototype 指向父对象的一个实例。但是子类会具有父类实例的方法。有时，这可能不是我们需要的，所以**不推荐**使用这种写法。

```text
Child.prototype = new Father();
```

- ES6 语法糖 ==extends继承==

```text
class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y);    // 调用父类的constructor(x, y)
        this.color = color;
    }
    toString() {
        return this.color + ' ' + super.toString(); // 调用父类的toString()
    }
}
```

### 11. apply、call、bind

`		call`、`apply`和`bind`是`Function`对象自带的三个方法，都是为了改变函数体内部 `this` 的指向。
`apply 、 call 、bind` 三者第一个参数都是 `this` 要指向的对象，也就是想指定的上下文；
`apply 、 call 、bind` 三者都可以利用后续参数传参；call 传入参数列表；apply 传入数组。
bind 是返回对应 函数，便于稍后调用；`apply 、call` 则是立即调用 。

​		bind() 方法**会创建一个 新函数**，当调用这个新函数时，新函数会以创建它时传入 bind() 方法的第一个参数 作为 this，传入 bind() 方法的 第二个以及以后的参数加上绑定函数运行时本身的参数按照顺序作为原函数的参数来调用原函数。

```text
var bar = function(){
	console.log(this.x);
};
var foo = {
	x:3
};
bar();    // undefined
var func = bar.bind(foo); 

func(); // 3
```

### 12. this 对象的理解

普通函数

- this 总是指向**函数的直接调用者**。
- 如果有 new 关键字，**this 指向 new 出来的实例对象**。
- 在事件中，this 指向触发这个事件的对象。
- IE 下 attachEvent 中的 this 总是指向全局对象 Window。
- 箭头函数中，函数体内的`this`对象，就是**定义时**所在作用域的对象，而不是使用时所在的作用域的对象。

​         首先箭头函数其实是没有 `this` 的，箭头函数中的 `this` 只取决**包裹箭头函数的第一个普通函数的 `this`**。在这个例子中，因为包裹箭头函数的第一个普通函数是 `a`，所以此时的 `this` 是 `window`。另外对箭头函数使用 `bind`这类函数是无效的。

```text
function a() {
  return () => {
    return () => {
      console.log(this)
    }
  }
}
a()()()        //Window
```



### 13. 数组去重

```text
var arr=['12','32','89','12','12','78','12','32'];
    // 最简单数组去重法
    function unique1(array){
        var n = []; //一个新的临时数组
        for(var i = 0; i < array.length; i++){ //遍历当前数组
            if (n.indexOf(array[i]) == -1)
                n.push(array[i]);
        }
        return n;
    }
    arr=unique1(arr);
```

- 使用Set: `Set`本身是一个构造函数，用来生成 Set 数据结构。

```javascript
// 去除数组的重复成员
[...new Set([1,1,1,1,2,2,2,2])]  // [1,2]

//去除字符串里面的重复字符
[...new Set('ababbc')].join('')  // "abc"
```



### 14. 排序

- ==sort() 方法==用于对数组的元素进行排序。
  - 参数必须是函数，可选，来规定排序顺序。
  - 没有使用参数，是按照字符编码的顺序进行排序。
  - 返回值：数组在原数组上进行排序，不生成副本。

```
//升序排列return a - b，降序则是return b-a;
function sortNumber(a,b){
	return a - b;
}
var arr= [11,3,2,9,5,1].sort(sortNumber); // [1, 2, 3, 5, 9, 11]
```

### 15. 递归求和

```text
function add(a,b){
	var s = a+b;
    if(b+1>100){
    	return s;
    }else{
    	return add(s,b+1);
    }			   	
}
	
var sum =add(1,2);
```

### **16. 计算数组各项的重复次数**

```text
var arr=['a','a','b','a','b','c'];
var obj={};
arr.sort();    //先排序
for(var i=0;i<arr.length;){
	var con=0;
	for(var j=i;j<arr.length;j++){
		if(arr[i]===arr[j]){
			con++;
		}
	}
	obj[arr[i]]=con; 
	i=i+con;    //跳过重复的值
}
console.log(obj);  //{ 'a': 3, 'b': 2, 'c': 1 }
```

### 17. 浏览器页面渲染过程

浏览器渲染页面的一般过程：

1.浏览器解析html源码，然后创建一个 DOM树。并行请求 css/image/js在DOM树中，每一个HTML标签都有一个对应的节点，并且每一个文本也都会有一个对应的文本节点。DOM树的根节点就是 documentElement，对应的是html标签。

2.浏览器解析CSS代码，计算出最终的样式数据。构建CSSOM树。对CSS代码中非法的语法它会直接忽略掉。解析CSS的时候会按照如下顺序来定义优先级：浏览器默认设置 < 用户设置 < 外链样式 < 内联样式 < html中的style。

3.DOM Tree + CSSOM --> 渲染树（rendering tree）。渲染树和DOM树有点像，但是是有区别的。

DOM树完全和html标签一一对应，但是渲染树会忽略掉不需要渲染的元素，比如head、display:none的元素等。而且一大段文本中的每一个行在渲染树中都是独立的一个节点。渲染树中的每一个节点都存储有对应的css属性。

4.一旦渲染树创建好了，浏览器就可以根据渲染树直接把页面绘制到屏幕上。

以上四个步骤并不是一次性顺序完成的。如果DOM或者CSSOM被修改，以上过程会被重复执行。实际上，CSS和JavaScript往往会多次修改DOM或者CSSOM。

**从浏览器中输入或者点开一个 url，到看到网页内容，主要有下面四大过程：**

> 1、浏览器根据域名找到对应的 ip 地址（远程服务器）。
> 2、浏览器与远程服务器建立连接（tcp 连接，三次握手）。
> 3、浏览器与远程服务器发送和接收数据。
> 4、浏览器与远程服务器断开连接。

​		1.**域名解析为ip**

​		ip 为网络为每一台电脑分配的一个地址。理论上一个域名对应一个 ip。浏览器拿到域名后，第一件事就是要把域名解析成 ip，然后找到这个 ip 对应的机器。通常使用 DNS 解析来帮域名找到对应 ip 地址，为了让这个查找过程更高效，浏览器和操作系统都会将每次的解析结果缓存起来。即下次再要解析某个域名时，就会先去缓存里去看下，如果缓存里没有对应数据，就再去根域名服务器、顶级域名服务器等查找 ip。

​		2.**建立连接**

​		由于 http 是基于 tcp 协议的，tcp 建立连接需要经历**三次握手**。下面模拟一下三次握手的过程：

> 浏览器A：你好，我是浏览器A，我想找你玩儿。
> 远程服务器B：你好啊，浏览器A，那你来吧。
> 浏览器A：好的嘞，我这就去了。

​		这就是三次握手的大致流程，tcp 的三次握手确保了每一个消息都有去有回。一旦某个消息得不到有效回应 tcp 协议就会重发该消息，直到得到有效回应。

​		tcp 属于**传输层**，其实传输层还有一种 udp 协议，**udp** 和 tcp 最大的区别就是**不需要建立连接**，也就是说 udp 无需像 tcp 通过三次握手建立连接才能开始通信，udp 发出包也不用确保能否得到有效响应，只管发出去就行了。udp 协议通常被用于对实时性要求性比较高的场景，比如**直播**等。

​		3.**服务器响应和返回**

​		建立连接后，就可以互相传送数据了。浏览器按照 http 协议的格式将数据组装好向服务器发起请求，服务器接收到请求并将处理结果响应给浏览器。

​		服务端的 http 服务器软件一般有 Apache 和 Nginx，Apache 或 Nginx 又将请求交由具体的编程语言（Java、Python、PHP 等）去处理。

​		服务器又将程序处理的结果按照 http 协议格式原路返回给客户端浏览器，浏览器则再根据返回的数据**渲染页面和数据**。

​		4.**断开连接**

​		在完成了数据通信之后，就要考虑断开连接了，毕竟任务完成了就要空出系统资源来。tcp 的断开相对于连接来说，其实是有四次握手的，通常被称作**四次挥手**。

> 浏览器A：你好，时间不早了，我想回去了。
> 远程服务器B：哦哦，我看下几点了啊。
> 远程服务器B：哎呀，确实不早了，那你先回吧，拜拜。
> 浏览器A：好的，拜拜。

​		服务器在收到断开消息的时候，可能还有任务或数据没有处理完成，在这个时候服务器会**再去确认**是否所有数据都处理完毕了，如果确实都处理完成了，服务器再告诉浏览器可以断开了。



## 18. 主流模块规范

在es6以前，还没有提出一套官方的规范,从社区和框架推广程度而言,目前通行的javascript模块规范有两种：CommonJS 和 AMD。

https://www.cnblogs.com/fps2tao/p/10823468.html

### CommonJS规范

2009年，美国程序员Ryan Dahl创造了node.js项目，将javascript语言用于服务器端编程。这标志”Javascript模块化编程”正式诞生。

在CommonJS中,暴露模块使用module.exports和exports。

在CommonJS中，有一个全局性方法require()，用于加载模块。假定有一个数学模块math.js，就可以像下面这样加载。

```
var math = require('math');
```

然后，就可以调用模块提供的方法：

```
var math = require('math');
math.add(2,3); // 5
```

正是由于CommonJS 使用的require方式的推动，才有了后面的AMD、CMD 也采用的require方式来引用模块的风格



### 19. async/await

​		**语法糖（Syntactic sugar）**，也译为糖衣语法，是由英国计算机科学家彼得·约翰·兰达（Peter J. Landin）发明的一个术语，指计算机语言中添加的某种语法，这种语法对语言的功能并没有影响，但是更方便程序员使用。【增加程序的可读性，从而减少程序代码出错的机会】

ES2017 标准引入了 async 函数。

async 用于申明一个 function 是异步的，await 只能出现在 async 函数中， 用于等待一个异步方法执行完成。

1. **async 作用**：==async 函数==（包含函数语句、函数表达式、Lambda表达式）会==返回一个 Promise 对象==，如果在函数中 `return` 一个直接量，async 会把这个直接量通过 `Promise.resolve()` 封装成 Promise 对象。

   在没有 `await` 的情况下：执行 async 函数，它会立即执行，返回一个 Promise 对象，并且，绝不会阻塞后面的语句。这和普通返回 Promise 对象的函数并无二致。

   有 `await` 的情况下：当函数执行的时候，一旦遇到`await`就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。

2. await 不仅可以用于等待一个 async 函数的返回值（Promise 对象），也可以等任意表达式的结果。所以，await 后面实际是可以接普通函数调用或者直接量的。

```
function getSomething() {
    return "something";
}
async function testAsync() {
    return Promise.resolve("hello async");
}
async function test() {
    const v1 = await getSomething();
    const v2 = await testAsync();
    console.log(v1, v2);
}
test();
```

​		**本质：**`await` 是个运算符，用于组成表达式，await 表达式的运算结果取决于它等的东西。

如果它等到的不是一个 Promise 对象，那 await 表达式的运算结果就是它等到的东西。

如果它等到的是一个 Promise 对象，await 就忙起来了，它会阻塞后面的代码，等着 Promise 对象 resolve，然后得到 resolve 的值，作为 await 表达式的运算结果。

#### Promise 方案的死穴—— 参数传递太麻烦了，async/await 的优势在于处理 then 链

```javascript
// 指定多少毫秒后输出一个值。
function timeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function asyncPrint(value, ms) {
  await timeout(ms);
  console.log(value)
}

asyncPrint('hello world', 50);
```



# **css相关**

### **1.盒模型**

盒模型的组成，由里向外content,padding,border,margin.

**在IE盒子模型中，width表示content+padding+border这三个部分的宽度**

**在标准的盒子模型中，width指content部分的宽度**

box-sizing的使用

```text
box-sizing: content-box 是W3C盒子模型
box-sizing: border-box 是IE盒子模型
```

box-sizing的**默认属性是content-box**

### **2.居中**

**水平居中**

- 行内元素: `text-align: center`
- 块级元素: `margin: 0 auto`
- 在子级中设置：`position:  absolute` +`left: 50%`+` transform: translateX(-50%)`
- 在父级中设置：`display:flex + justify-content: center`

**垂直居中**

- 设置line-height 等于height

- 在子级中设置：`position：absolute +top: 50%`+ `transform: translateY(-50%)`

- 在父级中设置：`display:flex` + `align-items: center`

- 父级中 ：`display:table`,  子级中：`display:table-cell` + `vertical-align: middle`;

  将容器设为`display:table`让他成为一个块级表格元素，子元素`display:table-cell`使子元素成为表格单元格，然后就像在表格里一样。**子元素宽高无效，与父级宽高相同**。

//不知道宽高

```text
width: 78px;
height: 78px;
position: absolute;
left: 50%;
top: 50%;
transform: translateX(-50%) translateY(-50%);
```

//知道宽高

```text
height: 100px;
        width: 100px;
        position: absolute;
        left:50%;
        top: 50%;
        margin-left: -50px;
        margin-top: -50px;
        display:flex;
        justify-content: center;
        align-content: center;
```

### 3.定位

position 属性的五个值：static , relative , fixed , absolute , sticky

- #### static 定位

  HTML 元素的**默认值**，即**没有定位**，遵循正常的文档流对象。

  静态定位的元素不会受到 top, bottom, left, right影响。

- #### fixed 定位

  元素的位置相对于浏览器窗口是固定位置。即使窗口是滚动的它也不会移动。

  Fixed定位**脱离文档流**，元素的位置与文档流无关，因此不占据空间。

  Fixed定位的元素和其他元素重叠。

  ==**fixed常用于网站边缘的公司联系方式、快速回到顶部**==

- #### relative 相对定位

  元素所占据的文档流的位置不变，元素本身相对文档流的位置进行偏移。

- #### absolute 绝对定位

  **脱离文档流**，绝对定位的元素的位置相对于最近的已定位父元素，如果元素没有已定位的父元素，那么它的位置相对于<html>。

​		absolute 定位的元素和其他元素重叠。

- #### sticky 定位

  - 用于网页导航条挺好！
  - 在跨越特定阈值前为相对定位，之后为固定定位。

  - 这个**特定阈值**指的是 top, right, bottom , left 之一，换言之，指定 top, right, bottom 或 left 四个阈值其中之一，才可使粘性定位生效。否则其行为与相对定位相同。

  **注意:** ==Internet Explorer不支持==, Edge 15 及更早 IE 版本不支持 sticky 定位。 Safari 需要使用 -webkit- prefix。