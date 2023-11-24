// 拿到 canvas
const canvas = document.querySelector("canvas");
// 拿到 ctx
const ctx = canvas.getContext("2d", {
    willReadFrequently: true,
});

// 初始化 canvas 的宽高
function initCanvasSize() {
    // 这里乘以 devicePixelRatio 是为了解决清晰度的问题，devicePixelRatio 是设备的像素比。
    canvas.width = window.innerWidth * devicePixelRatio;
    canvas.height = window.innerHeight * devicePixelRatio;
}

initCanvasSize();

/**
 * 获取[min, max]范围内的随机整数
 */
function getRandom(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

class Particle {
    constructor() {
        // 半径等于 canvas 宽高最小值的一半
        const r = Math.min(canvas.width, canvas.height) / 2;
        // canvas 宽度的中心点
        const cx = canvas.width / 2;
        // canvas 高度的中心点
        const cy = canvas.height / 2;
        // 随机的弧度
        const rad = (getRandom(0, 360) * Math.PI) / 180;
        // 得到 x 的值
        this.x = cx + r * Math.cos(rad);
        // 得到 y 的值
        this.y = cy + r * Math.sin(rad);
        // 粒子的半径随机值取 2~7 每个值都要乘上 DPR 用来解决清晰度的问题
        this.size = getRandom(2 * devicePixelRatio, 7 * devicePixelRatio);
    }

    draw() {
        ctx.beginPath();
        // 粒子的颜色
        ctx.fillStyle = "#5445544d";
        // 画一个指定坐标和位置的圆圈
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
    }

    moveTo(tx, ty) {
        const duration = 500; // 500ms 的运动时间
        const sx = this.x;
        const sy = this.y; // 起始位置
        const xSpeed = (tx - sx) / duration; // 横向的速度
        const ySpeed = (ty - sy) / duration; // 纵向的速度
        const startTime = Date.now(); // 起始时间
        const _move = () => {
            // 每一次调用这个函数就计算出当前时间减去起始时间，得到运动了多少时间。
            const t = Date.now() - startTime;
            // 速度乘以时间得到移动的距离，然后加上起始点的位置得到新的坐标
            const x = sx + xSpeed * t;
            // 同上 x
            const y = sy + ySpeed * t;
            this.x = x;
            this.y = y;
            // 限制一下运动的时间不能超过运动的时间
            if (t >= duration) {
                // 如果超出了运动时间将 x y 的值直接赋值为目标的位置
                this.x = tx;
                this.y = ty;
                return;
            }
            // _move 函数每一次调用就改动一点 x y 的值
            // 然后使用 requestAnimationFrame 重新去注册 _move 函数
            // 下一次又改动一点，这样子就有动画的效果了
            requestAnimationFrame(_move);
        };
        _move();
    }
}

// 用来保存所有的粒子
const partciles = [];
const p = new Particle();
// p.draw();
partciles.push(p);

// // 向数组里加入 500 个粒子 (仅用于测试效果使用)
// for (let i = 0; i < 500; i++) {
//     partciles.push(new Particle());
// }

let text = null;

// 清空画布
function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function draw() {
    clear();
    update(); // 画粒子之前调用 update 方法
    // 循环数组生成所有的粒子
    partciles.forEach((p) => p.draw());
    // 通过 requestAnimationFrame 在下一次绘制的时候重新调用这个 draw 方法
    // 那么将来这些点的坐标有更新，那么它就会画更新过后粒子的位置
    requestAnimationFrame(draw);
}

draw();

// 得到当前时间的值
function getText() {
    return new Date().toTimeString().substring(0, 8);
}

function update() {
    const newText = getText();
    if (newText === text) {
        return;
    }
    text = getText();
    clear();
    const { width, height } = canvas;
    // 文本的颜色
    ctx.fillStyle = "#000";
    // 文本的垂直居中方式
    ctx.textBaseline = "middle";
    // 文本的字体大小与字体类型
    ctx.font = `${140 * devicePixelRatio}px 'DS-Digital'`;
    // ctx.fillText(text, , );
    // 文本的位置
    ctx.fillText(text, (width - ctx.measureText(text).width) / 2, height / 2);
    getPoints();
    const points = getPoints();
    // 清空画布因为我们要画的是，粒子时钟而不是文本时钟
    clear();
    // 循环 points
    for (let i = 0; i < points.length; i++) {
        // 从 partciles 中取出相应的值
        let p = partciles[i];
        // 如果没取到值就给他添加一个粒子（不同的时间用到的粒子数是不同的）
        if (!p) {
            p = new Particle();
            partciles.push(p);
        }
        // 我们取出相应的目标坐标
        const [x, y] = points[i];
        // 然后让粒子移动到这个 x y 坐标
        p.moveTo(x, y);
    }
    // 如果说 points 小于 partciles 的话
    if (points.length < partciles.length) {
        // 那么就将多余的粒子干掉
        partciles.splice(points.length);
    }
}

function getPoints() {
    // getImageData 方法表示得到指定范围内的像素点信息
    // 因为要拿到整个画布所以左上角为 0 0, 右下角为 canvas 的宽高
    // 它的返回值是一个对象，这里边有三个数据是我们需要的
    // width：宽 height：高 data：像素点的数据
    const { width, height, data } = ctx.getImageData(
        0,
        0,
        canvas.width,
        canvas.height
    );
    const points = []; // 用于保存黑色的像素点位置
    const gap = 6; // 定义一个变量值，用去取值时不那么密集
    // 每次循环的时候都加上 gap 的值
    for (let i = 0; i < width; i += gap) {
        for (let j = 0; j < height; j += gap) {
            const index = (i + j * width) * 4;
            const r = data[index];
            const g = data[index + 1];
            const b = data[index + 2];
            const a = data[index + 3];
            // 判断像素点的 rgba 值是否是黑色
            if (r === 0 && g === 0 && b === 0 && a === 255) {
                points.push([i, j]); // 如果是黑色像素点就将位置储存起来
            }
        }
    }
    return points; // 返回存储的位置信息
}
