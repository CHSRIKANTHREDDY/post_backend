require('./../models/index')
const { signUp } = require('../controllers/register/signUp');
const { logIn } = require('../controllers/register/login');
const { addPost, getPost } = require('../controllers/post');
const { addComments, deleteComments } = require('../controllers/comments');
module.exports = (app) =>{
app.get('/', (req,res)=>{
    res.send('successfully connecteed')
})
 app.post('/signUp', signUp )
 app.post('/login', logIn )

 app.post('/add-post', addPost)
 app.get('/get-post', getPost)
 app.post('/add-comments', addComments)
 app.delete('/delete-comments/:id', deleteComments)

}
