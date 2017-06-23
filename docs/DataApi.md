# 数据接口需求

## 技师相关

1. 首页技师列表 POST
- url: **http://hostname:port/massage/appTechnicianData/getTechniciansList.do**
- postData

| KEY | TYPE | DEFAULT | VALUE | REQUIRED |DESC |
| :---: | :---: | :---: | :---: | :---: |:---: |
| PageNow | int | 1 | 0 | true | 记录开始
| PageSize | int |  | 10 | true | 记录条数
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
      "SERVE_CONTENT": "d",//服务内容
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
      "SERVE_CONTENT": "d",
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
| TechnicianId | string |  |  | true | 技师id 

- response
 
| KEY | TYPE | DEFAULT | VALUE | DESC |
| :---: | :---: | :---: | :---: | :---: |
| Status | int |  | 0/-1 | 返回状态码 |
| ErrMsg | str |  | ok/desc | 请求错误描述 |
| Data | json(array) |  |  | 返回的数据 |
 
 
> 请求url示例

 http://localhost:8080/massage/appTechnicianData/getTechTime.do?TechnicianId=a082147cf09f471f96c6380d1c77a43b
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
| CustomerId | string | 1 | 0 | true | 客户id
| TechnicianId | string |  | 10 | true | 技师id
| PageNow | int | 1 | 0 | true | 记录开始
| PageSize | int |  | 10 | true | 记录条数
- response

| KEY | TYPE | DEFAULT | VALUE | DESC |
| :---: | :---: | :---: | :---: | :---: |
| Status | int |  | 0/-1 | 返回状态码 |
| ErrMsg | str |  | ok/desc | 请求错误描述 |
| Data | json(array) |  |  | 返回的数据 |

> 请求url示例

http://localhost:8080/massage/appTechnicianData/getTechnicianInfo.do?TECHNICIAN_ID=a082147cf09f471f96c6380d1c77a43b&CUSTOMER_ID=1111&page_now=1&page_size=10
 > 返回数据示例
  
 ```json
 {
   "Status": 0,
   "Data": {
     "CommentsList": [
       {
         "COMMENTS_STATUS": 0,
         "COMMENTS_ID": "1",
         "COMMENTS_CONTENT": "ddddddddddd",
         "CREATETIME": "2017-5-25",
         "TECHNICIAN_ID": "6bab8de3e2aa40b3910611f9472e67fb",
         "CUSTOMER_TEL": "1212",
         "COMMENTS_STAR": 1
       }
     ],
     "IF_COLLECT": 1,
     "CERTIFICATE_NUM": 1
   },
   "ErrMsg": "OK"
 }
 ```
  
4. 获取技师的证书 POST
- url: **http://hostname:port/massage/appTechnicianData/getCertificateListById.do**
- postData

| KEY | TYPE | DEFAULT | VALUE | REQUIRED |DESC |
| :---: | :---: | :---: | :---: | :---: |:---: |
| CertificateIds | string | 1 | 0 | true | 客户id
- response

| KEY | TYPE | DEFAULT | VALUE | DESC |
| :---: | :---: | :---: | :---: | :---: |
| Status | int |  | 0/-1 | 返回状态码 |
| ErrMsg | str |  | ok/desc | 请求错误描述 |
| Data | json(array) |  |  | 返回的数据 |

> 请求url示例

http://localhost:8080/massage/appTechnicianData/getCertificateListById.do?CertificateIds=2,3
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
| TECHNICIAN_ID | string |  |  | false | 技师id/客户id
| longitude | string |  |  | true | 经度
| latitude | string |  |  | true | 纬度
- response

| KEY | TYPE | DEFAULT | VALUE | DESC |
| :---: | :---: | :---: | :---: | :---: |
| Status | int |  | 0/-1 | 返回状态码 |
| ErrMsg | str |  | ok/desc | 请求错误描述 |
| Data | json(array) |  |  | 返回的数据 |

> 请求url示例

http://localhost:8080/massage/appTechnicianData/getHotelListByLonAndLat.do?longitude=118.684639&latitude=24.877331&type=1
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
6. 添加技师/项目收藏 POST
- url: **http://hostname:port/massage/appCollectData/addCollect.do**
- postData

| KEY | TYPE | DEFAULT | VALUE | REQUIRED |DESC |
| :---: | :---: | :---: | :---: | :---: |:---: |
| CustomerId | string |  |  | true | 客户id
| Type | string |  |  | true | (0-技师，1-项目)
| TechnicianId | string |  |  | true | 技师/项目id
- response

| KEY | TYPE | DEFAULT | VALUE | DESC |
| :---: | :---: | :---: | :---: | :---: |
| Status | int |  | 0/-1/1 | 返回状态码 |
| ErrMsg | str |  | ok/desc/desc | 请求错误描述 |
| Data | json(array) |  |  | 返回的数据 |

> 请求url示例

