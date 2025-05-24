const getStoredBook = () =>{
const StoredBookSTR = localStorage.getItem("readList");
if(StoredBookSTR) {
    const storedBookData = JSON.parse(StoredBookSTR);
    return storedBookData;
}
else{
    return [];
}
}


const addToStoredDB = (id) =>{
    const storedBookData = getStoredBook();
    if(storedBookData.includes(id)){
        alert("bhai ei id already exist")
    }
    else{
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem("readList",data)
    }
}
export {addToStoredDB ,getStoredBook};