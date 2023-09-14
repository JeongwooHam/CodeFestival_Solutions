/*
[직사각형 넓이 구하기]
2차원 좌표 평면에 변이 축과 평행한 직사각형이 있습니다. 
직사각형 네 꼭짓점의 좌표 [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]가 담겨있는 배열 dots가 매개변수로 주어질 때, 
직사각형의 넓이를 return 하도록 solution 함수를 완성해보세요.
*/

const getLength = (dots) => Math.abs(Math.max(...dots) - Math.min(...dots));

const solution = (dots) => {
  const side_A = new Set();
  const side_B = new Set();

  for (let [x, y] of dots) {
    side_A.add(x);
    side_B.add(y);
  }

  return getLength(side_A) * getLength(side_B);
};

console.log(
  solution([
    [1, 1],
    [2, 1],
    [2, 2],
    [1, 2],
  ])
);
console.log(
  solution([
    [-1, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
  ])
);