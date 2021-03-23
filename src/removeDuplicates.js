export function filterJSON(newResult) {
    var result = newResult;
    var data1 = [];
    filterJSON2();
    function filterJSON2(result){
        result.filter(removeDuplicates, 0);
                console.log(result);
    }

    function removeDuplicates(obj) {
        if (data1.map(function(e) {
            return e.name;
        }).indexOf(obj.name) == -1) {
        data1.push(obj);
        console.log(data1);
        }
    }
                
    return data1;
};



