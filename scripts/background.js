export function backgroundRefresh() {
    const bgImages = [
        './assets/beach.jpg', 
        './assets/bread.jpg',
        './assets/disco.jpg', 
        './assets/flower.jpg',
        './assets/market.jpg',
        './assets/monet.jpg',
        './assets/moon.jpg',
        './assets/otter.jpg',
        './assets/rabbit.jpg',
        './assets/roller.jpg'
        ]
    const bgImage = bgImages[Math.floor(Math.random()*bgImages.length)];
    document.getElementsByTagName('body')[0].style.background = "url('" + bgImage + "')";
    document.getElementsByTagName('body')[0].style.backgroundSize = "cover";
    document.getElementsByTagName('body')[0].style.backgroundPosition = "center center";
    document.getElementsByTagName('body')[0].style.backgroundAttachment = "fixed";
    document.getElementsByTagName('body')[0].style.backgroundRepeat = "no-repeat";
}