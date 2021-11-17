import {store} from '../shared/store';

const list = document.querySelector('.list');
const clearBtn = document.querySelector('.clear-btn');

clearBtn.addEventListener('click', () => {
    store.clearAll();
})



function renderTimestampItem(sound, timestamp) {
    const item = document.createElement('li')

    const aEl = document.createElement('a')
    aEl.href = timestamp.link
    aEl.textContent = timestamp.time;

    const delBtn = document.createElement('button');
    delBtn.innerText = 'Delete';
    delBtn.addEventListener('click', () => {
        store.deleteTsByLink( sound.link , timestamp.link);
        item.remove()
    })
    
    item.appendChild(aEl);
    item.appendChild(delBtn);
    return item;
}

function renderTimestampList(sound) {

    const list = document.createElement('ul');
    sound.timestamps.forEach(ts => {
        list.appendChild(renderTimestampItem(sound, ts));
    })
    return list
}
function renderItem(sound) {
    let el = document.createElement('li');
    const elChild = document.createElement('div')
    elChild.textContent = sound.title
    el.appendChild(elChild);
    const links = document.createElement('div')
    links.appendChild(renderTimestampList(sound))
    el.appendChild(links)

    list.appendChild(el);
}

function renderList(sounds) {
    sounds.forEach(s => renderItem(s));
}

const sounds = store.list().then((res) => renderList(res));

