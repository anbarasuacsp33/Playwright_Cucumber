const ExcelJS = require('exceljs');

async function readExcel(path) {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(path);

    const worksheet = workbook.worksheets[0];
    const data = [];
    console.log(`Reading data from ${path}...`);

    worksheet.eachRow((row, rowNumber) => {
        if (rowNumber !== 1) { // skip header
            data.push({
                username: row.getCell(1).value,
                password: row.getCell(2).value
            });
        }
    });

    return data;
}

module.exports = readExcel;
