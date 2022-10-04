try {
    $.get("/splashes.txt", function(data) {
        const splashes = data.split("\n");
        const randomSplashIndex = Math.floor(Math.random() * splashes.length)/* * 0 + 5-1 */;
        var splash = splashes[randomSplashIndex];
        
        if (splash.includes("{{ip}}")) {
            splash = splash.replace("{{ip}}", `${Math.round(Math.random()*255)}.${Math.round(Math.random()*255)}.${Math.round(Math.random()*255)}.${Math.round(Math.random()*255)}`);
        }
        
        $('#splash').text(splash);
    }).fail(function() {
        document.getElementById("splash").textContent = "missingno";
        console.error("Splashes failed to load!!1! (001)");
    });
} catch (e) {
    document.getElementById("splash").textContent = "missingno";
    console.error("Splashes failed to load!!1! (002)");
}
