module.exports = {
    index: (req, res) => {
        return res.render('allBeats');
    },
    
    detail: (req, res) => {
        return res.render('detail');
    },
}