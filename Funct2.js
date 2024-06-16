<<<<<<< HEAD:Funct2.js
function isPrime(number)
{
    let arrsnt = [];
    for(let i = 2; i <= number; i++)
    {   
        let check = true;
        for(let j = 2; j <= Math.sqrt(i); j++)
        {
            if(i % j == 0)
            {
                check = false;
                break;
            }
        }
        if(check)
            {
                arrsnt.push(i);
            }

    }
    console.log(arrsnt.join(', '));
}

isPrime(100);

function feetToMeter(feet){
    let meter = 0.305 * feet;
    console.log(meter.toFixed(3));
}

function meterToFeet(meter){
    let feet = 3.279 * meter;
    console.log(feet.toFixed(3)); 
}

feetToMeter(10);

meterToFeet(20);


const stars = ['Polaris', 'Aldebaran', 'Deneb', 'Vega', 'Altair', 'Dubhe', 'Regulus'];
const constellations = ['Ursa Minor', 'Taurus', 'Cygnus', 'Lyra', 'Aquila', 'Ursa Major', 'Leo'];

function checkStar(){
    let starName = document.getElementById('star').value;
    let found = false;
    for(let s = 0; s < stars.length; s++)
        {
            if (stars[s].toLowerCase() === starName.toLowerCase()) {
                document.getElementById("ans-star").innerHTML = "Ngôi sao " + stars[s] + " thuộc chòm sao " + constellations[s];
                found = true;
                break;       
            }
        }
        if(!found){
            document.getElementById("ans-star").innerHTML = "Star not found in the list";
        }
}


let products = [];
let editIndex = -1;

function callProduct(){
    const productList = document.getElementById('productList');
    productList.innerHTML = '';
    products.forEach((product, index) => {
            const row = document.createElement('tr');      
            row.innerHTML = `
                <td>${index + 1}</td>
                <td onclick="editProduct(${index})">${product}</td>
                <td><button onclick="editProduct(${index})">Edit</button></td>
    
                <td><button onclick="deleteProduct(${index})">Delete</button></td>
            `;
            productList.appendChild(row);
            if(index % 2 == 0){
                row.className = 'color';
            }else{
        }
    });

}

function addProduct(){
    const newProduct = document.getElementById('newProduct').value;
    if (newProduct) {
        products.push(newProduct);
        document.getElementById('newProduct').value = '';
        callProduct();
    //     alert('Product added successfully');
    // } else {
    //     alert('Please enter a product name');
    }

}

function editProduct(index){
    editIndex = index;
    document.getElementById('editProduct').value = products[index];
    document.getElementById('editForm').style.display = 'block';
}

function updateProduct() {
    const updatedProduct = document.getElementById('editProduct').value;
    if (updatedProduct) {
        products[editIndex] = updatedProduct;
        document.getElementById('editProduct').value = '';
        document.getElementById('editForm').style.display = 'none';
        callProduct();
    //     alert('Product updated successfully');
    // } else {
    //     alert('Please enter a product name');
    }
}

function deleteProduct(index){
    products.splice(index, 1);
    callProduct();
    //alert('Product deleted successfully');
}

=======
function isPrime(number)
{
    let arrsnt = [];
    for(let i = 2; i <= number; i++)
    {   
        let check = true;
        for(let j = 2; j <= Math.sqrt(i); j++)
        {
            if(i % j == 0)
            {
                check = false;
                break;
            }
        }
        if(check)
            {
                arrsnt.push(i);
            }

    }
    console.log(arrsnt.join(', '));
}

isPrime(100);

function feetToMeter(feet){
    let meter = 0.305 * feet;
    console.log(meter.toFixed(3));
}

function meterToFeet(meter){
    let feet = 3.279 * meter;
    console.log(feet.toFixed(3)); 
}

feetToMeter(10);

meterToFeet(20);


const stars = ['Polaris', 'Aldebaran', 'Deneb', 'Vega', 'Altair', 'Dubhe', 'Regulus'];
const constellations = ['Ursa Minor', 'Taurus', 'Cygnus', 'Lyra', 'Aquila', 'Ursa Major', 'Leo'];

function checkStar(){
    let starName = document.getElementById('star').value;
    let found = false;
    for(let s = 0; s < stars.length; s++)
        {
            if (stars[s].toLowerCase() === starName.toLowerCase()) {
                document.getElementById("ans-star").innerHTML = "Ngôi sao " + stars[s] + " thuộc chòm sao " + constellations[s];
                found = true;
                break;       
            }
        }
        if(!found){
            document.getElementById("ans-star").innerHTML = "Star not found in the list";
        }
}


let products = [];
let editIndex = -1;

function callProduct(){
    const productList = document.getElementById('productList');
    productList.innerHTML = '';
    products.forEach((product, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td onclick="editProduct(${index})">${product}</td>
            <td><button onclick="editProduct(${index})">Edit</button></td>

            <td><button onclick="deleteProduct(${index})">Delete</button></td>
        `;
        productList.appendChild(row);
        //Nếu muốn đánh số sản phẩm: <td>${index + 1}</td>
    });

}

function addProduct(){
    const newProduct = document.getElementById('newProduct').value;
    if (newProduct) {
        products.push(newProduct);
        document.getElementById('newProduct').value = '';
        callProduct();
    //     alert('Product added successfully');
    // } else {
    //     alert('Please enter a product name');
    }

}

function editProduct(index){
    editIndex = index;
    document.getElementById('editProduct').value = products[index];
    document.getElementById('editForm').style.display = 'block';
}

function updateProduct() {
    const updatedProduct = document.getElementById('editProduct').value;
    if (updatedProduct) {
        products[editIndex] = updatedProduct;
        document.getElementById('editProduct').value = '';
        document.getElementById('editForm').style.display = 'none';
        callProduct();
    //     alert('Product updated successfully');
    // } else {
    //     alert('Please enter a product name');
    }
}

function deleteProduct(index){
    products.splice(index, 1);
    callProduct();
    //alert('Product deleted successfully');
}

>>>>>>> parent of 47a573a (arr):Buoi_08_offical/Funct2.js
callProduct();