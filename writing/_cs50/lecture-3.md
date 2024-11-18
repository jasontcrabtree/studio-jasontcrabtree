---
publishedAt: 2024-06-22
summary: ""
title: ""
# type: 'blog-post'
---

# Harvard CS50x 2024: Lecture 3 - Algorithms

Completed May 2024

[CS50x 2024 - Lecture 3 - Algorithms](https://www.youtube.com/watch?v=jZzyERW7h1A&ab_channel=CS50) - by David Malan

## Table of Contents

### General Notes

-   Big O, Omega, Theta to describe upper bound, lower bound, average bound of the complexity of an algorithm
-   Rule of thumb in programming, if you wouldn't do math on it don't store it as a number

### Algorithms

-   Computers don't have a birds eye view of memory, instead they look one at a time - like opening lockers to find your stuff at the gym. No not in that locker, try again
-   Algorithms help us find things using search and the viewpoint of "lockers" that computers have
-   When searching an algorithm will typically return 1 for found, 0 for not-found
-   We describe how complex (runtime) an algorithm is in 3 ways
    -   Big O is most commonly used and describes the upper bound of complexity
        -   Common patterns are constant, logarithm, linear, linearithimic, quadratic, cubic, exponential and factorial
    -   Omega represents best case, as in what's the possible fastest solution
        -   E.g. You open the correct locker first time so its an omega(1), but counting attendance is sitll omega(n)
    -   Theta represents the middle case, average time of the algo

### Implementing search.c

```
#include <cs50.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
  int numbers[] = {20, 500, 10, 5, 100, 1, 50};

  // My guess
  // Logically right, syntax wrong and not correctly handling result not found (handles no results, match, but not-not found)
  // for (int i = 0; i < numbers - 1, i++)
  // {
  //   if (numbers == 0)
  //   {
  //     return 0
  //   }
  //   if (numbers[i] == x)
  //   {
  //     return i
  //   }
  // }

  // Davids implementation #1
  int n = get_int("Number: ");
  for (int i = 0, i < 7, i++)
  {
    if (numbers[i] == n)
    {
      printf("Found\n");
    }
    else
    {
      printf("Not found\n");
    }
  }

  // Davids implementation #2
  int n = get_int("Number: ");
  for (int i = 0, i < 7, i++)
  {
    if (numbers[i] == n)
    {
      printf("Found\n");
    }
  }
  printf("Not found\n");

  // Davids implementation #3
  int n = get_int("Number: ");
  for (int i = 0, i < 7, i++)
  {
    if (numbers[i] == n)
    {
      printf("Found\n");
      return 0;
    }
  }
  printf("Not found\n");
  return 1;

  // Davids implementation #4 (array of strings, not numbers), so now using string.h strcmp
  // strcmp checks ASCIIBETICAL order, as in a combination of alphabetical AND ASCII for capitalization/order
  string strings[] = {"battleship", "boot", "cannon", "iron", "thimble", "tophat"};
  string s = get_string("String: ");
  for (int i = 0; i < 6, i++)
  {
    if (strcmp(strings[i], s) == 0) // strcmp returns 0 for a match, otherwise it returns null
    {
      printf("Found\n");
      return 0;
    }
  }
  printf("Not found\n");
  return 1;
}
```

### Implementing phonebook.c

#### Implementation #1

Code smell with how name and numbers are separated

```
#include <cs50.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
  string names[] = {"Carter", "David", "John"};
  string numbers[] = {"+1-617-495-1000", "+1-617-495-1000", "+1-949-468-2750"}; // using strings even though its a phone number due to the +, -, additional properties. This is also useful to avoid overflowing digits
  // Rule of thumb, if you wouldn't do math on it don't store it as a number

  string name = get_string("Name: ");

  for (int i = 0; i < 3; i++)
  {
    if (strcmp(names[i], name) == 0)
    {
      printf("Found %s\n", numbers[i]);
      return 0;
    }
  }

  printf("Not Found\n");
  return 1;
}
```

-   We can improve the design of this program using data structures, specifically how our types of variables
-   In order to represent a person in a phonebook, let's implement a DATA TYPE called Person, then we create an array containing the datatype of people
-   A person is represented by:
    -   string name;
    -   stringnumber;
-   We can create our own data structure using the `typedef struct` syntax
    ```
    typedef struct
    {
      string name;
      string number;
    } person;
    ```
-   This creates a new datatype in C called person

#### Implementation #2

```
#include <cs50.h>
#include <stdio.h>
#include <string.h>

typedef struct
{
  string name;
  string number;
} person;

int main(void)
{
  person people[3] = {};

  people[0].name = "Carter";
  people[0].number = "+1-000-000-0000";

  // repeated for David, John, with incrementing indexes

  string name = get_string("Name: ");

  for (int i = 0; i < 3; i++)
  {
    if (strcmp(people[i].name, name) == 0)
    {
      printf("Found %s\n", people[i].number);
      return 0;
    }
  }

  printf("Not Found\n");
  return 1;
}
```

### Sorting Data

-   How much time/effort does sorting data (e.g. phone contacts) take?
    -   Goal: unsorted > algorithm > sorted?
    -   One loop, therefore (my guess) O(n^2)

### Converting iteration.c to recursion.c

First version (removed) used iteration, second recursion

```
#include <cs50.h>
#include <stdio.h>

void draw(int n);

int main(void)
{
  int height = get_int("Height: ");
  draw(height);
}

void draw(int n)
{
  // If nothing to draw, return function
  if (n <= 0)
  {
    return;
  }

  // Print pyramid of height n - 1
  draw (n - 1);

  for (int i = 0; i < n; i++)
  {
    printf("#");
  }
  printf("#\n");
}
```

## SORT 1

Sort 1 reversed1000
real 0m0.296s
user 0m0.194s
sys 0m0.056s

sort 1 random50000 (slowest result on random)
real 0m5.633s
user 0m5.049s
sys 0m0.262s

real 0m0.571s
user 0m0.010s
sys 0m0.255s
c/sort/ $ time ./sort1 sorted50000.txt

## SORT 2

Sort 2 reversed1000
real 0m0.085s
user 0m0.003s
sys 0m0.050s

sort 2 random50000
real 0m0.631s
user 0m0.027s
sys 0m0.235s

real 0m0.566s
user 0m0.028s
sys 0m0.236s
c/sort/ $ time ./sort2 sorted50000.txt

## SORT 3 - best guess selection sort, slow on random, slow on reversed, slow on sorted?

sort 3 random50000
real 0m2.167s
user 0m1.758s
sys 0m0.243s

real 0m2.253s
user 0m1.771s
sys 0m0.234s
c/sort/ $ time ./sort3 sorted50000.txt

Sort 3 reversed1000
real 0m0.145s
user 0m0.078s
sys 0m0.054s
