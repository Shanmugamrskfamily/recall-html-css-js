fetch('https://fakestoreapi.com/products').then(response=>response.json()).then((products)=>{
    
    const tableBody=document.getElementById('table-body');

    products.map((product)=>{
        const rowData=document.createElement('tr');
        rowData.innerHTML=`<td>${product.id}</td>
        <td>${product.title}</td>
        <td class='desc'>${product.description}</td>
        <td>₹${product.price}</td>`;
        tableBody.append(rowData);
    });
    
}).catch(err=>console.error(err));