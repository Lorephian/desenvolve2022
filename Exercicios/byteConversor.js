const byte = 1024


const unity = ["B", "K", "M", "G", "T", "P", "E", "Z", "Y"]

function byteConversor(number) {

    let unityIndex = 0

    if(number < byte) {
        let result = number.toFixed(2)
        return console.log(`${result} ${unity[0]}`)
    } else {
        
        for (let i = byte; number > i; ) {
            if (number >= i) {
                unityIndex = unityIndex + 1
                i = i * byte
            }

            if (number <= i ) {
                let divider = i / byte
                result = number.toFixed(2) / divider
                return console.log(`${result.toFixed(2)} ${unity[unityIndex]}B`)
            }

            

            
        }
    }
}

byteConversor(2048)
byteConversor(200000000000000000000000)
byteConversor(555)
byteConversor(10000000)
byteConversor(1000)
byteConversor(1000000)
byteConversor(1000000000)
byteConversor(1000000000000)
byteConversor(1000000000000000)
byteConversor(1000000000000000000)
byteConversor(1000000000000000000000)
byteConversor(1000000000000000000000000)
byteConversor(1000000000000000000000000000)

