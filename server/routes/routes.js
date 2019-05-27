module.exports = (app) => {
   app.get('/', (req, res, next) => {
      res.render('home', {
         "titel": "Hjem"
      });
   });

   app.get('/product', (req, res, next) => {
      res.render('product', {
         "titel":"Produkter"
      });
   });

   app.get('/contact', (req, res, next) => {
      res.render('contact', {
         "titel": "Kontakt"
      });
   });

};