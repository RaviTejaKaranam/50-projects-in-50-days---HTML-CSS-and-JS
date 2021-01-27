const counters = document.querySelectorAll(".counter")
counters.forEach((counter)=>{
  counter.innerText = '0'

  const updateCounter = ()=>{
    const target = +counter.getAttribute("data-target")
    let c = +counter.innerText
    const increment = Math.ceil(target/200)
    if(c < target){
      c += increment
      counter.innerText = c
      setTimeout(updateCounter,1)
    }
    else{
      counter.innerText = target
    }
    console.log(target)
  }
  updateCounter()
})