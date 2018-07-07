//module indepandency
var application_root = __dirname,
express = require ('express'),  //웹 프레임워크
path = require('path'),         //파일을 다루는 유틸리티
mongoose = require('mongoose'); //MongoDB 통합 모듈

//create server.
var app = express();

//server configulation.
app.configure( function() {
    //요청된 body를 파싱하고, request.body에 넣는다.
    app.use(express.bodyParser());

    //HTTP메서드와 URL을 기반으로 경로를 확인.
    app.use(app.router);

    //정적 컨텐츠를 제공.
    app.use(express.static(path.join(application_root, 'site')));

    //개발시에 필요한 에러를 표시.
    app.use(express.errorHandler({dumpExceptions: true, showStack: true}));

});

//start server.
var port = 4711;
app.listen(port, function() {
    console.log('Express server listening on port %d in $s mode', port, app.settings.env);
});

//route
//get함수는 첫 번째 파라미터로 경로를 전달받고, 두 번째 파라미터로 함수를 전달받는다.
app.get( '/api', function(request, response) {
    response.send('Library API is running!!');
});

//DB Connection
mongoose.connect('mongodb://localhost/library_database');

//schema
var Book = new mongoose.Schema({
    title: String,
    author: String,
    releaseDate: Date,

    keywords: [Keywords]    //신규
});

//model
var BookModel = mongoose.model('Book', Book);

//모든 책을 반환해줄 REST API를 위한 GET 동작 정의.
//모든 책의 목록을 가져온다.
app.get('/api/books', function(request, response) {
    return BookModel.find(function(err, books) {
        if(!err) {
            return response.send(books);
        } else {
            return console.log(err);
        }
    });
});

app.post('/api/books', function(request, response) {
    var book = new BookModel({ 
        title: request.body.title,
        author: request.body.author,
        releaseDate: request.body.releaseDate,
        keywords: request.body.keywords //신규
    });

    book.save(function(err) {
        if(!err) {
            return console.log('created');
        } else {
            return console.log(err);
        }
    });

    return response.send(book);
});

//inquiry book by id.
app.get('/api/books/:id', function (request, response) {
    return BookModel.findById(request.params.id, function(err, book) {
        if (!err) {
            return response.send(book);
        } else {
            return console.log(err);
        }
    });
});

//update book.
app.put('api/books/:id', function (request, response) {
    console.log('Updating book ' + request.body.title);
    return BookModel.findById(request.params.id, function(err, book) {
        book.title = request.body.title;
        book.author = request.body.author;
        book.releaseDate = request.body.releaseDate;
        book.keywords = request.body.keywords;  //신규

        return book.save(function(err) {
            if(!err) {
                console.log('book updated!!');
            } else {
                console.log(err);
            }

            return response.send(book);
        });
    });
});

//delete book.
app.delete('api/books/:id', function(request, response) {
    console.log('Deleting book widh id: ' + request.params.id);
    return BookModel.findById(request.params.id, function(err, book) {
        return book.remove(function(err) {
            if(!err) {
                console.log('Book removed!!');
                return response.send('');
            } else {
                console.log(err);
            }
        });
    });
});

//책의 검색을 위한 키워드 가능 추가.
//schema
var Keywords = new mongoose.Schema({
    keyword: String
});

