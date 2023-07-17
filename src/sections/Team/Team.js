import React from "react";
import './TeamStyle.css'
import TeamCard from "../../Components/TeamCard";


const Team=()=>{

    return(
   <div className="row cardItem">
    <div className="col-12">
  <h5>TEAM</h5>
  <h1>CHECK OUR TEAM</h1>
  </div>
  <div className="col-12 d-flex cardmargin">
 <TeamCard src={require("../../assets/Images/Portfolio/folioImage/Bharathi.jpeg")}  title="Walter White" desc="Chief Executive Officer"/>
 <TeamCard src={require("../../assets/Images/Portfolio/folioImage/Bharathi.jpeg")} title="Walter White" desc="Chief Executive Officer"/>
 <TeamCard src={require("../../assets/Images/Portfolio/folioImage/Bharathi.jpeg")}  title="Walter White" desc="Chief Executive Officer"/>
 <TeamCard src={require("../../assets/Images/Portfolio/folioImage/Bharathi.jpeg")} title="Walter White" desc="Chief Executive Officer"/>
  </div>
   </div>
    )
}
export default Team;