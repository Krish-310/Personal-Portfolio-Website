import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { ArrowsFullscreen } from 'react-bootstrap-icons';

export const ProjectScreenshot = ({ src, alt, className = '' }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" className={`screenshot-trigger ${className}`} onClick={() => setOpen(true)} aria-label={`Enlarge ${alt}`}>
        <img src={src} alt={alt} loading="lazy" width="600" height="360" />
        <span className="screenshot-hint"><ArrowsFullscreen aria-hidden="true" /> View larger</span>
      </button>
      <Modal show={open} onHide={() => setOpen(false)} size="xl" centered contentClassName="screenshot-modal" aria-label={alt}>
        <Modal.Header closeButton closeVariant="white"><Modal.Title as="h2">{alt}</Modal.Title></Modal.Header>
        <Modal.Body><img src={src} alt={alt} /></Modal.Body>
      </Modal>
    </>
  );
};
