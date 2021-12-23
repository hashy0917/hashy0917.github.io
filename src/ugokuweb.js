var unit = 100,
    canvasList, // 繧ｭ繝｣繝ｳ繝舌せ縺ｮ驟榊�
    info = {}, // 蜈ｨ繧ｭ繝｣繝ｳ繝舌せ蜈ｱ騾壹�謠冗判諠��ｱ
    colorList; // 蜷�く繝｣繝ｳ繝舌せ縺ｮ濶ｲ諠��ｱ

/**
 * Init function.
 *
 * Initialize variables and begin the animation.
 */
function init() {
    info.seconds = 0;
    info.t = 0;
    canvasList = [];
    colorList = [];
    // canvas1蛟九ａ縺ｮ濶ｲ謖�ｮ�
    canvasList.push(document.getElementById("waveCanvas"));
    colorList.push(['#333', '#666', '#111']);//驥阪�繧区ｳ｢縺ｮ濶ｲ險ｭ螳�
    // 蜷�く繝｣繝ｳ繝舌せ縺ｮ蛻晄悄蛹�
    for (var canvasIndex in canvasList) {
        var canvas = canvasList[canvasIndex];
        canvas.width = document.documentElement.clientWidth; //Canvas縺ｮwidth繧偵え繧｣繝ｳ繝峨え縺ｮ蟷�↓蜷医ｏ縺帙ｋ
        canvas.height = 200;//豕｢縺ｮ鬮倥＆
        canvas.contextCache = canvas.getContext("2d");
    }
    // 蜈ｱ騾壹�譖ｴ譁ｰ蜃ｦ逅�他縺ｳ蜃ｺ縺�
    update();
}

function update() {
    for (var canvasIndex in canvasList) {
        var canvas = canvasList[canvasIndex];
        // 蜷�く繝｣繝ｳ繝舌せ縺ｮ謠冗判
        draw(canvas, colorList[canvasIndex]);
    }
    // 蜈ｱ騾壹�謠冗判諠��ｱ縺ｮ譖ｴ譁ｰ
    info.seconds = info.seconds + .014;
    info.t = info.seconds * Math.PI;
    // 閾ｪ霄ｫ縺ｮ蜀崎ｵｷ蜻ｼ縺ｳ蜃ｺ縺�
    setTimeout(update, 35);
}

/**
 * Draw animation function.
 *
 * This function draws one frame of the animation, waits 20ms, and then calls
 * itself again.
 */
function draw(canvas, color) {
    // 蟇ｾ雎｡縺ｮcanvas縺ｮ繧ｳ繝ｳ繝�く繧ｹ繝医ｒ蜿門ｾ�
    var context = canvas.contextCache;
    // 繧ｭ繝｣繝ｳ繝舌せ縺ｮ謠冗判繧偵け繝ｪ繧｢
    context.clearRect(0, 0, canvas.width, canvas.height);

    //豕｢縺ｮ驥阪↑繧翫ｒ謠冗判 drawWave(canvas, color[謨ｰ蟄暦ｼ域ｳ｢縺ｮ謨ｰ繧�0縺九ｉ謨ｰ縺医※謖�ｮ夲ｼ云, 騾城℃, 豕｢縺ｮ蟷��zoom,豕｢縺ｮ髢句ｧ倶ｽ咲ｽｮ縺ｮ驕�ｌ )
    drawWave(canvas, color[0], 0.5, 3, 0);//0.5竍帝城℃蜈ｷ蜷�50%縲�3竍呈焚蟄励′螟ｧ縺阪＞縺ｻ縺ｩ豕｢縺後↑縺�繧峨°
    drawWave(canvas, color[1], 0.4, 2, 250);
    drawWave(canvas, color[2], 0.2, 1.6, 100);
}

/**
 * 豕｢繧呈緒逕ｻ
 * drawWave(濶ｲ, 荳埼乗�蠎ｦ, 豕｢縺ｮ蟷��zoom, 豕｢縺ｮ髢句ｧ倶ｽ咲ｽｮ縺ｮ驕�ｌ)
 */
function drawWave(canvas, color, alpha, zoom, delay) {
    var context = canvas.contextCache;
    context.fillStyle = color;//蝪励ｊ縺ｮ濶ｲ
    context.globalAlpha = alpha;
    context.beginPath(); //繝代せ縺ｮ髢句ｧ�
    drawSine(canvas, info.t / 0.5, zoom, delay);
    context.lineTo(canvas.width + 10, canvas.height); //繝代せ繧辰anvas縺ｮ蜿ｳ荳九∈
    context.lineTo(0, canvas.height); //繝代せ繧辰anvas縺ｮ蟾ｦ荳九∈
    context.closePath() //繝代せ繧帝哩縺倥ｋ
    context.fill(); //豕｢繧貞｡励ｊ縺､縺ｶ縺�
}

/**
 * Function to draw sine
 *
 * The sine curve is drawn in 10px segments starting at the origin.
 * drawSine(譎る俣, 豕｢縺ｮ蟷��zoom, 豕｢縺ｮ髢句ｧ倶ｽ咲ｽｮ縺ｮ驕�ｌ)
 */
function drawSine(canvas, t, zoom, delay) {
    var xAxis = Math.floor(canvas.height / 2);
    var yAxis = 0;
    var context = canvas.contextCache;
    // Set the initial x and y, starting at 0,0 and translating to the origin on
    // the canvas.
    var x = t; //譎る俣繧呈ｨｪ縺ｮ菴咲ｽｮ縺ｨ縺吶ｋ
    var y = Math.sin(x) / zoom;
    context.moveTo(yAxis, unit * y + xAxis); //繧ｹ繧ｿ繝ｼ繝井ｽ咲ｽｮ縺ｫ繝代せ繧堤ｽｮ縺�

    // Loop to draw segments (讓ｪ蟷��蛻�∵ｳ｢繧呈緒逕ｻ)
    for (i = yAxis; i <= canvas.width + 10; i += 10) {
        x = t + (-yAxis + i) / unit / zoom;
        y = Math.sin(x - delay) / 3;
        context.lineTo(i, unit * y + xAxis);
    }
}

init();