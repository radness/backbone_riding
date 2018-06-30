//모듈 의존성
var application_root = __dirname,
express = require ('express'),  //웹 프레임워크
path = require('path'),         //파일을 다루는 유틸리티
mongoose = require('mongoose'); //MongoDB 통합 모듈

//서버 생성.
var app = express();

//서버 설정.
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

//서버를 시작.
var port = 4711;
app.listen(port, function() {
    console.log('Express server listening on port %d in $s mode', port, app.settings.env);
});
