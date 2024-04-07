import { PropTypes } from "prop-types"

export const ProductDetail = ( {handlerProductSelected, handlerRemoveProduct, product = {}}) => {
    return(
        <tr>
        <td>{product.name}</td>
        <td>{product.description}</td>
        <td>{product.price}</td>
        <td>
            <button className="btn btn-secondary btn-sm" onClick={()=> handlerProductSelected(product)}>
                update
            </button>
        </td>
        <td>
            <button className="btn btn-danger btn-sm" onClick={()=> handlerRemoveProduct(product.id)}>
                Remove
            </button>
        </td>
    </tr>
    )
}

ProductDetail.propTypes = {
    product: PropTypes.object.isRequired,
    handlerRemoveProduct: PropTypes.func.isRequired,
    handlerProductSelected: PropTypes.func.isRequired
}