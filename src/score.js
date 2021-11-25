export class Score {
    constructor(elementId) {
        this.value = 0;
        this.element = document.getElementById(elementId || "score");
    }

    increase() {
        this.value++;
        this.update();
    }
    
    update() {
        this.element.innerHTML = this.value;
    }

    reset() {
        this.value = 0;
    }
}