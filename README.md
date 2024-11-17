# Tasks: 01 Basic Operators

## Task description

### Git

Please install Git on your local machine https://git-scm.com/download

Verify it's done:
- In console type `git --version`
- If you see smth like `git version 2.29.2.windows.2` you're done

### Configuring SSH

We're highly recommend to configure SSH key for your machine (Windows/MacOS/Linux/etc) and put it into your Github account.

Follow this instruction to complete that step: [https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/How-to-configure-GitLab-SSH-keys-for-secure-Git-connections](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

#### MacOs tips
you can get your public key by run in terminal `cat ~/.ssh/id_rsa.pub`


### Fork current repository into your account

### evalExpr.js

Given k (number). Evaluate the expression: 4 \* (2k - 1)

1. Navigate to your forker repository and click on green button `Clone`
2. In dropdown find section **Clone with SSH** and copy that url git@github:...git
3. In console on your machine navigate to any folder you like and paste copied url after git clone: `git clone git@github...tasks.git`
4. Type in yes if console asks you about fingerprint
5. After cloning is done, in console type in `cd js-ts-tasks` and click Enter
6. Now you should be in a folder `js-ts-tasks`
7. In console type in `git config user.name "Name Surname"` where Name is your Name (same as on Github profile) and Surname is your Surname (same as on Github profile). **Your name should be written in English**. **Don't remove " " symbols**
8. In console type in `git config user.email youremailaddress@student.ehu.lt` where `youremailaddress@student.ehu.lt` is your address you used to register on Github (the same as on Github profile)
9. In console type in `git config user.name` and click Enter. You should see your name
10. In console type in `git config user.email` and click Enter. You should see your email address

Given height h and radius r of a cone. Evaluate [volume of a cone](https://www.cuemath.com/measurement/volume-of-cone/).

### divider.js

Given number n and number k. Find the whole part and the remainder of the integer division of n by k. Return a string formatted "wholePart remainder" with one space symbol between two wholePart number and remainder number.

### digitsSum.js

Given number n (0 <= n <= 1000000). Create a function that counts sum of all digits

### backToFront.js

Copy and paste defined amount of a string's symbols to the front and back of a string

### compareSalary.js

Compare three salaries and find the difference between the max and the min

### compareTwoNumbers.js

Compare two numbers and output a string ">" if the first the greater than the second, "=" if they are equal or required math operator otherwise. All possible strings: "<", ">", "=", "<=", ">="

### sumInRange.js

Find a sum in a range of consecutive numbers

### sumTwoNumbers.js

Find a sum of two numbers

## Step before starting working on tasks

1. You need to execute the command npm install in the console. (1 time step)

## How to run tasks locally

1. Switch to the tasks branch you would like to solve
2. Each task has its own instructions in README.md
3. to run test localy you need to execute the proper command in the console e.g. npm run test:local:digitSum

### Run all tasks at once

1. Develop a solution
2. Commit your solution. You need to follow the next commit message pattern: `feat: {commit message}` or `fix: {commit message}` e.g. `feat: solved task 1` or `fix: fixed comments` for task 3
3. _Push your solution to your forked repository_
4. Submit a link to the branch with solution in your forked repository to the moodle
