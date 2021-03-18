
for(var x =1; x <= 100; x++){
    var mensaje ="";

    if(x % 3 ==0){
        mensaje +='Fizz';
    }
    if(x % 5 ==0){
        mensaje +='Buzz';
    }

  console.log(mensaje|| x)
}