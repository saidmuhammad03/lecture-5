//task1
//////////////////////////////////////////////////////////////////////////////////////

// function get(str) {
//     let res= str.split(' ');
   
//     res = res.map(text => text.replace());
    
//     res.sort((a, b) => b.length - a.length);
//     console.log(res);
//     return res[0];
//   }
//   console.log(get("Hello darkness gtfrdhvhgb my old friend") );
//////////////////////////////////////////////////////////////////////////////////////
//Task2
// function superheroes(names) {
//   const superheroNames = names.filter(name => name.toLowerCase().includes('man') && !name.toLowerCase().endsWith('woman')).sort();
//   return superheroNames;
// }

// console.log(superheroes(["Batman", "Superman", "Spider-man", "Hulk", "Wolverine", "Wonder-Woman"]));
// console.log(superheroes(["Catwoman", "Deadpool", "Dr.Strange", "Captain America", "Aquaman", "Hawkeye"])); 
// console.log(superheroes(["Wonder-Woman", "Catwoman", "Invisible-Woman"])); 

//////////////////////////////////////////////////////////////////////////////////////
//task3

// function get(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 == 0 && arr[i] % 2 !== 0) {
//       return false; 
//     } else if (i % 2 !== 0 && arr[i] % 2 === 0) {
//       return false; 
//     }
//   }
//   return true; 
// }

// console.log(get([2, 7, 4, 9, 6, 1, 6, 3])); 
// console.log(get([2, 7, 9, 1, 6, 1, 6, 3])); 
// console.log(get([2, 7, 8, 8, 6, 1, 6, 3]));

/////////////////////////////////////////////////////////////////////////

//task4
// function get(arr) {
//   const pilus = arr.filter(num => num > 0).sort((a, b) => a - b);
//   return pilus[0] + pilus[1];
// }

// console.log(get([19, 5, 42, 2, 77]));
// console.log(get([10, 343445353, 3453445, 3453545353453])); 
// console.log(get([2, 9, 6, -1])); // 
/////////////////////////////////////////////////////////////////////////

//TASK-5
// function get(num) {
//   const main = num.map(num=> {
//     if (num.length - 1 !== '7') {
//       return num+ '7';
//     }
//     return num;
//   });

// return main;
// }

// console.log(get(["G", "F", "C"])); 
// console.log(get(["Dm", "G", "E", "A"]));
// console.log(get(["F7", "E7", "A7", "Ab7", "Gm7", "C7"])); 
