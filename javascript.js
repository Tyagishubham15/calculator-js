function c(val)    
{    
document.getElementById("cal").value=val;    
}    
function v(val)    
{document.getElementById("cal").value+=val;    
}    
function e()    
{    
try    
    {    
     c(eval(document.getElementById("cal").value))    
    }    
    catch(e)    
    {    
     c('Error') }    
}   