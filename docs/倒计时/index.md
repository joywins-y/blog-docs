<div>
    <iframe
        src="./index.html"
        height=400
        width=90%
        frameborder=0
        allowfullscreen
        srcdoc='<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #hour,
        #mi,
        #se {
            line-height: 30px;
            min-height: 30px;
            display: inline-block;
            font-weight: 500;
        }
    </style>
</head>
<body>
    <h2>小时</h2>
    <div id="hour">0</div> 时
    <h2>分钟</h2>
    <div id="mi">0</div> 分
    <h2>秒</h2>
    <div id="se">0</div> 秒
    <h1>秒</h1>
    <div id="time">0</div>
    <script>
        const h = document.getElementById("hour");
        const m = document.getElementById("mi");
        const s = document.getElementById("se");
        const t = document.getElementById("time");
        function diff() {
            const now = new Date().getTime()
            const next = new Date("2023-09-28 19:00:00").getTime()
            const result = (next - now) / 1000
            return result;
        }
        function str(time) {
            let t = parseInt(time / 24 / 60 / 60 % 24)
            let h = parseInt(time / 60 / 60 % 24)
            let m = parseInt(time / 60 % 60)
            let s = parseInt(time % 60)
            t = t < 10 ? "0" + t : t
            h = h < 10 ? "0" + h : h
            m = m < 10 ? "0" + m : m
            s = s < 10 ? "0" + s : s
            return `距离放假还剩: ${t} 天 ${h} 小时 ${m} 分钟 ${s} 秒`
        }
        setInterval(() => {
            const second = diff()
            s.innerText = parseInt(second)
            const r = str(second);
            t.innerText = r;
        }, 1000);
        setInterval(() => {
            const second = diff()
            const hour = parseInt(second / 60 / 60)
            const minute = parseInt(second / 60)
            m.innerText = parseInt(minute)
            h.innerText = parseInt(hour);
        }, 1000);
    </script>
</body>
</html>'
    >
    </iframe>
</div>
