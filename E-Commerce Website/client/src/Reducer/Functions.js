const Checked=()=>{
    console.log("----");
    // var res=$('btncheck')[0].checked;
    // console.log("-->",res);
}


const Clear = async () => {
    try{
        const res=await fetch("/clearcart",{
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            }
        });
        console.log(res.status);
    }
    catch(err){
        console.log(err);
    }
}

const QuantityIncreament = async (args) => {
    console.log("-->",args);
    try{
        const res=await fetch("/quantityincreament",{
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                id:args
            })
        });
        console.log(res.status);
    }
    catch(err){
        console.log(err);
    }
}

const QuantityDecreament = async (args) => {
    console.log("-->",args);
    try{
        const res=await fetch("/quantitydecreament",{
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                id:args
            })
        });
        console.log(res.status);
    }
    catch(err){
        console.log(err);
    }
}

const Delete = async (args) => {
    console.log("-->",args);
    try{
        const res=await fetch("/carddelete",{
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                id:args
            })
        });
        console.log(res.status);
    }
    catch(err){
        console.log(err);
    }
}

export {Clear,QuantityIncreament,QuantityDecreament,Delete,Checked};
