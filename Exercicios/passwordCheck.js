function validateComplexity(value) {

    let ok

    function validateCharacteres(str) {
        let re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\w)/
        ok =  re.test(str)
    }

    validateCharacteres(value)

    let password = value.split("")
    
    if (password.length >= 8 && password.length <= 32 && ok === true) {
        return 1
    } else {
        return 0
    }
}


validateComplexity("K!jyWw=t8")
validateComplexity("Crescer10")
validateComplexity("a1234567")

