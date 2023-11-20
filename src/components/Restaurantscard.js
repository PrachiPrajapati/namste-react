import {RES_IMG_URL} from '../utils/constants';
const Restaurantscard = ({name,cuisines,avgRating,sla,costForTwo,cloudinaryImageId}) => {
    return(
        <>
            <div className="restaurantscards">
                <img className="resimg" src={RES_IMG_URL + cloudinaryImageId} alt="images" />
                <h4>{name}</h4>
                <h6>{cuisines.join(", ")}</h6>
                <div className="restwrapper">
                    <h5>{avgRating} star</h5>
                    <h5>{sla.deliveryTime} mins</h5>
                    <h5>{costForTwo}</h5>
                </div>
            </div>
        </>
    );
}
export default Restaurantscard