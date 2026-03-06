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
  { id: 2, title: "第二日：提高悟性", teaser: "加入心仪门派，初窥门径" },
  { id: 3, title: "第三日：肝脑涂地", teaser: "闭关挂机，基内搏击闪躲冲140" },
  { id: 4, title: "第四日：脱胎换骨", teaser: "狂吃丹药，属性冲刺极限" },
  { id: 5, title: "第五日：名扬天下", teaser: "武功大成，出关实战打点" },
];

// 卷一步骤数据
export const VOLUME1_STEPS = [
  { index: 1, title: "账号初次登录", imageSrc: "images/新建账号1(登录账号).png" },
  { index: 2, title: "修改密码暗码", imageSrc: "images/新建账号2(修改密码暗码).png" },
  { index: 3, title: "选出生城市", imageSrc: "images/新建账号3(选城市).png" },
  { index: 4, title: "反复洗髓 (ROLL出悟性初始25)", imageSrc: "images/新建账号4(ROLL属性).png" },
  { index: 5, title: "天资分配 (5点自由点全加悟性)", imageSrc: "images/新建账号5(悟性30).png" },
  { index: 6, title: "官府认证 (防沉迷验证)", imageSrc: "images/新建账号6(防沉迷系统).png" },
  { index: 7, title: "造册登记 (系统录入)", imageSrc: "images/新建账号7(防沉迷系统录入).png" },
  { index: 8, title: "验明正身 (认证成功)", imageSrc: "images/新建账号8(防沉迷认证成功).png" },
  { index: 9, title: "明眸夜视 (特殊开关优化)", imageSrc: "images/新建账号9(特殊开关).png" },
  { index: 10, title: "方寸大千 (视窗模式)", imageSrc: "images/新建账号10(视窗模式).png" },
  { index: 11, title: "官网充值入口", imageSrc: "images/新建账号11官网充值入口.png" },
  { index: 12, title: "充值页面", imageSrc: "images/新建账号12充值页面.png" },
];

// 卷二步骤数据
export const VOLUME2_STEPS = [
  { index: 1, title: "兑换银票 (查看并使用20W)", imageSrc: "images/工具购买1.查看并使用身上银票20W.png" },
  { index: 2, title: "寻觅商贾 (找到工具商)", imageSrc: "images/工具购买2.找到工具商.png" },
  { index: 3, title: "储蓄有道 (购买随身钱庄)", imageSrc: "images/工具购买3.购买随身钱庄.png" },
  { index: 4, title: "露宿荒野 (购买帐篷)", imageSrc: "images/工具购买4.购买帐篷.png" },
  { index: 5, title: "时光宝盒 (获得神佑丹)", imageSrc: "images/工具购买5.鼠标右键打开时光宝盒得到神佑丹.png" },
];

// 卷三步骤数据
export const VOLUME3_STEPS = [
  { index: 1, title: "寻访武馆 (查看地图)", imageSrc: "images/扬州武馆1 - 查看地图走到扬州武馆.png" },
  { index: 2, title: "叩首拜师 (拜师汪龙)", imageSrc: "images/扬州武馆2 - 拜师汪龙学武功.png" },
  { index: 3, title: "应对考问 (对话选1)", imageSrc: "images/扬州武馆3 - 拜师汪龙学武功对话选1.png" },
  { index: 4, title: "束脩之礼 (交300金庸币)", imageSrc: "images/扬州武馆4 - 拜师交300金庸币.png" },
  { index: 5, title: "浏览绝学 (查看武功列表)", imageSrc: "images/扬州武馆5 - 查看武功列表.png" },
  { index: 6, title: "领悟招式 (双击习得双龙出海)", imageSrc: "images/扬州武馆6 - 双击习得双龙出海.png" },
  { index: 7, title: "勤加研习 (加学点至双龙出海)", imageSrc: "images/扬州武馆7 - 右键学点全部加到双龙出海.png" },
  { index: 8, title: "安营扎寨 (用帐篷睡一觉恢复)", imageSrc: "images/扬州武馆8 - 发现精力没了右键身上的帐篷睡一觉满了.png" },
  { index: 9, title: "内练一口气 (点数加基础内功)", imageSrc: "images/扬州武馆9 - 剩余点数加到基础内功.png" },
  { index: 10, title: "学成下山 (扬州武馆毕业)", imageSrc: "images/扬州武馆10 - 扬州武馆毕业.png" },
];

