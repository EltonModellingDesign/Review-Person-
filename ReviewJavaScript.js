const arrayOptions = [
    {
        option1:"Me tratou mal",
        option2:"Não chegou na hora",
        option3:"Fez mal feito o serviço",
        option4:"Não fez",
    },
    {
        option1:"Demorou muito",
        option2:"Não chegou na hora",
        option3:"Fez mais ou menos o serviço",
        option4:"Não gostei, pensava que iria ser mais",
    },
    {
        option1:"Precisa melhorar em alguns aspectos mas está otimo",
        option2:"Me tratou bem, mas não prestou atenção em alguns fatos",
        option3:"Só cometeu alguns erros",
        option4:"Achava que poderia ser um pouco melhor",
    },
    {
        option1:"Foi muito atencioso",
        option2:"Tem um serviço com gandes diferenciais",
        option3:"Fez mais do que foi pedido e superou as expectativas",
        option4:"Soube fazer de maneira eficiente",
    },
]


const review = document.querySelector("#review")
const stars = document.querySelector("#stars")
const options = document.querySelector("#option")
const questions = document.querySelectorAll("#questions")
const dots = document.querySelectorAll("#dots")
const comment = document.querySelector("#comment")


console.log(review.childNodes[0])


options.style.display="none"
comment.style.display="none"
comment.childNodes[3].style.display = "none"



function SelectStar (event){
    const select = event.target
    stars.childNodes[3].style.display ="none"
    

    if(event.target === stars.childNodes[1].childNodes[1].childNodes[1]){
        stars.childNodes[1].childNodes[1].childNodes[1].style.fill = "yellow";
        stars.childNodes[1].childNodes[3].childNodes[1].style.fill = "white"
        stars.childNodes[1].childNodes[5].childNodes[1].style.fill = "white"
        stars.childNodes[1].childNodes[7].childNodes[1].style.fill = "white"
        stars.childNodes[1].childNodes[9].childNodes[1].style.fill = "white"

        questions[0].childNodes[1].textContent = arrayOptions[0].option1
        questions[1].childNodes[1].textContent = arrayOptions[0].option2
        questions[2].childNodes[1].textContent = arrayOptions[0].option3
        questions[3].childNodes[1].textContent = arrayOptions[0].option4

        comment.style.display = "none"
        options.style.display="flex"
        dots.forEach(event => event.style.backgroundColor = "black")
    }

    if(event.target === stars.childNodes[1].childNodes[3].childNodes[1]){
        stars.childNodes[1].childNodes[1].childNodes[1].style.fill = "yellow";
        stars.childNodes[1].childNodes[3].childNodes[1].style.fill = "yellow"
        stars.childNodes[1].childNodes[5].childNodes[1].style.fill = "white"
        stars.childNodes[1].childNodes[7].childNodes[1].style.fill = "white"
        stars.childNodes[1].childNodes[9].childNodes[1].style.fill = "white"

        questions[0].childNodes[1].textContent = arrayOptions[1].option1
        questions[1].childNodes[1].textContent = arrayOptions[1].option2
        questions[2].childNodes[1].textContent = arrayOptions[1].option3
        questions[3].childNodes[1].textContent = arrayOptions[1].option4

        comment.style.display = "none"
        options.style.display="flex"
        dots.forEach(event => event.style.backgroundColor = "black")
    }

    if(event.target === stars.childNodes[1].childNodes[5].childNodes[1]){
        stars.childNodes[1].childNodes[1].childNodes[1].style.fill = "yellow";
        stars.childNodes[1].childNodes[3].childNodes[1].style.fill = "yellow"
        stars.childNodes[1].childNodes[5].childNodes[1].style.fill = "yellow"
        stars.childNodes[1].childNodes[7].childNodes[1].style.fill = "white"
        stars.childNodes[1].childNodes[9].childNodes[1].style.fill = "white"

        questions[0].childNodes[1].textContent = arrayOptions[2].option1
        questions[1].childNodes[1].textContent = arrayOptions[2].option2
        questions[2].childNodes[1].textContent = arrayOptions[2].option3
        questions[3].childNodes[1].textContent = arrayOptions[2].option4

        comment.style.display = "none"
        options.style.display="flex"
        dots.forEach(event => event.style.backgroundColor = "black")
    }

    if(event.target === stars.childNodes[1].childNodes[7].childNodes[1]){
        stars.childNodes[1].childNodes[1].childNodes[1].style.fill = "yellow";
        stars.childNodes[1].childNodes[3].childNodes[1].style.fill = "yellow"
        stars.childNodes[1].childNodes[5].childNodes[1].style.fill = "yellow"
        stars.childNodes[1].childNodes[7].childNodes[1].style.fill = "yellow"
        stars.childNodes[1].childNodes[9].childNodes[1].style.fill = "white"

        questions[0].childNodes[1].textContent = arrayOptions[2].option1
        questions[1].childNodes[1].textContent = arrayOptions[2].option2
        questions[2].childNodes[1].textContent = arrayOptions[2].option3
        questions[3].childNodes[1].textContent = arrayOptions[2].option4

        comment.style.display = "none"
        options.style.display="flex"
        dots.forEach(event => event.style.backgroundColor = "black")


    }
    if(event.target === stars.childNodes[1].childNodes[9].childNodes[1]){
        stars.childNodes[1].childNodes[1].childNodes[1].style.fill = "yellow";
        stars.childNodes[1].childNodes[3].childNodes[1].style.fill = "yellow"
        stars.childNodes[1].childNodes[5].childNodes[1].style.fill = "yellow"
        stars.childNodes[1].childNodes[7].childNodes[1].style.fill = "yellow"
        stars.childNodes[1].childNodes[9].childNodes[1].style.fill = "yellow"

        options.style.display="none"
        comment.style.display = "flex"        
    }
    console.log(select)

}
stars.childNodes[1].addEventListener('click',SelectStar)



function SelectOption (event) {
    
    const select = event.target
    questions.forEach(event => event.style.backgroundColor = "black")
    dots.forEach(event => event.style.backgroundColor = "black")
    select.style.backgroundColor = "yellow"
    select.style.transition = "800ms"
    comment.style.display="flex"


    if(event.target === questions[0]){questions[0].style.backgroundColor = "black",dots[0].click()}
    if(event.target === questions[1]){questions[1].style.backgroundColor = "black",dots[1].click()}
    if(event.target === questions[2]){questions[2].style.backgroundColor = "black",dots[2].click()}
    if(event.target === questions[3]){questions[3].style.backgroundColor = "black",dots[3].click()}


    console.log(event.target !== questions);
}
questions.forEach(event => event.addEventListener("click",SelectOption ))




function Send () {
    comment.childNodes[3].style.display = "flex"

    options.style.display="none"
    comment.childNodes[1].style.display="none"
    comment.childNodes[5].style.display="none"

    review.textContent = "Obrigado pela sua participação"

    stars.style.pointerEvents="none"

    comment.childNodes[3].textContent = `"${comment.childNodes[5].value}"`

    comment.childNodes[7].textContent = "ENVIADO"
    comment.childNodes[7].style.border = "none"
    comment.childNodes[7].style.cursor = "default"
    comment.childNodes[7].style.marginTop = "60px"

    

}
comment.childNodes[7].onclick = Send


