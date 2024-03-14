function getFixRes() {
    // 3rd API for generating cocktail image
    var tableUrl = "https://gmsfeed.co.uk/api/show/refresh?method=api&show=league&team=261f3848-3f43-4ab1-98b4-c40709bd4731&comp_id=c0c15e15-bfdd-48b1-9568-5387b1742a1a&sort_by=fixtureTime&options=showDetail:yes"

    $.ajax({
        url: tableUrl,
        method: "GET"
    }).then(function (table) {
        
        $("#tableElement").append(`${table.html}`)
    });
};

$(document).ready(function () {

    getFixRes();

});