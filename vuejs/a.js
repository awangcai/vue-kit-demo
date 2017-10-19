function fun1(){
  alert("it works");
}

fun1();

(function(){
    function fun1(){
      alert("it works");
    }

    fun1();
})()