const vars = document.querySelectorAll("var")

window.addEventListener("DOMContentLoaded",()=>{
    vars.forEach((elem)=>{
        const speed = 2000
        let start = 0
        const end = parseInt(elem.dataset.id )
        const duration = Math.floor( speed / end)
    
        const interval = setInterval(()=>{
            start += 1
            if (elem.classList.contains("k")) {
                elem.textContent = `${start} k`
            }else{
    
                elem.textContent = start
            }
    
            if( start === end){
                clearInterval(interval)
            }
        },duration)
    })
})
