let dishes = [
    {
        english_name: 'Bread roll with pork floss and scallions',
        chinese_name: '肉松面包卷',
        category: 'chinese_pastry',
        date: '2018-10-23',
        image: 'https://i.imgur.com/LG82nky.jpg'
    },
    {
        english_name: 'Eggs benedict',
        chinese_name: '班尼迪克蛋',
        category: 'american_breakfast',
        date: '2018-11-08',
        image: 'https://i.imgur.com/7ks5csx.jpg'
    },
    {
        english_name: 'Chiffon cake',
        chinese_name: '戚风蛋糕',
        category: 'western_pastry',
        date: '2018-10-17',
        image: 'https://i.imgur.com/pLiXta1.jpg'
    },
    {
        english_name: 'Green chicken and corn curry',
        chinese_name: '玉米鸡肉绿咖喱',
        category: 'thai',
        date: '2018-10-11',
        image: 'https://i.imgur.com/wQWGOOg.jpg'
    },
    {
        english_name: 'Mooncake',
        chinese_name: '广式月饼',
        category: 'chinese_pastry',
        date: '2018-09-21',
        image: 'https://i.imgur.com/bvEMrzN.jpg'
    },
    {
        english_name: 'Sweet and sour bean sprout stir-fry',
        chinese_name: '醋溜豆芽',
        category: 'chinese_comfort',
        date: '2018-09-15',
        image: 'https://i.imgur.com/L7aiHhF.jpg'
    },
    {
        english_name: 'Sautéed diced chicken with chili pepper',
        chinese_name: '辣子鸡丁',
        category: 'chinese',
        date: '2018-09-13',
        image: 'https://i.imgur.com/XC4ZMzv.jpg'
    },
    {
        english_name: 'Golden creamy shrimp balls',
        chinese_name: '金沙虾球',
        category: 'chinese',
        date: '2018-04-06',
        image: 'https://i.imgur.com/68gt4hA.jpg'
    },
    {
        english_name: 'Sweet corn with toasted pine nuts',
        chinese_name: '松仁玉米',
        category: 'chinese',
        date: '2019-05-06',
        image: 'https://i.imgur.com/GmyWO3J.jpg'
    },
    {
        english_name: 'Fried mashed potato balls',
        chinese_name: '炸土豆泥球',
        category: 'american',
        date: '2019-05-06',
        image: 'https://i.imgur.com/WcdxXvU.jpg'
    },
    {
        english_name: 'Water spinach stir-fry with garlic',
        chinese_name: '清炒空心菜',
        category: 'chinese_comfort',
        date: '2018-09-13',
        image: 'https://i.imgur.com/RNJcYwP.jpg'
    },
    {
        english_name: 'Fried haddock fillet',
        chinese_name: '炸黑线鳕片',
        category: 'american',
        date: '2018-09-13',
        image: 'https://i.imgur.com/X6Wj0al.jpg'
    },
    {
        english_name: 'Steamed chicken with chili sauce',
        chinese_name: '口水鸡',
        category: 'chinese',
        date: '2018-09-23',
        image: 'https://i.imgur.com/SMnJVNy.jpg'
    },
    {
        english_name: 'Braised eggplant, potato, and bell pepper',
        chinese_name: '地三鲜',
        category: 'chinese',
        date: '2018-09-17',
        image: 'https://i.imgur.com/HrRODYg.jpg'
    },
    {
        english_name: 'Pan-seared shrimp with chorizo and corn',
        chinese_name: '乔利佐玉米煎虾',
        category: 'american',
        date: '2018-10-05',
        image: 'https://i.imgur.com/0itUUWn.jpg'
    },
    {
        english_name: 'Yuxiang shredded pork',
        chinese_name: '鱼香肉丝',
        category: 'chinese',
        date: '2019-04-30',
        image: 'https://i.imgur.com/7Fn5Wrf.jpg'
    },
    {
        english_name: 'Braised shiitake mushroom with bok choy',
        chinese_name: '浓汤香菇青菜',
        category: 'chinese_comfort',
        date: '2019-05-08',
        image: 'https://i.imgur.com/mdokPb8.jpg'
    },
    {
        english_name: 'Taiwanese fried chicken',
        chinese_name: '盐酥鸡',
        category: 'chinese',
        date: '2019-07-04',
        image: 'https://i.imgur.com/YQNhPSt.jpg'
    },
    {
        english_name: 'Pan-fried shrimp in mushroom sauce',
        chinese_name: '蘑菇浓汁浇虾',
        category: 'original',
        date: '2019-06-05',
        image: 'https://i.imgur.com/ZEaH7Zx.jpg'
    },
    {
        english_name: 'Kimchi',
        chinese_name: '韩国泡菜',
        category: 'korean',
        date: '2013-11-25',
        image: 'https://i.imgur.com/fWXMOEU.jpg'
    },
    {
        english_name: 'Yogurt cheesecake',
        chinese_name: '冻酸奶芝士蛋糕',
        category: 'western_pastry',
        date: '2014-05-17',
        image: 'https://i.imgur.com/r4r7rFa.jpg'
    },
    {
        english_name: 'Fried spring rolls',
        chinese_name: '炸春卷',
        category: 'chinese',
        date: '2014-05-25',
        image: 'https://i.imgur.com/iLPbhxl.jpg'
    },
    {
        english_name: 'Chicken under a brick',
        chinese_name: '搬砖鸡',
        category: 'american',
        date: '2018-11-07',
        image: 'https://i.imgur.com/m43HYQX.jpg'
    },
    {
        english_name: 'Portuguese egg tart',
        chinese_name: '葡式蛋挞',
        category: 'western_pastry',
        date: '2016-06-18',
        image: 'https://i.imgur.com/yvOUcX1.jpg'
    },
    {
        english_name: 'Chinese walnut cookie',
        chinese_name: '宫廷桃酥',
        category: 'chinese_pastry',
        date: '2014-07-13',
        image: 'https://i.imgur.com/mXmxbS1.jpg'
    },
    {
        english_name: 'Italian egg york cookie',
        chinese_name: '玛格丽特饼干',
        category: 'western_pastry',
        date: '2014-05-24',
        image: 'https://i.imgur.com/ZFk7Tbj.jpg'
    },
    {
        english_name: 'Tomato egg drop soup with herbs',
        chinese_name: '清新番茄蛋汤',
        category: 'chinese_comfort',
        date: '2014-07-12',
        image: 'https://i.imgur.com/4NvMHq0.jpg'
    },
    {
        english_name: 'Peppery caramelized chicken breast',
        chinese_name: '黑胡椒焦糖鸡胸肉',
        category: 'original',
        date: '2019-04-28',
        image: 'https://i.imgur.com/vfhFnrt.jpg'
    },
    {
        english_name: 'Deep fried chicken wing',
        chinese_name: '香辣鸡翅',
        category: 'american',
        date: '2018-10-23',
        image: 'https://i.imgur.com/ycdiqHu.jpg'
    },
    {
        english_name: 'Fish fillets in hot chili oil',
        chinese_name: '水煮鱼',
        category: 'chinese',
        date: '2019-05-26',
        image: 'https://i.imgur.com/g6tlQzP.jpg'
    },
    {
        english_name: 'Home-style chow mein with soy sauce',
        chinese_name: '家常酱油炒面',
        category: 'chinese_comfort',
        date: '2018-10-17',
        image: 'https://i.imgur.com/Xf0cHpA.jpg'
    },
    {
        english_name: 'Tim Hortons style iced cappuccino',
        chinese_name: '冰卡布奇诺',
        category: 'desert',
        date: '2019-05-10',
        image: 'https://i.imgur.com/WimUPGo.jpg'
    },
    {
        english_name: 'Nikuman',
        chinese_name: '肉包',
        category: 'chinese_breakfast',
        date: '2016-01-27',
        image: 'https://i.imgur.com/dA3G6F2.jpg'
    },
    {
        english_name: 'Real-deal instant beef noodles',
        chinese_name: '豪华版红烧牛肉面',
        category: 'original',
        date: '2016-03-23',
        image: 'https://i.imgur.com/fjQXEdC.jpg'
    },
    {
        english_name: 'Pork bone soup',
        chinese_name: '韩式猪骨汤',
        category: 'korean',
        date: '2018-06-03',
        image: 'https://i.imgur.com/V1mDhjD.jpg'
    },
    {
        english_name: 'Bibimbap',
        chinese_name: '石锅拌饭',
        category: 'korean',
        date: '2018-06-03',
        image: 'https://i.imgur.com/Lw1Q5sd.jpg'
    },
    {
        english_name: 'Biscotti',
        chinese_name: '意式脆饼',
        category: 'western_pastry',
        date: '2016-02-19',
        image: 'https://i.imgur.com/g0JlPM0.jpg'
    },
    {
        english_name: 'Red bean paste pie (Dorayaki)',
        chinese_name: '铜锣烧',
        category: 'japanese',
        date: '2016-01-27',
        image: 'https://i.imgur.com/eIWf1SI.jpg'
    },
    {
        english_name: 'Soba noodles',
        chinese_name: '荞麦面',
        category: 'japanese',
        date: '2016-07-09',
        image: 'https://i.imgur.com/Pl6oBfQ.jpg'
    },
    {
        english_name: 'Maki roll platter',
        chinese_name: '太卷拼盘',
        category: 'japanese',
        date: '2016-06-28',
        image: 'https://i.imgur.com/AT6qai5.jpg'
    },
    {
        english_name: 'Pan-seared scallops with yellow pepper sauce',
        chinese_name: '煎扇贝配甜黄椒酱',
        category: 'american',
        date: '2019-05-06',
        image: 'https://i.imgur.com/BpB2Mwp.jpg'
    },
    {
        english_name: 'Sweet and sour lotus root slides',
        chinese_name: '酸甜藕片',
        category: 'chinese_comfort',
        date: '2019-05-11',
        image: 'https://i.imgur.com/g9OEHuh.jpg'
    },
    {
        english_name: 'Steamed lobsters',
        chinese_name: '清蒸龙虾',
        category: 'chinese_comfort',
        date: '2019-05-12',
        image: 'https://i.imgur.com/LAC1MJw.jpg'
    },
    {
        english_name: 'Korean style sweet potato appetizer',
        chinese_name: '韩式甜土豆',
        category: 'korean',
        date: '2019-05-24',
        image: 'https://i.imgur.com/G3v75lG.jpg'
    },
    {
        english_name: 'Pan-seared chicken breast',
        chinese_name: '香嫩煎鸡胸',
        category: 'american',
        date: '2019-05-12',
        image: 'https://i.imgur.com/zk2IbB9.jpg'
    },
    {
        english_name: 'California roll',
        chinese_name: '加州卷',
        category: 'japanese',
        date: '2019-05-12',
        image: 'https://i.imgur.com/Q9U9ja6.jpg'
    },
    {
        english_name: 'Handmade pasta in tomato basil sauce',
        chinese_name: '番茄手工意大利面',
        category: 'italian',
        date: '2019-05-11',
        image: 'https://i.imgur.com/jSdHkSf.jpg'
    },
    {
        english_name: 'Sweet olive flower pickled lotus root',
        chinese_name: '酸甜桂花藕片',
        category: 'original',
        date: '2019-05-11',
        image: 'https://i.imgur.com/hGYrxTh.jpg'
    },
    {
        english_name: 'Pad Thai',
        chinese_name: '泰式炒河粉',
        category: 'thai',
        date: '2019-05-22',
        image: 'https://i.imgur.com/Lhnoc0I.jpg'
    },
    {
        english_name: 'Chicken heart stir-fry with cumin and coriander',
        chinese_name: '孜然炒鸡心',
        category: 'chinese_comfort',
        date: '2013-07-15',
        image: 'https://i.imgur.com/RiYn2hK.jpg'
    },
    {
        english_name: 'Braised pork feet with soy beans',
        chinese_name: '黄豆炖猪蹄',
        category: 'chinese',
        date: '2014-03-24',
        image: 'https://i.imgur.com/EUcIyee.jpg'
    },
    {
        english_name: 'Chicken heart stir-fry with finger hot peppers',
        chinese_name: '青椒炒鸡心',
        category: 'chinese_comfort',
        date: '2019-05-10',
        image: 'https://i.imgur.com/ASvy15g.jpg'
    },
    {
        english_name: 'Briased pork ribs with Northern string beans',
        chinese_name: '油豆角炖排骨',
        category: 'chinese_comfort',
        date: '2019-04-26',
        image: 'https://i.imgur.com/k31gIYG.jpg'
    },
    {
        english_name: 'Green bean flavored shaved ice',
        chinese_name: '绿豆刨冰',
        category: 'desert',
        date: '2012-09-28',
        image: 'https://i.imgur.com/PzOZb7W.jpg'
    },
    {
        english_name: 'Picked radish and cucumber salad',
        chinese_name: '腌萝卜黄瓜沙拉',
        category: 'original',
        date: '2018-05-28',
        image: 'https://i.imgur.com/aUolTEt.jpg'
    },
    {
        english_name: 'Fried pork in scoop',
        chinese_name: '锅包肉',
        category: 'chinese',
        date: '2018-09-22',
        image: 'https://i.imgur.com/E5w9xUS.jpg'
    },
    {
        english_name: 'Pineapple cake',
        chinese_name: '凤梨酥',
        category: 'chinese_pastry',
        date: '2018-06-20',
        image: 'https://i.imgur.com/1GhZM1E.png'
    },
    {
        english_name: 'Poached chicken in garlic oil',
        chinese_name: '葱油鸡',
        category: 'chinese',
        date: '2016-07-09',
        image: 'https://i.imgur.com/tABg9eg.jpg'
    },
    {
        english_name: 'Celery stir-fry with cashews',
        chinese_name: '芹菜炒腰果',
        category: 'chinese_comfort',
        date: '2016-05-11',
        image: 'https://i.imgur.com/iJoXCWf.jpg'
    },
    {
        english_name: 'Sweet and sour pork ribs',
        chinese_name: '糖醋排骨',
        category: 'chinese',
        date: '2018-03-13',
        image: 'https://i.imgur.com/wS7XZTM.jpg'
    },
    {
        english_name: 'Seafood scallion pancake',
        chinese_name: '韩式海鲜葱饼',
        category: 'korean',
        date: '2016-05-11',
        image: 'https://i.imgur.com/FE6rkAf.jpg'
    },
    {
        english_name: 'Dry-fried green beans',
        chinese_name: '干煸四季豆',
        category: 'chinese',
        date: '2016-07-09',
        image: 'https://i.imgur.com/rwR3a1g.jpg'
    },
    {
        english_name: 'Romaine lettuce in oyster sauce',
        chinese_name: '蚝油生菜',
        category: 'chinese_comfort',
        date: '2019-05-25',
        image: 'https://i.imgur.com/XcclSPD.jpg'
    },
    {
        english_name: 'Braised snow pear with date and rock sugar',
        chinese_name: '红枣冰糖雪梨',
        category: 'desert',
        date: '2016-03-22',
        image: 'https://i.imgur.com/IK5qyKh.jpg'
    },
    {
        english_name: 'Tofu curd with savory toppings',
        chinese_name: '豆腐脑',
        category: 'chinese_breakfast',
        date: '2019-05-21',
        image: 'https://i.imgur.com/6GSirck.jpg'
    },
    {
        english_name: 'Spanich in soy sauce',
        chinese_name: '凉拌菠菜',
        category: 'chinese_comfort',
        date: '2019-05-26',
        image: 'https://i.imgur.com/lMWyyDm.jpg'
    },
    {
        english_name: 'Beef chow fun',
        chinese_name: '干炒牛河',
        category: 'chinese',
        date: '2019-05-28',
        image: 'https://i.imgur.com/uXZ7F5D.jpg'
    },
    {
        english_name: 'Mango smoothie',
        chinese_name: '芒果奶昔',
        category: 'desert',
        date: '2019-04-28',
        image: 'https://i.imgur.com/5WPZM6R.jpg'
    },
    {
        english_name: 'Daikon radish egg drop soup',
        chinese_name: '萝卜丝蛋汤',
        category: 'chinese_comfort',
        date: '2019-05-04',
        image: 'https://i.imgur.com/sXN45oQ.jpg'
    },
    {
        english_name: 'Spicy beef salad',
        chinese_name: '凉拌麻辣牛肉',
        category: 'chinese',
        date: '2016-03-22',
        image: 'https://i.imgur.com/W6dOLLE.jpg'
    },
    {
        english_name: 'Spicy vermicelli stir-fry',
        chinese_name: '蚂蚁上树',
        category: 'chinese',
        date: '2019-05-30',
        image: 'https://i.imgur.com/tMImRGz.jpg'
    },
    {
        english_name: 'Braised chicken with chestnuts',
        chinese_name: '栗子烧鸡',
        category: 'chinese_comfort',
        date: '2019-05-29',
        image: 'https://i.imgur.com/Y6F4G9P.jpg'
    },
    {
        english_name: 'Carrot juice',
        chinese_name: '胡萝卜汁',
        category: 'desert',
        date: '2019-05-30',
        image: 'https://i.imgur.com/MZwr4Js.jpg'
    },
    {
        english_name: 'Scrambled eggs with chopped cilantro',
        chinese_name: '美式炒蛋',
        category: 'american_breakfast',
        date: '2019-05-30',
        image: 'https://i.imgur.com/SiWdwrL.jpg'
    },
    {
        english_name: 'Fried Chinese chives pockets',
        chinese_name: '韭菜盒子',
        category: 'chinese',
        date: '2021-12-23',
        image: 'https://i.imgur.com/d7D972s.jpg'
    },
    {
        english_name: 'Fresh spring rolls',
        chinese_name: '越南春卷',
        category: 'vietnamese',
        date: '2016-05-11',
        image: 'https://i.imgur.com/cSmrB4a.jpg'
    },
    {
        english_name: 'Naan bread',
        chinese_name: '印度馕',
        category: 'indian',
        date: '2018-09-12',
        image: 'https://i.imgur.com/4sPoL0Q.jpg'
    },
    {
        english_name: 'Chinese mother dough bread',
        chinese_name: '老式面包',
        category: 'chinese_pastry',
        date: '2019-06-06',
        image: 'https://i.imgur.com/wq6ffZZ.jpg'
    },
    {
        english_name: 'Shrimp stir-fry with asparagus',
        chinese_name: '清炒芦笋虾仁',
        category: 'chinese_comfort',
        date: '2019-06-05',
        image: 'https://i.imgur.com/zX5eshU.jpg'
    },
    {
        english_name: 'Mapo tofu',
        chinese_name: '麻婆豆腐',
        category: 'chinese',
        date: '2019-06-02',
        image: 'https://i.imgur.com/weYbq7n.jpg'
    },
    {
        english_name: 'Beef stir-fry in black pepper sauce',
        chinese_name: '黑椒牛柳',
        category: 'chinese',
        date: '2019-06-24',
        image: 'https://i.imgur.com/kN0joN5.jpg'
    },
    {
        english_name: 'Egg fried rice with pickled cabbage',
        chinese_name: '酸菜蛋炒饭',
        category: 'chinese_breakfast',
        date: '2019-06-04',
        image: 'https://i.imgur.com/Ge0vf1v.jpg'
    },
    {
        english_name: 'Baby spinach and fruit salad',
        chinese_name: '嫩菠菜水果沙拉',
        category: 'american',
        date: '2019-06-08',
        image: 'https://i.imgur.com/dC4cVs4.jpg'
    },
    {
        english_name: 'Dry fried enoki mushrooms with cumin',
        chinese_name: '烧烤金针菇',
        category: 'original',
        date: '2019-06-09',
        image: 'https://i.imgur.com/gXUH2Tq.jpg'
    },
    {
        english_name: 'Spicy homemade bean jelly salad',
        chinese_name: '麻辣自制凉粉',
        category: 'chinese',
        date: '2019-06-08',
        image: 'https://i.imgur.com/A72WmI6.jpg'
    },
    {
        english_name: 'Shrimp stir-fry with broccoli',
        chinese_name: '清炒西兰花虾仁',
        category: 'chinese_comfort',
        date: '2019-06-06',
        image: 'https://i.imgur.com/BpVzKkh.jpg'
    },
    {
        english_name: 'Spicy pickled chicken feet',
        chinese_name: '泡椒凤爪',
        category: 'chinese',
        image: 'https://i.imgur.com/Zljksbv.jpg',
        date: '2019-06-25'
    },
    {
        english_name: 'Stir-fry Chinese stem lettuce',
        chinese_name: '清炒莴笋',
        category: 'chinese_comfort',
        date: '2019-06-25',
        image: 'https://i.imgur.com/2puGFuE.jpg'
    },
    {
        english_name: 'Pork ribs and seaweed soup',
        chinese_name: '排骨海带汤',
        category: 'chinese',
        image: 'https://i.imgur.com/ytbVIGk.jpg',
        date: '2019-06-25'
    },
    {
        english_name: 'Chinese style chives frittata',
        chinese_name: '韭菜烘蛋',
        category: 'chinese_breakfast',
        image: 'https://i.imgur.com/3go30SG.jpg',
        date: '2019-06-25'
    },
    {
        english_name: 'Pan-seared belt fish',
        chinese_name: '香煎带鱼',
        category: 'chinese_comfort',
        image: 'https://i.imgur.com/YzWetRp.jpg',
        date: '2019-06-26'
    },
    {
        english_name: 'Cantonese sausage chow mein',
        chinese_name: '腊肠炒面',
        category: 'chinese_comfort',
        date: '2019-06-27',
        image: 'https://i.imgur.com/BIWdNrn.jpg'
    },
    {
        english_name: 'Singapore chow mei fun',
        chinese_name: '星洲炒米粉',
        category: 'american',
        date: '2019-08-25',
        image: 'https://i.imgur.com/wwgV6tG.jpg'
    },
    {
        english_name: 'Scrambled eggs with tomatoes',
        chinese_name: '西红柿炒蛋',
        category: 'chinese_comfort',
        date: '2019-06-28',
        image: 'https://i.imgur.com/yH2lxub.jpg'
    },
    {
        english_name: 'Potato shreds stir-fry with green pepper',
        chinese_name: '青椒土豆丝',
        category: 'chinese_comfort',
        date: '2019-06-28',
        image: 'https://i.imgur.com/szwPtbv.jpg'
    },
    {
        english_name: 'Citrus sous-vide chicken thighs',
        chinese_name: '橙柠香煎鸡',
        category: 'original',
        date: '2019-07-01',
        image: 'https://i.imgur.com/Wep741C.jpg'
    },
    {
        english_name: 'Beef stew',
        chinese_name: '胡萝卜炖牛肉',
        category: 'american',
        date: '2019-07-04',
        image: 'https://i.imgur.com/asys6hG.jpg'
    },
    {
        english_name: 'Pan-fried vanilla chicken wings',
        chinese_name: '盐煎鸡翅',
        category: 'chinese_comfort',
        date: '2016-01-01',
        image: 'https://i.imgur.com/i97E3q5.jpg'
    },
    {
        english_name: 'Lamb skewers',
        chinese_name: '烤羊肉串',
        category: 'chinese',
        date: '2019-07-28',
        image: 'https://i.imgur.com/SxIHrNN.jpg'
    },
    {
        english_name: 'Spicy enoki mushroom salad',
        chinese_name: '辣拌金针菇',
        category: 'chinese_comfort',
        date: '2015-01-15',
        image: 'https://i.imgur.com/NhXTBHv.jpg'
    },
    {
        english_name: 'Chinese corn beef',
        chinese_name: '卤牛腱',
        category: 'chinese',
        date: '2016-03-21',
        image: 'https://i.imgur.com/J6q0mGQ.jpg'
    },
    {
        english_name: 'Sweet and sour cabbage',
        chinese_name: '干锅包菜',
        category: 'chinese',
        date: '2018-09-26',
        image: 'https://i.imgur.com/HImOzrH.jpg'
    },
    {
        english_name: 'Crispy fried pork',
        chinese_name: '小酥肉',
        category: 'chinese',
        date: '2019-11-22',
        image: 'https://i.imgur.com/4iocZqZ.jpg'
    },
    {
        english_name: 'Shaxian style wonton',
        chinese_name: '扁肉馄饨',
        category: 'chinese_breakfast',
        date: '2018-10-17',
        image: 'https://i.imgur.com/w8gaJ5I.jpg'
    },
    {
        english_name: 'Cumin chicken with lantern peppers',
        chinese_name: '灯笼椒香辣孜鸡',
        category: 'original',
        date: '2019-01-06',
        image: 'https://i.imgur.com/kXRNfIw.jpg'
    },
    {
        english_name: 'Corn dogs',
        chinese_name: '玉米狗',
        category: 'american',
        date: '2014-07-15',
        image: 'https://i.imgur.com/N1hCfMa.jpg'
    },
    {
        english_name: 'Corn coriander fritters',
        chinese_name: '玉米香菜炸饼',
        category: 'american',
        date: '2018-10-06',
        image: 'https://i.imgur.com/9wXeGcN.jpg'
    },
    {
        english_name: 'Scrambled eggs with loofah',
        chinese_name: '丝瓜炒蛋',
        category: 'chinese_comfort',
        date: '2019-09-25',
        image: 'https://i.imgur.com/RNC8QuW.jpg'
    },
    {
        english_name: 'Bak choy submerged in stock with crab sticks',
        chinese_name: '蟹棒鸡汤浸白菜',
        category: 'chinese_comfort',
        date: '2019-04-27',
        image: 'https://i.imgur.com/ow0Ext3.jpg'
    },
    {
        english_name: 'Olive oil artisan bread',
        chinese_name: '橄榄油欧包',
        category: 'western_pastry',
        date: '2018-09-21',
        image: 'https://i.imgur.com/AO38o2G.jpg'
    },
    {
        english_name: 'Steamed pork ribs with rice powder',
        chinese_name: '粉蒸排骨',
        category: 'chinese',
        date: '2013-09-28',
        image: 'https://i.imgur.com/tHSUgEj.jpg'
    },
    {
        english_name: 'Braised golden pomfret',
        chinese_name: '红烧金鲳鱼',
        category: 'chinese',
        date: '2013-09-28',
        image: 'https://i.imgur.com/G9tCYns.jpg'
    },
    {
        english_name: 'Spicy and savory pan-fried tofu',
        chinese_name: '家常泡椒豆腐',
        category: 'chinese_comfort',
        date: '2018-10-05',
        image: 'https://i.imgur.com/94pc1WJ.jpg'
    },
    {
        english_name: 'Nanjig salted duck',
        chinese_name: '盐水鸭',
        category: 'chinese',
        date: '2013-10-18',
        image: 'https://i.imgur.com/7WG7Y6x.jpg'
    },
    {
        english_name: 'Honeydew milktea with lychee jelly',
        chinese_name: '哈密瓜奶茶加荔枝椰果',
        category: 'desert',
        date: '2018-08-22',
        image: 'https://i.imgur.com/tm28tm2.jpg'
    },
    {
        english_name: 'Mango flower chiffon cake',
        chinese_name: '芒果花戚风奶油蛋糕',
        category: 'western_pastry',
        date: '2018-08-22',
        image: 'https://i.imgur.com/HlQ46e3.jpg'
    },
    {
        english_name: 'Chives egg crêpe',
        chinese_name: '韭菜薄蛋饼',
        category: 'chinese_breakfast',
        date: '2016-03-21',
        image: 'https://i.imgur.com/VasG7qu.jpg'
    },
    {
        english_name: 'Hand-ripped noodle seared with spicy oil',
        chinese_name: '油泼扯面',
        category: 'chinese',
        date: '2017-07-09',
        image: 'https://i.imgur.com/xOuLTRe.jpg'
    },
    {
        english_name: 'Strawberry banana smoothie',
        chinese_name: '草莓香蕉冰沙',
        category: 'desert',
        date: '2019-09-19',
        image: 'https://i.imgur.com/K9UjNh8.jpg'
    },
    {
        english_name: 'Cantonese chow mein',
        chinese_name: '广式酱油炒面',
        category: 'chinese_comfort',
        date: '2019-09-21',
        image: 'https://i.imgur.com/1BU3zZN.jpg'
    },
    {
        english_name: 'Mango pineapple smoothie',
        chinese_name: '芒果菠萝冰沙',
        category: 'desert',
        date: '2019-09-27',
        image: 'https://i.imgur.com/dRPovbh.jpg'
    },
    {
        english_name: 'Coconut pineapple smoothie',
        chinese_name: '菠萝椰奶冰沙',
        category: 'desert',
        date: '2019-09-27',
        image: 'https://i.imgur.com/8ZEpWuT.jpg'
    },
    {
        english_name: 'Pea sprouts in chicken soup',
        chinese_name: '上汤豆苗',
        category: 'chinese',
        date: '2019-10-09',
        image: 'https://i.imgur.com/lEgHJYm.jpg'
    },
    {
        english_name: 'Bean sprouts and vermicelli stir-fry',
        chinese_name: '豆芽小炒粉丝',
        category: 'chinese_comfort',
        date: '2019-10-07',
        image: 'https://i.imgur.com/GSc7Zrk.jpg'
    },
    {
        english_name: 'Noodles in hot sauce',
        chinese_name: '香辣面',
        category: 'chinese',
        date: '2019-10-22',
        image: 'https://i.imgur.com/MDMPBm0.jpg'
    },
    {
        english_name: 'Pan-fried pork chops',
        chinese_name: '薄煎猪排',
        category: 'chinese_comfort',
        date: '2019-11-02',
        image: 'https://i.imgur.com/9NrsZgN.jpg'
    },
    {
        english_name: 'Fried bananas',
        chinese_name: '炸香蕉',
        category: 'chinese_comfort',
        date: '2019-11-16',
        image: 'https://i.imgur.com/sMQUeej.jpg'
    },
    {
        english_name: 'Chinese green onion egg crêpe',
        chinese_name: '鸡蛋香葱煎饼',
        category: 'chinese_breakfast',
        date: '2019-11-04',
        image: 'https://i.imgur.com/fR5Y0Ao.jpg'
    },
    {
        english_name: 'Yangchun noodles',
        chinese_name: '阳春面',
        category: 'chinese_breakfast',
        date: '2019-10-27',
        image: 'https://i.imgur.com/dbVv0S2.jpg'
    },
    {
        english_name: 'Congee with pork and preserved eggs',
        chinese_name: '皮蛋瘦肉粥',
        category: 'chinese_breakfast',
        date: '2013-02-19',
        image: 'https://i.imgur.com/x59s2YK.jpg'
    },
    {
        english_name: 'Chicken stir-fry with green pepper and cumin',
        chinese_name: '青椒孜然鸡',
        category: 'chinese_comfort',
        date: '2019-11-20',
        image: 'https://i.imgur.com/5nmNcrB.jpg'
    },
    {
        english_name: 'Daylily and egg stir-fry',
        chinese_name: '黄花菜炒蛋',
        category: 'chinese_breakfast',
        date: '2019-11-23',
        image: 'https://i.imgur.com/MajRWWC.jpg'
    },
    {
        english_name: 'Sliced beef and enoki mushroom sour and spicy soup',
        chinese_name: '酸汤肥牛',
        category: 'chinese',
        date: '2019-11-23',
        image: 'https://i.imgur.com/XOTaLdL.jpg'
    },
    {
        english_name: 'Fried mantou with condensed milk',
        chinese_name: '炼乳炸馒头',
        category: 'chinese',
        date: '2020-02-27',
        image: 'https://i.imgur.com/rKhbuRq.jpg'
    },
    {
        english_name: 'Sweet and sour pork ribs',
        chinese_name: '糖醋排骨',
        category: 'chinese',
        date: '2020-01-06',
        image: 'https://i.imgur.com/gOQBpZz.jpg'
    },
    {
        english_name: 'Homemade mango sauce',
        chinese_name: '自制芒果酱',
        category: 'desert',
        date: '2020-01-11',
        image: 'https://i.imgur.com/MeTr937.jpg'
    },
    {
        english_name: 'Steamed asparagus in garlicky soy sauce',
        chinese_name: '蒜香蒸芦笋',
        category: 'chinese_comfort',
        date: '2020-01-20',
        image: 'https://i.imgur.com/HMYF8kx.jpg'
    },
    {
        english_name: 'Shanghai bok choy stir-fry with shiitake mushrooms',
        chinese_name: '香菇炒青菜',
        category: 'chinese_comfort',
        date: '2020-01-08',
        image: 'https://i.imgur.com/vxPJBQG.jpg'
    },
    {
        english_name: 'Nanjing style rice balls with Adzuki beans',
        chinese_name: '金陵式桂花红豆元宵',
        category: 'desert',
        date: '2020-02-09',
        image: 'https://i.imgur.com/rKPlOBN.jpg'
    },
    {
        english_name: 'Key lime cheesecake',
        chinese_name: '青柠重芝士蛋糕',
        category: 'western_pastry',
        date: '2020-02-14',
        image: 'https://i.imgur.com/2b07Rqg.jpg'
    },
    {
        english_name: 'Red bean paste buns',
        chinese_name: '豆沙包',
        category: 'chinese_pastry',
        date: '2020-02-25',
        image: 'https://i.imgur.com/TgD4I7W.jpg'
    },
    {
        english_name: 'Mango maki rolls',
        chinese_name: '芒果酱太卷',
        category: 'japanese',
        date: '2020-01-08',
        image: 'https://i.imgur.com/tqYXIej.jpg'
    },
    {
        english_name: 'Tofu stew with shiitake mushroom bits',
        chinese_name: '香菇豆腐羹',
        category: 'original',
        date: '2020/02/21',
        image: 'https://i.imgur.com/2kW0MXr.jpg'
    },
    {
        english_name: 'Christmas fruit chiffon cake',
        chinese_name: '圣诞戚风蛋糕',
        category: 'western_pastry',
        date: '2019/12/25',
        image: 'https://i.imgur.com/YT4cjDR.jpg'
    },
    {
        english_name: 'Yuba and pea shoot soup',
        chinese_name: '腐竹粉丝浸豆苗',
        category: 'chinese_comfort',
        date: '2020/02/23',
        image: 'https://i.imgur.com/IpPk1Ix.jpg'
    },
    {
        english_name: 'BBQ flavored chicken stir-fry with long hot',
        chinese_name: '尖椒烧烤味鸡丁',
        category: 'original',
        date: '2020/03/06',
        image: 'https://i.imgur.com/Xy9G9K9.jpg'
    },
    {
        english_name: 'Spinach in garlicky oyster sauce',
        chinese_name: '金银蒜蚝汁菠菜',
        category: 'chinese',
        date: '2020/03/06',
        image: 'https://i.imgur.com/OKibAAF.jpg'
    },
    {
        english_name: 'Eggplant in chili bean sauce',
        chinese_name: '家常茄子',
        category: 'chinese',
        date: '2020/03/06',
        image: 'https://i.imgur.com/kj8DdmJ.jpg'
    },
    {
        english_name: 'Black pepper beef stir-fry with shimeji mushrooms',
        chinese_name: '蟹味菇黑椒牛柳',
        category: 'chinese',
        date: '2020/01/21',
        image: 'https://i.imgur.com/0bwINva.jpg'
    },
    {
        english_name: 'Duck braised in beer',
        chinese_name: '啤酒鸭',
        category: 'chinese',
        date: '2020/01/08',
        image: 'https://i.imgur.com/fJXanP6.jpg'
    },
    {
        english_name: 'Deep fried salmon with cranberry and walnut sauce',
        chinese_name: '炸三文鱼佐核桃蔓越莓酱',
        category: 'original',
        date: '2019/12/28',
        image: 'https://i.imgur.com/q98XWRi.jpg'
    },
    {
        english_name: 'Fried shrimp with soft scrambled eggs',
        chinese_name: '虾仁滑蛋',
        category: 'chinese',
        date: '2019/12/29',
        image: 'https://i.imgur.com/aoTubkR.jpg'
    },
    {
        english_name: 'Shrimp braised in edamame sauce',
        chinese_name: '毛豆榨菜虾仁',
        category: 'chinese_comfort',
        date: '2020/02/24',
        image: 'https://i.imgur.com/wBOUT8H.jpg'
    },
    {
        english_name: 'Homemade noodles in tomato and egg soup',
        chinese_name: '清香西红柿鸡蛋面',
        category: 'chinese_comfort',
        date: '2020/01/27',
        image: 'https://i.imgur.com/uKKkSXx.jpg'
    },
    {
        english_name: 'Seafood stir-fry with snow peas',
        chinese_name: '扇贝虾仁炒荷兰豆',
        category: 'chinese_comfort',
        date: '2020/01/12',
        image: 'https://i.imgur.com/2U243SU.jpg'
    },
    {
        english_name: 'Tofu sheet strips with fresh hot pepper',
        chinese_name: '尖椒干豆腐丝',
        category: 'chinese_comfort',
        date: '2020/02/11',
        image: 'https://i.imgur.com/it97dQm.jpg'
    },
    {
        english_name: 'Braised sea bass',
        chinese_name: '红烧海鲈鱼',
        category: 'chinese',
        date: '2020/01/04',
        image: 'https://i.imgur.com/fFh4i9i.jpg'
    },
    {
        english_name: 'Braised bone-in chicken thigh',
        chinese_name: '红烧带骨鸡块',
        category: 'chinese',
        date: '2019/11/27',
        image: 'https://i.imgur.com/UbdsJnH.jpg'
    },
    {
        english_name: 'Southern plain bun',
        chinese_name: '南方小馒头',
        category: 'chinese',
        date: '2020/02/25',
        image: 'https://i.imgur.com/DYEGQ6V.jpg'
    },
    {
        english_name: 'Pork rib and corn soup',
        chinese_name: '玉米排骨汤',
        category: 'chinese',
        date: '2020/03/14',
        image: 'https://i.imgur.com/DvuzWX0.jpg'
    },
    {
        english_name: 'Mango yogurt parfait',
        chinese_name: '芒果酸奶芭菲',
        category: 'desert',
        date: '2020/03/18',
        image: 'https://i.imgur.com/JlbtJlX.jpg'
    },
    {
        english_name: 'Braised pork neck bones',
        chinese_name: '酱猪颈骨',
        category: 'chinese',
        date: '2020/03/25',
        image: 'https://i.imgur.com/g6YJ7qz.jpg'
    },
    {
        english_name: 'Fried meatballs',
        chinese_name: '炸肉丸',
        category: 'chinese',
        date: '2020/03/15',
        image: 'https://i.imgur.com/pIkJc4K.jpg'
    },
    {
        english_name: 'Braised wintermelon with minced pork',
        chinese_name: '肉末炖冬瓜',
        category: 'chinese_comfort',
        date: '2020/03/08',
        image: 'https://i.imgur.com/liCqcqJ.jpg'
    },
    {
        english_name: 'Garlic hua juan',
        chinese_name: '葱香花卷',
        category: 'chinese',
        date: '2020/03/23',
        image: 'https://i.imgur.com/dtUoHOk.jpg'
    },
    {
        english_name: 'Clam and vermicelli in garlicky soup',
        chinese_name: '蒜香粉丝花甲',
        category: 'chinese',
        date: '2020/03/27',
        image: 'https://i.imgur.com/geBXqzz.jpg'
    },
    {
        english_name: 'New Orleans style barbecue wings',
        chinese_name: '新奥尔良烤翅',
        category: 'chinese',
        date: '2021/05/03',
        image: 'https://i.imgur.com/Db0Wo6k.jpg'
    },
    {
        english_name: 'Barbeque chicken hearts',
        chinese_name: '烧烤风味鸡心',
        category: 'chinese',
        date: '2021/05/15',
        image: 'https://i.imgur.com/HbywQyB.jpg'
    },
    {
        english_name: 'Mojito',
        chinese_name: '莫吉托',
        category: 'desert',
        date: '2021/12/23',
        image: 'https://i.imgur.com/sLFnUku.jpg'
    },
    {
        english_name: 'Braised prawns with brown sauce',
        chinese_name: '油焖大虾',
        category: 'chinese',
        date: '2021/12/26',
        image: 'https://i.imgur.com/GxW51UC.jpg'
    },
    {
        english_name: 'Roasted cauliflower',
        chinese_name: '香烤花菜',
        category: 'chinese',
        date: '2021/04/04',
        image: 'https://i.imgur.com/JL1SV2S.jpg'
    },
    {
        english_name: 'Spicy tofu soup',
        chinese_name: '韩式豆腐汤',
        category: 'korean',
        date: '2021/04/24',
        image: 'https://i.imgur.com/nJNtuU0.jpg'
    }
];

