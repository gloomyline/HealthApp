## 需要修改接口
### devlopment version
1. 首页技师列表接口

    字段去除
     
    - CERTIFICATE_IDS
    - CERTIFICATE_NAME
    
    修改为证书 id

2. 获取收藏列表

    ```JSON
    {
      "Status": 0,
      "Data": {
        "CollectList": [
          {
            "CUSTOMER_ID": "1111",
            "CREATETIME": "2017-06-05 10:17:12",
            "TECHNICIAN_ID": "74eacd86512247d38ae70133dd6d94bc",
            "TYPE": 0,
            "COLLECT_ID": "3d77f44214324cee992da4837630341c"
          }
        ]
      },
      "ErrMsg": "OK"
    }
    ``` 
    
    返回的数据结构我期望是这样的
    
    ```JSON
    {
      "Status": 0,
      "Data": {
        "TYPE": 0,
        "CUSTOMER_ID": "1111",
        "CollectList": [] 
      },
      "ErrMsg": "OK"
    }
    ```
    
    其中'CollectList'中是所有已收藏的技师id或者项目id
    
3. 发现某些接口没有做参数校验，请求数据结构不对，仍然返回'ok',比如说请求某个项目的列表接口

9. 客户下单
异常

11. 处理订单
{
    "Status": -1,
    "ErrMsg": "异常"
}
Name        Value                             Domain           Path       Expires    HTTP       Secure
JSESSIONID  12589351E1C7C69D37362875C631D418  192.168.1.126    /massage              false      false


15.   提交评论
应用程序异常
抱歉！您访问的页面出现异常，请稍后重试或联系管理员。

17. 获取所有常量值
HTTP Status 405 - Request method 'POST' not supported

19.  异常

21. 项目列表接口 POST
 应用程序异常 (500)
 
24. 不知道什么错 

## 接口修改优化补充
1. 技师详情接口，即接口文档中第三个接口返回的**Techitemlist**
服务项目克不包含具体实施项目的技师id
2. 获取技师证书ids接口可删除，已加入获取常量统一接口中
6. **important** 下单接口返回异常
    ```JSON
    {
        "Status": -1,
        "Errmsg": "异常"
    }
    ```
7. **important** 获取通过公众号登陆的粉丝基本信息接口（包含用户，技师和领班身份）
8. **important** 绑定手机接口（用户下订单前置接口功能，用户必须绑定手机后才可下单）
9. **important** 客户端项目列表接口 ==BOOM==
10. **important** 客户端获取订单列表接口目前木有数据，无法前端展示
11. 服务端缺少绑定手机验证码获取接口