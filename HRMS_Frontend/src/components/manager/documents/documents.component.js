import React, {Component} from 'react';
import DocumentFilter from "./documentFilter.component";
import DocumentFileList from "./documentFilesList.component";

const FilterContainerStyle =
    {
        display: "flex",
        justifyContent: "center"
    };

const FileContainerStyle =
    {
        display: "flex",
        justifyContent: "center"
    };

export class Documents extends Component{
  render(){
      return  (
          <div>
              {/* <h5>Documents</h5> */}
              <div className="filter-container" style={FilterContainerStyle}>
                <DocumentFilter/>
              </div>
              <div className="file-container" style={FileContainerStyle}>
                <DocumentFileList/>
              </div>
          </div>
      );
  }
}
export default Documents;