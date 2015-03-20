/**
 * Created by pavelshahriar on 3/19/15.
 */

function PrimePalindrome() {
}

PrimePalindrome.prototype.checkPrime = function(num) {
    for(var i=2; i<=num/2; i++){ //start checking from 2, as all numbers are divisible by 1
        if((num % i) === 0){
            return false;
        }
    }
    return true;
};

PrimePalindrome.prototype.checkPalindrome = function(num){
    var type_cast_var = num.toString();
    if (type_cast_var === type_cast_var.split('').reverse().join('')){
        return true;
    }
    return false;
};

PrimePalindrome.prototype.getSmallerPrimeNumbersThan = function(max_limit){
    // code for getting all the prime numbers smaller than the supplied limit goes here
    // dummy code now
};

PrimePalindrome.prototype.getPrimePalindrome = function(){
    var max_limit = 1000;
    // code for finding the largest palindrome smaller than 1000 goes here
};


