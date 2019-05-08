function create_el(tag, parent, class_name, text) {
    if (!tag) {
        return;
    }

    let new_element = document.createElement(tag);

    if (class_name) {
        new_element.className = class_name;
    }

    if (text) {
        new_element.textContent = text;
    }

    if (parent) {
        parent.appendChild(new_element);
    }

    return new_element;
}

function render_categories(container) {
    for (let category in categories) {
        let id = category;
        let category_data = categories[id];

        let category_el = create_el('div', container, 'category');
        category_el.setAttribute('data-id', id);
        let category_header_el = create_el('div', category_el, 'category-header');

        create_el('span', category_header_el, 'category-english-name', category_data.english_name || '');
        create_el('span', category_header_el, 'category-chinese-name', category_data.chinese_name || '');

        create_el('div', category_el, 'category-dishes-container');
    }
}

function render_dishes() {
    let dish_count = 0;
    let last_updated_ts = 0;

    for (let dish of dishes) {
        let category_id = dish.category;

        if (categories[category_id]) {
            let dishes_container = document.querySelector(`.category[data-id="${category_id}"] > .category-dishes-container`);

            if (!dishes_container) {
                return;
            }

            let dish_el = create_el('div', dishes_container, 'dish');
            let dish_header_el = create_el('div', dish_el, 'dish-header');

            create_el('span', dish_header_el, 'dish-english-name', dish.english_name || '');
            create_el('span', dish_header_el, 'dish-chinese-name', dish.chinese_name || '');

            let image_el = create_el('img', dish_el, 'dish-image');

            if (dish.image) {
                image_el.setAttribute('src', dish.image);
            }
            else {
                image_el.setAttribute('src', 'placeholder.png');
            }

            if (!dish.date) {
                image_el.className += ' mod-not-completed';
            }
            else {
                let date = new Date(dish.date + ' EST');
                if (date.getTime() > last_updated_ts) {
                    last_updated_ts = date.getTime();
                }
            }

            dish_count += 1;
        }
        else {
            console.error('Cannot find category: ' + category_id);
        }

    }

    document.querySelector('.last-updated-date').textContent = new Date(last_updated_ts).toLocaleDateString();
    document.querySelector('.completed-dishes-num').textContent = dish_count;
}