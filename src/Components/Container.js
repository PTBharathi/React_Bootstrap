import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Container = ({ icon, tittle }) => {

    return (
            <div className="Container col-12 col-sm-6 col-mx-5 col-lg-2 col-xl-2 mx-2 mt-5 pt-3 pb-5">
              <div className="ContainerCard"> <h1 className="text-center">{icon}</h1>
                <h3 className="text-center">{tittle}</h3>
                </div>
            </div>
    )
}
export default Container;