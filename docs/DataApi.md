# 数据接口需求

## 技师相关

1. 首页技师列表 POST
  - url: **http://hostname:port/massage/appTechnicianData/getTechniciansList.do**
  - postData
  
  | KEY | TYPE | DEFAULT | VALUE | REQUIRED |DESC |
  | :---: | :---: | :---: | :---: | :---: |:---: |
  | page_now | int | 1 | 0 | true | 记录开始
  | page_size | int |  | 10 | true | 记录条数
  - response
  
  | KEY | TYPE | DEFAULT | VALUE | DESC |
  | :---: | :---: | :---: | :---: | :---: |
  | Status | int |  | 0/-1 | 返回状态码 |
  | ErrMsg | str |  | ok/desc | 请求错误描述 |
  | Data | json(array) |  |  | 返回的数据 |
  
  
   > 返回数据示例
    
   ```json
    {
      "Status": 0,
      "Data": {
      "technicianLists": [
        {
          "TECHLEADER_ID": "1",//技师id
          "AVATAR": "http://localhost:8080/massage/uploadFiles/uploadImgs/20170518/5b7a121d91934c2aa1ea87e592c47264.JPG",//头像地址
          "NAME": "振慌6",//技师名
          "RIGHTS": "22",//服务项目的权限和（服务端调用）
          "AGE": "18",//年龄
          "STAR": "",//星级
          "LEVEL": 0,//级别（0普通技师，1优秀技师）
          "HOT": 0,//推荐，是否热门（0热门，1普通）
          "IF_LINE": 0,//是否在线，0在线，1不在线
          "CERTIFICATE_IDS": "",//证书id拼接（按“,”隔开）
          "ITEMS": "",//所服务的项目id拼接（按“,”隔开）
          "TEL": "18859959028",//手机号
          "SEX": "1",//性别
          "REGISTAR": "福建",//籍贯
          "REGISTER_TIME": "2017-05-18 16:36:24",//注册时间
          "TECHNICIAN_ID": "1",//领班id
          "SERVE_CONTENT": "d"//服务内容
          "TODAY_ABOUT": "d"//今日可约（0可约，1不可约）
        },
        {
          "TECHLEADER_ID": "1",
          "AVATAR": "http://localhost:8080/massage/uploadFiles/uploadImgs/20170518/5b7a121d91934c2aa1ea87e592c47264.JPG",
          "NAME": "振慌4",
          "RIGHTS": "22",
          "AGE": "18",
          "STAR": "",
          "LEVEL": 0,
          "HOT": 0,
          "IF_LINE": 0,
          "CERTIFICATE_IDS": "",
          "ITEMS": "",
          "TEL": "18859959028",
          "SEX": "1",
          "REGISTAR": "福建",
          "REGISTER_TIME": "2017-05-18 16:36:24",
          "TECHNICIAN_ID": "10",
          "SERVE_CONTENT": "d"
          "TODAY_ABOUT": "d"//今日可约（0可约，1不可约）
        }
      ]
      },
      "ErrMsg": "OK"
    }
   ```
  