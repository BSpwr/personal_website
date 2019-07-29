import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Document, Page } from 'react-pdf/dist/entry.webpack';

import Navbar from '../components/navbar';

export default class Homepage extends React.Component {
  state = {
    numPages: null,
    pageNumber: 1,
  };
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };
  render() {
    const { pageNumber, numPages } = this.state;
    return (
      <div>
        <Navbar path={this.props.location.pathname} />
        <div className="container">
          <Document
            file="./resume.pdf"
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
          <p>
            Page {pageNumber} of {numPages}
          </p>
        </div>
      </div>
    );
  }
}
