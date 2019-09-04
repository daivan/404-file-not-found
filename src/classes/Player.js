class Player {

    constructor(context) {
        let image = new Image();
        image.src = 'assets/images/robot.png';
        this.context = context;
        this.image = image;
        this.x = 0;
        this.y = 0;

        this.animate = 0;
        this.destination = [0, 0];
        this.currentAnimation = 'idle';
        this.isMoving = false;
    }

    animateIdle() {
        this.context.drawImage(this.image, 0, 0, 32, 32, this.x, this.y, 64, 64);
    }


    animateRight() {
        if (this.animate === 0) {
            this.context.drawImage(this.image, 0, 32, 32, 32, this.x, this.y, 64, 64);
            this.animate++;
        } else if (this.animate === 1) {
            this.context.drawImage(this.image, 32, 32, 32, 32, this.x, this.y, 64, 64);
            this.animate++;
        } else {
            this.context.drawImage(this.image, 64, 32, 32, 32, this.x, this.y, 64, 64);
            this.animate = 0;
        }

    }


    animateLeft() {
        if (this.animate === 0) {
            this.context.drawImage(this.image, 0, 96, 32, 32, this.x, this.y, 64, 64);
            this.animate++;
        } else if (this.animate === 1) {
            this.context.drawImage(this.image, 32, 96, 32, 32, this.x, this.y, 64, 64);
            this.animate++;
        } else {
            this.context.drawImage(this.image, 64, 96, 32, 32, this.x, this.y, 64, 64);
            this.animate = 0;
        }

    }


    animateUp() {
        if (this.animate === 0) {
            this.context.drawImage(this.image, 0, 64, 32, 32, this.x, this.y, 64, 64);
            this.animate++;
        } else if (this.animate === 1) {
            this.context.drawImage(this.image, 32, 64, 32, 32, this.x, this.y, 64, 64);
            this.animate++;
        } else {
            this.context.drawImage(this.image, 64, 64, 32, 32, this.x, this.y, 64, 64);
            this.animate = 0;
        }

    }


    animateDown() {
        if (this.animate === 0) {
            this.context.drawImage(this.image, 0, 0, 32, 32, this.x, this.y, 64, 64);
            this.animate++;
        } else if (this.animate === 1) {
            this.context.drawImage(this.image, 32, 0, 32, 32, this.x, this.y, 64, 64);
            this.animate++;
        } else {
            this.context.drawImage(this.image, 64, 0, 32, 32, this.x, this.y, 64, 64);
            this.animate = 0;
        }

    }


    render() {
        if (this.currentAnimation === 'walkRight') {
            this.animateRight();
        } else if (this.currentAnimation === 'walkLeft') {
            this.animateLeft();
        } else if (this.currentAnimation === 'walkUp') {
            this.animateUp();
        } else if (this.currentAnimation === 'walkDown') {
            this.animateDown();
        } else if (this.currentAnimation === 'idle') {
            this.animateIdle();
        }
        if (this.isMoving) {
            this.movePlayer();
        }
    }

    movePlayer() {
        if (this.x !== this.destination[0]) {
            if (this.x > this.destination[0]) {
                this.x = this.x - 4;
            } else {
                this.x = this.x + 4;
            }
        } else if (this.y !== this.destination[1]) {
            if (this.y > this.destination[1]) {
                this.y = this.y - 4;
            } else {
                this.y = this.y + 4;
            }
        } else {
            this.isMoving = false;
        }
    }


    move(direction,map) {
        if (this.isMoving) {
            return false;
        }
        if (direction === 'down') {
            if (this.IsMovePossible('down', map)) {
                this.isMoving = true;
                this.currentAnimation = 'walkDown';
                this.destination = [this.x, this.y + 64];
                return true;
            }
            return false;

        }
        if (direction === 'up') {
            if (this.IsMovePossible('up', map)) {
                this.isMoving = true;
                this.currentAnimation = 'walkUp';
                this.destination = [this.x, this.y - 64];
                return true;
            }
            return false;
        }
        if (direction === 'left') {
            if (this.IsMovePossible('left', map)) {
                this.isMoving = true;
                this.currentAnimation = 'walkLeft';
                this.destination = [this.x - 64, this.y];
                return true;
            }
            return false;
        }
        if (direction === 'right') {
            if (this.IsMovePossible('right', map)) {
                this.isMoving = true;
                this.currentAnimation = 'walkRight';
                this.destination = [this.x + 64, this.y];
                return true;
            }
            return false;

        }
    }

    location() {
        let x;
        let y;
        if (this.x > 0) {
            x = this.x / 64;
        } else {
            x = 0;
        }
        if (this.y > 0) {
            y = this.y / 64;
        } else {
            y = 0;
        }
        return [y, x];
    }

    IsMovePossible(direction, map) {
        if (direction === 'down') {
            if (this.location()[0] === 7) {
                return false;
            }
            if (map[this.location()[0] + 1][this.location()[1]] === 0) {
                return false;
            }
            return true;
        } else if (direction === 'up') {

            if (this.location()[0] === 0) {
                return false;
            }
            if (map[this.location()[0] - 1][this.location()[1]] === 0) {
                return false;
            }
            return true;
        } else if (direction === 'left') {
            if (this.location()[1] === 0) {
                return false;
            }
            if (map[this.location()[0]][this.location()[1] - 1] === 0) {
                return false;
            }
            return true;
        } else if (direction === 'right') {
            if (this.location()[1] === 7) {
                return false;
            }
            if (map[this.location()[0]][this.location()[1] + 1] === 0) {
                return false;
            }
            return true;
        }
    }
}