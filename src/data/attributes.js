// 人物属性数据
export const ATTRIBUTES_DATA = {
  panel4: [
    { name: "臂力", desc: "负重多，伤害高。学武功/触发事件前置要求。" },
    { name: "定力", desc: "影响状态恢复。定力越高时恢复状态的时间越快。" },
    { name: "悟性", desc: "影响消耗学点。数值越高，消点所需学点越少。" },
    { name: "根骨", desc: "影响气血成长。拜师及绝学常见前置条件。" },
    { name: "福缘", desc: "影响奇遇触发。绝学及特殊任务核心要求。" },
    { name: "机敏", desc: "影响攻击速度与闪避概率。" }
  ],
  panel3: [
    { name: "名声", desc: "越高在游戏中可发生的事件越多。例如担任帮主须一定名声，保镖与驿站送信皆能提升名声值。", req: "学武功/触发事件前置要求\n游侠打点同时运镖就行" },
    { name: "江湖历练", desc: "该角色在游戏中所经历事件的参考值。", req: "学武功/触发事件前置要求\n游侠打点同时运镖就行" }
  ],
  panel1Core: [
    { 
      name: "基本内功", 
      effect: ["1. 每增加10级，游戏角色增加1点根骨", "2. 决定内力上限(每一级增加5点内力和8点气血)", "3. 学习绝学、绝内时常见的属性条件之一"], 
      limit: ["139.99级 (吃神佑丹，消65200学点) - 141", "自修 141 - 150", "消点NPC：白自在"] 
    },
    { 
      name: "搏击格斗", 
      effect: ["1. 每增加10级，游戏角色增加1点臂力", "2. 等级越高拳类武学攻击力越高", "3. 等级*1.5 = 拳类武学自修等级上限", "4. 消满则拳类武学可自修到250级"], 
      limit: ["140级上限", "消点NPC：白自在"] 
    },
    { 
      name: "闪躲纵跃", 
      effect: ["1. 每增加10级，游戏角色增加1点机敏", "2. 增加战斗中闪避攻击概率"], 
      limit: ["140级上限", "消点NPC：白自在"] 
    }
  ],
  panel1Weapon: [
    { name: "基本剑法", effect: ["1. 增加剑类武学攻击力", "2. 等级*1.5 = 剑类武学自修等级上限", "3. 消满则剑类武学可自修到250级"] },
    { name: "基本刀法", effect: ["1. 增加刀类武学攻击力", "2. 等级*1.5 = 刀类武学自修等级上限", "3. 消满则刀类武学可自修到250级"] },
    { name: "基本鞭法", effect: ["1. 增加鞭类武学攻击力", "2. 等级*1.5 = 鞭类武学自修等级上限", "3. 消满则鞭类武学可自修到250级"] },
    { name: "基本棍法", effect: ["1. 增加棍类武学攻击力", "2. 等级*1.5 = 棍类武学自修等级上限", "3. 消满则棍类武学可自修到250级"] },
    { name: "基本枪法", effect: ["1. 增加枪类武学攻击力", "2. 等级*1.5 = 枪类武学自修等级上限", "3. 消满则枪类冲学可自修到250级"] },
    { name: "基本刺术", effect: ["增加发动点穴攻击时的伤害和命中率"] },
    { name: "基本阵法", effect: ["增加发动阵法时的威力（需结合具体阵法书籍）"] } 
  ]
};

