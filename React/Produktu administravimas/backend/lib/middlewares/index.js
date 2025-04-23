export function isLogged(req,res,next)
{
    if(req.session?.user?.isLoggedIn)
    {
        next();
    }
    else {
        res.status(403).json({message: "Norint pasiekti šią funkciją turite būti prisijungę!"});
    }
}

export function isNotLogged(req,res,next)
{
    if(!(req.session?.user?.isLoggedIn))
        {
            next();
        }
        else {
            res.status(403).json({message: "Norint pasiekti šią funkciją turite būti atsijungę!"});
        }
}