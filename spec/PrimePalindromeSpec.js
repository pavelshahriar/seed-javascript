/**
 * Created by pavelshahriar on 3/19/15.
 */

describe("PrimePalindrome", function() {
    var prime_palindrome = new PrimePalindrome();

    it("should validate 5 to be a prime number!", function() {
        expect( true ).toBe( prime_palindrome.checkPrime(5) );
    });

    it("should validate 10 NOT to be a prime number!", function() {
        expect( false ).toBe( prime_palindrome.checkPrime(10) );
    });

    // there are in total 25 primes smaller than 100. the formula is - pi(100) ~ 25
    it("should return all prime numbers which are smaller than 100!", function() {
        expect(25).toBe( prime_palindrome.getLimitedPrimeNumbers(100).length );
    });

    // there are in total 168 primes smaller than 1000. the formula is - pi(1000) ~ 168
    it("should return all prime numbers which are smaller than 1000!", function() {
        expect(168).toBe( prime_palindrome.getLimitedPrimeNumbers(1000).length );
    });

    it("should validate a palindrome", function() { // not necessarily it needs to be a prime number
        expect( true ).toBe( prime_palindrome.checkPalindrome(121));
    });

    it("should invalidate a non-palindrome", function() { // not necessarily it needs to be a prime number
        expect( false ).toBe( prime_palindrome.checkPalindrome(122));
    });

    it("should return 929, the largest prime palindrome smaller than 1000", function() {
        expect( 929 ).toBe( prime_palindrome.getPrimePalindrome());
    });

});

