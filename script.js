const buttons = document.querySelectorAll('button');
const actionBox = document.querySelector('.action-box')

let click_counter = 0
buttons.forEach((button) => {
    button.addEventListener('click', () =>{
        
        // alert(button.id);
        click_counter++
        if (click_counter % 2 === 0) {
            actionBox.style.background ='#3882F6';
        }
        else if (click_counter % 5 === 0) {
            console.log('hello')
            alert('Secret found!')
        }
        else {
            actionBox.style.background ='#1F2937';
        }
        console.log(click_counter)
    })
})