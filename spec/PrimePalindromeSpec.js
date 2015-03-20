/**
 * Created by pavelshahriar on 3/19/15.
 */

describe("PrimePalindrome", function() {
    var prime_palindrome = new PrimePalindrome();

    it("should validate 5 to be a prime number!", function() {
        expect( true ).toBe( prime_palindrome.checkPrime(5) );
    });

    it("should invalidate 10 NOT to be a prime number!", function() {
        expect( false ).toBe( prime_palindrome.checkPrime(10) );
    });

    it("should validate a palindrome", function() { // not necessarily it needs to be a prime number
        expect( true ).toBe( prime_palindrome.checkPalindrome(121));
    });

    it("should invalidate a non-palindrome", function() { // not necessarily it needs to be a prime number
        expect( false ).toBe( prime_palindrome.checkPalindrome(122));
    });

    // there are in total 168 primes under 1000. the formulea is - pi(1000) ~ 168
    it("should return all prime numbers which are smaller than 1000!", function() {
        expect(168).toBe( prime_palindrome.getSmallerPrimeNumbersThan(1000).length );
    });

    it("should return the largest prime palindrome smaller than 1000", function() { // not necessarily it needs to be a prime number
        expect( 929 ).toBe( prime_palindrome.getPrimePalindrome());
    });

});

