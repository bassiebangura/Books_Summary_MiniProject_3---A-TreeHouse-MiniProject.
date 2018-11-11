const book = new Vue ({
    el: "#book",
    data: {
        title: "The Bible",
        author: "The Lord",
        summary: "The Bible contains all the principles you will ever need to succeed in life."
    },
    methods: {
        sayHello: function () {
            alert(this.title)
        }
    }
    
})