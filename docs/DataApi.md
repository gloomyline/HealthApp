# 数据接口需求

## 技师相关
1. 请求指定条数记录 **POST**
  - url: **https://hostname:port/techs/list**
  - postData
  
  | KEY | TYPE | DEFAULT | VALUE | DESC |
  | :---: | :---: | :---: | :---: | :---: |
  | Start | int | 0 | 0 | 记录开始 |
  | Num |  int | 10 | 10 | 记录条数 |
  
  - response
  
  | KEY | TYPE | DEFAULT | VALUE | DESC |
  | :---: | :---: | :---: | :---: | :---: |
  | Status | int |  | 0/1/2 | 返回状态码 |
  | ErrMsg | str |  | ok/desc | 请求错误描述 |
  | Data | json(array) |  |  | 返回的数据 |
  
  > 返回数据示例
  ```json
  {
    "Status": 0, 
    "ErrMsg": "ok", 
    "Data": [
      {
        "Id": 0,
        "Avatar": "imgUrl",
        "State": 0, // 今日是否可预约 0:可以,1:不可以
        "Infos": {
          "Name": "林技师", // 中文使用Unicode编码
          "Age": 26,
          "Area": "福建",
          "Technical": "高级推拿师",
          "Introduce": "技师详情介绍"
        }
      },
      ...
    ]
  }
  ```
  返回状态码 0 表示请求成功, 1 请求参数错误, 2 ~ 表示对应具体服务器错误 
  
2. 指定技师ID GET
  - url: **https://hostname:port/techs/tech?Id=0**
  - postData
  
  | KEY | TYPE | DEFAULT | VALUE | DESC |
  | :---: | :---: | :---: | :---: | :---: |
  | Id | int | 0 | 0 | 技师ID |
  - response
  
  | KEY | TYPE | DEFAULT | VALUE | DESC |
  | :---: | :---: | :---: | :---: | :---: |
  | Status | int |  | 0/1/2 | 返回状态码 |
  | ErrMsg | str |  | ok/desc | 请求错误描述 |
  | Data | json(array) |  |  | 返回的数据 |
    