http://localhost:8080/massage/appCollectData/addCollect.do?Type=0&CustomerId=1111&TechnicianId=6bab8de3e2aa40b3910611f9472e67fb
 > 返回数据示例
  
 ```json
{
  "Status": 0,
  "ErrMsg": "OK"
}
 ```
 7. 取消技师/项目收藏 POST
 - url: **http://hostname:port/massage/appCollectData/cancelCollect.do**
 - postData
 
 | KEY | TYPE | DEFAULT | VALUE | REQUIRED |DESC |
 | :---: | :---: | :---: | :---: | :---: |:---: |
| CustomerId | string |  |  | true | 客户id
| Type | string |  |  | true | (0-技师，1-项目)
| TechnicianId | string |  |  | true | 技师/项目id
 - response
 
 | KEY | TYPE | DEFAULT | VALUE | DESC |
 | :---: | :---: | :---: | :---: | :---: |
 | Status | int |  | 0/-1 | 返回状态码 |
 | ErrMsg | str |  | ok/desc | 请求错误描述 |
 | Data | json(array) |  |  | 返回的数据 |
 
 > 请求url示例
 
 http://localhost:8080/massage/appCollectData/cancelCollect.do?Type=0&CustomerId=1111&TechnicianId=6bab8de3e2aa40b3910611f9472e67fb
  > 返回数据示例
   
  ```json
{
  "Status": 0,
  "ErrMsg": "OK"
}
  ```
 8. 收藏列表 POST
  - url: **http://hostname:port/massage/appCollectData/getCollectListByCustomerid.do**
  - postData
  
  | KEY | TYPE | DEFAULT | VALUE | REQUIRED |DESC |
  | :---: | :---: | :---: | :---: | :---: |:---: |
| CustomerId | string |  |  | true | 客户id
| Type | string |  |  | true | (0-技师，1-项目)
  - response
  
  | KEY | TYPE | DEFAULT | VALUE | DESC |
  | :---: | :---: | :---: | :---: | :---: |
  | Status | int |  | 0/-1 | 返回状态码 |
  | ErrMsg | str |  | ok/desc | 请求错误描述 |
  | Data | json(array) |  |  | 返回的数据 |
  
  > 请求url示例
  
http://localhost:8080/massage/appCollectData/getCollectListByCustomerid.do?Type=0&CustomerId=1111
   > 返回数据示例
    
   ```json
{
    "Data": {
        "Type": "0",
        "Customerid": "1111",
        "Collectlist": [
            {
                "TechnicianId": "74eacd86512247d38ae70133dd6d94bc"
            }
        ]
    },
    "Status": 0,
    "Errmsg": "OK"
}
   ```
9. 客户下单 POST
  - url: **http://hostname:port/massage/appOrderData/submitOrder.do**
  - postData
  
  | KEY | TYPE | DEFAULT | VALUE | REQUIRED |DESC |
  | :---: | :---: | :---: | :---: | :---: |:---: |
| CustomerId | string |  |  | true | 客户ID
| TechnicianId | string |  |  | true | 技师ID
| ItemId | string |  |  | true | 项目ID
| OrderNum | int |  |  | true | 下单项目数量
| OrderTel | string |  |  | true | 下单联系电话
| OrderAdd | string |  |  | true | 下单服务地址
| OrderCallTime | string |  |  | true | 上门时间
| OrderRemark | string |  |  | true | 备注
| CouponId | string |  |  | false | （有就传，没有就不传）优惠券
  - response
  
  | KEY | TYPE | DEFAULT | VALUE | DESC |
  | :---: | :---: | :---: | :---: | :---: |
  | Status | int |  | 0/-1 | 返回状态码 |
  | ErrMsg | str |  | ok/desc | 请求错误描述 |
  | Data | json(array) |  |  | 返回的数据 |
  
  > 请求url示例
  
  http://localhost:8080/massage/appOrderData/submitOrder.do?CUSTOMER_ID=1111&TECHNICIAN_ID=6bab8de3e2aa40b3910611f9472e67fb&ITEM_ID=1AA&ORDER_NUM=2&ORDER_TEL=17777777777&ORDER_ADD=haixingxiaoqu&ORDER_CALL_TIME=2017-6-18 20:30&ORDER_REMARK=hello&COUPON_ID=1
   > 返回数据示例
    
   ```json
{
  "Status": 0,
  "ErrMsg": "OK"
}
   ```
