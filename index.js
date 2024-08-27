      const clear= document.querySelector("#clear")
      const equal=document.querySelector("#equal")
      
      
      const buttons = document.querySelectorAll("#btn");
      const display = document.getElementById("display");
      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          display.value += button.value;
        });
      });

      clear.addEventListener("click",()=>{
       display.value=''
      })

      equal.addEventListener("click",()=>{
        display.value=eval(document.forms.display.value)
      })

w