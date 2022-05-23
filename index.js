function receivesAFunction(spy){
    spy();
}
function returnsANamedFunction (){
    return function ice (){}
}
function returnsAnAnonymousFunction(){
    return function(){}
}