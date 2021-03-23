//import {filterJSON} from "./removeDuplicates.js"


export default function dohvatiDrzave(searchTerm){
    return fetch(`http://universities.hipolabs.com/search?country=${searchTerm}`)
    .then((rezultat)=>{
            return rezultat.json(); 
    })
    .then((newResult)=>{
            //console.log(newResult);
            //removing duplicates from json
            var data1 = [];
            filterJSON();

            function filterJSON() {
                newResult.filter(removeDuplicates, 0)
            }

            function removeDuplicates(obj) {
                if (data1.map(function(e) {
                    return e.name;
                }).indexOf(obj.name) == -1) {
                data1.push(obj);
                }
            }
            return data1;
        })
}