// 悟性30-90冲刺数据
export const WUXING_STEPS = [
  { id: 1, name: "初始人物ROLL属性", add: 25, total: 25, note: "" },
  { id: 2, name: "初始人物5点自由点", add: 5, total: 30, note: "" },
  { id: 3, name: "读书识字100级", add: 10, total: 40, note: "" },
  { id: 4, name: "商城：悟性丹", add: 5, total: 45, note: "一生只能吃5颗，二转前可吃" },
  { id: 5, name: "商城：悟性仙丹", add: 10, total: 55, note: "一生只能吃10颗，二转前可吃" },
  { id: 6, name: "商城：许愿红蛋", add: 3, total: 58, note: "过生日指定属性，一生3颗，二转前可吃" },
  { id: 7, name: "天勤帽", add: 2, total: 60, note: "" },
  { id: 8, name: "天勤护手", add: 2, total: 62, note: "" },
  { id: 9, name: "天勤袍", add: 3, total: 65, note: "" },
  { id: 10, name: "天勤靴", add: 3, total: 68, note: "" },
  { id: 11, name: "神悟武器", add: 3, total: 71, note: "" },
  { id: 12, name: "破军披风", add: 7, total: 78, note: "" },
  { id: 13, name: "升级版玄武项链", add: 9, total: 90, note: "找人借用即可 (+5基础悟性 +4附加悟性)", isTarget: true },
  { id: 14, name: "任意属性丹", add: 10, total: 100, note: "指定悟性+1，一生只能使用10颗", isSkip: true }
];

// 江湖历练数据
export const DAYS_DATA = [
  { id: 1, title: "第一日：初入江湖", teaser: "熟悉基础操作，分配初始属性点" },
  { id: 2, title: "第二日：拜师学艺", teaser: "加入心仪门派，初窥门径" },
  { id: 3, title: "第三日：肝脑涂地", teaser: "闭关挂机，基内搏击闪躲冲140" },
  { id: 4, title: "第四日：脱胎换骨", teaser: "狂吃丹药，属性冲刺极限" },
  { id: 5, title: "第五日：名扬天下", teaser: "武功大成，出关实战打点" },
];

// 卷一步骤数据
export const VOLUME1_STEPS = [
  { index: 1, title: "账号初次登录", imageSrc: "public/images/新建账号1(登录账号).png" },
  { index: 2, title: "修改密码暗码", imageSrc: "public/images/新建账号2(修改密码暗码).png" },
  { index: 3, title: "选出生城市", imageSrc: "public/images/新建账号3(选城市).png" },
  { index: 4, title: "反复洗髓 (ROLL出悟性初始25)", imageSrc: "public/images/新建账号4(ROLL属性).png" },
  { index: 5, title: "天资分配 (5点自由点全加悟性)", imageSrc: "public/images/新建账号5(悟性30).png" },
  { index: 6, title: "官府认证 (防沉迷验证)", imageSrc: "public/images/新建账号6(防沉迷系统).png" },
  { index: 7, title: "造册登记 (系统录入)", imageSrc: "public/images/新建账号7(防沉迷系统录入).png" },
  { index: 8, title: "验明正身 (认证成功)", imageSrc: "public/images/新建账号8(防沉迷认证成功).png" },
  { index: 9, title: "明眸夜视 (特殊开关优化)", imageSrc: "public/images/新建账号9(特殊开关).png" },
  { index: 10, title: "方寸大千 (视窗模式)", imageSrc: "public/images/新建账号10(视窗模式).png" },
  { index: 11, title: "官网充值入口", imageSrc: "public/images/新建账号11官网充值入口.png" },
  { index: 12, title: "充值页面", imageSrc: "public/images/新建账号12充值页面.png" },
];

// 卷二步骤数据
export const VOLUME2_STEPS = [
  { index: 1, title: "兑换银票 (查看并使用20W)", imageSrc: "public/images/工具购买1.查看并使用身上银票20W.png" },
  { index: 2, title: "寻觅商贾 (找到工具商)", imageSrc: "public/images/工具购买2.找到工具商.png" },
  { index: 3, title: "储蓄有道 (购买随身钱庄)", imageSrc: "public/images/工具购买3.购买随身钱庄.png" },
  { index: 4, title: "露宿荒野 (购买帐篷)", imageSrc: "public/images/工具购买4.购买帐篷.png" },
  { index: 5, title: "时光宝盒 (获得神佑丹)", imageSrc: "public/images/工具购买5.鼠标右键打开时光宝盒得到神佑丹.png" },
];

