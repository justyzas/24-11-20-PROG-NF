export function isLogged(req,res,next)
{
    if(req.session?.user?.isLoggedIn){
        next();
    }
    else {
        res.status(403).json({message: "Norint pasiekti šią funkciją turite būti prisijungę!"});
    }
}

export function isNotLogged(req,res,next)
{
    if(!(req.session?.user?.isLoggedIn)){
        next();
    }
    else {
        res.status(403).json({message: "Norint pasiekti šią funkciją turite būti atsijungę!"});
    }
}

export function withRouteParam(paramName){
    return function(req,res,next)
    {
        if(isNaN(req.params[paramName])){
            return res.status(400).json({message: `Parametras ${paramName} privalo būti skaičius. Gauta reikšmė: '${req.params[paramName]}'`})
        }
        if(Number(req.params[paramName]) <= 0){
            return res.status(400).json({message: `Parametro ${paramName} reikšmė privalo būti teigiamas skaičius. Gauta reikšmė: '${req.params[paramName]}'`})
        }
        next();
    }
} 