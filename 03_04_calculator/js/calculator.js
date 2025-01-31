"use strict";
// ページ上の要素(Element)を参照
const elementSelect = document.getElementById("calcType");
const elementNum1 = document.getElementById("num1");
const elementNum2 = document.getElementById("num2");
const elementResult = document.getElementById("result");
const ellementbtnEqual = document.getElementById("btnEqual");


// イベントを登録
elementSelect.addEventListener("change", clear);
elementNum1.addEventListener("change", clear);
elementNum2.addEventListener("change", clear);
ellementbtnEqual.addEventListener("click", update);



function update() {
    // セレクトボックスの値(計算の種類) // 計算結果を求める
    const result = calculate(

        Number(elementNum1.value), // 1番目のテキスト入力フォームの値
        Number(elementNum2.value), // 2番目のテキスト入力フォームの値
        elementSelect.value  // セレクトボックスの値(計算の種類)
    );

    // 画面に表示   
    elementResult.innerHTML = result; // テキストを代入
}

function calculate(num1, num2, calcType) {
    let result;
    // 計算の種類で処理を分岐
    switch (calcType) {
        case "type-add": // 足し算の場合
            result = num1 + num2;
            break;
        case "type-substract": // 引き算の場合
            result = num1 - num2;
            break;
        case "type-multiply": // 掛け算の場合
            result = num1 * num2;
            break;
        case "type-divide": // 割り算の場合
            result = num1 / num2;
            if (num2 == 0) { result = "error!!" }
            break;
    }
    return result;
}

/**計算結果をクリアします。(clear Result) */
function clear() {
    elementResult.innerHTML = ""; // テキストを代入
}