import React from 'react';

class Products extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [],
            name: '',
            email: '',
            password: ''
        }
    }
}

export default Products;

// list over product