const ERROR_CODE = {
    //ENTITY
    USERS_ERROR_CODE: {
        ENTITY: "US",
        FIELD: {
            username: "01",
            password: "02"
        }
    },
    TYPE: {
        UNIQUE: "01",
        REQUIRED: "02",
        LENGTH: "03",
        REGEX: "04",
        EMAIL: "05",
        SPECIAL_CHARACTERS: "06",
        MAX_MIN: "07",
    },
    UNIQUE_CODE: 11000,
    US0101: "username is required",
    US0102: "username is",
    US0103: "username required length 6-10 characters",
    US0104: "username required length 6-10 characters",
    US0105: "username is not valid email",
    US0201: "email is used",
}

module.exports = ERROR_CODE