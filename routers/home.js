const express = require ('express');
const Router= express.Router();
const Club = require ('../models/club')

Router.get('/', (err, res)=>{
res.render('index')
})

Router.post('/add', (req, res)=>{
    const name = req.body.name
    const email = req.body.email

    //console.log(name, email);
    const club= new Club({
        name, 
        email
    })
    club.save(err=>{
        if (err){
            console.log("error occurred")
        }else {
            res.redirect('/')
        }
    })
    })

// FIND DATA 

Router.get('/show', (req, res)=>{
    Club.find((err, docs)=>{
    if(err) throw err;

    res.render('show', {
        students:docs
    })
    })

})
    
//CATCH  DATA TO UPDATE 
Router.get('/edit/:id', (req, res)=>{
Club.findOneAndUpdate({_id: req.params.id}, req.body, {new:true}, (err, docs)=>{
    if (err){
        console.log("cannot update ")
    }else {
        res.render('edit',{studentdata:docs} )
    }
})

})
//UPDATE DATA 
Router.post('/edit/:id', (req, res)=>{
    Club.findByIdAndUpdate({_id: req.params.id}, req.body,  (err, docs)=>{
        if (err){
            console.log(err);
        }else {
            res.redirect('/show')
        }
    })
})

//DELETE DATA 
Router.get('/delete/:id', (req, res)=>{
    Club.findByIdAndDelete({_id: req.params.id}, req.body,  (err, docs)=>{
        if (err){
            console.log(err);
        }else {
            res.redirect('/show')
        }
    })
})

module.exports= Router;   // exporting the router