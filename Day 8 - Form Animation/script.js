const labels = document.querySelectorAll(".form-control label")
console.log(labels)
/* Splitting each word in label into a separate span element and adding transition
delay to each span element based on the index value of the letter in the label
and creating a wave effect 
Email -> <span style = "transition-delay:0ms">E</span> 
<span style = "transition-delay: 15ms">m </span>  and so on*/
labels.forEach(label => {
  label.innerHTML = label.innerText.
  split("")
  .map((letter,index) => `<span style="transition-delay:${index*15}ms">${letter}</span>`).join("")
})