// 卷四步骤数据
export const VOLUME4_STEPS = [
  { index: 1, title: "游侠环境配置入口", imageSrc: "images/游侠1环境设置入口.png" },
  { index: 2, title: "环境设置-高级设置", imageSrc: "images/游侠2环境设置高级设置.png" },
  { index: 3, title: "打点设置入口", imageSrc: "images/游侠3打点入口.png" },
  { index: 4, title: "打点基本设置", imageSrc: "images/游侠4打点基本设置.png" },
  { index: 5, title: "打点进阶设置", imageSrc: "images/游侠5打点进阶设置.png" },
  { index: 6, title: "打点高级设置", imageSrc: "images/游侠6打点高级设置.png" },
  { index: 7, title: "打点捡拣宝设置", imageSrc: "images/游侠7捡拣宝设置.png" },
  { index: 8, title: "娱乐商城入口", imageSrc: "images/游侠8娱乐商城入口.png" },
  { index: 9, title: "购买学点令牌", imageSrc: "images/游侠9购买学点令牌.png" },
  { index: 10, title: "购买记忆天书(空)", imageSrc: "images/游侠10购买记忆天书(空).png" },
  { index: 11, title: "购买网龙银票", imageSrc: "images/游侠11购买网龙银票.png" },
  { index: 12, title: "购买娃娃车", imageSrc: "images/游侠12购买娃娃车.png" },
  { index: 13, title: "购买负重袋", imageSrc: "images/游侠13购买负重袋.png" },
  { index: 14, title: "购买百纳袋", imageSrc: "images/游侠14购买百纳袋.png" },
  { index: 15, title: "找到已购买的学点金牌", imageSrc: "images/游侠15内找到已购买的学点金牌.png" },
  { index: 16, title: "使用学点金牌", imageSrc: "images/游侠16内找到右键单击使用学点金牌.png" },
  { index: 17, title: "启动打点", imageSrc: "images/游侠17启动打点.png" },
  { index: 18, title: "打点成功", imageSrc: "images/游侠18打点成功.png" },
];

// ==================== 第二日：拜师学艺 ====================
export const DAY2_VOLUMES = {
  volume1: {
    title: "卷一 · 门派抉择",
    subtitle: "各大门派特色一览",
    color: "blue",
    steps: [
      { index: 1, title: "门派总览（少林、武当、峨眉等）", content: "各门派武学特色与定位介绍" },
      { index: 2, title: "门派入门条件", content: "属性要求、性别限制等" },
      { index: 3, title: "门派武学路线", content: "各门派核心武功与发展方向" },
    ]
  },
  volume2: {
    title: "卷二 · 正式拜师",
    subtitle: "完成入门仪式",
    color: "purple",
    steps: [
      { index: 1, title: "前往门派驻地", content: "使用驿站或跑图到达" },
      { index: 2, title: "拜见掌门", content: "与掌门对话完成拜师" },
      { index: 3, title: "入门考验", content: "部分门派需要完成考验任务" },
    ]
  },
  volume3: {
    title: "卷三 · 初窥门径",
    subtitle: "学习门派基础武功",
    color: "emerald",
    steps: [
      { index: 1, title: "查看门派武功列表", content: "了解可学习的武功" },
      { index: 2, title: "学习入门武功", content: "优先学习核心攻击技能" },
      { index: 3, title: "武功升级", content: "使用学点提升武功等级" },
    ]
  }
};

