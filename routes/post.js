
post_module = {

}

function write(req, res) { //포스팅 등록할때.
    res.render('write');
}


//==================== 라우팅함수 모듈에 등록==================
post_module["write"] = write;
module.exports = post_module;