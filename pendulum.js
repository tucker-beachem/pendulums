class Pendulum {
    constructor(x, y, size, radius=36, velocity=0.001, color=[255]) {
        this.origin = {x: x, y: y};
        this.center = {x: x, y: y};
        this.lineStart = {x: x, y: y};
        this.size = size;
        this.swingRadius = radius;
        this.color = color;
        this.angle = PI/2;
        this.gravity = 0.19;
        this.damping = 0.9995;
        this.accel = 0;
        this.velocity = velocity;
    }

    update() {
        this.updateAngle();
        this.updatePosition();
    }

    render() {
        this.renderPole();
        this.renderBall();
    }

    updateAngle() {
        this.accel = (-1 * this.gravity/this.size) * sin(this.angle);
        this.velocity += this.accel;
        this.velocity *= this.damping;
        this.angle += this.velocity
        this.damping -= 0.00001
    }

    updatePosition() {
        this.center.x = sin(this.angle) * this.swingRadius + this.origin.x;
        this.center.y = cos(this.angle) * this.swingRadius + this.origin.y;
    }

    renderBall() {
        stroke (5);
        fill(this.color);
        ellipse(this.center.x, this.center.y, this.size)
    }

    renderPole() {
        stroke(255);
        line(this.center.x, this.center.y, this.lineStart.x, this.lineStart.y);
    }
}