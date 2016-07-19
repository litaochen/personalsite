//The main purpose of this script is to check the possibility of posting a request to a server through XMLHttpRequest
//And get the response which is a html file from server, put it in a frame and digest it to get the info we need
//Currently the function works only with the chrome plug-in "Allow-Control-Allow-Origin" to build CORS header on the fly


function checkStatus(caseNumber) {
    var xhttp = new XMLHttpRequest();
    var url = 'https://egov.uscis.gov/casestatus/mycasestatus.do?appReceiptNum=' + caseNumber;

    xhttp.open('get', url, true);
    xhttp.send();

    var data = "";

    xhttp.onreadystatechange = function() {
        if (xhttp.readyState === 4 && xhttp.status === 200) { //got success response from server
            data = xhttp.responseText;

            var index = data.indexOf("error(s)");           //set var here to avoid changing sentence on the page during processing

            if(index !== -1) {                              //error key word exist in the response, invalid case number.
                $('.result').text("Invalid case number, please double check!");
            }else {
                var result = data.split("<p>On");               //peal off the front end content
                var final   = result[1].split("If you move");   //peal off the tail

                $('.result').text("On " + final[0]);        //show the core data
            }
        }else {
            console.log(xhttp.status);
            $('.result').text("Something wrong with the query, please try again later!");
        }
    }
}



$('button').click(function() {
    $('.resultSection').addClass('show');

    var caseNumber = $('input').val();
    checkStatus(caseNumber);
});