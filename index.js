const countEl = document.getElementById('count')
const incrementBtn = document.getElementById('increment')
const saveBtn = document.getElementById('save')
const previousEl = document.getElementById('previous')

let count1 = 0
incrementBtn.addEventListener('click',function(){

    count1++

    countEl.textContent = count1
})
saveBtn.addEventListener('click',function(){

    previousEl.textContent += countEl.textContent + "-"
    countEl.textContent = 0

})
