/**
 * Created by pavelshahriar on 3/19/15.
 */

describe("PrimePalindrome", function() {
    var prime_palindrome = new PrimePalindrome();

    it("should validate 5 to be a prime number!", function() {
        expect( true ).toBe( prime_numbers.checkPrime(5) );
    });

    it("should invalidate 10 NOT to be a prime number!", function() {
        expect( false ).toBe( prime_numbers.checkPrime(10) );
    });

    it("should return all prime numbers which are smaller than 1000!", function() {
        expect( 1000 ).toBe( prime_numbers.getSmallerPrimeNumbersThan(1000).length );
    });

    it("should validate a palindrome", function() { // not necessarily it needs to be a prime number
        expect( true ).toBe( prime_numbers.checkPalindrome('121'));
    });

    it("should invalidate a non-palindrome", function() { // not necessarily it needs to be a prime number
        expect( true ).toBe( prime_numbers.checkPalindrome('122'));
    });

    it("should return the largest prime palindrome smaller than 1000", function() { // not necessarily it needs to be a prime number
        expect( 929 ).toBe( prime_numbers.getPrimePalindrome());
    });

});