10. 订单列表 POST
  - url: **http://hostname:port/massage/appOrderData/orderList.do**
  - postData
  
  | KEY | TYPE | DEFAULT | VALUE | REQUIRED |DESC |
  | :---: | :---: | :---: | :---: | :---: |:---: |
 | TechnicianId | string |  |  | false | 技师ID（客户端的已下单待确认，就传客户id，传技师id，就不传客户id）
 | CustomerId | string |  |  | false | 客户ID（技师端的已下单待确认，就传技师id，传客户id就不传技师id）
 | Status | int |  |  | true |（订单状态（状态（0下单未支付待技师确定，1技师确定接单，2下单已支付，3订单进行中，4订单已完成,，5订单完成确认未评论，6订单已结束，7订单退款确认，8订单退款中，9订单退款结束，10订单关闭））））
  - response
  
  | KEY | TYPE | DEFAULT | VALUE | DESC |
  | :---: | :---: | :---: | :---: | :---: |
  | Status | int |  | 0/-1 | 返回状态码 |
  | ErrMsg | str |  | ok/desc | 请求错误描述 |
  | Data | json(array) |  |  | 返回的数据 |
  
  > 请求url示例
  
  http://localhost:8080/massage/appOrderData/orderList.do?ORDER_ID=18828c7c79e14ae0952a502363a1d813
   > 返回数据示例
    
   ```json
{
  "Status": 0,
  "ErrMsg": "OK"
}
   ```
 11. 处理订单 POST
   - url: **http://hostname:port/massage/appOrderData/handleOrder.do**
   - postData
   
   | KEY | TYPE | DEFAULT | VALUE | REQUIRED |DESC |
   | :---: | :---: | :---: | :---: | :---: |:---: |

 | OrderId | string |  |  | true | 客户ID
 | Type | int |  |  | true |（0技师接单，1技师开始项目，2技师结束项目,3技师拒单，订单关闭,4客户申请退款，改为退款中）
   - response
   
   | KEY | TYPE | DEFAULT | VALUE | DESC |
   | :---: | :---: | :---: | :---: | :---: |
   | Status | int |  | 0/-1 | 返回状态码 |
   | ErrMsg | str |  | ok/desc | 请求错误描述 |
   | Data | json(array) |  |  | 返回的数据 |
   
   > 请求url示例
   
   http://localhost:8080/massage/appOrderData/handleOrder.do?OrderId=18828c7c79e14ae0952a502363a1d813&type=0
    > 返回数据示例
     
    ```json
 {
   "Status": 0,
   "ErrMsg": "OK"
 }
    ```
 12. 首页广告 POST
   - url: **http://hostname:port/massage/appAdData/getAdsList.do**
   - postData
   
   | KEY | TYPE | DEFAULT | VALUE | REQUIRED |DESC |
   | :---: | :---: | :---: | :---: | :---: |:---: |

   - response
   
   | KEY | TYPE | DEFAULT | VALUE | DESC |
   | :---: | :---: | :---: | :---: | :---: |
   | Status | int |  | 0/-1 | 返回状态码 |
   | ErrMsg | str |  | ok/desc | 请求错误描述 |
   | Data | json(array) |  |  | 返回的数据 |
   
   > 请求url示例
   
   http://localhost:8080/massage/appAdData/getAdsList.do
    > 返回数据示例
     
    ```json
 {
   "Status": 0,
   "ErrMsg": "OK"
 }
    ```
 13. 获取我的优惠券列表 POST
    - url: **http://hostname:port/massage/appCouponData/getMyCouponList.do**
    - postData
    
    | KEY | TYPE | DEFAULT | VALUE | REQUIRED |DESC |
    | :---: | :---: | :---: | :---: | :---: |:---: |
 
  | CustomerId | string |  |  | true | 客户ID
  - response
    
  | KEY | TYPE | DEFAULT | VALUE | DESC |
  | :---: | :---: | :---: | :---: | :---: |
  | Status | int |  | 0/-1 | 返回状态码 |
  | ErrMsg | str |  | ok/desc | 请求错误描述 |
  | Data | json(array) |  |  | 返回的数据 |
  
  > 请求url示例
  
  http://localhost:8080/massage/appCouponData/getMyCouponList.do?CustomerId=1111
  > 返回数据示例
    
 ```json
{
  "Data": {
    "CouponList": [
      {
        "LEADER_TIME": "2017-06-05 10:17:12",
        "NAME": "好好养生优惠券",
        "COUPON_PRICE": 30,
        "OPEN_TIME": "2017-06-05 10:17:12",
        "COUPON_CONDITION": "无",
        "COUPON_ID": "1",
        "CUSTOMER_ID": "1111",
        "STATUS": 3,
        "COUPON_USERFULTIME": "2018-06-05 10:17:12",
        "CDKEY": "555555",
        "REMAIN_TIME": 364 //剩余几天
      }
    ]
  },
  "Status": 0,
  "ErrMsg": "OK"
}
```
     
     

15. 提交评论 POST

- url: **http://hostname:port/massage/appCommentsData/sendComment.do**
- postData

| KEY | TYPE | DEFAULT | VALUE | REQUIRED |DESC |
| :---: | :---: | :---: | :---: | :---: |:---: |
| OrderId | string |  |  | true | 订单ID
| TechnicianId | string |  |  | true | 技师ID
| Type | int |  |  | true | 类型(0-技师，1-项目)
| CommentsContent | string |  |  | true | 评论内容
| CommentsStar | int |  |  | true | 评论星级
| CustomerTel | string |  |  | true | 客户的电话


- response
  
| KEY | TYPE | DEFAULT | VALUE | DESC |
| :---: | :---: | :---: | :---: | :---: |
| Status | int |  | 0/-1/1/2 | 返回状态码 |
| ErrMsg | str |  | ok/desc | 请求错误描述 |
| Data | json(array) |  |  | 返回的数据 |

