//index.js
//获取应用实例
var app = getApp()
Page({
    data: {
        userInfo: {},

        // parentItem: [
        //   {
        //     itemTitle:"网络工具",
        //     imgUrls:[
        //       "../../images/menu/a38.png",
        //       // "../../images/menu/a19.png",
        //       //   "../../images/menu/a1.png",
        //     ],
        //     texts:[
        //       "身份证查询",
        //       // "网站安全检测",
        //       // "IP地址",
        //     ]
        //   },
        //   {
        //     itemTitle:"日常生活",
        //     imgUrls:[
        //       "../../images/menu/a73.png",
        //       "../../images/menu/a183.png",
        //       "../../images/menu/a80.png",
        //     ],
        //     texts:[
        //       "天气查询",
        //       "驾照题库",
        //       "汇率",
        //     ]
        //   },
        //   // {
        //   //   itemTitle:"开心娱乐",
        //   //   imgUrls:[
        //   //     "../../images/menu/a63.png",
        //   //     "../../images/menu/qq.png",
        //   //     "../../images/menu/a65.png",
        //   //     "../../images/menu/a58.png",
        //   //   ],
        //   //   texts:[
        //   //     "历史上的今天",
        //   //     "QQ号码测吉凶",
        //   //     "老黄历",
        //   //     "星座运势",
        //   //   ]
        //   // }
        // ]
        tools: [
            {
                category: "网络工具",
                tackles: [
                    {
                        ename: 'card',
                        cname: "身份证查询",
                        imgUrls: "../../images/menu/a38.png",
                    }
                ]
            },
            {
                category: "日常生活",
                tackles: [
                    {
                        ename: "weather",
                        cname: "天气查询",
                        imgUrls: "../../images/menu/a73.png"
                    }
                ]
            },
            {
                category: "开心娱乐",
                tackles: [
                    {
                        ename: "history",
                        cname: "历史上的今天",
                        imgUrls: "../../images/menu/a63.png"
                    }
                ]
            },
        ]
    },
    onLoad: function () {
        console.log('onLoad')
        var that = this
        //调用应用实例的方法获取全局数据
        app.getUserInfo(function (userInfo) {
            //更新数据
            that.setData({
                userInfo: userInfo
            })
        })

    }
})
