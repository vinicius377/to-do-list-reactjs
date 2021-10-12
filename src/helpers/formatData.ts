export const formatData=(data:Date)=>{
    const meses=["janeiro","fervereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]
    let dia =data.getDate()
    return `${dia} de ${meses[data.getMonth()]}  `
}