> 请求url示例

http://localhost:8080/massage/appCommentsData/sendComment.do?OrderId=18828c7c79e14ae0952a502363a1d813&TechnicianId=a082147cf09f471f96c6380d1c77a43b&Type=0&CommentsContent=wonderful&CommentsStar=5&CustomerTel=1885990000
> 返回数据示例
  
```json
{
  "Status": 0,
  "ErrMsg": "OK"
}
 ```
16. 注册技师 POST

- url: **http://hostname:port/massage/appTechnicianData/registerTechnician.do**
- postData

| KEY | TYPE | DEFAULT | VALUE | REQUIRED |DESC |
| :---: | :---: | :---: | :---: | :---: |:---: |
| Avatar | string |  |  | true | 头像（base64字符串）
| TechleaderId | string |  |  | true | 领班ID
| Name | string |  |  | true | 
| Age | string |  |  | true | 
| Sex | string |  |  | true | 0女，1男
| ServerCity | string |  |  | true | 服务城市
| Tel | string |  |  | true | 技师电话
| Addr | string |  |  | true | 地址
| Position | string |  |  | true | 应聘职位（0中医推拿，1SPA推拿，2小儿推拿师）
| ExperienceYear | string |  |  | true | 工作年限（0是5年以下，1是5-8年，2是8-15年，3是15年以上）
| Experience | string |  |  | true | 工作经历


- response
  
| KEY | TYPE | DEFAULT | VALUE | DESC |
| :---: | :---: | :---: | :---: | :---: |
| Status | int |  | 0/-1/1/2 | 返回状态码 |
| ErrMsg | str |  | ok/desc | 请求错误描述 |
| Data | json(array) |  |  | 返回的数据 |

> 请求url示例

http://localhost:8080/massage/appTechnicianData/registerTechnician.do?TechleaderId=&Avatar=3212315&Name=alan&Age=28&Sex=0&ServerCity=xiamen&Tel=16666666666&Addr=donghaidajie&Position=1&ExperienceYear=1&Experience=She is very beautiful
> 返回数据示例
  
```json
{
  "Status": 0,
  "ErrMsg": "OK"
}
 ```
17. 获取所有常量值 get
- url: **http://hostname:port/massage/appTechnicianData/getAllConstant.do**
- postData

| KEY | TYPE | DEFAULT | VALUE | REQUIRED |DESC |
| :---: | :---: | :---: | :---: | :---: |:---: |
- response

| KEY | TYPE | DEFAULT | VALUE | DESC |
| :---: | :---: | :---: | :---: | :---: |
| Status | int |  | 0/-1 | 返回状态码 |
| ErrMsg | str |  | ok/desc | 请求错误描述 |
| Data | json(array) |  |  | 返回的数据 |

