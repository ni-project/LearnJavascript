
class ExtendedClock extends Clock {
    constructor({ template }) {
        super(template);
        this.template = template;
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let msecs = date.getMilliseconds();
        if (msecs < 10) msecs = '0' + msecs;

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs)
            .replace('ms', msecs);

        document.getElementById('clock').innerText = output;
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}