document.querySelector(".change-style").onclick = function() {
    var transitionTest = document.querySelector(".transition-div");
    var change1 = document.querySelector(".test-font-color");
    console.log(transitionTest.style.width);
    // !transitionTest.style.width必须要写，要不然没有动画出现
    if(transitionTest.style.width=="0px"||!transitionTest.style.width) {
      transitionTest.style.width = "100px";
      change1.style.color = "green";
    }else{
        transitionTest.style.width = change1.style.width;
        change1.style.color = "black";
    }
   
  }
  