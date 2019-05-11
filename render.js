let lightbox = window.SimpleLightbox;
let new_dishes = [];

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

function sort_dishes() {
    new_dishes = [];

    for (let category in categories) {
        for (let dish of dishes) {
            if (dish.category === category) {
                new_dishes.push(dish);
            }
        }
    }

    dishes = new_dishes;
}

function render_dishes(container_el) {
    let dishes_made_count = 0;
    let dishes_to_make_count = 0;
    let last_updated_ts = 0;

    for (let dish of dishes) {
        let category_id = dish.category;

        if (categories[category_id]) {
            let dish_el = create_el('div', container_el, 'dish');
            let category_data = categories[category_id];

            let category_el = create_el('div', dish_el, 'category');
            category_el.setAttribute('data-id', category_id);

            let category_header_el = create_el('div', category_el, 'category-header');

            create_el('span', category_header_el, 'category-english-name', category_data.english_name || '');
            create_el('span', category_header_el, 'category-chinese-name', category_data.chinese_name || '');

            let existing_progress_els = document.querySelectorAll(`.category-progress[data-id="${category_id}"]`);

            let progress_el = create_el('div', category_header_el, 'category-progress');
            if (existing_progress_els.length === 0) {
                progress_el.setAttribute('data-all', '0');
                progress_el.setAttribute('data-made', '0');
            }
            else {
                progress_el.setAttribute('data-all', existing_progress_els[0].getAttribute('data-all'));
                progress_el.setAttribute('data-made', existing_progress_els[0].getAttribute('data-made'));
            }

            progress_el.setAttribute('data-id', category_id);
            create_el('div', progress_el, 'category-progress-inner');
            create_el('div', category_el, 'category-dishes-container');

            let dish_inner_el = create_el('div', dish_el, 'dish-inner');
            let dish_header_el = create_el('div', dish_inner_el, 'dish-header');

            create_el('span', dish_header_el, 'dish-english-name', dish.english_name || '');
            create_el('span', dish_header_el, 'dish-chinese-name', dish.chinese_name || '');

            let image_container_el = create_el('div', dish_inner_el, 'dish-image-container');
            let image_el = create_el('img', image_container_el, 'dish-image');

            if (dish.image) {
                image_el.setAttribute('src', dish.image);
                image_el.onclick = function () {
                    SimpleLightbox.open({
                        items: [dish.image]
                    });
                }
            }
            else {
                image_el.setAttribute('src', 'placeholder.png');
            }

            for (let el of [...existing_progress_els, progress_el]) {
                el.setAttribute('data-all', (parseInt(el.getAttribute('data-all')) + 1).toString());
            }

            if (!dish.date) {
                dishes_to_make_count += 1;
                dish_inner_el.className += ' mod-not-completed';
            }
            else {
                dishes_made_count += 1;
                for (let el of [...existing_progress_els, progress_el]) {
                    el.setAttribute('data-made', (parseInt(el.getAttribute('data-made')) + 1).toString());
                }
                let date = new Date(dish.date + ' EST');
                if (date.getTime() > last_updated_ts) {
                    last_updated_ts = date.getTime();
                }

                create_el('div', dish_inner_el, 'dish-made-date', date.toLocaleDateString());
            }

            if (dish.english_notes) {
                create_el('div', dish_inner_el, 'dish-english-notes', dish.english_notes);
            }

            if (dish.chinese_notes) {
                create_el('div', dish_inner_el, 'dish-chinese-notes', dish.chinese_notes);
            }

            let all_dishes_count = parseInt(progress_el.getAttribute('data-all'));
            let made_dishes_count = parseInt(progress_el.getAttribute('data-made'));
            let percentage = ((made_dishes_count / all_dishes_count) * 100).toString() + '%';

            for (let el of [...existing_progress_els, progress_el]) {
                el.setAttribute('title', percentage + ' done');
                el.querySelector('.category-progress-inner').style.width = percentage;
            }

        }
        else {
            console.error('Cannot find category: ' + category_id);
        }

    }

    document.querySelector('.last-updated-date').textContent = new Date(last_updated_ts).toLocaleDateString();
    document.querySelector('.completed-dishes-num').textContent = dishes_made_count;
    document.querySelector('.dishes-to-make-num').textContent = dishes_to_make_count;
}