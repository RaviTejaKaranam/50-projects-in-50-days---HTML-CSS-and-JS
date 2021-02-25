const range = document.getElementById("range")
const label = document.querySelector("label")
range.addEventListener("input",(e)=>{
  label.innerHTML = e.target.value
  const value = e.target.value
  const range_width = getComputedStyle(e.target).getPropertyValue("width")
  const label_width = getComputedStyle(e.target.nextElementSibling).getPropertyValue("width")

  const range_num_width = range_width.substring(0,range_width.length-2)
  const label_num_width = label_width.substring(0,label_width.length-2)

  const max = +e.target.max
  const min = +e.target.min
  const mid = (max + min)/2
  const left = value * (range_num_width/max) - label_num_width/2 + scale(value,min,max,10,-10)
  label.style.left = `${left}px`
  
})

const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}