// 卷三步骤数据
export const VOLUME3_STEPS = [
  { index: 1, title: "寻访武馆 (查看地图)", imageSrc: "public/images/扬州武馆1 - 查看地图走到扬州武馆.png" },
  { index: 2, title: "叩首拜师 (拜师汪龙)", imageSrc: "public/images/扬州武馆2 - 拜师汪龙学武功.png" },
  { index: 3, title: "应对考问 (对话选1)", imageSrc: "public/images/扬州武馆3 - 拜师汪龙学武功对话选1.png" },
  { index: 4, title: "束脩之礼 (交300金庸币)", imageSrc: "public/images/扬州武馆4 - 拜师交300金庸币.png" },
  { index: 5, title: "浏览绝学 (查看武功列表)", imageSrc: "public/images/扬州武馆5 - 查看武功列表.png" },
  { index: 6, title: "领悟招式 (双击习得双龙出海)", imageSrc: "public/images/扬州武馆6 - 双击习得双龙出海.png" },
  { index: 7, title: "勤加研习 (加学点至双龙出海)", imageSrc: "public/images/扬州武馆7 - 右键学点全部加到双龙出海.png" },
  { index: 8, title: "安营扎寨 (用帐篷睡一觉恢复)", imageSrc: "public/images/扬州武馆8 - 发现精力没了右键身上的帐篷睡一觉满了.png" },
  { index: 9, title: "内练一口气 (点数加基础内功)", imageSrc: "public/images/扬州武馆9 - 剩余点数加到基础内功.png" },
  { index: 10, title: "学成下山 (扬州武馆毕业)", imageSrc: "public/images/扬州武馆10 - 扬州武馆毕业.png" },
];

// 卷四步骤数据
export const VOLUME4_STEPS = [
  { index: 1, title: "游侠环境配置入口", imageSrc: "public/images/游侠1环境设置入口.png" },
  { index: 2, title: "环境设置-高级设置", imageSrc: "public/images/游侠2环境设置高级设置.png" },
  { index: 3, title: "打点设置入口", imageSrc: "public/images/游侠3打点入口.png" },
  { index: 4, title: "打点基本设置", imageSrc: "public/images/游侠4打点基本设置.png" },
  { index: 5, title: "打点进阶设置", imageSrc: "public/images/游侠5打点进阶设置.png" },
  { index: 6, title: "打点高级设置", imageSrc: "public/images/游侠6打点高级设置.png" },
  { index: 7, title: "打点捡拣宝设置", imageSrc: "public/images/游侠7捡拣宝设置.png" },
  { index: 8, title: "娱乐商城入口", imageSrc: "public/images/游侠8娱乐商城入口.png" },
  { index: 9, title: "购买学点令牌", imageSrc: "public/images/游侠9购买学点令牌.png" },
  { index: 10, title: "购买记忆天书(空)", imageSrc: "public/images/游侠10购买记忆天书(空).png" },
  { index: 11, title: "购买网龙银票", imageSrc: "public/images/游侠11购买网龙银票.png" },
  { index: 12, title: "购买娃娃车", imageSrc: "public/images/游侠12购买娃娃车.png" },
  { index: 13, title: "购买负重袋", imageSrc: "public/images/游侠13购买负重袋.png" },
  { index: 14, title: "购买百纳袋", imageSrc: "public/images/游侠14购买百纳袋.png" },
  { index: 15, title: "找到已购买的学点金牌", imageSrc: "public/images/游侠15内找到已购买的学点金牌.png" },
  { index: 16, title: "使用学点金牌", imageSrc: "public/images/游侠16内找到右键单击使用学点金牌.png" },
  { index: 17, title: "启动打点", imageSrc: "public/images/游侠17启动打点.png" },
  { index: 18, title: "打点成功", imageSrc: "public/images/游侠18打点成功.png" },
];
