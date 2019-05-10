let dishes = [
    {
        english_name: 'Bread roll with pork floss and scallions',
        chinese_name: '肉松面包卷',
        english_notes: "Roll the bread sheet while it's hot, and use sweetened mayonnaise as adhersive. Dip in pork floss. Sweet and savory at the same time!",
        chinese_notes: '个人最喜欢台式的酥松肉松，效果比较好。面包一定要趁热卷哦。',
        category: 'chinese_pastry',
        date: '2018-10-23',
        image: 'https://i.imgur.com/Ee47sMk.jpg'
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
        category: 'amercian_pastry',
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
        english_name: 'Braised eggplant with potato and bell pepper',
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
    }
];

let categories = {
    'chinese': {
        english_name: 'Chinese',
        chinese_name: '中餐'
    },
    'chinese_pastry': {
        english_name: 'Chinese Bakery',
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
    'amercian_pastry': {
        english_name: 'Amercian Pastry',
        chinese_name: '美式烘焙'
    },
    'thai': {
        english_name: 'Thai',
        chinese_name: '泰国菜'
    },
    'chinese_comfort': {
        english_name: 'Chinese Comfort Food',
        chinese_name: '中式家常菜'
    }
};