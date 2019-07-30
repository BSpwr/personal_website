import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${
  pdfjs.version
}/pdf.worker.js`;

import Navbar from '../components/navbar';

import './resume.scss';

export default class Resume extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  // TODO: Figure out why css not loading
  render() {
    const { file, numPages } = this.state;

    return (
      <div>
        <Navbar path={this.props.location.pathname} />
        <div className="container">
          <div className="centered">
            <div className="">
              <div className="doc_layout">
                <Document
                  file="/images/resume.pdf"
                  onLoadSuccess={this.onDocumentLoadSuccess}
                  height="2000"
                >
                  <Page pageNumber={1} />
                </Document>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
