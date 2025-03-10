{
    id: 'com.tencent.mobileqq',
    name: 'QQ',
    groups: [
      {
        key: 44,
        name: 'ffaff',
        desc: 'gg',
        rules: [
            {
              name: '从红包结算界面返回',
              preKeys: [1, 3],
              activityIds:
                'cooperation.qwallet.plugin.QWalletToolFragmentActivity',
              matches: 'RelativeLayout[childCount=3] > [text="红包记录"] -2 @[id="com.tencent.mobileqq:id/mnw"]',
              snapshotUrls: 'https://i.gkd.li/import/14160648',
            },
            {
              key: 3,
              name: '点击红包-开',
              activityIds:
                'cooperation.qwallet.plugin.QWalletToolFragmentActivity',
              matches: 'ViewGroup[childCount=4] > ViewGroup[childCount=2] > [desc="拆红包"][clickable=true]',
              snapshotUrls: 
                'https://i.gkd.li/import/14160696', 

            },
             {
              preKeys: [1,],
              name: '点击输入口令',
              activityIds:
                'com.tencent.mobileqq.activity.SplashActivity',
              {matches: 'LinearLayout[childCount=3] > TextView + View + TextView[id="com.tencent.mobileqq:id/awg"] ',
},
              {matches: '@[vid="send_btn"]',},
              snapshotUrls: 
                'https://i.gkd.li/import/14160696', 

            },
            {
              key: 4,
              name: '领完了',
              activityIds:
                'cooperation.qwallet.plugin.QWalletToolFragmentActivity',
              // Button[desc="开"] 会在出现金币动画时会消失
              matches: '@[id="com.tencent.mobileqq:id/az7"]',
              snapshotUrls: 
                'https://i.gkd.li/import/14166388', // 额外增加,金币动画的快照,规则不在这个快照上运行

            },
            {
              key: 1,
              name: '点击别人发的红包',
              activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
              //  不区分是自己发的红包还是别人发的
              //  不区分这个红包是否被领取过@[id="com.tencent.mobileqq:id/az7"]
              matches:
                'TextView[text="普通红包"||text="拼手气红包"||text="文字口令红包"] -1 ViewGroup[childCount=5||childCount=6] > @[id="com.tencent.mobileqq:id/qme"]',
              snapshotUrls: 'https://i.gkd.li/import/12567637',
            },
          ],
      },
    ],
  }{
    id: 'com.tencent.mobileqq',
    name: 'QQ',
    groups: [
      {
        key: 44,
        name: 'ffaff',
        desc: 'gg',
        rules: [
            {
              name: '从红包结算界面返回',
              preKeys: [1, 3],
              activityIds:
                'cooperation.qwallet.plugin.QWalletToolFragmentActivity',
              matches: 'RelativeLayout[childCount=3] > [text="红包记录"] -2 @[id="com.tencent.mobileqq:id/mnw"]',
              snapshotUrls: 'https://i.gkd.li/import/14160648',
            },
            {
              key: 3,
              name: '点击红包-开',
              activityIds:
                'cooperation.qwallet.plugin.QWalletToolFragmentActivity',
              matches: 'ViewGroup[childCount=4] > ViewGroup[childCount=2] > [desc="拆红包"][clickable=true]',
              snapshotUrls: 
                'https://i.gkd.li/import/14160696', 

            },
             {
              preKeys: [1,],
              name: '点击输入口令',
              activityIds:
                'com.tencent.mobileqq.activity.SplashActivity',
              {matches: 'LinearLayout[childCount=3] > TextView + View + TextView[id="com.tencent.mobileqq:id/awg"] ',
},
              {matches: '@[vid="send_btn"]',},
              snapshotUrls: 
                'https://i.gkd.li/import/14160696', 

            },
            {
              key: 4,
              name: '领完了',
              activityIds:
                'cooperation.qwallet.plugin.QWalletToolFragmentActivity',
              // Button[desc="开"] 会在出现金币动画时会消失
              matches: '@[id="com.tencent.mobileqq:id/az7"]',
              snapshotUrls: 
                'https://i.gkd.li/import/14166388', // 额外增加,金币动画的快照,规则不在这个快照上运行

            },
            {
              key: 1,
              name: '点击别人发的红包',
              activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
              //  不区分是自己发的红包还是别人发的
              //  不区分这个红包是否被领取过@[id="com.tencent.mobileqq:id/az7"]
              matches:
                'TextView[text="普通红包"||text="拼手气红包"||text="文字口令红包"] -1 ViewGroup[childCount=5||childCount=6] > @[id="com.tencent.mobileqq:id/qme"]',
              snapshotUrls: 'https://i.gkd.li/import/12567637',
            },
          ],
      },
    ],
  }{
    id: 'com.tencent.mobileqq',
    name: 'QQ',
    groups: [
      {
        key: 44,
        name: 'ffaff',
        desc: 'gg',
        rules: [
            {
              name: '从红包结算界面返回',
              preKeys: [1, 3],
              activityIds:
                'cooperation.qwallet.plugin.QWalletToolFragmentActivity',
              matches: 'RelativeLayout[childCount=3] > [text="红包记录"] -2 @[id="com.tencent.mobileqq:id/mnw"]',
              snapshotUrls: 'https://i.gkd.li/import/14160648',
            },
            {
              key: 3,
              name: '点击红包-开',
              activityIds:
                'cooperation.qwallet.plugin.QWalletToolFragmentActivity',
              matches: 'ViewGroup[childCount=4] > ViewGroup[childCount=2] > [desc="拆红包"][clickable=true]',
              snapshotUrls: 
                'https://i.gkd.li/import/14160696', 

            },
             {
              preKeys: [1,],
              name: '点击输入口令',
              activityIds:
                'com.tencent.mobileqq.activity.SplashActivity',
              {matches: 'LinearLayout[childCount=3] > TextView + View + TextView[id="com.tencent.mobileqq:id/awg"] ',
},
              {matches: '@[vid="send_btn"]',},
              snapshotUrls: 
                'https://i.gkd.li/import/14160696', 

            },
            {
              key: 4,
              name: '领完了',
              activityIds:
                'cooperation.qwallet.plugin.QWalletToolFragmentActivity',
              // Button[desc="开"] 会在出现金币动画时会消失
              matches: '@[id="com.tencent.mobileqq:id/az7"]',
              snapshotUrls: 
                'https://i.gkd.li/import/14166388', // 额外增加,金币动画的快照,规则不在这个快照上运行

            },
            {
              key: 1,
              name: '点击别人发的红包',
              activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
              //  不区分是自己发的红包还是别人发的
              //  不区分这个红包是否被领取过@[id="com.tencent.mobileqq:id/az7"]
              matches:
                'TextView[text="普通红包"||text="拼手气红包"||text="文字口令红包"] -1 ViewGroup[childCount=5||childCount=6] > @[id="com.tencent.mobileqq:id/qme"]',
              snapshotUrls: 'https://i.gkd.li/import/12567637',
            },
          ],
      },
    ],
  }
