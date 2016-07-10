export function showProduct(){
    console.log('in original');
}

export function updateFunction(){
    showProduct = function(){
        console.log('in updated');
    }
}