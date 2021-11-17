
function getTimeStamp() {
    let playbacktimeContainer = document.querySelector('.playbackTimeline__timePassed');
    let playbackSoundNameContainer = document.querySelector('.playbackSoundBadge__titleLink');

    let timeNode = playbacktimeContainer.childNodes[1];
    let soundTitle = playbackSoundNameContainer.childNodes[2];
    return {
        title: soundTitle.textContent,
        timestamp: timeNode.textContent,
        timestampLink: `${playbackSoundNameContainer.href.split('?')[0]}?#t=${timeNode.textContent}`,
        link: playbackSoundNameContainer.href
    };
}


let addTimestampBtn = document.createElement('button');
addTimestampBtn.textContent = 'Save timestamp'
addTimestampBtn.addEventListener('click', () => {
    const t = getTimeStamp()
    console.log(t);
   browser.runtime.sendMessage(t);
});

let playControl = document.querySelector('.playControls__elements');
playControl.appendChild(addTimestampBtn);