http://localhost:8080/massage/appTechnicianData/getAllConstant.do
 > 返回数据示例
  
 ```json
 {
   "Data": {
     "Certificatelist": [
       {
         "CertificateId": "1",
         "CertificateImg": "http://139.196.106.144:8080/testImg/zhengshu.jpg",
         "CertificateName": "高级按摩师"
       },
       {
         "CertificateId": "2",
         "CertificateImg": "http://139.196.106.144:8080/testImg/zhengshu.jpg",
         "CertificateName": "高级推拿师"
       },
       {
         "CertificateId": "3",
         "CertificateImg": "http://139.196.106.144:8080/testImg/zhengshu.jpg",
         "CertificateName": "高级催乳师"
       }
     ],
     "Itemlist": [
       {
         "ItemAim": "针对部位",
         "ItemFunct": "",//功能描述
         "Content": "",//服务内容
         "ItemCondition": "条件限制",
         "BookInfo": "预约",
         "ItemName": "深度全身理疗",
         "ItemId": "1",
         "ItemAbout": "项目简介",
         "MassagetypeId": "2",//附属于哪种推拿大类
         "Type": 1,//类型（1正常，2指的是套餐不是一次搞定）
         "Taboo": "禁忌",
         "ItemSymptom": "症状"
       },
       {
         "ItemAim": "",
         "ItemFunct": "",
         "Content": "",
         "ItemCondition": "",
         "BookInfo": "",
         "ItemName": "拔罐",
         "ItemId": "2",
         "ItemAbout": "544444444",
         "MassagetypeId": "2",
         "Type": 2,
         "Taboo": "",
         "ItemSymptom": ""
       },
       {
         "ItemFunct": "",
         "ItemImg": "http://localhost:8080/massage/uploadFiles/uploadImgs/20170524/968734215d9648cfa6f0019b709c7b3d.jpg",
         "BookInfo": "",
         "ItemId": "4",
         "ItemAim": "",
         "ItemCondition": "",
         "Content": "",
         "ItemName": "全身spa",
         "ItemAbout": "66666666",
         "MassagetypeId": "2",
         "ItemSymptom": "",
         "Taboo": "",
         "Type": 1
       },
       {
         "ItemFunct": "",
         "ItemImg": "",
         "BookInfo": "",
         "ItemId": "39",
         "ItemAim": "",
         "ItemCondition": "",
         "Content": "",
         "ItemName": "顶顶顶顶7",
         "ItemAbout": "弟弟弟弟的多付所",
         "MassagetypeId": "2",
         "ItemSymptom": "",
         "Taboo": "",
         "Type": 1
       },
       {
         "ItemFunct": "",
         "ItemImg": "",
         "BookInfo": "",
         "ItemId": "3",
         "ItemAim": "",
         "ItemCondition": "",
         "Content": "",
         "ItemName": "顶顶顶顶",
         "ItemAbout": "弟弟弟弟的多付所",
         "MassagetypeId": "2",
         "ItemSymptom": "",
         "Taboo": "",
         "Type": 1
       }
     ],
     "Massagetypelist": [
       {
         "MassagetypeName": "中医推拿",
         "MassagetypeId": "1"
       },
       {
         "MassagetypeName": "SPA",
         "MassagetypeId": "2"
       },
       {
         "MassagetypeName": "小儿/通乳",
         "MassagetypeId": "3"
       },
       {
         "MassagetypeName": "艾灸",
         "MassagetypeId": "4"
       },
       {
         "MassagetypeName": "康复理疗",
         "MassagetypeId": "5"
       },
       {
         "MassagetypeName": "刮痧",
         "MassagetypeId": "6"
       },
       {
         "MassagetypeName": "足疗",
         "MassagetypeId": "7"
       }
     ]
   },
   "Status": 0,
   "Errmsg": "OK"
 }
 ```

 18. 修改提现资料 POST
 
 - url: **http://hostname:port/massage/appGiftsData/changeGiftInfo.do**
 - postData
 
 | KEY | TYPE | DEFAULT | VALUE | REQUIRED |DESC |
 | :---: | :---: | :---: | :---: | :---: |:---: |
 | TechnicianId | string |  |  | true | 
 | Password | string |  |  | false | 密码
 | Account | string |  |  | false | 账号

 
 - response
   
 | KEY | TYPE | DEFAULT | VALUE | DESC |
 | :---: | :---: | :---: | :---: | :---: |
 | Status | int |  | 0/-1/1/2 | 返回状态码 |
 | ErrMsg | str |  | ok/desc | 请求错误描述 |
 | Data | json(array) |  |  | 返回的数据 |
 
 > 请求url示例
 
 http://localhost:8080/massage/appGiftsData/changeGiftInfo.do?TechnicianId=15babeda564b4bf987395f60f3c1768f&Password=100866
 > 返回数据示例
   
 ```json
 {
   "Status": 0,
   "ErrMsg": "OK"
 }
  ```
  19. 提现操作接口 POST
  
  - url: **http://hostname:port/massage/appGiftsData/withdrawDeposit.do**
  - postData
  
  | KEY | TYPE | DEFAULT | VALUE | REQUIRED |DESC |
  | :---: | :---: | :---: | :---: | :---: |:---: |
  | TechnicianId | string |  |  | true | 
  | Deposit | string |  |  | true | 现金
  | Password | string |  |  | true | 密码
 
  
  - response
    
  | KEY | TYPE | DEFAULT | VALUE | DESC |
  | :---: | :---: | :---: | :---: | :---: |
  | Status | int |  | 0/-1/1/2 | 返回状态码 |
  | ErrMsg | str |  | ok/desc | 请求错误描述 |
  | Data | json(array) |  |  | 返回的数据 |
  
  > 请求url示例
  
  http://localhost:8080/massage/appGiftsData/withdrawDeposit.do?TechnicianId=15babeda564b4bf987395f60f3c1768f&Password=100866&Deposit=10
  > 返回数据示例
    
  ```json
  {
    "Status": 0,
    "ErrMsg": "OK"
  }
   ```
  20. 明细列表接口 POST
   
   - url: **http://hostname:port/massage/appGiftsData/getGiftsdetailList.do**
   - postData
   
   | KEY | TYPE | DEFAULT | VALUE | REQUIRED |DESC |
   | :---: | :---: | :---: | :---: | :---: |:---: |
   | TechnicianId | string |  |  | true | 谁要的明细，就传谁的id
   
   - response
     
   | KEY | TYPE | DEFAULT | VALUE | DESC |
   | :---: | :---: | :---: | :---: | :---: |
   | Status | int |  | 0/-1/1/2 | 返回状态码 |
   | ErrMsg | str |  | ok/desc | 请求错误描述 |
   | Data | json(array) |  |  | 返回的数据 |
   
   > 请求url示例
   
   http://localhost:8080/massage/appGiftsData/getGiftsdetailList.do?TechnicianId=15babeda564b4bf987395f60f3c1768f
   > 返回数据示例
     
   ```json
 {
   "Data": {
     "Giftsdetaillist": [
       {
         "Price": 10,
         "CompleteTime": "",//提现完成时间
         "CreateTime": "2017-06-08 10:23:33",//提现创建时间
         "GiftsdetailId": "022aea60318b4d3f8f4e174ad747ca10",
         "CheckTime": "",//提现审核时间
         "Status": 0,//0提现中，1提现审核通过，3提现完成
         "TechnicianId": "15babeda564b4bf987395f60f3c1768f",
         "Type": 0 //0提现，1收入
       },
       {
         "Price": 10,
         "CompleteTime": "",
         "CreateTime": "2017-06-08 10:24:28",
         "GiftsdetailId": "a223012e2aad4d64b183c4c33522529b",
         "CheckTime": "",
         "Status": 0,
         "TechnicianId": "15babeda564b4bf987395f60f3c1768f",
         "Type": 0
       },
       {
         "Price": 10,
         "CompleteTime": "",
         "CreateTime": "2017-06-08 10:26:12",
         "GiftsdetailId": "28ffbc81ca5d4ebb89439e48b1d9361a",
         "CheckTime": "",
         "Status": 0,
         "TechnicianId": "15babeda564b4bf987395f60f3c1768f",
         "Type": 0
       },
       {
         "Price": 30,
         "CompleteTime": "",
         "CreateTime": "2017-06-08 10:26:20",
         "GiftsdetailId": "f0d385196a6c49e4a9be97bbbb80d211",
         "CheckTime": "",
         "Status": 0,
         "TechnicianId": "15babeda564b4bf987395f60f3c1768f",
         "Type": 0
       }
     ]
   },
   "Status": 0,
   "Errmsg": "OK"
 }
   ```
 21. 项目列表接口 POST
   
   - url: **http://hostname:port/massage/appItemData/getItemFootcityList.do**
   - postData
   
   | KEY | TYPE | DEFAULT | VALUE | REQUIRED |DESC |
   | :---: | :---: | :---: | :---: | :---: |:---: |
   | Customerid | string |  |  | true | 
   | PageNow | string |  |  | true | 分页起始
   | PageSize | string |  |  | true | 每页条数
   |Massagetypeid| string |  |  | true | 项目类别，传入推拿大类id
   
   - response
     
   | KEY | TYPE | DEFAULT | VALUE | DESC |
   | :---: | :---: | :---: | :---: | :---: |
   | Status | int |  | 0/-1/1/2 | 返回状态码 |
   | ErrMsg | str |  | ok/desc | 请求错误描述 |
   | Data | json(array) |  |  | 返回的数据 |
   
   > 请求url示例
   
