function switchoff(){
    let img = document.getElementById('bulbImage');
    img.src = 'https://png.pngtree.com/png-vector/20240127/ourmid/pngtree-light-bulb-turn-off-to-save-electrical-png-image_11553783.png';
    let status = document.getElementById('switchstatus');
    status.textContent = 'SWITCHED OFF'
    let catImage = document.getElementById('catImage');
    catImage.src = 'https://png.pngtree.com/png-clipart/20230511/ourmid/pngtree-isolated-cat-on-white-background-png-image_7094927.png'
}

function switchon(){
    let img = document.getElementById('bulbImage');
    img.src = 'https://img.freepik.com/free-vector/realistic-light-bulb-with-electricity_23-2149129409.jpg?size=626&ext=jpg&ga=GA1.1.104589895.1715925969&semt=ais_user';
    let status = document.getElementById('switchstatus');
    status.textContent = 'SWITCHED ON'
    let catImage = document.getElementById('catImage');
    catImage.src = 'https://media.istockphoto.com/id/1188933024/photo/studio-shot-of-an-adorable-tabby-cat.jpg?s=612x612&w=0&k=20&c=I57wNa75x7TO7WKHKhUX3Usd84t44jQ4hJ-Mn9e2JVM=';
}