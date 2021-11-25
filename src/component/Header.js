import React from "react";

const Header=props=>{
    const{search, onInputChange} = props;
    return(
        <div className="jumbotron">
            <h1 className="display-1"><span class="material-icons brand-icon">
fastfood
</span>Food Recipe</h1>

<div className="input-group ">
  <input type="text" class="form-control" 
  placeholder="Food Recipe" 
  value={search}
  onChange={onInputChange} />
  <div class="input-group-append">
  <button className="btn btn-dark">Search</button>
</div>
</div>
        </div>
    )
};
 export default Header;