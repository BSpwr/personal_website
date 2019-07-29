import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${
  pdfjs.version
}/pdf.worker.js`;

import Navbar from '../components/navbar';

import styles from './resume.scss';

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
        <div className={`container ${styles.grey_bg}`}>
          <div className="row">
            <div className={`col-lg-1 ${styles.centered}`}>
              <div className={`document ${styles.doc_layout}`}>
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
