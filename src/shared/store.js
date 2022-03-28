//const timestampsKey = "timestamps";
import browser from "webextension-polyfill";
const soundsKey = "sounds";
export const store = {
  deleteTsByLink: async function (soundLink, timestampLink) {
    const sound = await this.findByLink(soundLink);
    sound.timestamps = sound.timestamps.filter(
      (ts) => ts.link !== timestampLink
    );
    console.log(sound.timestamps);
    if (sound.timestamps.length === 0) {
      await this.deleteSoundByLink(soundLink);
    } else {
      await this.upInsertSound(sound);
    }
  },

  deleteSoundByLink: async function (soundLink) {
    let sounds = await this.list();
    sounds = sounds.filter((s) => s.link !== soundLink);
    this.saveSounds(sounds);
  },

  updateSoundTimestamp: async function (sound) {
    const foundSound = await this.findByLink(sound.link);
    let updatedSound;
    if (foundSound) {
      updatedSound = foundSound;
      updatedSound.timestamps.push({
        link: sound.timestampLink,
        time: sound.timestamp,
      });
    } else {
      updatedSound = {
        title: sound.title,
        link: sound.link,
        timestamps: [{ link: sound.timestampLink, time: sound.timestamp }],
      };
    }
    await this.upInsertSound(updatedSound);
  },

  upInsertSound: async function (updateSound) {
    const sounds = await this.list();
    const soundIndex = sounds.findIndex(
      (sound) => sound.link == updateSound.link
    );
    if (soundIndex > -1) {
      sounds[soundIndex] = updateSound;
    } else {
      sounds.push(updateSound);
    }

    await this.saveSounds(sounds);
  },

  findByLink: async function (link) {
    const sounds = await this.list();

    if (sounds) {
      const sound = sounds.find((s) => s.link == link);
      return sound;
    }
  },

  list: async function () {
    const { sounds } = await browser.storage.local.get(soundsKey);
    return sounds ? sounds : [];
  },

  saveSounds: async function (sounds) {
    await browser.storage.local.set({ sounds });
  },

  clearAll: async function () {
    await browser.storage.local.clear();
  },
};
