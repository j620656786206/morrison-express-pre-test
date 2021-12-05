1. https://codepen.io/j620656786206/pen/vYeNqeG

2.

3. 請概述通常前端 CRUD 會用到的後端 API 有哪些，規格是甚麼
    - C, create, 通常會採用`POST`方式, 規格會在header定義`content-type: application/json`, 參數在`body`帶上相對應的格式
    - R, read, 採用`GET`去讀取資料，參數會以params形式帶上
    - U, update, 跟create相同, 通常也是採用`POST`
    - D, delete, 採用`DELETE`
