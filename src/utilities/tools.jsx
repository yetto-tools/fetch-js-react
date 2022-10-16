export const fromStringToDate = value => {
    return new Date(value);
}


export const fromStringToDateLocalString = (value, 
    options = { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit' }, lang='es-GT'
) => {
    return new Date(value).toLocaleDateString(lang, options);
    
}