var tree = {
    "id": 0,
    "name": "root",
    "left": {
        "id": 1,
        "name": "Simon",
        "left": {
            "id": 3,
            "name": "Carl",
            "left": {
                "id": 7,
                "name": "Lee",
                "left": {
                    "id": 11,
                    "name": "Fate"
                }
            },
            "right": {
                "id": 8,
                "name": "Annie",
                "left": {
                    "id": 12,
                    "name": "Saber"
                }
            }
        },
        "right": {
            "id": 4,
            "name": "Tony",
            "left": {
                "id": 9,
                "name": "Candy"
            }
        }
    },
    "right": {
        "id": 2,
        "name": "right",
        "left": {
            "id": 5,
            "name": "Carl",
        },
        "right": {
            "id": 6,
            "name": "Carl",
            "right": {
                "id": 10,
                "name": "Kai"
            }        
        }
    }
}
// 假设id和name均不会重复，根据输入name找到对应的id
function findIdByName(name) {
   if(tree.name == name){
       console.log(tree.id);
       return ;
   }
   if(tree.left.name == name){
       var nameLeft = tree.left;
       console.log(nameLeft.id)
       return ;
   }
   if(tree.right.name == name){
       var nameRight = tree.right; 
       console.log(nameRight.id)
       return ;
   }

       findIdByName(nameRight);
    
       findIdByName(nameRight);
    
    }

   
// 假设id和name均不会重复，根据输入id找到对应的name
function findNameById(id) {
    

}

// 把这个对象中所有的名字以“前序遍历”的方式全部输出到console中
function getListWithDLR() {

}

// 把这个对象中所有的名字以“中序遍历”的方式全部输出到console中
function getListWithLDR() {

}

// 把这个对象中所有的名字以“后序遍历”的方式全部输出到console中
function getListWithLRD() {

}