# Part 2.md

12. Notation
    A. student.name
    B. student.['Grad Year']
    C. student.greeting()
    D. student['Favorite Teacher'].name
    E. student.courseLoad[0]

13. Arithmetic
    A. Ouput = '32'. '3' + string(2). Integers map to their exact string rerpesentation.
    B. Output = 1. 3-2 = 1.
    C. Output = 3. Since 3 + a null integer is 3. 
    D. Output = '3null'. JS converts null into a string type than appends it to '3'.
    E. Output = 4. True maps to 1
    F. Output = 0. False maps to 0 and + null integer returns a 0.
    G. Output = '3undefined'. Converts undefined into string type.
    H. Output = NaN. Cant do arithmetic on undefined type. 

14. Comparison
    A. True, 2 is larger than 1.
    B. False, since it compares the first character of two strings so 2 is not smaller than 1.
    C. True, JS converts '2' into numbers so 2 == 2 which is true.
    D. False, === strict equality checks without type conversino so string is not equal to number.
    E. False, true is mapped to 1
    F. True, boolean(2) returns true since it's not zero.

15. == Checks for equality with type conversion where it converts into numbers. === checks the equality without type conversion.

16. Separate file

17. First it goes into the function modifyArray, then it creates a new array. Then for every element in the old array, it multiplies that element by 2 by callback doSomething function, then pushes the transformed element on to the new array and returns it. Ultimately, modifyArray multiplies every element by 2 then returns that array.

18. Separate file

19. 
    1
    4
    3
    2

