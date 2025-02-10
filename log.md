git organization 생성
repository 생성 llm_prj_test
pages root /docs 설정

로컬 디렉토리 생성 llm_prj_test

LLM_PRJ_TEST
└─docs
....└─assets
....└─index.html

git branch step1
git branch -d step1  
git branch -c step1

githubpages root -> step1 변경

add ogtag..
add favicon..
add bootstrap
add style.css
...font

git switch main
git merge step1
git push

------step2-----

git switch -c step2

로컬 디렉토리 생성 llm_prj_test_wrapper

git init
npm init -y
npm i express
git add .
git commit -m "big mistake" # node_modules가 포함됨

# gitignore를 넣는다고 해서 한 번 커밋된게 자동으로 제거되진 않음

# 보안 관련된 이슈는 git reset으로 커밋 자체를 밀어버려야해...

# 파일이 포함된 건 이게 필수적임

git rm -r --cached .
git add .
git commit -m "reset"

package.json

```
{
    "name": "my-llm-wrapper",
    "version": "1.0.0",
    "main": "index.js",
    "scripts": {
    "start": "node server.js"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "description": "",
    "dependencies": {
    "express": "^4.21.2"
    }
}
```

server.js

```
    const express = require("express");
    const app = express();
    const port = 3000;

    app.get("/", (req, res) => {
    res.send("Hello World!");
    });

    app.listen(port, () => {
    console.log(`app listening on port ${port}`);
    });
```

pakage.json

```
{
  "name": "llm_prj_test_wrapper",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node server.js",
    "test": "nodemon server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "axios": "^1.7.9",
    "cors": "^2.8.5",
    "express": "^4.21.2"
  },
  "devDependencies": {
    "nodemon": "^3.1.9"
  }
}
```

llm_prj_test_wrapper
└─node_modules
└─.gitignore
└─package-lock.json
└─package.json
└─server.js

npm i cors axios
npm i -D nodemon
npm test

llm_prj_test_wrapper
└─node_modules
└─.gitignore
└─package-lock.json
└─package.json
└─server.js
└─.env

    ```
        apikey 저장
    ```
