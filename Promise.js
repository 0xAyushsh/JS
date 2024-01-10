

//Creating a Promise

const promise1 = (val) =>{
    const pr = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`${val} Result1`)
        })
    })

    return pr
}

const promise2 = (val) =>{
    const pr = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`${val} Result2`)
        }, 5000)
    })

    return pr
}

const promise3 = (val) =>{
    const pr = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`${val} Result3`)
        },10000)
    })

    return pr
}

const promise4 =  (val) =>{
    const pr = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject("Reject4")
        },2000)
    })

    return pr
}

// Consuming the Promises and Promise Chaining

promise1("Argument1")
.then((res)=>{
    console.log("one: ",res)
    return res
})
.then((res)=>{
    return promise2(res);
})
.then((res)=>{
    console.log("two: ",res)
    return res
})
.then((res)=>{
    return promise3(res)
})
.then((res)=>{
    console.log("three: ", res)
})