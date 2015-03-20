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

PrimePalindrome.prototype.getLimitedPrimeNumbers = function(max_limit){
    var current_number = 2; //start counting from 2 as 1 is not a prime number
    var prime_numbers = [];
    while(current_number < max_limit){
        if(this.checkPrime(current_number)){
            prime_numbers.push(current_number);
        }
        current_number++;
    }
    return prime_numbers;
};

PrimePalindrome.prototype.checkPalindrome = function(num){
    var type_cast_var = num.toString();
    return type_cast_var === type_cast_var.split('').reverse().join('');

};

PrimePalindrome.prototype.getPrimePalindrome = function(){
    var max_limit = 1000;

    // at first get the list of prime numbers smaller than 1000
    var prime_numbers_list = this.getLimitedPrimeNumbers(max_limit);

    // then extract the palindromes from the list
    var palindrome_prime_numbers_list = [];
    for(var i=0; i<prime_numbers_list.length; i++ ){
        if(this.checkPalindrome(prime_numbers_list[i])){
            palindrome_prime_numbers_list.push(prime_numbers_list[i]);
        }
    }

    // return the last entry in the array
    return palindrome_prime_numbers_list[palindrome_prime_numbers_list.length - 1];
};


