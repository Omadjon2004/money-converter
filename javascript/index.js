const form=document.querySelector('.form'),
formNumber=document.querySelector('.form_number'),
formSelect=document.querySelector('.form_select')
formOption=document.querySelectorAll('.form_option'),
formValue=document.querySelector('.form_value'),
button=document.querySelector('.btn');


form.addEventListener('click',function(e){

    e.preventDefault()
    if( formSelect.value === 'dollar'){
       usd = 11300*formNumber.value
       formValue.value=usd
    }else if(formSelect.value === 'yevro'){
        euro = 12000*formNumber.value
        formValue.value=euro
    }else if (formSelect.value ==='yuan') {
        uan = 9000*formNumber.value
        formValue.value=uan
    }else if (formSelect.value === 'rubl') {
        rub = 1000*formNumber.value
        formValue.value=rub
    }
})