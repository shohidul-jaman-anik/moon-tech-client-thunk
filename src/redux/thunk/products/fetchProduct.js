import { loadProduct } from "../../actions/productAction"

const loadProductData = () => {
    return async (dispatch, getState) => {
        const res = await fetch("http://localhost:5000/products")
        const data = await res.json()
        
        if (data.data.length) {
            dispatch(loadProduct(data.data))
        }
        console.log("dataaa",data)
    }
}
export default loadProductData;