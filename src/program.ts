export class Program {
    private _then: number = 0;
    private _elapsed: number;

    async init() {
        // await WebglRenderer.getInstance().createShader('test', 'quad.vert', 'quad.frag');
    }

    update() {
        this._then = Date.now();
        requestAnimationFrame(this.updateFrame.bind(this));
    }

    updateFrame(now: number) {
        this._elapsed = now - this._then;
        this._then = now;
        let dt = this._elapsed / 1000;
        // WebglRenderer.getInstance().useProgram('test');
        // WebglRenderer.getInstance().draw();
        requestAnimationFrame(this.updateFrame.bind(this));
    }
}