const fs = require('fs');
module.exports = {
    saveMatrixToFile: function (matrix, path) {
        fs.writeFileSync(path, JSON.stringify(matrix), (err) => {if(err){throw err;}});
    },
    loadMatrixFromFile: function (path) {
        let newArray = [];

        newArray = fs.readFileSync(path, 'utf8');

        newArray = JSON.parse(newArray);

        return newArray;
    }
}