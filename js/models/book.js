var app = app || {};

app.Book = Backbone.Model.extend({
    defaults: {
        coverImage: 'img/my_cycle.png',
        title: 'No title',
        author: 'Unknown',
        keywords: 'None'
    }
});