http://localhost:8080/massage/appItemData/getItemFootcityList.do?Customerid=1111&PageNow=1&PageSize=3&Massagetypeid=2
 > 返回数据示例
     
   ```json
 {
   "Data": {
     "Itemfootcitylist": [
       {
         "FootcityId": "1",//足浴城id
         "Price": 153,//价格
         "Star": 5,
         "ItemName": "拔罐",
         "Times": 120, // 时间/次数
         "ItemId": "1AA", //项目id
         "Num": 299,
         "ItemFootcityId": "1"
       }
     ]
   },
   "Status": 0,
   "Errmsg": "OK"
 }
   ```
22. 技师查询 POST
   
   - url: **http://hostname:port/massage/appTechnicianData/searchTechnicians.do**
   - postData
   
   | KEY | TYPE | DEFAULT | VALUE | REQUIRED |DESC |
   | :---: | :---: | :---: | :---: | :---: |:---: |
   | Keywords | string |  |  | true | 

   
   - response
     
   | KEY | TYPE | DEFAULT | VALUE | DESC |
   | :---: | :---: | :---: | :---: | :---: |
   | Status | int |  | 0/-1/1/2 | 返回状态码 |
   | ErrMsg | str |  | ok/desc | 请求错误描述 |
   | Data | json(array) |  |  | 返回的数据 |
   
   > 请求url示例
   
http://localhost:8080/massage/appTechnicianData/searchTechnicians.do?Keywords=技师
 > 返回数据示例
     
   ```json
{
    "Date": {
        "TechnicianIds": [
            "15babeda564b4bf987395f60f3c1768f",
            "e31e90c70a6a4711b8ad94e34a8c99d4",
            "d11ee1afb2064e1cbd561431e7e9b552",
            "244f106457194fe788ea2840c583f2cd"
        ]
    },
    "Status": 0,
    "ErrMsg": "OK"
}
   ```
23. 查看附属技师完成的订单列表 POST
   
   - url: **http://hostname:port/massage/appTechleaderData/getTechnicianListByLeaderid.do**
   - postData
   
   | KEY | TYPE | DEFAULT | VALUE | REQUIRED |DESC |
   | :---: | :---: | :---: | :---: | :---: |:---: |
   | Keywords | string |  |  | false | 关键字
   | TechleaderId | string |  |  | true |  领班id

   
   - response
     
   | KEY | TYPE | DEFAULT | VALUE | DESC |
   | :---: | :---: | :---: | :---: | :---: |
   | Status | int |  | 0/-1/1/2 | 返回状态码 |
   | ErrMsg | str |  | ok/desc | 请求错误描述 |
   | Data | json(array) |  |  | 返回的数据 |
   
   > 请求url示例
   
