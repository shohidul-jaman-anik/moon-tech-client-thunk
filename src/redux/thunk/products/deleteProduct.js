import { removeProduct } from "../../actions/productAction"

const deleteProduct = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/product/${id}`, {
            method: "delete",
            headers: {
                "Content-type": "applycation/json"
            }
        })
        const data = await res.json()
        if (data.acknowledged) {
            dispatch(removeProduct(id))
        }
    }
}

export default deleteProduct;