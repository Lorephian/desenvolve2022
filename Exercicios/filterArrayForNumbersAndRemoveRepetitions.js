function filter_list(l) {
    
const toNumber = l.map(str=>{
    
    return parseInt(str)
})

let newArray = [...new Set(toNumber)]

  console.log(newArray.filter(value => typeof value === "number").filter(value => value >= 0))
 
}


filter_list([1,2,'a','b'])
filter_list([1,'a','b',0,15])
filter_list([1,2,'aasf','1','123',123])

filter_list(["a", "b", "1"])
filter_list(["179"])
filter_list([194, 7, 765, "417", "654", "4mEt", "yV@f>", "Ine", 331, "i"])

