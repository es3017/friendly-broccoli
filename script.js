var list = [""];

document.body.querySelector(".submit").style.display = "none";
document.body.querySelector(".text").style.display = "none";

function validate() {
  var messEle = document.body.querySelector(".valMess");
  var username = document.body.querySelector(".username").value;

  if (username === "coolStudent123") {
    menu();
    document.body.querySelector(".logIn").style.display = "none";
    document.body.querySelector(".username").style.display = "none";
  } else {
    messEle.innerHTML = "Incorrect";
  }
}

  var display = document.body.querySelector(".display");
  var title = document.createElement("h1");

function menu() {
  var nav = document.body.querySelector(".nav");


  var pages = [
    {
      name: "View"
    }
  ];

  for (var i = 0; i < pages.length; i++) {
    createPage(pages[i]);
  }
}

var nav = document.body.querySelector(".nav");

function createPage(pg) {
  var button = document.createElement("button");
  button.addEventListener("click", function () {
    view()
  });
  button.innerHTML = pg.name;
  nav.appendChild(button);
}

function view() {
  title.innerHTML = "view";
  display.appendChild(title);
  document.body.querySelector(".submit").style.display = "initial";
  document.body.querySelector(".text").style.display = "initial";
}

document.body.querySelector(".logIn").addEventListener("click", function () {
  validate();
});

function renderItems(){
  for(var i=0; i<list.length; i++){
    var ele =document.createElement("div");
    ele.innerHTML=list[i];
    document.body.querySelector(".display").appendChild(ele);
  }
}

function submit() {
  var text = document.body.querySelector(".text").value;
  if (text.length !== 0) {
    document.body.querySelector(".subMess").innerHTML = "";
    list.push(text);
  } else {
    document.body.querySelector(".subMess").innerHTML = "Not enough letters";
  }

  renderItems();
}