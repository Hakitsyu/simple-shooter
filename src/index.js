import { Score } from "./score.js";
import { Target, randomCoordinates } from "./target.js";
import { Shoot } from "./shoot.js";
import config from "../config.js";

const canvas = document.getElementById("root");
const context = canvas.getContext("2d");
const { width, height, shoot_velocity: shootVelocity, target: { width: targetWidth, height: targetHeight, spawn_time: targetSpawnTime  } } = config;

// Canvas Properties
canvas.width = width;
canvas.height = height;

// Game
const score = new Score();

// Entities
let shots = [];
let targets = [];

// Rendering Entities
const render = () => {
    context.clearRect(0, 0, width, height);

    shots = shots.filter(shoot => {
        shoot.update();
        if (shoot.x > width || shoot.y > height)
            shoot.destroy();
        else {
            targets = targets.filter(target => {
                if (shoot.x > target.x && shoot.x < target.x + targetWidth && shoot.y > target.y && shoot.y < target.y + targetHeight) {
                    shoot.destroy();
                    score.increase();
                    return false;
                }
    
                return true;
            });
        }

        shoot.render(context);
        return !shoot.destroied;
    });

    targets.forEach(target => target.render(context));
    requestAnimationFrame(render);
}
requestAnimationFrame(render);

// Generate Targets
setInterval(() => {
    const [x, y] = randomCoordinates(targetWidth, targetHeight, width, height, { left: 5, top: 5, right: 5, bottom: 5 })
    let target = new Target(x, y, targetWidth, targetHeight);

    targets.push(target);
}, targetSpawnTime);

// Events
canvas.addEventListener("click", event => shots.push(new Shoot(0, 0, event.offsetX, event.offsetY, shootVelocity)));