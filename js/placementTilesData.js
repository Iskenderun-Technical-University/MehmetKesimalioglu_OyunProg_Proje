const numRows = 10; // Satır sayısı
const numCols = 10; // Sütun sayısı

const placementTilesData = []; // Boş bir dizi oluştur

// Matrisi rastgele değerlerle doldur
for (let i = 0; i < numRows; i++) {
  const row = [];
  for (let j = 0; j < numCols; j++) {
    const randomValue = Math.random() < 0.5 ? 0 : 14; // Değerleri rastgele 0 veya 14 olarak ata
    row.push(randomValue);
  }
  placementTilesData.push(...row);
}
