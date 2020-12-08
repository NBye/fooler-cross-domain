module.exports = async function ({ ctx }) {
    ctx.res.setHeader('Access-Control-Allow-Origin', '*');
    ctx.res.setHeader('Access-Control-Allow-Headers', '*');
    ctx.res.setHeader('Access-Control-Allow-Method', '*');
    ctx.res.setHeader('Access-Control-Allow-Credentials', 'true');
    ctx.res.setHeader('Access-Control-Expose-Headers', ' Content-Type,Access-Token');
}
