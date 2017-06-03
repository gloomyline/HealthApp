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
  "TechnicianLists": [
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
      "CERTIFICATE_NAME": "高级按摩师",
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
      "CERTIFICATE_NAME": "高级推拿师,高级催乳师",
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


2. 获取技师的推拿时间段 POST
- url: **http://hostname:port/massage/appTechnicianData/getTechniciansList.do**
- postData
 
| KEY | TYPE | DEFAULT | VALUE | REQUIRED |DESC |
| :---: | :---: | :---: | :---: | :---: |:---: |
| TECHNICIAN_ID | string |  |  | true | 技师id 

- response
 
| KEY | TYPE | DEFAULT | VALUE | DESC |
| :---: | :---: | :---: | :---: | :---: |
| Status | int |  | 0/-1 | 返回状态码 |
| ErrMsg | str |  | ok/desc | 请求错误描述 |
| Data | json(array) |  |  | 返回的数据 |
 
 
> 请求url示例

 http://localhost:8080/massage/appTechnicianData/getTechTime.do?TECHNICIAN_ID=a082147cf09f471f96c6380d1c77a43b
> 返回数据示例
   
```json
{
 "Status": 0,
 "Data": {
   "TechtimeLists": [
     {
       "TECH_TIME_1500": 2,//技师在当天的15：00的状态（该时间段技师状态（0约满，1可约，2不可约））
       "TECH_TIME_0600": 2,
       "TECH_TIME_2130": 2,
       "TECH_TIME_2230": 2,
       "TECH_TIME_1400": 2,
       "TECH_TIME_0130": 2,
       "TECH_TIME_1930": 2,
       "TECH_TIME_1900": 2,
       "TECH_TIME_1300": 2,
       "TECH_TIME_DAY": "2017-06-06",//日期
       "TECH_TIME_1600": 2,
       "TECH_TIME_1000": 2,
       "TECH_TIME_0830": 2,
       "TECH_TIME_1230": 2,
       "TECH_TIME_1730": 2,
       "TECH_TIME_0700": 2,
       "TECH_TIME_0500": 2,
       "TECH_TIME_2300": 2,
       "TECH_TIME_0800": 2,
       "TECH_TIME_0900": 2,
       "TECH_TIME_2330": 2,
       "TECH_TIME_2000": 2,
       "TECH_TIME_0400": 2,
       "TECH_TIME_0230": 2,
       "TECHNICIAN_ID": "a082147cf09f471f96c6380d1c77a43b",//技师id
       "TECH_TIME_1830": 2,
       "TECH_TIME_0330": 2,
       "TECH_TIME_2100": 2,
       "TECH_TIME_0430": 2,
       "TECH_TIME_0930": 2,
       "TECH_TIME_0100": 2,
       "TECH_TIME_1330": 2,
       "TECH_TIME_1800": 2,
       "TECH_TIME_1430": 2,
       "TECH_TIME_0730": 2,
       "TECH_TIME_1030": 2,
       "TECH_TIME_ID": "c0a361ff924244c1883d329df918aae3",
       "TECH_TIME_0000": 2,
       "TECH_TIME_0630": 2,
       "TECH_TIME_2200": 2,
       "TECH_TIME_1130": 2,
       "TECH_TIME_0030": 2,
       "TECH_TIME_1630": 2,
       "TECH_TIME_1100": 2,
       "TECH_TIME_0200": 2,
       "TECH_TIME_0530": 2,
       "TECH_TIME_1700": 2,
       "TECH_TIME_1200": 2,
       "TECH_TIME_0300": 2,
       "TECH_TIME_2030": 2,
       "TECH_TIME_1530": 2
     }
   ]
 },
 "ErrMsg": "OK"
}

```
3. 技师详情 POST
- url: **http://hostname:port/massage/appTechnicianData/getTechnicianInfo.do**
- postData

| KEY | TYPE | DEFAULT | VALUE | REQUIRED |DESC |
| :---: | :---: | :---: | :---: | :---: |:---: |
| CUSTOMER_ID | string | 1 | 0 | true | 客户id
| TECHNICIAN_ID | string |  | 10 | true | 技师id
- response

| KEY | TYPE | DEFAULT | VALUE | DESC |
| :---: | :---: | :---: | :---: | :---: |
| Status | int |  | 0/-1 | 返回状态码 |
| ErrMsg | str |  | ok/desc | 请求错误描述 |
| Data | json(array) |  |  | 返回的数据 |

> 请求url示例

http://localhost:8080/massage/appTechnicianData/getTechnicianInfo.do?TECHNICIAN_ID=a082147cf09f471f96c6380d1c77a43b&CUSTOMER_ID=1111
 > 返回数据示例
  
 ```json
 {
   "Status": 0,
   "Data": {
     "Technician": {
       "TECHLEADER_ID": "1",
       "AVATAR": "",
       "NAME": "乐义",
       "RIGHTS": "",
       "AGE": "18",
       "STAR": 0,
       "LEVEL": 0,
       "ITEMLIST": [//技师服务的项目列表
           {
             "ITEM_PRICE": 368,
             "MASSAGETYPE_NAME": "SPA",
             "ITEM_IMG": "http://localhost:8080/massage/uploadFiles/uploadImgs/20170524/968734215d9648cfa6f0019b709c7b3d.jpg",
             "BOOK_INFO": "",
             "ITEM_ID": "4",
             "ADD_ITEM": "2,3",
             "ITEM_AIM": "",
             "ITEM_TIMES": 90,
             "ITEM_CONDITION": "",
             "ITEM_NAME": "全身spa",
             "ITEM_ABOUT": "66666666",
             "MASSAGETYPE_ID": "2",
             "TYPE": 1,
             "ITEM_SYMPTOM": "",
             "TABOO": ""
           },
           {
             "ITEM_PRICE": 368,
             "MASSAGETYPE_NAME": "SPA",
             "ITEM_IMG": "",
             "BOOK_INFO": "",
             "ITEM_ID": "3",
             "ITEM_AIM": "",
             "ITEM_TIMES": 120,
             "ITEM_CONDITION": "",
             "ITEM_NAME": "顶顶顶顶",
             "ITEM_ABOUT": "弟弟弟弟的多付所",
             "MASSAGETYPE_ID": "2",
             "TYPE": 1,
             "ITEM_SYMPTOM": "",
             "TABOO": ""
           }
         ],
       "STATUS": 0,
       "HOT": 1,
       "IF_LINE": 0,
       "CERTIFICATE_IDS": "2,3",
       "ITEMS": "4,3",
       "TEL": "1885990002",
       "SEX": "1",
       "REGISTAR": "泉州",
       "REGISTER_TIME": "2017-06-02 23:29:25",
       "IF_COLLECT": 1,
       "TECHNICIAN_ID": "a082147cf09f471f96c6380d1c77a43b",
       "SERVE_CONTENT": "的是坎坎坷坷扩扩扩",
       "CERTIFICATE_NUM": 2 //技师拥有的技师证书数量
     }
   },
   "ErrMsg": "OK"
 }
 ```
  
4. 获取技师的证书 POST
- url: **http://hostname:port/massage/appTechnicianData/getCertificateListById.do**
- postData

| KEY | TYPE | DEFAULT | VALUE | REQUIRED |DESC |
| :---: | :---: | :---: | :---: | :---: |:---: |
| CERTIFICATE_IDS | string | 1 | 0 | true | 客户id
- response

| KEY | TYPE | DEFAULT | VALUE | DESC |
| :---: | :---: | :---: | :---: | :---: |
| Status | int |  | 0/-1 | 返回状态码 |
| ErrMsg | str |  | ok/desc | 请求错误描述 |
| Data | json(array) |  |  | 返回的数据 |

> 请求url示例

http://localhost:8080/massage/appTechnicianData/getCertificateListById.do?CERTIFICATE_IDS=2,3
 > 返回数据示例
  
 ```json
 {
   "Status": 0,
   "Data": {
     "CertificateList": [
       {
         "CERTIFICATE_ID": "2",
         "CERTIFICATE_IMG": "http://139.196.106.144:8080/testImg/zhengshu.jpg",
         "CERTIFICATE_NAME": "高级推拿师"
       },
       {
         "CERTIFICATE_ID": "3",
         "CERTIFICATE_IMG": "http://139.196.106.144:8080/testImg/zhengshu.jpg",
         "CERTIFICATE_NAME": "高级催乳师"
       }
     ]
   },
   "ErrMsg": "OK"
 }
 ```
 
5. 技师根据自身位置获取酒店列表 POST
- url: **http://hostname:port/massage/appTechnicianData/getHotelListByLonAndLat.do**
- postData

| KEY | TYPE | DEFAULT | VALUE | REQUIRED |DESC |
| :---: | :---: | :---: | :---: | :---: |:---: |
| type | string |  |  | true | 传1技师调用酒店的接口，传2客户调用酒店的接口
| TECHNICIAN_ID | string |  |  | false | 技师id
| longitude | string |  |  | true | 经度
| latitude | string |  |  | true | 纬度
- response

| KEY | TYPE | DEFAULT | VALUE | DESC |
| :---: | :---: | :---: | :---: | :---: |
| Status | int |  | 0/-1 | 返回状态码 |
| ErrMsg | str |  | ok/desc | 请求错误描述 |
| Data | json(array) |  |  | 返回的数据 |

> 请求url示例

http://localhost:8080/massage/appTechnicianData/getHotelListByLonAndLat.do?longitude=118.684639&latitude=24.877331
 > 返回数据示例
  
 ```json
{
  "Status": 0,
  "Data": {
    "HotelList": [
      {
        "HOTEL_NAME": "悦华酒店",
        "HOTEL_CITY": "11",
        "DISTANCE": "0.010325640910587151",//技师距离该酒店的距离
        "HOTEL_TEL": "110011110",
        "HOTEL_LONGITUDE": "118.68460083007813",
        "HOTEL_PROVINCE": "1",
        "HOTEL_ID": "1",
        "HOTEL_CITY_NAME": "泉州市",
        "IF_SELECTED": 1,//1是表示该技师已选择设置该酒店，0表示没有
        "HOTEL_ADD": "丰泽街110号",
        "HOTEL_LATITUDE": "24.87724494934082",
        "HOTEL_PROVINCE_NAME": "福建省"
      },
      {
        "HOTEL_NAME": "老钱饭店",
        "HOTEL_CITY": "11",
        "DISTANCE": "0.08770871592123217",
        "HOTEL_TEL": "110011110",
        "HOTEL_LONGITUDE": "118.68388366699219",
        "HOTEL_PROVINCE": "1",
        "HOTEL_ID": "2",
        "HOTEL_CITY_NAME": "泉州市",
        "IF_SELECTED": 1,
        "HOTEL_ADD": "东海街道110号",
        "HOTEL_LATITUDE": "24.87771987915039",
        "HOTEL_PROVINCE_NAME": "福建省"
      }
    ]
  },
  "ErrMsg": "OK"
}
 ```


 
 