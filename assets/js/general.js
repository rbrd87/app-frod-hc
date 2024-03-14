function prevRes() {
    // 3rd API for generating cocktail image
    var prevResUrl = "https://gmsfeed.co.uk/api/show/refresh?method=api&show=results&team=261f3848-3f43-4ab1-98b4-c40709bd4731&comp_id=c0c15e15-bfdd-48b1-9568-5387b1742a1a&whatson=7&sort_by=fixtureTime"
    $.ajax({
        url: prevResUrl,
        method: "GET"
    }).then(function (prevResResponse) {
       
        $("#prevRes").append(`${prevResResponse.html}`)
    });
};

function nextFixt() {
    // 3rd API for generating cocktail image
    var nextFixtUrl = "https://gmsfeed.co.uk/api/show/refresh?method=api&show=fixtures&team=261f3848-3f43-4ab1-98b4-c40709bd4731&comp_id=c0c15e15-bfdd-48b1-9568-5387b1742a1a&whatson=7&sort_by=fixtureTime"
    $.ajax({
        url: nextFixtUrl,
        method: "GET"
    }).then(function (nextFixtResponse) {
       
        $("#nextFixt").append(`${nextFixtResponse.html}`)
    });
};

$(document).ready(function () {

    prevRes();
    nextFixt();

});