import { randomNumber } from "./utils.js";

export class Target {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = "#FFFFFF";
        this.living = true;
    }

    render(context) {
        if (!this.living) return;
        context.beginPath();
        context.fillStyle = this.color;
        context.rect(this.x, this.y, this.width, this.height);
        context.fill();
    }

    destroy() {
        this.living = false;
    }

    toString() {
        return `{ x: ${this.x}, y: ${this.y}, width: ${this.width}, height: ${this.height}, color: ${this.color}, living: ${this.living} }`
    }
}

export const randomCoordinates = (targetWidth, targetHeight, areaWidth, areaHeight, border) => {
    const minX = border.left && border.left > 0 ? border.left : 0;
    const maxX = border.right && border.right > 0 ? areaWidth - border.right - targetWidth : areaWidth - targetWidth;
    const x = randomNumber(minX, maxX);

    const minY = border.top && border.top > 0 ? border.top : 0;
    const maxY = border.bottom && border.bottom > 0 ? areaHeight - border.bottom - targetHeight : areaHeight - targetHeight;
    const y = randomNumber(minY, maxY);

    return [x, y];
}