let categories = {
    'chinese': {
        english_name: 'Chinese',
        chinese_name: '中餐'
    },
    'chinese_pastry': {
        english_name: 'Chinese Pastry',
        chinese_name: '中式烘焙'
    },
    'original': {
        english_name: 'Original',
        chinese_name: '原创'
    },
    'chinese_comfort': {
        english_name: 'Chinese Home Cooking',
        chinese_name: '中式家常菜'
    },
    'chinese_breakfast': {
        english_name: 'Chinese Breakfast',
        chinese_name: '中式早餐'
    },
    'american': {
        english_name: 'American',
        chinese_name: '美式'
    },
    'american_breakfast': {
        english_name: 'Amercian Breakfast',
        chinese_name: '美式早餐'
    },
    'italian': {
        english_name: 'Italian',
        chinese_name: '意大利菜'
    },
    'western_pastry': {
        english_name: 'Western Pastry',
        chinese_name: '西式烘焙'
    },
    'thai': {
        english_name: 'Thai',
        chinese_name: '泰国菜'
    },
    'korean': {
        english_name: 'Korean',
        chinese_name: '韩式'
    },
    'japanese': {
        english_name: 'Japanese',
        chinese_name: '日式'
    },
    'vietnamese': {
        english_name: 'Vietnamese',
        chinese_name: '越南菜'
    },
    'indian': {
        english_name: 'Indian',
        chinese_name: '印度菜'
    },
    'desert': {
        english_name: 'Drink & Desert',
        chinese_name: '饮料 & 甜品'
    }
};