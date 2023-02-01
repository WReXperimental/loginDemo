import "../css/style.css";
// import "normalize.css";

const password = document.getElementById("password");

const passwordToggle = document.querySelector(".password_icon");
// console.log(password, passwordToggle);

passwordToggle.addEventListener("click", () => {
  if (password.type === "password") {
    password.setAttribute("type", "text");
    passwordToggle.classList.remove("show");
    passwordToggle.classList.add("show");
  } else {
    password.setAttribute("type", "password");
    passwordToggle.classList.remove("show");
  }
});

password.addEventListener("keyup", () => {
  console.log(password.value);
  checkPassword(password.value);
});

function checkPassword(info) {
  const passwordMsg = document.getElementById("password_msg");

  passwordMsg.textContent = "需要";
  const lower = new RegExp("(?=.*[a-z])");
  //查询是否有小写
  const upper = new RegExp("(?=.*[A-Z])");
  //查询是否有大写
  const number = new RegExp("(?=.*[0-9])");
  // 查询是否有数字
  const special = new RegExp("(?=.*[*!@#$%^&*])");
  // 查询是否有特殊字符，可更完善
  const length = new RegExp("(?=.{8,})");
  // 查询长度
  console.log(lower.test(info));
  // const email= new RegExp('')

  let errorFlag = false;
  if (!lower.test(info)) {
    passwordMsg.textContent += " 小写";
    errorFlag = true;
  }

  if (!upper.test(info)) {
    passwordMsg.textContent += " 大写";
    errorFlag = true;
  }
  if (!number.test(info)) {
    passwordMsg.textContent += " 数字";
    errorFlag = true;
  }
  if (!special.test(info)) {
    passwordMsg.textContent += " 特殊字符";
    errorFlag = true;
  }
  if (!length.test(info)) {
    passwordMsg.textContent += " 长度大于8";
    errorFlag = true;
  }

  const passwordGroup = document.getElementById("password_group");
  if (errorFlag) {
    passwordGroup.classList.remove("success");
    passwordGroup.classList.add("error");
  } else {
    passwordGroup.classList.remove("error");
    passwordGroup.classList.add("success");
  }

  if (
    lower.test(info) &
    upper.test(info) &
    number.test(info) &
    special.test(info) &
    length.test(info)
  ) {
    passwordMsg.textContent = "valid password";
  }
}

//=======================check email=====================
const email = document.getElementById("email");

email.addEventListener("keyup", () => {
  console.log(email.value);
  checkEmail(email.value);
});


function checkEmail(info) {


  const emailMsg = document.querySelector(".email_msg");
  emailMsg.textContent = "";


  const validEmail = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])+"  );

  // const validEmail= new RegExp(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i)

  console.log(validEmail.test(info));

  if (!validEmail.test(info)) {
    
    emailMsg.textContent = "invalid";
  } 
  if (validEmail.test(info)) {
    emailMsg.textContent = "valid";
  }
}
