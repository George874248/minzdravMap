function AjaxGET(url){
    return new Promise((resolve, reject) => {

    var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.setRequestHeader("Content-type", "text/plain");

    xhr.onload = function() {
      if (this.status == 200 || this.status == 204) {
        resolve(this.response);
      } else {
        var error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      }
    };

    xhr.onerror = function() {
      reject(new Error("Network Error"));
    };

    xhr.send();
  });
}

function getRandomColor() {
  var letters = '0123456789ABCDEF'.split('')
      color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

Array.max = function( array ) {
    return Math.max.apply( Math, array );
};

Array.min = function( array ) {
    return Math.min.apply( Math, array );
};
