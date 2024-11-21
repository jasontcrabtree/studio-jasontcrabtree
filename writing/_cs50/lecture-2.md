---
published: 2024-05-02
summary: ""
title: ""
# type: 'blog-post'
---

# Harvard CS50x 2024: Lecture 2 - Arrays

Completed May 2024

[CS50x 2024 - Lecture 2 - Arrays](https://www.youtube.com/watch?v=4vU4aEFmTSo&t=945s&ab_channel=CS50) - by David Malan

## Table of Contents

### General Notes

-   Demo where students read at 3 different grade levels, year 1, 3 and 10 to highlight the differences of each level and how building blocks form and get more advanced over time
-   Discussion about compiling and how the `make` program we have been running isn't native C functionality, but instead a program that simplifies compiling our code.

## Breaking down compiling into its individual steps: Preprocessing, Compiling

-   Note about prototypes and the purpose they have in code files

```
void meow(void);

int main(void)
{
    printf("Hello world\n");
}

void meow(void)
{
    printf("Meow meow\n");
}
```

#### Preprocessing

-   Preproccesor directive: # symbol indicates to c a special line, in most cases referencing a header file. In the case of referencing `#include <cs50.h>`, we are telling c that as part of preprocessing this file, and when it finds that file it copies and pastes the contents of the file for your own code to use.
-   The actual cs50 file includes **prototypes** for all of the available functions, not the entire function.
-   Preprocessing converts # include files to be available directly in your code

#### Compiling

-   Converting the source code you have written (including any includes, etc) into assembly code

#### Assembling

-   Converts assembly code into machine code (0s/1s)

#### Linking

-   To understand linking we have to understand that in addition to the include prototypes, somewhere on the machine (the compiler is running on) there is an actual .c file with the function specified in the prototype. So somewhere on the vscode cloud implementation for the class, there is a file named `cs50.c`, which includes a prototype to the file named `get_string.c`, which includes our function `get_string()`
-   Linking brings these files all together, using clang (c-lang), our compiler. While the compiler now has all machine code as 3 different clumps, the final step is to combine them together to be available as one single, compiled file

-   Because you can compile code into machine code, it makes sense to think that you could convert machine code back into source code. This creates problems when you look at intellectual property like Microsoft Word.
-   Reverse engineering is harder than it seems as there can be multiple ways to solve problems. There's not always an obvious way to reverse the machine code and determine the actual way it was built, as loops, variable names, function names all become unreadable
-   This leads to an idea where if you are experienced enough to reverse engineer a c program, you could probably write it yourself

## Debugging

-   Rare to write new code correct the first time, bugs are inevitable writing software
-   Admiral Grace Hopper (Military/Harvard) worked on the Harvard Mark I, Harvard Mark II, and the team found a bug in the punch card program, which she shared and told into legend
-   Debugging techniques
    -   `printf` lets you see what is happening in your program
    -   **debugger**: industry tool to debug programs. We'll start the example using a cs50 specific debugger.
    -   Debuggers need code to be compiled, they don't help with syntax, but instead help with logic and programmatic files
    -   `debug50 ./buggy` to run the program used the debugger program
    -   First warning informs the user to set a breakpoint, indicating where to pause the program. This can be achieved in VSCode by hovering to the left of the line number and setting a red circle breakpoint
    -   This informs the debugger to pause execution on that line
    -   This shows a breakdown of the program, seperating into: variables (locals/registers), watch section, call stack, and the program itself -- highlighted where the program has paused.
    -   You can then step into the line your program is paused into, or step down to new lines (expand function or step over function)
    -   Step over === execute the step and go to next
    -   Step into === execute the step and focus on it
        -   Jumps to the actual code being run on the line (e.g. a function call, shows the function)
        -   Good example of this would be calling a function inside a loop, seeing each call of that function (e.g. printf a #), and then seeing how many times that function is called
    -   Can be easy to defaulting to using printf, but over time actually using debuggers (and learning their functionality) will pay dividends over time
    -   Rubber duck debugging - **talking outloud** can help you catch problems in how you are thinking about a problem or solution
    -   cs50.ai is a Harvard LLM implementation

## Data Types

-   Informing the computer of the context of variables, helping them determine whether bits mean colour, sound, text or images

### Data type sizes

-   bool 1 byte
-   int 4 bytes
-   long 8 bytes
-   float 4 bytes
-   double 8 bytes
-   char 1 byte
-   string ? bytes

### Circuit board

A circuit board holds your RAM, Random Access Memory (typically the black chip on your circuit board). Image this is abstracted to a grid visually on top of the chip. You could image that each square, e.g. A3 (excel layout) represents a different byte, e.g. a bool.

No matter how complex the modern computer, ultimately it all drops down to the lowest level of the computer stack of bytes, represented by 1s and 0s.

#### Demo score.c program

```
#include <stdio.h>

int main(void)
{
    int score1 = 72;
    int score2 = 73;
    int score3 = 3;

    // Introduces a bug, as we are averaging ints, not floats
    // printf("Average: %f\n", (score1 + score2 + score3) / 3); v1
    printf("Average: %f\n", (score1 + score2 + score3) / 3.0); // v2
}
```

Math operations on integers will always return integers. If you have one float involved in the math, the result will be a float, so we can fix this by adding a decimal.

We can display each score on our theoretical circuit board memory, like so. In practice, data is probably stored next to related data.

![./public/assets/cs50/4-squares-per-integer.png](4 Squares per integer)

![./public/assets/cs50/scores-in-machine-code.png](We can see the same scores expressed as machine code)

While this approach does get us to the correct average, from a programming perspective we have created new variables for every single score. As more scores are added, we need to create more and more variables. Instead, we can use an array.

An array is a sequence of values back to back to back in a chunk of memory, with no gaps or fragmentation.

Defining an array `int scores[3];` lets use create 3 variables. We need to tell the compiler how much room is needed from the start.

We can then assign values via:

```
scores[0] = 72;
scores[1] = 73;
scores[2] = 33;
```

#### Updating our score.c program

```
#include <cs50.h>
#include <stdio.h>

int main(void)
{
  int scores[3];
  scores[0] = get_int("Score: ");
  scores[1] = get_int("Score: ");
  scores[2] = get_int("Score: ");

  printf(:"Average: %f\n", (scores[0] + scores[1] + scores[2]) / 3.0);
}
```

Furthering our program using a fully dynamic array to ask for x number of scores:

```
#include<cs50.h>
#include <stdio.h>

int main(void)
{
  const int N = 3; // Convention to capitalize constant variables to draw visual attention to it (for other programmers)
  int scores[N];
  for (int i = 0; i > N; i++)
  {
    scores[i] = get_int("Score: ");

    printf("Average %f\n", (scores[0] + scores[1] + scores[2]) / (float) N);
  }
}
```

You could also define the N variable in global scope, outside of the main function. This lets you use the variable across different functions within the program.

### Creating arrays

`int ARRAY[] = {73, 73, 33};`

### Final updated score.c program

```
#include <cs50.h>
#include <stdio.h>

const int N = 3;

float average(int length, int array[]);

int main(void)
{
  int scores[N];
  for (int = 0; i < N; i++)
  {
    scores[i] = get_int("Score: ");
  }

  printf("average: %f\n, average(N, scores));
}

float average(int length, int array[0])
{
  int sum = 0;
  for (i = 0; i < length, i++)
  {
    sum += array[i]
  }

  return sum / (float) length;
}
```

## Working with chars and strings in C / and computing

We store chars using single quotes, e.g.

```
char c1 = 'H';
char c2 = 'I';
char c3 = '!';

printf("%c%c%c\n", c1, c2 c3); // prints Hi!
<!-- can also be printed as: -->
<!-- because letters === numbers, it just depends on the context we use them in. -->
printf("%i %i %i\n", c1, c2 c3); // prints 72, 73, 33
```

As long as you have enough bytes available, you don't even have to cast things. It does take memory for some increases, like casting an int to a float (which has more data).

What precisely is a string? A sequence of characters.

When you use a string called S instead of 3 Chars, it still takes up 3 bytes, but instead of being 3 Chars, it's really just like an array of characters.

You can therefore execute this:

```
string s = "HI!";
printf("%c %c %c\n", s[0], s[1], s[2]);
```

![./public/assets/cs50/string-as-array.png](Visualising strings as arrays of characters)

This is less efficient but highlights the overlap of string and characters.

The end of strings are denoted a byte with only zeros `00000000`. Every string is therefore N + 1 bytes, because of the extra byte for the zero value at the end. The string is visually written as `\0`, making it clear it's not a zero but instead a **char
based zero**. This is also know as a sentinel value, terminating the string.

NUL is a technical term for the \0 AKA 00000000 AKA zero byte indicating the terminal end of a string.

Strings are often more powerful in other langugages, as in C you have to build them yourself, they don't exist as out of the box data types.

## Creating arrays of strings

Just like we can have an array of chars, we can also have an array of strings.

```
string words[2];

words[0] = "HI!";
words[1] = "BYE!";

printf("%s\n", words[0]);
printf("%s\n", words[1]);
```

Because strings are arrays of char's, an array of strings can also be understood as:

![./public/assets/cs50/words-as-arrays-as-chars-as-arrays.png](Visualising arrays of strings as arrays of characters)

Because of all of this, the following **STILL** works.

```
string words[2];

words[0] = "HI!";
words[1] = "BYE!";

printf("%c%c%c\n", words[0][0], words[0][1], words[0][2]);
printf("%c%c%c\n", words[1][0], words[1][1], words[1][2], words[1][3]);

<!-- will print HI! \n BYE! -->
```

Question:
A: **C arrays should be the same type in C (except in weird exceptions proving the rule)**

Question: If you look past the end of the first array (the hi array), do you then overflow into the second array (the bye array)?
A: The example DOES show 66, representing the character B. You can even type in something like words[400], printing a character 400 bytes away. Eventually this will crash your program, which is some kind of progress!

## Writing a length.c program

```
#include <cs50.h>
#include <stdio.h>
#include <string.h>

<!-- int string_length(string s); --> // hiding the prototype to use strlen instead

int main(void)
{
  string name = get_string("Name: ");
  <!-- int length = string_length(name); -->
  int length = strlen(name);

  printf("%i\n", string);
}

int string_length(string s)
{
  int n = 0;
  <!-- Iterates over the string, and while the string is not equal to nul (our zero 8's or \0 character, increment n, our counter) -->
  while (s[n] != '\0')
  {
    n++;
  }
  <!-- Note we don't need to increment n + 1 at the end even though it's zero indexed because the nul byte at the end adds 1 itself -->
  <!-- printf("%i\n", n); -->
  return n;
}
```

Now that we've seen how to write a function like this, we can reveal the magic trick of the string.h library, which contains strlen and provides a simple, available function to achieve this goal.

### Efficient function design

In this example, we practice initializing our loop with the strlen inside the function initializion. This helps us reduce the number of times the function is called, and is a canonical implementation of this type of similar function

```
int main(void)
{
  string s = get_string("Input: ");
  printf("Output: ");
  for (int i = 0, n = strlen(s); i < n; i++)
  {
    printf("%c", s[i]);
  }
  printf("\n);
}
```

## Command Line Arguments

-   Some programs take command arguments, e.g. `cd ${directory}` or `rm ${file}`
-   So far we've used get_string, get_int to get arguments during runtime, however we can also use command lines to get arguments using `int main(int argc, string argv[])`
    -   Int (called argc by convention, and an array of strings called argv[]). These stand for **argument count** and **argument vector** (vector meaning array/mathmatics term for a list of values)
-   If you pass this function signature to main (instead of void), C will figure out whatever the human typed at the prompt and hand it to you with the length
-   We can then use these arguments to incorporate into our program

```
// greet.c
#include <cs50.h>
#include <stdio.h>

int main(int argc, string argv[])
{
  printf("hello, %s\n, argv[1]); // without any prompt or labelling, we can still directly access the first argument passed to argv
}
```

-   The name of the program is always accessible at argv[0] by default, so ./greet with argv[0] would return hello ./greet
-   We can use argc == 2 to verify there is at least one additional value (program name + argument)
-   The first word in argv is always the program name, the second word is whatever the human has typed

```
  #include <cs50.h>
  #include <stdio.h>

  int main(int argc, string argv[])
  {
    for (int i = 0; i < argc; i++)
    {
      printf("%s\n, argv[i]);
    }
  }
```

-   Keeps printing all arguments passed on new lines until argc length is reached

## Exit Status

-   Return value from the program by itself, generally 0 (convention is that 0 means everything is OK)
-   Convention is that every number other than 0 is bad in some way
    -   404 is an example of this, although a slightly different thing than a direct program exit status. It's instead an http status code
-   We can use this to exit programs (e.g. when command line arguments wern't provided)

```
#include <cs50.h>
#include <stdio.h>

int main(int argc, string argv[])
{
  if (!argc != 2)
  {
    print
  }
}
```
