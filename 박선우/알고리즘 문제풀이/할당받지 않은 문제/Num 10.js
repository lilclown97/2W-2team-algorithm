// 10.
// 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 
// 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.


function solution(arr1, arr2) {
    var answer = [];
    for(let i = 0; i < arr1.length; i++) {
        answer[i] = []; // answer[0] = [1] , answer[1] = [2]
        for(let j = 0; j < arr1[i].length; j++) {
            answer[i][j] = arr1[i][j]+arr2[i][j];

            // answer[0][0] = arr1[0][0] + arr2[0][0]
            // answer[0][1] = arr1[0][1] + arr2[0][1]
            // answer[1][0] = arr1[1][0] + arr2[1][0]
            // answer[1][1] = arr1[1][1] + arr2[1][1]
        }
    
    }
    return answer;

}

console.log(solution([[1,2],[2,3]],[[3,4],[5,6]]))
console.log(solution([[1],[2]],[[3],[4]]))
