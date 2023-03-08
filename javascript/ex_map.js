let tables = [
    {
      'heading': 'A',
      'rowData': [ 'A1', 'A2', 'A3', ]
    },
    {
      'heading': 'B',
      'rowData': [ 'B1', 'B2', 'B3', ]
    },
    {
      'heading': 'C',
      'rowData': [ 'C1', 'C2', 'C3', ]
    },
];

let result =  tables.map((table)  => table.rowData.shift());

console.log("Map and shift result: ", result);
