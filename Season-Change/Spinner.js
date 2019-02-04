import React from 'react';

const Spinner = (props) =>{
      return(
        <div class="ui segment">
        <div class="ui active dimmer">
          <div class="ui text loader">Loading</div>
        </div>
    </div>
      );
}
Spinner.defaultprops{
  message:"Loading..";
};
export default Spinner;