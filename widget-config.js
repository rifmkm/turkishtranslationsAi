/* widget-config.js */
(function() {
    // 1. Define the updated encoded ID (Türkiye Widget)
    const _id = "ZWxmc2lnaHQtYXBwLWEyNjAzYWZhLTI2NGQtNDRmZC1hNmE4LTVlY2IzYmU3ZDhjNg=="; 
    
    // 2. Create the Widget Container
    const w = document.createElement('div');
    w.className = atob(_id); // Decodes to your new Türkiye ID
    w.setAttribute('data-elfsight-app-lazy', '');
    
    // Apply "Stealth Mode" - Hidden from view
    Object.assign(w.style, {
        display: "none",
        visibility: "hidden",
        position: "absolute",
        zIndex: "-9999",
        width: "0",
        height: "0"
    });

    document.body.appendChild(w);

    // 3. Inject the Script
    const s = document.createElement('script');
    s.src = "https://elfsightcdn.com/platform.js";
    s.async = true;
    document.head.appendChild(s);
})();