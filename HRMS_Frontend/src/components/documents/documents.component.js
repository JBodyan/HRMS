import React, {Component} from 'react';
import DocumentCard from "./documentCard.component";
import DocumentFilter from "./documentFilter.component";

const FilterContainerStyle =
    {
        display: "flex",
        justifyContent: "center"
    };

export class Documents extends Component{
  render(){
      return  (
          <div>
              <h5>Documents</h5>
              <div className="filter-container" style={FilterContainerStyle}>
              <DocumentFilter/>
              </div>
              <DocumentCard title="CardTest" content="Test content lorem ipsum!"/>
          </div>
      );
  }
}
export default Documents;