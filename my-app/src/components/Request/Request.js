var baseUrl = "http://localhost:3003/"

function GetRequest(path) {
    let request = new XMLHttpRequest();
    let fullPath = baseUrl + path;

    request.onreadystatechange = function () {
        if (request.readyState === 4)
        {
            responseRequest(request.status, request.responseText);
        }
    };
    request.open('GET', fullPath, true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(null))
}

function responseRequest(status, apiContent) {
    if (status === 200) {
        let data = JSON.parse(apiContent);
        return data;
    }
}

export default GetRequest;





