const getCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel)
}
/*Exportar para que outros módulos possam utilizar*/
export {getCSS}
