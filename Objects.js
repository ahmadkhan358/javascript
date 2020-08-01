let Mobile = {
    name: "Samsung",
    display: 5.5,
    model: "Galaxy S7 Edge",
    storage: 32,
    ram: 4,
    rearCamera: 12,
    frontCamera: 5,
    makeCalls(){
        console.log("Make a call")
    },
    sendMessage(){
        console.log("Send a message")
    },
    displayVideo(){
        console.log("Play a video")
    },
    playAudio(){
        console.log("Play an audio")
    }
}

Mobile.displayVideo()