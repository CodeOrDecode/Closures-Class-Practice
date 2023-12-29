function makecall() {
    console.log("make api call", Date.now());
}

let id;
function debounce(call, delay) {

    if (id) {
        clearTimeout(id);
    }

    id = setTimeout(() => {
        call();
    }, delay);
}