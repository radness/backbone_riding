var app = app || {};

app.LibraryView = Backbone.View.extend({
    el: '#books',

    initialize: function () {
        this.collection = new app.Library(initialBooks);
        this.render();
    },

    //collection 내의 각각의 책들을 렌더링함으로써 라이브러리를 렌더링한다.
    render: function () {
        this.collection.each(function(item) {
            this.renderBook(item);
        }, this);
    },

    //BookView를 생성하고 라이브러리에 이 요소를 추가해서 라이브러리를 렌더링한다.
    rederBook: function (item) {
        var bookView = new app.BookView({
            model: item
        });
        this.$el.append(bookVIew.render().el);
    }
});