http://localhost:8080/massage/appTechleaderData/getTechnicianListByLeaderid.do?Keywords=&TechleaderId=1
 > 返回数据示例
     
   ```json
{
    "Date": {
        "TechnicianIds": [
            "15babeda564b4bf987395f60f3c1768f",
            "e31e90c70a6a4711b8ad94e34a8c99d4",
            "d11ee1afb2064e1cbd561431e7e9b552",
            "244f106457194fe788ea2840c583f2cd"
        ]
    },
    "Status": 0,
    "ErrMsg": "OK"
}
   ```
24. 根据领班id获取旗下的技师列表 POST
   
   - url: **http://hostname:port/massage/appTechleaderData/getOrderListOfTechByTechid.do**
   - postData
   
   | KEY | TYPE | DEFAULT | VALUE | REQUIRED |DESC |
   | :---: | :---: | :---: | :---: | :---: |:---: |
   | TechnicianId | string |  |  | true |  领班id
   | TimeFrame | string |  |  | true |  时间段（0是全部，1是当天，2是7天内，3是30天内）

   
   - response
     
   | KEY | TYPE | DEFAULT | VALUE | DESC |
   | :---: | :---: | :---: | :---: | :---: |
   | Status | int |  | 0/-1/1/2 | 返回状态码 |
   | ErrMsg | str |  | ok/desc | 请求错误描述 |
   | Data | json(array) |  |  | 返回的数据 |
   
   > 请求url示例
   
http://localhost:8080/massage/appTechleaderData/getOrderListOfTechByTechid.do?&TechnicianId=1&TimeFrame=0
 > 返回数据示例
     
   ```json
{
    "Data": {
        "Technicianlist": [
                        {
                "OrderNum": 2,
                "CreateTime": "2017-05-06 20:30:33",
                "TechnicianName": "组宾",
                "TransactionId": "",
                "CustomerId": "1111",
                "ItemId": "1AA",
                "OrderTotalprice": 776,
                "Status": 4,
                "PayTime": "",
                "TechconfirmTime": "",
                "OrderAdd": "haixingxiaoqu",
                "CommentsId": "dfee293eafb647a48defeed297458ecf",
                "RefundConfirmTime": "",
                "RefundEndTime": "",
                "IfCoupon": 0,
                "TechnicianId": "6bab8de3e2aa40b3910611f9472e67fb",
                "OrderTel": "17777777777",
                "OrderCallTime": "1497235588833",
                "CommentsStar": 5,//评论星星
                "OrderRemark": "hello",
                "CommentsContent": "wonderful",//评语
                "CompeleteTime": "",
                "OrderNo": "1508023656",
                "CouponId": "1",
                "ItemStartTime": "",
                "OrderId": "adaa9c830e894361b0470ddc3d9ac46e",
                "RefundStartTime": "",
                "ItemEndTime": "",
                "OrderRealitypay": 776,
                "OrderUnitprice": 388
            }
        ]
    },
    "Status": 0,
    "Errmsg": "OK"
}
   ```
25. 领班删除附属技师 POST
   
   - url: **http://hostname:port/massage/appTechleaderData/leaderDeletedTech.do**
   - postData
   
   | KEY | TYPE | DEFAULT | VALUE | REQUIRED |DESC |
   | :---: | :---: | :---: | :---: | :---: |:---: |
   | TechnicianId | string |  |  | true |  技师id

   
   - response
     
   | KEY | TYPE | DEFAULT | VALUE | DESC |
   | :---: | :---: | :---: | :---: | :---: |
   | Status | int |  | 0/-1/1/2 | 返回状态码 |
   | ErrMsg | str |  | ok/desc | 请求错误描述 |
   | Data | json(array) |  |  | 返回的数据 |
   
   > 请求url示例
   
http://localhost:8080/massage/appTechleaderData/leaderDeletedTech.do?&TechnicianId=244f106457194fe788ea2840c583f2cd
 > 返回数据示例
     
   ```json
{
    "Status": 0,
    "Errmsg": "OK"
}
   ```
26. 领班首页数据接口 POST
   
   - url: **http://hostname:port/massage/appTechleaderData/getLeaderHomePage.do**
   - postData
   
   | KEY | TYPE | DEFAULT | VALUE | REQUIRED |DESC |
   | :---: | :---: | :---: | :---: | :---: |:---: |
   | TechleaderId | string |  |  | true |  领班id

   
   - response
     
   | KEY | TYPE | DEFAULT | VALUE | DESC |
   | :---: | :---: | :---: | :---: | :---: |
   | Status | int |  | 0/-1/1/2 | 返回状态码 |
   | ErrMsg | str |  | ok/desc | 请求错误描述 |
   | Data | json(array) |  |  | 返回的数据 |
   
   > 请求url示例
   
