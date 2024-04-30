# Part 1.md

## 1. A Quick Introduction...

### var declaration 

1. Line 9 prints "values added: 20"
   
2. Line 13 prints "values added 20"

### let declaration

1. Line 9 prints "values added: 20"

2. Line 13 prints an error since the variable result is no longer defined outside of the if block.

### const declaration

1. Line 9 and line 13 both prints an error since the constant variable "result" cannot be reassigned as num1 + num2 so the program returns an error right away.

## Part 2. A little More of a Challenge...

1. Line 12 will print 3 since it there are three numbers in prices which the loop runs three times and increment i three times.

2. Line 13 prints 150 since the last price that it looped through was 300 so the discounted price becomes 300 * 0.5 = 150.

3. This is the same case as above, as the last discounted price calculated also became the final price. But since the discounted price was an integer, final price rounding would return the same integer.

4. This function returns a list of new prices that has been lowered by the discount.

5. This returns an error, since let i does not define i outside of the for loop. So when calling i again at line 12, it returns an error.
   
6. Same thing as above, discountedprice is a let variable not defined outside of the for loop.

7. Line 14 will print out the correct final price since let final price was defined in the outer block of the function which encompasses the entire function block.

8. Same as above, the list discounted was defined in the outer block of the function which encompasses the entire function block.

9. This returns an error, since let i does not define i outside of the for loop. So when calling i again at line 12, it returns an error.

10. Line 12 prints 3 since that is the length of the list inputted.

11. Prints out the new prices that have been lowered by the discount.
