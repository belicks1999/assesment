

const array =[1,90,3,45,20];

if(array.length>1){

    let largest = Infinity;
    let secondlarge = Infinity;

    for (num of array){

        if(largest>num){

            secondlarge=largest;
            largest=num;
            


        } else if(num>secondlarge && num > last){

            secondlarge=num;

        }
    console.log(secondlarge);
    return secondlarge;


    }
    

} else{

    console.log("Array shoud contain atleast 3 numbers");
}