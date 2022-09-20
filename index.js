function receivesAFunction(cb) {
    return cb();
}

function returnsANamedFunction() {
    return namedFunction;
}


function namedFunction() {
    return 1;
}

function returnsAnAnonymousFunction() {
    return () => 1;
}

