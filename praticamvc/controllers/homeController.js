const path = require("path")
/* Indicando para um file html com sendFile */
const homeController = {
    
    index: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/home.html'))
    }
}

module.exports = homeController;

