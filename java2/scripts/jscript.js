/*Criar objetos*/
const array_rb_sel_ling = document.querySelectorAll('[name="rb_sel_ling"]')
const obj_img_ling = document.querySelector('#img_ling')
const obj_pre_ling = document.querySelector('#pre_ling')
const array_figuras = document.querySelectorAll('.figuras')
const div_adiciona_figura = document.querySelector('#div_adiciona_figura')
const obj_img_nova = document.createElement('img')
const obj_input_novo = document.createElement('input')
const array_tit = document.querySelectorAll('.titulo')
const obj_div_modal = document.querySelector('#div_modal')
const fechar = document.querySelector('#p_fechar span')
const array_ling = document.querySelectorAll('#linguagens img')
const obj_imgmodal = document.querySelector('#img_modal')
const obj_pmodal = document.querySelector('#p_modal')

/*Adicionar evento*/
for ( const obj_rb_sel_ling of array_rb_sel_ling ){
    obj_rb_sel_ling.addEventListener('click', funMudaImgLing)
}

for (const obj_img_fig of array_figuras){
    obj_img_fig.addEventListener('click', function(){funAdicionaFigura(this.src, this.alt)})
}
for (const obj_tit of array_tit){
    obj_tit.addEventListener('click', function(){funExibeTexto(this)})
}



for (const obj_ling of array_ling){
    obj_ling.addEventListener('click', function(){funExibeModal(this.src, this.alt)})
}
fechar.addEventListener('click', funFechar)

/*Declarar função*/

function funMudaImgLing(){
    for (const obj_rb_sel_ling of array_rb_sel_ling){
        if( obj_rb_sel_ling.checked){
            obj_img_ling.setAttribute('src', 'imagens/' + obj_rb_sel_ling.value + '.png')
            obj_img_ling.setAttribute('alt', obj_rb_sel_ling.value)
            obj_img_ling.setAttribute('title', obj_rb_sel_ling.value)
            obj_pre_ling.innerHTML = 'Logo ' + obj_rb_sel_ling.value
        }
    }
}

function funAdicionaFigura(par_src, par_alt){
    obj_img_nova.setAttribute('src', par_src)
    obj_img_nova.setAttribute('alt', par_alt)
    obj_img_nova.setAttribute('title', par_alt)
    div_adiciona_figura.appendChild(obj_img_nova)
    obj_input_novo.setAttribute('type', 'text')
    obj_input_novo.setAttribute('disable', true)
    obj_input_novo.setAttribute('value', par_alt)
    obj_input_novo.setAttribute('class', 'novo_input')
    div_adiciona_figura.appendChild(obj_input_novo)
}

function funExibeTexto(tit){
    const obj_tit = tit.children[0]
    if( obj_tit.style.display == 'block'){
        obj_tit.style.display = 'none'
    }
    else{
    obj_tit.style.display = 'block'}
}

function funExibeModal(src, alt){
    obj_imgmodal.setAttribute('src', src)
    obj_imgmodal.setAttribute('alt', alt)
    obj_imgmodal.setAttribute('alt', alt)
    obj_pmodal.innerHTML = alt
    obj_div_modal.style.display = 'block'
}

function funFechar(){
    obj_div_modal.style.display = 'none'
}