// 7 - Binding

var user = {
    firstname: "Minh",
    lastname: "Nguyen",
    showName: function () {
        console.log(this.firstname, this.lastname);
        
        // var self = this;
        function showNameInVietNamese() {
            // debugger;
            console.log("Ten cua ban la " + this.firstname, this.lastname);
            console.log(this);
        }

        showNameInVietNamese.call(this);
    }
};

var firstname = 'End Of';
var lastname = 'The World 2012';

user.showName();