// ==================== 第三日：肝脑涂地 ====================
export const DAY3_VOLUMES = {
  volume1: {
    title: "卷一 · 基础内功",
    subtitle: "冲击140级大关",
    color: "red",
    steps: [
      { index: 1, title: "寻找NPC白自在", content: "位于京城，可消点到140级" },
      { index: 2, title: "消点技巧", content: "使用神佑丹加速消点" },
      { index: 3, title: "自修141-150", content: "140级后需自修提升" },
      { index: 4, title: "基内属性加成", content: "每10级+1根骨，满级+14根骨" },
    ]
  },
  volume2: {
    title: "卷二 · 搏击格斗",
    subtitle: "拳类武学根基",
    color: "amber",
    steps: [
      { index: 1, title: "消点位置", content: "同样找白自在消点" },
      { index: 2, title: "140级上限", content: "搏击格斗上限140级" },
      { index: 3, title: "属性加成", content: "每10级+1臂力，满级+14臂力" },
      { index: 4, title: "武学关联", content: "决定拳类武学自修上限" },
    ]
  },
  volume3: {
    title: "卷三 · 闪躲纵跃",
    subtitle: "生存能力根基",
    color: "cyan",
    steps: [
      { index: 1, title: "消点位置", content: "白自在处消点" },
      { index: 2, title: "140级上限", content: "闪躲纵跃上限140级" },
      { index: 3, title: "属性加成", content: "每10级+1机敏，满级+14机敏" },
      { index: 4, title: "闪避效果", content: "提升战斗中的闪避概率" },
    ]
  }
};

// ==================== 第四日：脱胎换骨 ====================
export const DAY4_VOLUMES = {
  volume1: {
    title: "卷一 · 属性丹药",
    subtitle: "永久提升先天属性",
    color: "rose",
    steps: [
      { index: 1, title: "腊八粥", content: "悟性+3，限量使用" },
      { index: 2, title: "脱胎换骨丹", content: "随机属性+1" },
      { index: 3, title: "悟性丹/仙丹", content: "专门提升悟性" },
      { index: 4, title: "任意属性丹", content: "指定属性+1，共10颗" },
    ]
  },
  volume2: {
    title: "卷二 · 装备加成",
    subtitle: "穿戴提升属性",
    color: "violet",
    steps: [
      { index: 1, title: "天勤套装", content: "帽子、护手、袍、靴" },
      { index: 2, title: "神悟武器", content: "悟性+3" },
      { index: 3, title: "破军披风", content: "悟性+7" },
      { index: 4, title: "玄武项链", content: "悟性+9（可借用）" },
    ]
  },
  volume3: {
    title: "卷三 · 属性极限",
    subtitle: "冲刺属性上限",
    color: "orange",
    steps: [
      { index: 1, title: "属性上限", content: "先天属性理论上限100+" },
      { index: 2, title: "计算公式", content: "初始+基本功+丹药+装备" },
      { index: 3, title: "优先顺序", content: "先基本功，后丹药" },
    ]
  }
};

// ==================== 第五日：名扬天下 ====================
export const DAY5_VOLUMES = {
  volume1: {
    title: "卷一 · 实战准备",
    subtitle: "出关前的检查",
    color: "teal",
    steps: [
      { index: 1, title: "武功等级检查", content: "确保核心武功已练好" },
      { index: 2, title: "装备穿戴", content: "检查装备是否齐全" },
      { index: 3, title: "物品准备", content: "药水、传送符等" },
    ]
  },
  volume2: {
    title: "卷二 · 打点圣地",
    subtitle: "高效获取学点",
    color: "indigo",
    steps: [
      { index: 1, title: "打点地图选择", content: "根据等级选择合适地点" },
      { index: 2, title: "组队打点", content: "组队效率更高" },
      { index: 3, title: "自动挂机设置", content: "游侠挂机参数配置" },
    ]
  },
  volume3: {
    title: "卷三 · 名声获取",
    subtitle: "提升江湖地位",
    color: "pink",
    steps: [
      { index: 1, title: "运镖任务", content: "稳定的名声来源" },
      { index: 2, title: "帮派任务", content: "加入帮派后可接" },
      { index: 3, title: "江湖历练", content: "参与各类活动" },
    ]
  },
  volume4: {
    title: "卷四 · 进阶之路",
    subtitle: "后续发展方向",
    color: "slate",
    steps: [
      { index: 1, title: "绝学获取", content: "学习门派绝学" },
      { index: 2, title: "二转准备", content: "角色转生规划" },
      { index: 3, title: "PVP竞技", content: "参与武林大会" },
    ]
  }
};

