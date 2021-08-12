refs ={
    days: document.querySelector("span[data-value=days]"),
    hours:document.querySelector("span[data-value=hours]"),
    mins: document.querySelector("span[data-value=mins]"),
    secs: document.querySelector("span[data-value=secs]"),
    };
    


class CountdownTimer {
    constructor({ targetDate , onTick}){
    
     this.intervalId = null;
     this.onTick = onTick;
     this.targetDate = targetDate;
    }
    start (){
         this.intervalId = setInterval(() => {
            const currentDate = Date.now();
            const deltaTime = this.targetDate - currentDate;
            const time = this.getTimeComponents(deltaTime);
            this.onTick(time)
            
        }, 1000);
    };

   getTimeComponents (time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    
        return { days, hours, mins, secs };
    };

    pad(value){
        return String(value).padStart(2, "0")
    }
    
}

const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jan 11, 2022'),
    onTick: updateClockface,
})
    
window.addEventListener('DOMContentLoaded', timer.start.bind(timer))

function updateClockface( { days, hours, mins, secs }) {
    refs.days.textContent = `${days} : `;
    refs.hours.textContent = `${hours}`;
    refs.mins.textContent = `: ${mins}`;
    refs.secs.textContent = `: ${secs}`;
}







