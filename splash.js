function GetSplash(callback) {
    try {
        // I should probably not be retrieving the entire file every time this is called,
        // but the browser caches the file so ¯\_(ツ)_/¯
        $.get("/splashes.txt", function(data) {
            const splashes = data.split("\n");
            
            var i = Math.floor(Math.random() * (splashes.length));
            var splash = splashes[i]
            
            if (splash.includes("{{ip}}")) {
                splash = splash.replace("{{ip}}", `${Math.round(Math.random()*255)}.${Math.round(Math.random()*255)}.${Math.round(Math.random()*255)}.${Math.round(Math.random()*255)}`);
            }
            
            callback(splash);
            
        }).fail(function() {
            console.error("Splashes failed to load!!1! (001 : Failed to get splashes file)");
            callback("missingno");
        });
    }
    catch (e) {
        console.error("Splashes failed to load!!1! (002 : Something has gone terribly wrong)");
        console.error(e.message);
        callback("missingno");
    }
}

function SetSplash() {
    GetSplash( (splash) => $('.splash').text(splash) );
  }