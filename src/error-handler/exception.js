class Exception extends Error{
    name;
    code;
    msg;

    constructor(name, code, msg) {
        super();
        this.name = name;
        this.code = code;
        this.msg = msg;
    }
}

module.exports = Exception