const obj_txt_texto = document.querySelector('#txt_texto')
const obj_bt_atualizar_texto = document.querySelector('#bt_atualizar_texto')
const obj_p_atualiza_texto = document.querySelector('#p_atualiza_texto')
const obj_num_val1 = document.querySelector('#num_val1')
const obj_num_val2 = document.querySelector('#num_val2')
const obj_bt_somar = document.querySelector('#bt_somar')
const obj_bt_mult = document.querySelector('#bt_multiplicar')
const obj_p_resul = document.querySelector('#p_resultado')
const obj_sel_naveg = document.querySelector('#sel_naveg')
const obj_txt_naveg_selec = document.querySelector('#txt_navegador_selecionado')
const obj_sel_ling = document.querySelector('#sel_ling')
const obj_img_ling = document.querySelector('#img_ling')
const obj_bt_desfocar = document.querySelector('#bt_desfocar')
const obj_bt_focar = document.querySelector('#bt_focar')
const obj_img_foco = document.querySelector('#img_foco')
const obj_cb_fundo_escuro = document.querySelector('#cb_fundo_escuro')
const obj_html = document.querySelector('html')

obj_bt_atualizar_texto.addEventListener('click', funAtualizarTexto)
obj_bt_somar.addEventListener('click', funSomar)
obj_bt_mult.addEventListener('click', funMult)
obj_sel_naveg.addEventListener('change', funAtualizarNavegador)
obj_sel_ling.addEventListener('change', funAtuLing)
obj_bt_desfocar.addEventListener('click', funDesfocar)
obj_bt_focar.addEventListener('click', funFocar)
obj_cb_fundo_escuro.addEventListener('click', funFundo)

function funAtualizarTexto() {
    if(obj_txt_texto.value != '' ){
    obj_p_atualiza_texto.innerHTML = obj_txt_texto.value
}
else{
    alert('Digite algo no campo!')
}
}
function funSomar(){
    obj_p_resul.innerHTML = 
         'Resultado: ' + (
            parseFloat( obj_num_val1.value) + parseFloat( obj_num_val2.value) )
}
function funMult(){
    obj_p_resul.innerHTML =
        'Resultado: ' + (
            parseFloat( obj_num_val1.value) * parseFloat(obj_num_val2.value)
        )
}
function funAtualizarNavegador(){
    obj_txt_naveg_selec.setAttribute('value', 'Navegador selecionado: ' + obj_sel_naveg.value)
}
function funAtuLing(){
    obj_img_ling.setAttribute('src', 'imagens/' + obj_sel_ling.value + '.png')
    obj_img_ling.setAttribute('alt', obj_sel_ling.value)
    obj_img_ling.setAttribute('title', obj_sel_ling.value)
}
function funDesfocar(){
    obj_img_foco.setAttribute('class', 'desfocar')
}
function funFocar(){
    obj_img_foco.setAttribute('class', 'focar')
}
function funFundo(){
    if (obj_cb_fundo_escuro.checked){
    obj_html.setAttribute('class', obj_cb_fundo_escuro.value)}
    else{
        obj_html.removeAttribute('class')
    }
}