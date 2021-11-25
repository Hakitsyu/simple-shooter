export class Shoot {
    constructor(initialX, initialY, toX, toY, velocity) {
        this.x = initialX;
        this.y = initialY;
        this.toX = toX;
        this.toY = toY;
        this.velocity = velocity;
        this.distance = Math.sqrt(Math.pow(toX - initialX, 2) + Math.pow(toY - initialY, 2));
        this.velocityX = (toX * velocity) / this.distance;
        this.velocityY = (toY * velocity) / this.distance;
        this.destroied = false;
    }

    update() {
        this.x += this.velocityX;
        this.y += this.velocityY;
    }

    destroy() {
        this.destroied = true;
    }

    render(context) {
        context.beginPath();
        context.fillStyle = "#FFFFFF";
        context.arc(this.x, this.y, 2.5, 0, Math.PI * 2);
        context.fill();
    }
}