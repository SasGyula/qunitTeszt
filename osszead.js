class Szamolas{
    constructor() {}
    szamol(a,b){
        if (a== undefined || b == undefined){
            return "Két paraméter szükséges!"
        }
        if(isNaN(a) || isNaN(b)){
            return "A bemeneti paraméterek számok!"
        }
        if(
            !(
                isFinite(Number(a)) &&
                isFinite(Number(b)) &&
                isFinite(eval(Number(a)+ Number(b)).toFixed(7))
            )
            
        )
            return "Túlcsordulás"
        return Number (a)+ Number(b)
    }
}