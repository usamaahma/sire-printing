import React from "react";
import Smallpillow from "../components/all product/small-pillow-boxes/smallpillow";
import Relatedproduct1 from "../components/all product/small-pillow-boxes/relatedproduct";
import Smallpillowspec from "../components/all product/small-pillow-boxes/smallpillowspec";
import Finishing1 from "../components/all product/small-pillow-boxes/finishing";
import Stock from "../components/all product/small-pillow-boxes/stock";

function SmallPillowPage() {
  return (
    <div>
      <Smallpillow />
      <Smallpillowspec/>
      <Stock/>
      <Finishing1/>
      <Relatedproduct1/>
      
    </div>
  );
}

export default SmallPillowPage;
