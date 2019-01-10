
export default function webRequest(method, url, callback){
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            callback(this.responseText);
        }
    }
    xhr.open(method, url, true);
    xhr.send();
}