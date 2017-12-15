module.exports = {

    /** Remove sensitive data from your HTTP headers */
    protectHeader: function(res) {
        res.removeHeader('Transfer-Encoding');
        res.removeHeader('X-Powered-By');
        return res;
    },

    /** Remove sensitive data from your HTTP headers middleware */
    protectHeaderMiddleware: function(req,res,next) {
        res = module.exports.protectHeader(res);
        next();
    }

}
