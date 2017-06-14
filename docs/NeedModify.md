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
    
  