window.onload = function () {
  // 功能1： 点击按钮，删除评论
  var delBtn = document.getElementsByTagName("button");
  // console.log(delBtn);

  for (var i = 0; i < delBtn.length; i++) {
    delBtn[i].onclick = delComment;

  }

  function delComment() {
    //获取当前delBtn的父节点 li
    var li = this.parentNode;
    //获取要删除的项目名字
    var delName = li.children[0].innerHTML;
    //弹出提示确认框
    var warning = confirm("确定要删除 " + delName + " 吗？");
    //确认后，删除
    if (warning) {
      li.parentNode.removeChild(li);
    }
  }

  //功能2 ： 输入评论，点击按钮，将新评论添加原来列表中。
  document.getElementById("subBtn").onclick = function (){

    //获取输入的文本内容
    var userName = document.getElementById("nameInput").value;
    var commentText = document.getElementById("textInput").value;


    //创建一个li
    var newLi = document.createElement("li");
    newLi.innerHTML = "<p class='p1_user'>" +  userName  + "：</p>"+
                      "<p class='p2_text'>" + commentText + "</p>"+
                      "<button class='del_btn'>删 除</button>";

    //对于新添加的li , 也可以实现功能1
    newLi.getElementsByTagName("button")[0].onclick = delComment;

    var ul = document.getElementById("ul_con");
    //把 li 添加到 ul 中
    var submitComment = confirm("确定要发表评论 " + commentText + " 吗？");
    if (submitComment) {
      ul.appendChild(newLi);
    }


  };




};