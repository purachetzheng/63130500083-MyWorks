import { products } from './product.js';
import { createEl, setAttrEle, $ } from './utils.js';
let Product = {
    products: [],
    init() {
      this.products = products;
      this.render();
      console.log(Product)
    },
    render(){
      const testDiv = $('test-append');
      testDiv.innerHTML = 't';
      let testTitle = createEl('h2', {
        inner: 'Header'
      })
      let testDesc = createEl('p', {
        inner: 'Desc'
      })

      

      let child = [testTitle, testDesc];
      // testDiv.append(testTitle, testDesc);
      testDiv.append(...child)
      
      setAttrEle(testTitle, {
        style: 'color:red;',
        inner: 'Title'
      })
    }
}
export default Product;