http://localhost:8080/massage/appTechleaderData/getLeaderHomePage.do?&TechleaderId=1
 > 返回数据示例
     
   ```json
{
    "Data": {
        "Orderlisttoday": [ //今日总订单
            {
                "OrderNum": 2,
                "CreateTime": "2017-06-22 16:28:49",
                "TechnicianName": "组宾",
                "TransactionId": "",
                "CustomerId": "1111",
                "ItemId": "1AA",
                "OrderTotalprice": 776,
                "Status": 0,
                "PayTime": "",
                "TechconfirmTime": "",
                "OrderAdd": "haixingxiaoqu",
                "CommentsId": "",
                "RefundConfirmTime": "",
                "RefundEndTime": "",
                "IfCoupon": 0,
                "TechnicianId": "6bab8de3e2aa40b3910611f9472e67fb",
                "OrderTel": "17777777777",
                "OrderCallTime": "2017-6-18 20:30",
                "OrderRemark": "hello",
                "RefundBecause": "",
                "CompeleteTime": "",
                "OrderNo": "1628301268",
                "CouponId": "1",
                "ItemStartTime": "",
                "OrderId": "0c4f7744b63e48c8ae59e5b81b82dca3",
                "RefundStartTime": "",
                "ItemEndTime": "",
                "OrderRealitypay": 776,
                "OrderUnitprice": 388
            },
            {
                "OrderNum": 2,
                "CreateTime": "2017-06-22 16:29:49",
                "TechnicianName": "组宾",
                "TransactionId": "",
                "CustomerId": "1111",
                "ItemId": "1AA",
                "OrderTotalprice": 776,
                "Status": 0,
                "PayTime": "",
                "TechconfirmTime": "",
                "OrderAdd": "haixingxiaoqu",
                "CommentsId": "",
                "RefundConfirmTime": "",
                "RefundEndTime": "",
                "IfCoupon": 0,
                "TechnicianId": "6bab8de3e2aa40b3910611f9472e67fb",
                "OrderTel": "17777777777",
                "OrderCallTime": "2017-6-18 20:30",
                "OrderRemark": "hello",
                "RefundBecause": "",
                "CompeleteTime": "",
                "OrderNo": "1629491838",
                "CouponId": "1",
                "ItemStartTime": "",
                "OrderId": "d9f23c454ef746c7abfca0ea5c699f42",
                "RefundStartTime": "",
                "ItemEndTime": "",
                "OrderRealitypay": 776,
                "OrderUnitprice": 388
            }
        ],
        "Orderlisttodaycancel": [], //今日已取消订单
        "Orderlisttodaycomp": [], //今日完成订单
        "Orderlisttodayuncomp": [ //今日待完成订单
            {
                "OrderNum": 2,
                "CreateTime": "2017-06-22 16:28:49",
                "TechnicianName": "组宾",
                "TransactionId": "",
                "CustomerId": "1111",
                "ItemId": "1AA",
                "OrderTotalprice": 776,
                "Status": 0,
                "PayTime": "",
                "TechconfirmTime": "",
                "OrderAdd": "haixingxiaoqu",
                "CommentsId": "",
                "RefundConfirmTime": "",
                "RefundEndTime": "",
                "IfCoupon": 0,
                "TechnicianId": "6bab8de3e2aa40b3910611f9472e67fb",
                "OrderTel": "17777777777",
                "OrderCallTime": "2017-6-18 20:30",
                "OrderRemark": "hello",
                "RefundBecause": "",
                "CompeleteTime": "",
                "OrderNo": "1628301268",
                "CouponId": "1",
                "ItemStartTime": "",
                "OrderId": "0c4f7744b63e48c8ae59e5b81b82dca3",
                "RefundStartTime": "",
                "ItemEndTime": "",
                "OrderRealitypay": 776,
                "OrderUnitprice": 388
            },
            {
                "OrderNum": 2,
                "CreateTime": "2017-06-22 16:29:49",
                "TechnicianName": "组宾",
                "TransactionId": "",
                "CustomerId": "1111",
                "ItemId": "1AA",
                "OrderTotalprice": 776,
                "Status": 0,
                "PayTime": "",
                "TechconfirmTime": "",
                "OrderAdd": "haixingxiaoqu",
                "CommentsId": "",
                "RefundConfirmTime": "",
                "RefundEndTime": "",
                "IfCoupon": 0,
                "TechnicianId": "6bab8de3e2aa40b3910611f9472e67fb",
                "OrderTel": "17777777777",
                "OrderCallTime": "2017-6-18 20:30",
                "OrderRemark": "hello",
                "RefundBecause": "",
                "CompeleteTime": "",
                "OrderNo": "1629491838",
                "CouponId": "1",
                "ItemStartTime": "",
                "OrderId": "d9f23c454ef746c7abfca0ea5c699f42",
                "RefundStartTime": "",
                "ItemEndTime": "",
                "OrderRealitypay": 776,
                "OrderUnitprice": 388
            }
        ],
        "Orderlistyes": [], //昨日总订单
        "Totaltechleaderpriceyes": 0, //昨日领班总收入
        "Totaltechleaderpricemonth": 40 ////本月领班总收入
    },
    "Status": 0,
    "Errmsg": "OK"
}
   ```
