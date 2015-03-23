var bcrypt   = require('bcrypt-nodejs');

module.exports = function(mongoose){
        var UserSchema = mongoose.Schema({
            username: String,
            password: String,
            salt: String,
            hash: String,
            google : {
                id : String,
                token : String,
                refreshToken : String,
                name : String,
                email : String,
                time : Number
            },
            feeds: {
                youtube   : [],
                gmail     : [],
                reddit    : [],
                twitter   : [],
                instagram : []
            }
        });

        // methods ======================
        // generating a hash
        UserSchema.methods.generateHash = function(password) {
            return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
        };

        // checking if password is valid
        UserSchema.methods.validPassword = function(password) {
            return bcrypt.compareSync(password, this.password);
        };


        var User = mongoose.model('users', UserSchema);
        return User;
};