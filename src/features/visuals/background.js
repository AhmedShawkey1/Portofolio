export const initBackground = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1'; // Behind everything
    // canvas.style.pointerEvents = 'none'; // Passthrough

    document.body.prepend(canvas);

    let width, height;
    let particles = [];
    const particleCount = 20;
    const symbols = ['</>', '{ ; }', 'git', '&&', '||', '#', '01'];

    // Mouse tracking
    const mouse = { x: -100, y: -100 };

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.size = Math.random() * 15 + 10;
            this.symbol = symbols[Math.floor(Math.random() * symbols.length)];
            this.opacity = Math.random() * 0.5;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Bounce off edges
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;

            // Mouse interaction
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // Push away slightly
            if (distance < 100) {
                const angle = Math.atan2(dy, dx);
                this.x -= Math.cos(angle) * 1;
                this.y -= Math.sin(angle) * 1;
                this.opacity = 1; // Highlight
            } else {
                this.opacity = Math.max(0.1, this.opacity - 0.01);
            }
        }

        draw() {
            ctx.font = `${this.size}px monospace`;
            ctx.fillStyle = `rgba(59, 130, 246, ${this.opacity})`;
            ctx.fillText(this.symbol, this.x, this.y);
        }
    }

    function init() {
        resize();
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
        animate();
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        // 1. Draw Spotlight Gradient
        const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 400);
        gradient.addColorStop(0, 'rgba(59, 130, 246, 0.08)'); // Center glow
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);

        // 2. Draw Particles
        particles.forEach(p => {
            p.update();
            p.draw();
        });

        requestAnimationFrame(animate);
    }

    // Events
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    init();
    console.log("Creative Background Initialized");
};
