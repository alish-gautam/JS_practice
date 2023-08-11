function fizzBuzz(){
    let user=Number(prompt("Enter a number:"))
    if (user%3!=0 && user%5!=0){
        console.log(user)
    }
    else if (user%3==0 && user%5==0){
        console.log("fizzBuzz")
    }
    else if(user%3==0){
        console.log("fizz")
    }
    else if (user%5==0){
        console.log("Buzz")
    }
}
fizzBuzz()