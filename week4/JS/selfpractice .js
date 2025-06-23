var csvData = `0134138,Alan Smith,333-580-2254,70 inches
0134139   ,    Christina    Lee    ,  123            4126347 ,        130 cm
0134140,       Doug         Thomas       , 532           4126347, 158cm`;

function splitIntoRows(s) {
  return s.split(/\r?\n/);
}

function separateRows(row) {
  let fields = row.split(/s*,s*/);

  fields[1] = fields[1].replace(/\s+/, " ");
  console.log(fields);
  return fields;
}

function processCSV(csv) {
  let rows = splitIntoRows(csv);
  let data = [];
  for (let i = 0; i < rows.length; i++) {
    let row = rows[i];
    let fields = separateRows(row);
    data.push(fields);
  }
  console.log(data);

  return csv;
}

var processed = processCSV(csvData);
// console.log(csvData);





