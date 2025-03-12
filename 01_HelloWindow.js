const canvas = document.getElementById('glCanvas');
const gl = canvas.getContext('webgl2');

if (!gl) {
    console.error('WebGL 2 is not supported by your browser.');
}

// 초기 캔버스 크기 설정 (500x500)
canvas.width = 500;
canvas.height = 500;
gl.viewport(0, 0, 500, 500);

// 창 크기 변경 이벤트 핸들러
window.addEventListener('resize', () => {
    const size = Math.min(window.innerWidth/2, window.innerHeight/2);
    canvas.width = size;
    canvas.height = size;
    gl.viewport(size/2, size/2, size, size);
    render();
});

// 4분할 색상 영역 렌더링
function render() {
    gl.enable(gl.SCISSOR_TEST);

    // 좌상단 (빨강)
    gl.scissor(0, canvas.height/2, canvas.width/2, canvas.height/2);
    gl.clearColor(1.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    // 우상단 (초록)
    gl.scissor(canvas.width/2, canvas.height/2, canvas.width/2, canvas.height/2);
    gl.clearColor(0.0, 1.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    // 좌하단 (파랑)
    gl.scissor(0, 0, canvas.width/2, canvas.height/2);
    gl.clearColor(0.0, 0.0, 1.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    // 우하단 (초록)
    gl.scissor(canvas.width/2, 0, canvas.width/2, canvas.height/2);
    gl.clearColor(1.0, 1.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.disable(gl.SCISSOR_TEST);
}

// 초기 렌더링 실행
render();
