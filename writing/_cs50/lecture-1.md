---
published: 2024-04-08
summary: ""
title: ""
# type: 'blog-post'
---

# Harvard CS50x 2024: Lecture 1 - C

Completed April 2024

[CS50x 2024 - Lecture 1 - C](https://www.youtube.com/watch?v=cwtpLIWylAw&ab_channel=CS50) - by David Malan

## Table of Contents

### General Notes

Going to start learning C, and as always learn how to solve problems using functions, conditionals, loops. Will also learn how to (not) solve problems.

C is converted by its compiler into assembly, which is then in turn converted into binary (machine code).

**Process: Source Code > [compiler] > Machine Code**

## C Hello World

```
#include <stdio.h>

int main(void)
{
    printf("hello, world\n");
}
```

Terminal:

```
code hello.c (creates vscode file)
make hello (compiles the file into machine code)
./hello (executes the file)
```

Printf = print formatted. Double quotes in C.

#### Programs can be simplified to a mental model:

> Arguments > [Function] > Side Effects (aka return value)

`#include <stdio.h>` tells the compiler to include the function from stdio.h (referencing the file). The .h file is a header file (e.g. library).

<stdio.h> is standard input/output, AKA keyboard and screen

CS50 has provided a shortened/simplified list of C documentation [CS50 Manual Pages](https://manual.cs50.io/)

CS50.h is a _training wheel library_ to help get started learning C.

`answer = get_string("What's your name? ");` sets the string into a variable

`printf("hello, %s\n", answer);` concatenates the variable into the string

#### Putting it all together:

```
#include <stdio.h>
#include <cs50.h>

int main(void)
{
    string answer = get_string("What's your name? ");
    printf("hello, %s\n", answer);
}
```

#### C Types

bool (boolean)
char (single character)
double
float
int
long
string

#### Format Codes

%s = strings
%c = char
%f = float
%i = integers
%li = long integer
%s = string

### C Conditionals

**Single if statement**

```
if (x < y)
{
   printf("x is less than y\n")
}
```

**If else statement**

```
if (x < y)
{
   printf("x is less than y\n")
}
else
{
   printf("x is not less than y\n")
}
```

**If else if else statement**

```
if (x < y)
{
   printf("x is less than y\n")
}
else if (x > y)
{
   printf("x is greater than y\n")
}
#remove the equality operator because equal is the last remaining math option (greater than, less than, equal)
else
{
   printf("x is equal to y\n")
}
```

```
**If else/or statements**
#include <cs50.h>
#include <stdio.h>

int main(void)
{
    char c = get_char("Do you agree? ");
    if(c == 'y' || c == "Y")
    {
        printf("Agreed.\n");
    }
    else if (c == 'n' || c == "N")
    {
        printf("Not agreed.\n");
    }
}
```

### C Variables

`int counter = 0;` = declare a 0 integer variable named counter
`counter += 1;` OR `counter++` increment the counter variable by 1
`counter -= 1;` OR `counter--` decrease the counter variable by 1

Strings and characters use quotes differently. Strings **have to use double "quotes".** Single characters should use **single quotes, 'y', 'n'**, etc.

### C Loops

Loop 3 times and print meow for each loop

```
#include <stdio.h>
#include <cs50.h>

int main(void)
{
    int i = 0;
    while (i < 3)
    {
        printf("meow\n");
        i++;
    }
}
```

### C For Loops

(Declare variable, check condition and run loop, callback/updater)

```
for (int i = 0; i < 3; i++)
{
   printf("meow\n");
}
```

### Creating Functions in C

**Declaring a C function. The first void indicates no return value, the meow is the function name, and the arg void indicates no arguments**

```
void meow(void)
{
   printf("meow\n");
}
```

_Function declaration and call example:_

The 4th line `void meow(void);` is used to notify the compiler of a function and its shape.

Loop 3 times and call the `meow()` function

```
#include <stdio.h>
#include <cs50.h>

void meow(void);

int main(void)
{
    for (int i = 0; i < 3; i++)
    {
        meow();
    }
}

void meow(void)
{
    printf("meow\n");
}
```

Loop x times based on an argument

```
#include <stdio.h>
#include <cs50.h>

void meow(int n);

int main(void)
{
    meow(3);
}

void meow(int n)
{
   for (int i = 0; i < n; i++)
   {
      printf("meow\n");
   }
}
```

### C Scope

Example of `int add(void)` not working because it doesn't include int x or int y in scope, instead we have to pass the arguments to the function to ensure they are available in the scope of the function.

```
#include <stdio.h>
#include <cs50.h>

int add(int a, int b);

int main(void)
{
    int x = get_int("x: ");
    int y = get_int("y: ");

    printf("%i\n", add(x, y));
}

int add(int a, int b)
{
    return a + b;
}
```

### Linux / Container / Docker Server

When using
CS50's VSCode it automatically runs a docker container pre-setup for all required software

Helpful terminal commands

`cd, cp, ls, mkdir, mv, rm, rmdir ...`

### Combining different concepts

This program combines functions, arguments, loops, nested loops, increments, and printing values

```
#include <stdio.h>
#include <cs50.h>

int main(void)
{
    // declare the variable here so it's in the right scope
    int n;

    // keep running the do/while loop until the condition is falsy
    do
    {
        n = get_int("Size: ");
    }
    while (n < 1);

    // now print the output (x * x square)
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            printf("#");
        }
        printf("\n");
    }
}
```

### Integer overflow

A problem in computers if you don't have enough bits/bytes to keep track of the number you are working with. The number will wrap around to 0 or a negative number, which can then cause bugs.

As a result of this, instead of storing numbers in computers, we store number in bits. 32 bits can keep track of 4 billion bits, instead of just 32 digits in a number.

Negative computers add additional complexity, so the max number that can be stored becomes 2,147,483,647 (a familar number!). When using data types in C, you have control over how many bits you use.

Integers are 32 bits. If that's not enough, you can upgrade variables to long, which is 64 bits (exponentially bigger than 32 bits).

### C Number Types

-   Different numbers are represented using different data types, to help manager integer overflow
-   Integers are whole numbers
-   Floats are numbers with decimal points (up to 6)
-   Long are numbers with up to 15 decimal points, using 64 bits
-   We can use truncation to divide an integer by an integer and cancel out the fractional value result (decimal). E.g. 1/3 = 0, not 0.33

#### Casting or converting a number to a decimal (type casting)

```
#include <cs50.h>
#include <stdio.h>

int main(void)
{
   int x = get_int("X: ");
   int y = get_int("Y: ");

   float z = (float) x / (float) y;
   // the .3 limits the number of decimal points
   printf("%.25f\n", z);
}
```

#### Example showing rounding based on the limit of memory the computer can use

> X: 1
> Y: 3
> 0.3333333432674407958984375

Instead of 0.33333 infinite, the computer does its best to round numbers. This problem/situation is known as **floating point imprecision.**

#### Y2K was an example of this problem. Years were stored using 2 digits (99) due to the cost of ram.

This same issue is about to reoccur on the 19th January 2038, where the 2-bit value will wrap around to zero instead. At this point, fixes will need to convert from 2-bit value to 64-bit. Current epoch time is 13 December 1903, so at 19/1/2038, unless fixes, computers will reset.

Pacmac has similar issues, at level 256 the whole screen breaks and prints fruits everywhere.

Original Donkey Kong had similar problems, where the formula of 10 \* (level + 4) was how many seconds you had to solve the level. At level 22, this works out to 260, bigger than 256 which wrapped round to level 0 again, giving 4 seconds to solve level 22.

In 2015 Boeing 787 had a software bug where if a plane had been powered for 288 days, it can lose all of its power due to the control unit going into power saving mode due to a condition of overflow after 288 days. This worked out that Boeing was problem using a 32-bit number and counting in 100ths of a second, resulting in this problem. The fix for this solution was to turn the plane off and on again, until a proper fix could be deployed.
