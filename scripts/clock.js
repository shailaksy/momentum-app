export const now = new Date();

export function displayTime(){
    let h = now.getHours() > 12 ? now.getHours() - 12 : now.getHours();
    let am_pm = now.getHours() >= 12 ? "PM" : "AM";
    let m = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
    let time = h + ":" + m + " " + am_pm;
    document.getElementById('clock').innerHTML = time; 
}
