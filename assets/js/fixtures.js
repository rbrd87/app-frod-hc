function getFixRes() {
    // 3rd API for generating cocktail image
    var fixResUrl = "https://gmsfeed.co.uk/api/show/refresh?method=api&show=results%2Bfixtures&team=261f3848-3f43-4ab1-98b4-c40709bd4731&comp_id=c0c15e15-bfdd-48b1-9568-5387b1742a1a&sort_by=fixtureTime"

    $.ajax({
        url: fixResUrl,
        method: "GET"
    }).then(function (fixResResponse) {

        $("#fixtures-list").append(`${fixResResponse.html}`)
    });
};

$(document).ready(function () {

    getFixRes();

});