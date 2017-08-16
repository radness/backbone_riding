//View를 생성하고 Model을 할당한 후 render() 메서드를 호출하여 화면을 그린다
(function ($) {
    //create model
    var Ride = Backbone.Model.extend({
        defaults: {
            coverImage: "img/INZI_01.png",
            title: "INZI VINA",
            rider: "Yeonghoon",
            ridingDate: "2017",
            keywords: "Dashboard_01"
        }
    });

    //create view
    var RideView = Backbone.View.extend({
        tagName: "div",
        //screen.css에서 사용 할 css의 클래스 이름 .rideContainer
        className: "rideContainer",
        template: $("#rideTemplate").html(),

        render: function () {
            //tmpl은 JSON 객체를 받아서 html을 반환하는 함수
            var tmpl = _.template(this.template);
            //jQuery html() 함수를 사용하기 위해 jquery 객체 $el을 사용한다
            this.$el.html(tmpl(this.model.toJSON()));
            
            return this;
        }
    });

    //model, view를 생성하여 view에 model 할당하기
    var ride = new Ride({
        title: "INZI VINA",
        rider: "Yeonghoon",
        ridingDate: "2017",
        keywords: "Dashboard_01"
    });

    rideView = new RideView({
        model: ride
    });

    //템플릿에 값을 매핑한 DOM을 최종적으로 넘김
    $("#rides").html(rideView.render().el);

    //rides sample
    var rides = [
        {title:"INZI VINA", rider:"Youngseok", ridingDate:"2017", keywords:"Dashboard_02", coverImage: "img/INZI_02.png"},
        {title:"INZI VINA", rider:"Chanmon", ridingDate:"2017", keywords:"Dashboard_03", coverImage: "img/INZI_07.png"},
        {title:"INZI VINA", rider:"Chohee", ridingDate:"2017", keywords:"Dashboard_04", coverImage: "img/INZI_08.png"}
    ];

    //Ride Collection
    var Rides = Backbone.Collection.extend({
        model: Ride
    });

    //Collection View
    var RidesView = Backbone.View.extend({
        el:$("#rides"),

        initialize: function () {
            this.collection = new Rides(rides);
            this.render();
        },

        //컬렉션의 내역을 루핑, each 메소드내에서 함수 그 자체가 this가 된다.
        //따라서 this 참조 안하게 that을 설정한다
        render: function () {
            var that = this;
            _.each(this.collection.models, function(item) {
                that.renderRide(item);
            }, this);
        },

        //RideView를 통해 개별적으로 렌더링한다
        renderRide: function (item) {
            var rideView = new RideView({
                model: item
            });
            this.$el.append(rideView.render().el);
        }
    });

    //new를 하면 initalize()가 자동적으로 호출된다
    var ridesView = new RidesView();

})(jQuery);