let dishes = [
    {
        english_name: 'Bread roll with pork floss and scallions',
        chinese_name: '肉松面包卷',
        english_notes: "Roll the bread sheet while it's hot, and use sweetened mayonnaise as adhersive. Dip in pork floss. Sweet and savory at the same time!",
        chinese_notes: '个人最喜欢台式的酥松肉松，效果比较好。面包一定要趁热卷哦。',
        category: 'chinese_pastry',
        date: '2018-10-23',
        image: 'https://i.imgur.com/LG82nky.jpg'
    },
    {
        english_name: 'Eggs benedict',
        chinese_name: '班尼迪克蛋',
        english_notes: "Homemade hollandaise sauce, store bought English muffins. I love smoked salmon so I'm using that as the protein.",
        category: 'american_breakfast',
        date: '2018-11-08',
        image: 'https://i.imgur.com/7ks5csx.jpg'
    },
    {
        english_name: 'Chiffon cake',
        chinese_name: '戚风蛋糕',
        category: 'american_pastry',
        english_notes: 'Made this plenty of times. Great as the base of a birthday cake too.',
        date: '2018-10-17',
        image: 'https://i.imgur.com/pLiXta1.jpg'
    },
    {
        english_name: 'Blueberry pancake',
        chinese_name: '蓝莓松饼',
        category: 'american_breakfast',
        image: 'https://images.media-allrecipes.com/userphotos/250x250/686460.jpg'
    },
    {
        english_name: 'Green chicken and corn curry',
        chinese_name: '玉米鸡肉绿咖喱',
        category: 'thai',
        english_notes: 'Used a store bought curry mix. Looking forward to cooking my own mix one day!',
        date: '2018-10-11',
        image: 'https://i.imgur.com/wQWGOOg.jpg'
    },
    {
        english_name: 'Pad Thai',
        chinese_name: '泰式炒河粉',
        category: 'thai', 
        image: 'https://cdn.shopify.com/s/files/1/0732/8155/products/PadThai_2048x2048_9d15724e-7fdc-4e2a-9b8f-f7329a553beb_2048x2048.jpg'
    },
    {
        english_name: 'Mooncake',
        chinese_name: '广式月饼',
        category: 'chinese_pastry',
        english_notes: "With cantaloupe filling. After cooking down the filling, it tastes like sweet potato to me somehow.",
        chinese_notes: '哈密瓜馅，却尝起来像红薯馅，也许商店里卖的是用香精做成的吧！',
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
        english_notes: "It looks better in dark plates. Be sure to toast the pine nuts until it's a little bit oily and shiny.",
        image: 'https://i.imgur.com/GmyWO3J.jpg'
    },
    {
        english_name: 'Fried mashed potato balls',
        chinese_name: '炸土豆泥球',
        category: 'american',
        date: '2019-05-06',
        english_notes: "A good way to use up mashed potato when you make too much.",
        image: 'https://i.imgur.com/WcdxXvU.jpg'
    },
    {
        english_name: 'Water spinach stir-fry with garlic',
        chinese_name: '清炒空心菜',
        category: 'chinese_comfort',
        date: '2018-09-13',
        chinese_notes: '空心菜的特殊香气总是让我念念不忘。一定要把老的根部纤维去掉，不然会咬不动。',
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
        english_notes: 'A North-eastern Chinese classic. Very savory.',
        date: '2018-09-17',
        image: 'https://i.imgur.com/HrRODYg.jpg'
    },
    {
        english_name: 'Pan-seared shrimp with chorizo and corn',
        chinese_name: '乔利佐玉米煎虾',
        category: 'american',
        english_notes: 'Followed a Bon Appétit recipe. Replaced scallops with shrimp, but should try the original one day.',
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
        english_notes: 'They are braised in rich chicken stock, which is reduced and emulsified chicken stock.',
        date: '2019-05-08',
        image: 'https://i.imgur.com/mdokPb8.jpg'
    },
    {
        english_name: 'Taiwanese fried chicken',
        chinese_name: '盐酥鸡',
        category: 'chinese',
        english_notes: 'Use coarse sweet potato starch for the unique texture.',
        date: '2019-04-18',
        image: 'https://i.imgur.com/iTbB3t2.jpg'
    },
    {
        english_name: 'Pan-fried shrimp in mushroom sauce',
        chinese: '蘑菇浓汁浇虾',
        category: 'original',
        english_notes: 'Use shrimp shells to make a quick stock with butter, braise finely diced white mushroom in it, season with soy sauce and a bit of oyster sauce. Coat the shrimp in a slightly spicy coating, and eat it with the creamy, savory mushroom sauce.',
        chinese_notes: '重点是用虾壳熬制高汤，再煮切得极小的蘑菇丁。虾仁裹上香辣的脆壳，沾着绵软的蘑菇浓汁一起入口。',
        date: '2013-08-02',
        image: 'https://i.imgur.com/vXU7aqi.jpg'
    },
    {
        english_name: 'Kimchi',
        chinese: '韩国泡菜',
        category: 'korean',
        date: '2013-11-25',
        image: 'https://i.imgur.com/fWXMOEU.jpg'
    },
    {
        english_name: 'Yogurt cheesecake',
        chinese: '冻酸奶芝士蛋糕',
        category: 'american_pastry',
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
        chinese_name: '为搬砖而折腰的鸡',
        category: 'american',
        date: '2018-11-07',
        image: 'https://i.imgur.com/m43HYQX.jpg'
    },
    {
        english_name: 'Portuguese egg tart',
        chinese_name: '葡式蛋挞',
        category: 'american_pastry',
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
        category: 'american_pastry',
        chinese_notes: '特别酥，酥得都快拿不起来了。',
        date: '2014-05-24',
        image: 'https://i.imgur.com/ZFk7Tbj.jpg'
    },
    {
        english_name: 'Tomato egg drop soup with herbs',
        chinese_name: '清新番茄蛋汤',
        category: 'chinese_comfort',
        english_notes: 'The fresh herb mix is the secret: finely chopped scallions, cilantro, and basil. Also balancing the sweetness, sourness, and savoriness of the soup is important',
        date: '2014-07-12',
        image: 'https://i.imgur.com/4NvMHq0.jpg'
    },
    {
        english_name: 'Peppery caramelized chicken breast',
        chinese_name: '黑胡椒焦糖鸡胸肉',
        category: 'original',
        english_notes: 'Cook the chicken breast sous vide to keep it juice.',
        date: '2019-04-28',
        image: 'https://i.imgur.com/vfhFnrt.jpg'
    },
    {
        english_name: 'Deep fried chicken wing',
        chinese_name: '香辣鸡翅',
        category: 'american',
        chinese_notes: '鳞片万岁！',
        date: '2018-10-23',
        image: 'https://i.imgur.com/ycdiqHu.jpg'
    },
    {
        english_name: 'Fish fillets in hot chili oil',
        chinese_name: '水煮鱼',
        category: 'chinese',
        date: '2018-10-19',
        image: 'https://i.imgur.com/U5xqlRJ.jpg'
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
        category: 'chinese',
        date: '2016-01-27',
        image: 'https://i.imgur.com/dA3G6F2.jpg'
    },
    {
        english_name: 'Real-deal instant beef noodles',
        chinese_name: '豪华版红烧牛肉面',
        category: 'original',
        date: '2016-03-23',
        image: 'https://i.imgur.com/fjQXEdC.jpg'
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
    'american': {
        english_name: 'American',
        chinese_name: '美式'
    },
    'american_breakfast': {
        english_name: 'Amercian Breakfast',
        chinese_name: '美式早餐'
    },
    'american_pastry': {
        english_name: 'Amercian Pastry',
        chinese_name: '美式烘焙'
    },
    'thai': {
        english_name: 'Thai',
        chinese_name: '泰国菜'
    },
    'korean': {
        english_name: 'Korean',
        chinese_name: '韩式'
    },
    'chinese_comfort': {
        english_name: 'Chinese Home Food',
        chinese_name: '中式家常菜'
    },
    'original': {
        english_name: 'Original',
        chinese_name: '原创'
    },
    'desert': {
        english_name: 'Drink & Desert',
        chinese_name: '饮料 & 甜品'
    }
};