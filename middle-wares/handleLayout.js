var categoryRepo = require('../repos/categoryRepo');
module.exports = (req, res, next) => {

    if (req.session.isLogged === undefined) {
        req.session.isLogged = false;
    }
    if (req.session.cart === undefined) {
        req.session.cart = [];
    }

    var p1 = categoryRepo.loadAll();
    let menu = categoryRepo.loadAllKind();
    let nxb = categoryRepo.loadAllPD();

    Promise.all([p1,menu,nxb]).then(([rows,menu,nxb]) => {

        res.locals.layoutVM = {
            categories: rows,
            suppliers: rows,
            isLogged: req.session.isLogged,
            curUser: req.session.user,
            totalCart: req.session.cart.length,
            categories: menu,
            nxb:nxb,
            Authorized:req.session.Authorized,
            reUrl:req.session.reUrl
        };
        
        next();
    });
};