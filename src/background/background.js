import {store} from '../shared/store'


browser.runtime.onMessage.addListener(saveTimestamp);

async function saveTimestamp(msg) {
  await store.updateSoundTimestamp(msg);

  browser.notifications.create({
        "type": "basic",
        "title": "Sound timestamped successfully!",
        "message": `Time "${msg.timestamp}" of track "${msg.title}" saved!`
      }); 
}

