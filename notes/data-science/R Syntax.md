---
---

## Data types
- character
- numeric (real numbers)
- integer
- complex
- logical

vector() has one type of data
list can have different types of data

- 14L in an integer representation
- Inf is infinity number
- Nan undefined value
- Objects
	- names, dimnames
	- dimensions (matrices, arrays)
	- class
	- length
	- other user defined attributes/metadata
	- attributes can be accessed using attributes()

## vector of objects
- x <- c(0.5, 0.7)
- x <- c(TRUE, FALSE)
- x <- c(T, F)
- x <- c("a", "b", "c")
- x <- 9:29
- x <- c(1+0i, 2+4i)
- x <- vector("numeric", length = 10)

## principle of coercion
<pre>
> y <- c(1.7, "a")
> y
[1] "1.7" "a"  
> c(TRUE, 2)
[1] 1 2
> c("a", TRUE)
[1] "a"    "TRUE"
</pre>

- class(x)
- as.numeric(x)
- as.logical(x)
- as.character(x)
- as.complex(x)

## Lists, Matrix
- x <- list(1, "a", TRUE, 1+4i)
- m <- matrix(nrow=2, ncol=3)
- dim(m)
- attributes(m)
- m <- matrix(1:12, nrow=3, ncol=4)
- x <- 1:10
- dim(x) <- c(2,5)
- x <- 1:4
- y <- 3:5
- cbind(x, y), rbind(x, y)

## Factors
- Ordered, categorical but not necessarily numerically (SE, SSE, TL, MNGR)
- lm(), glm() [linear models]
- x <- factor(c("yes", "no", "no", "yes", "yes"))
- table(x)
- unclass(x)
- attr(, "levels")
- x <- factor(c("A", "B", "C", "B", "A"), levels = c("C", "B", "A"))

## Missing values
- is.na()
- in.nan()
<pre>
> x <- c(1,2,NA,10,3)
> is.na(x)
[1] FALSE FALSE  TRUE FALSE FALSE
> is.nan(x)
[1] FALSE FALSE FALSE FALSE FALSE
> x <- c(1,2,NaN, NA, 4)
> is.na(x)
[1] FALSE FALSE  TRUE  TRUE FALSE
> is.nan(x)
[1] FALSE FALSE  TRUE FALSE FALSE
</pre>

## Data frames
- x <- data.frame(foo=1:4, bar = c(T, T, F, F))
- nrow(x)
- ncol(x)

## Names
- x <- 1:3
- names(x)
- names(x) <- ("foo", "bar", "norf")
- x <- list(a=1, b=2, c=3)
- $a, $b, $c
- m <- matrix(1:4, nrow=2, ncol=2)
- dimnames(m) <- list(c("a", "b"), c("a", "b"))

## Reading data
- read.table, read.csv for reading tabular data
- readLines, for reading lines of text
- source, for reading in R code files
- dget, for reading in R code files
- load, for reading in saved workspaces
- unserialize, for reading single R objects in binary form
- read.table arguments: file, header, sep, colClasses, nrows, comment.char, skip, stringsAsfactors
- dirty way to read data

<pre>
initial <- read.table('datatable.txt', nrows=100)
classes <- sapply(initial, class)
tabAll <- read.table("datatable.txt", colClasses=classes)
</pre>

## Rough calculation of memory requirement
<pre>
1,500,000 rows, 120 col
= 1500000 * 120 * 8
= 1440000000 bytes
= 1440000000/2^20 bytes/MB
= 1373.29 MB
= 1.34 GB
</pre>

## Textual formats
- dump, dput

<pre>
y <- data.frame(a=1, b="a")
dput(y)
dput(y, file="y.R")
new.y <- dget(y.R)
new.y

x <- "foo"
y <- data.frame(a=1, b="a")
dump(c("x", "y"), file="data.R")
rm(x,y)
source("data.R")
y
x
</pre>

## connect with outside world
- file
- gzfile
- bzfile
- url
- file(description, open="r/w/a/rb/wb/ab", blocking=TRUE/FALSE encoding=getOption("encoding"))

<pre>
con <- gzfile("words.gz")
x <- readLinex(con, 10)
x

con <- url("http://www.jhsph.edu", "r")
x <- readLines(con)
head(x)
</pre>

## Subsetting
- [, [[, $
- [ always returns object of the same class
- [[ extract elements of list or data frame

<pre>
x <- c("a", "b", "c", "v", "c", "d", "a")
x[1]
x[2:5]
x[x>"c"]
u <- x > "a"
x <- list(foo=1:4, bar=0.6)
x[1]
x[[1]]
x$bar
x["bar"]
x[c(1,2)]
name <- "foo"
x[[name]]
x$name (element name does not exist)
x$foo
</pre>

Matrix
<pre>
x <- matrix(1:6, 2, 3)
x[1,2]
x[2,1]
x[1,]
x[,2]

$$ preserve matrix
x[1, , drop=FALSE]

$$ partial matching
x <- list(aardvark = 1:5)
x$a
x[["a", exact=FALSE]]
</pre>

## Removing missing values
<pre>
x <- c(1,2,NA,4,NA,5)
bad <- is.na(x)
x[!bad]

x <- c(1,2,NA,4,NA,5)
y <- c("a", "b", NA, "d", NA, "f")
good <- complete.cases(x,y)
good
x[good]
y[good]	
</pre>

## vectorized operations
<pre>
x <- 1:4; y <- 6:9
x + y
x > 2
x >= 2
y == 8
x * y
x / y

$$ matrix operation
x <- matrix(1:4, 2, 2); y <- matrix(rep(10, 4), 2, 2)
x * y
x / y

$$ true matrix
x %*% y
</pre>