try {
    $.get("/splashes.txt", function(data) {
        const splashes = data.split("\n");
        var randomSplashIndex = Math.floor(Math.random() * splashes.length);
        
        /*
        var randomSplashIndex = 5;
        */
        
        var splash = splashes[randomSplashIndex - 1]; // zero indexing?? very funny...
        
        if (splash.includes("{{ip}}")) {
            splash = splash.replace("{{ip}}", `${Math.round(Math.random()*255)}.${Math.round(Math.random()*255)}.${Math.round(Math.random()*255)}.${Math.round(Math.random()*255)}`);
        }
        
        $('.splash').text(splash);
    }).fail(function() {
        $('.splash').textContent = "missingno";
        console.error("Splashes failed to load!!1! (001 : Failed to get splashes file)");
        console.error(e);
    });
} catch (e) {
    $('.splash').textContent = "missingno";
    console.error("Splashes failed to load!!1! (002 : Something has gone terribly wrong)");
    console.error(e);
}
