

 const getDateString = (date)=>{
    if(!date || typeof date !== "object"){
        return "";
    }
    let d = date;
    return (
        d.getUTCFullYear()+"-"+d.getMonth()+"-"+d.getDate()
    )
}

export default getDateString;