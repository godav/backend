var user = require('../config/dbconfig.js'); //reference of dbconfig.js

var User = {

    getAllUsers: function (callback) {

        return user.query("Select * from users", callback);
    },
    getUserById: function (id, callback) {

        return user.query("select * from users where id=?", [id], callback);
    },
    addUser: function (User, callback) {
        
        return user.query("insert into users values(?,?,?)", [User.Id, User.Title, User.Status], callback); // need to change all paramters we want to store for users
    },
    deleteUser: function (id, callback) {
        
        return user.query("delete from users where id=?", [id], callback);
    },
    updateUser: function (id, User, callback) {
        
        return user.query("update users set Title=?,Status=? where id=?", [User.Title, User.Status, id], callback);  // need to change all paramters we want to update for users
    }

};
module.exports = User;