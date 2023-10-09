import { CDN_URL } from "../utils/constants";
const styleCard = {
  backgroundColor: "#f0f0f0",
};

const Card = (props) => {
  const { resData } = props;

//   const { name, avgRating, cuisines, deliveryTime } =
//     resData?.restaurants?.info;
  //when we use some data object that is defined
  return (
    <div className="m-4 p-4 w-[250px]" style={styleCard}>
      <img
        className="rounded-lg"
        // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAg85bQ8KyYMyhteJmlYvbJFi11Bz5ZtCfjQ&usqp=CAU"
        // src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}
        src={CDN_URL + resData.info.cloudinaryImageId} alt="res-image"
      />
      {/* <h3>{props.resName}</h3>
       */}
      {/* <h3>{resName}</h3> */}
      {/* using the data */}
      <h3 className="font-bold py-4 text-lg">{resData?.info?.name}</h3>
      <h3>{resData?.info?.cuisines.join(", ")}</h3>
      <h3>{resData?.info?.avgRating}</h3>
      <h3>{resData?.info?.sla?.deliveryTime}mins</h3>
    </div>
  );
};


//higher order components
//input card=>promoted card output

export const withPromotedLabel=(Card)=>{
  return (props)=>{
    return (
    <div>
      <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
      <Card {...props}/>
    </div>
    )
  }
}


export default Card;
