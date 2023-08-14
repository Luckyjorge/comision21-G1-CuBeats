module.exports = {
    index: (req, res) => {
        res.render('index');
    },
    admin: (req, res) => {
        res.render('admin');
    },
    addProduct: (req, res) => {
        res.render('createBeats');
    }
}