// 卷配置的颜色映射
export const VOLUME_COLORS = {
  amber: {
    gradient: "from-amber-800 via-amber-700 to-amber-900",
    border: "border-amber-900/50",
    innerBorder: "border-amber-400/30",
    bg: "bg-amber-900/50",
    text: "text-amber-200",
    subtext: "text-amber-300/80"
  },
  red: {
    gradient: "from-red-900 via-red-800 to-red-950",
    border: "border-red-950",
    innerBorder: "border-red-400/30",
    bg: "bg-red-950/50",
    text: "text-red-200",
    subtext: "text-red-300/80"
  },
  purple: {
    gradient: "from-purple-900 via-indigo-900 to-purple-950",
    border: "border-purple-950",
    innerBorder: "border-purple-400/30",
    bg: "bg-purple-950/50",
    text: "text-purple-200",
    subtext: "text-purple-300/80"
  },
  emerald: {
    gradient: "from-emerald-900 via-teal-900 to-emerald-950",
    border: "border-emerald-950",
    innerBorder: "border-emerald-400/30",
    bg: "bg-emerald-950/50",
    text: "text-emerald-200",
    subtext: "text-emerald-300/80"
  },
  blue: {
    gradient: "from-blue-900 via-indigo-900 to-blue-950",
    border: "border-blue-950",
    innerBorder: "border-blue-400/30",
    bg: "bg-blue-950/50",
    text: "text-blue-200",
    subtext: "text-blue-300/80"
  },
  cyan: {
    gradient: "from-cyan-900 via-teal-900 to-cyan-950",
    border: "border-cyan-950",
    innerBorder: "border-cyan-400/30",
    bg: "bg-cyan-950/50",
    text: "text-cyan-200",
    subtext: "text-cyan-300/80"
  },
  rose: {
    gradient: "from-rose-900 via-pink-900 to-rose-950",
    border: "border-rose-950",
    innerBorder: "border-rose-400/30",
    bg: "bg-rose-950/50",
    text: "text-rose-200",
    subtext: "text-rose-300/80"
  },
  violet: {
    gradient: "from-violet-900 via-purple-900 to-violet-950",
    border: "border-violet-950",
    innerBorder: "border-violet-400/30",
    bg: "bg-violet-950/50",
    text: "text-violet-200",
    subtext: "text-violet-300/80"
  },
  orange: {
    gradient: "from-orange-900 via-amber-900 to-orange-950",
    border: "border-orange-950",
    innerBorder: "border-orange-400/30",
    bg: "bg-orange-950/50",
    text: "text-orange-200",
    subtext: "text-orange-300/80"
  },
  teal: {
    gradient: "from-teal-900 via-cyan-900 to-teal-950",
    border: "border-teal-950",
    innerBorder: "border-teal-400/30",
    bg: "bg-teal-950/50",
    text: "text-teal-200",
    subtext: "text-teal-300/80"
  },
  indigo: {
    gradient: "from-indigo-900 via-blue-900 to-indigo-950",
    border: "border-indigo-950",
    innerBorder: "border-indigo-400/30",
    bg: "bg-indigo-950/50",
    text: "text-indigo-200",
    subtext: "text-indigo-300/80"
  },
  pink: {
    gradient: "from-pink-900 via-rose-900 to-pink-950",
    border: "border-pink-950",
    innerBorder: "border-pink-400/30",
    bg: "bg-pink-950/50",
    text: "text-pink-200",
    subtext: "text-pink-300/80"
  },
  slate: {
    gradient: "from-slate-800 via-gray-900 to-slate-950",
    border: "border-slate-950",
    innerBorder: "border-slate-400/30",
    bg: "bg-slate-950/50",
    text: "text-slate-200",
    subtext: "text-slate-300/80"
  }
};
