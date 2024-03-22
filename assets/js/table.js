function errorMessage() {
    $("#tableElement").append(`<div class="alert alert-danger" role="alert">
    There has been an error - please try again later.
  </div>`)
}

function getTable() {
    // ajax call to get the table data from GMS Feed
    $.ajax({
      method: 'GET',
      url: 'https://gmsfeed.co.uk/api/show/refresh?method=api&show=league&team=261f3848-3f43-4ab1-98b4-c40709bd4731&comp_id=c0c15e15-bfdd-48b1-9568-5387b1742a1a&sort_by=fixtureTime&options=showDetail:yes',
      contentType: 'application/json',
      success: function (tableData) {
        // If the call is succesful the following will be executed
        console.log(tableData);
  
        // Appended to the tableElement on the table page
        $("#tableElement").append(`${tableData.html}`);
      },
      error: function ajaxError(errorData) {
        // If the call errors the following will be executed
        console.error('Error: ', errorData.responseText);
  
        errorMessage();
      }
    });
  };

  $(document).ready(function () {

    getTable();

});