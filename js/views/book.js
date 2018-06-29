var app = app || {};

app.BookView = Backbone.View.extend({
    tagName: 'div',
    className: 'bookContainer',
    template: _.template($('#bookTemplate').html() ),

    render: function() {
        //template은 JSON 객체를 얻어서 html을 반환하는 함수.

        //this.el은 tagName 내에 정의되어 있다.
        // $el은 jquery의 html() 함수를 사용한다.
        this.$el.html(this.template(this.model.toJSON() ));

        return this;
    },
});