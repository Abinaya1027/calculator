// function cal(){
//     var input1=document.getElementById("input1").value
//     input1.innerHTML=
//     var input2=document.getElementById("input2").value
//     input2.innerHTML=
// }
// cal()
function called(){
      var box1=document.getElementById("input_1").Value;
       var box2=document.getElementById("input_2").value;
    //    var call=document.getElementById("called").Value;
       var add=document.getElementById("add").value;
       var sub=document.getElementById("sub").value;
       var mul=document.getElementById("mul").value;
       var div=document.getElementById("div").value;
       var total;


switch (add,sub,mul,div) {
        case add:
         total="box1+box2";      
          break;
        case sub:
          total=box1-box2;
          break;
          case mul:
            total=box1*box2;
            break;
            case div:
              total=box1/box2;
              break;
        default:
          console.log("error");
          break;
      }
    }
    
    called()