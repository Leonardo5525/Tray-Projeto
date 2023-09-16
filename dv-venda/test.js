        
        fetch('carrinho1.json')
        .then(response => response.json())
        .then(data => {
            
            for (let i = 0; i < data.length; i++) {
                var priceDoPrimeiroItem = data[i].Cart.product_image.http;
                console.log(priceDoPrimeiroItem);
            }

        })
        .catch(error => {
            console.error('Ocorreu um erro ao buscar o JSON:', error);
        });

        fetch('carrinho2.json')
        .then(response => response.json())
        .then(data => {
            
            for (let i = 0; i < data.length; i++) {
                var nomePrimeiroItem = data[i].Cart.product_name;
                const nome = document.createElement("h1");
                nome.src = nomePrimeiroItem;
                document.body.appendChild(nome);

                var priceDoPrimeiroItem = data[i].Cart.product_image.http;
                const image = document.createElement("img");
                image.src = priceDoPrimeiroItem;
                document.body.appendChild(image);
                
                console.log(priceDoPrimeiroItem);
            }

        })
        .catch(error => {
            console.error('Ocorreu um erro ao buscar o JSON:', error);
        });

        fetch('carrinho3.json')
        .then(response => response.json())
        .then(data => {
            
            for (let i = 0; i < data.length; i++) {
                var priceDoPrimeiroItem = data[i].Cart.product_image.http;
                console.log(priceDoPrimeiroItem);
            }

        })
        .catch(error => {
            console.error('Ocorreu um erro ao buscar o JSON:', error);
        });

        fetch('carrinho4.json')
        .then(response => response.json())
        .then(data => {
            
            for (let i = 0; i < data.length; i++) {
                var priceDoPrimeiroItem = data[i].Cart.product_image.http;
                console.log(priceDoPrimeiroItem);
            }

        })
        .catch(error => {
            console.error('Ocorreu um erro ao buscar o JSON:', error);
        });

        fetch('carrinho1.json')
        .then(response => response.json())
        .then(data => {
            
            for (let i = 0; i < data.length; i++) {
                var priceDoPrimeiroItem = data[i].Cart.product_image.http;
                console.log(priceDoPrimeiroItem);
            }

        })
        .catch(error => {
            console.error('Ocorreu um erro ao buscar o JSON:', error);
        });