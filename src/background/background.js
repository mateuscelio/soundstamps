import {store} from '../shared/store'


browser.runtime.onMessage.addListener(saveTimestamp);

function saveTimestamp(msg) {
  /*   browser.notifications.create({
        "type": "basic",
        "iconUrl": browser.extension.getURL("link.png"),
        "title": "You clicked a link!",
        "message": window.localStorage.getItem(timestampsKey)
      }); */
    store.updateSoundTimestamp(msg);
}

