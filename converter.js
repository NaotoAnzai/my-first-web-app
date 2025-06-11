export function setupConverter() {
  // 要素の取得
  const converterForm = document.querySelector(".converter-form");
  const converterInput = document.querySelector(".converter-input");
  const converterFrom = document.querySelector(".converter-from");
  const converterTo = document.querySelector(".converter-to");
  const converterResult = document.querySelector(".converter-result");

  // 単位データ
  const lengthUnit = [
    { name: "meter", base: 1 },
    { name: "kilometer", base: 1000 },
    { name: "centimeter", base: 0.01 },
    { name: "millimeter", base: 0.001 },
    { name: "inch", base: 0.0254 },
    { name: "foot", base: 0.3048 },
    { name: "yard", base: 0.9144 },
    { name: "mile", base: 1609.344 }
  ];

  // select要素の初期化
  lengthUnit.forEach((unit, i) => {
    const optionFrom = document.createElement("option");
    optionFrom.value = unit.base;
    optionFrom.textContent = unit.name;
    converterFrom.appendChild(optionFrom);

    const optionTo = document.createElement("option");
    optionTo.value = unit.base;
    optionTo.textContent = unit.name;
    converterTo.appendChild(optionTo);
  });

  // 初期選択
  converterFrom.selectedIndex = 0; // meter
  converterTo.selectedIndex = 1;   // kilometer

  // 変換処理
  function convert() {
    const inputValue = parseFloat(converterInput.value);
    if (isNaN(inputValue)) {
      converterResult.textContent = "Please enter a valid number";
      return;
    }
    const fromIndex = converterFrom.selectedIndex;
    const toIndex = converterTo.selectedIndex;
    const fromUnit = lengthUnit[fromIndex];
    const toUnit = lengthUnit[toIndex];

    const resultValue = (inputValue * fromUnit.base) / toUnit.base;
    converterResult.textContent = `${inputValue} ${fromUnit.name} = ${resultValue.toFixed(3)} ${toUnit.name}`;
  }

  // イベントリスナー
  converterForm.addEventListener("input", convert);

  // 初回表示
  convert();
}