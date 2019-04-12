let div_loader = document.getElementById('preloader')

loaded()

function loaded (){

    document.getElementById('loader').classList.add('load-100')

    setTimeout(() => {


        div_loader.style.opacity = '0'
        div_loader.style.display = 'none'
    }, 1000);
}

$(".rotate-text").textrotator({
    animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
    separator: "*", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
    speed: 8000 // How many milliseconds until the next word show.
  });

let mesageshow = true 

$('.bar-maxmin').click(() => {
    if(mesageshow) {
        $('.msg-content').addClass('d-block')
        $('.msg-content').removeClass('d-none')

        mesageshow = false
    } else {
        $('.msg-content').addClass('d-none')
        $('.msg-content').removeClass('d-block')
        mesageshow = true
    }
}
)