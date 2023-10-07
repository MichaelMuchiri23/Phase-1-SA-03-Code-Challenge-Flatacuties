// Your code here
fetch('http://localhost:3000/characters')
.then(res=>res.json())
.then(data=>{
    const div=document.querySelector('#character-bar')
    data.forEach((animals)=>{
        const span=document.createElement('span')
        span.innerText=animals.name
        div.appendChild(span)

        span.addEventListener('click',()=>{
            const p=document.querySelector('p')
            const img=document.querySelector('img')
            const span2=document.querySelector('#vote-count')

            p.innerText=animals.name + animals.id
            img.src=animals.image
            span2.innerText=animals.votes
        })
        
       

    })
    const form=document.querySelector('#votes-form')
    const span2=document.querySelector('#vote-count')
    form.addEventListener('submit',event=>{
        event.preventDefault()
        const input=document.querySelector('#votes')
        console.log(input.value)
        span2.innerText=input.value
        form.reset()
    })    
})
