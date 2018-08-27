function getUserId() {
    var id = 69;
    return {
        getId: function () {
            return 'id: ' + id;
        },
        setId: function (newId) {
            id = newId;
            return 'id: ' + id;
        }
    }
}

var userId = getUserId();

console.log(userId.getId());

userId.setId(96);

console.log(userId.getId());
