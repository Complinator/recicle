import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Download } from 'lucide-react';

const DownloadSection = () => {
  const handleDownload = () => {
    const pdfUrl = '/MaterialDescargable.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'RAEE-guia.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Row className="justify-content-center my-5">
      <Col lg={10}>
        <div className="bg-white p-4 rounded-lg shadow-sm text-center">
          <h3 className="mb-3" style={{ color: "#00A19B" }}>Descarga Nuestra Guía Completa</h3>
          <p className="mb-4">Obtén nuestra guía detallada sobre el manejo responsable de RAEE en formato PDF</p>
          <Button
            variant="outline-primary"
            size="lg"
            onClick={handleDownload}
            className="d-flex align-items-center mx-auto"
            style={{
              borderColor: "#00A19B",
              color: "#00A19B",
              transition: "all 0.3s ease"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#00A19B";
              e.currentTarget.style.color = "white";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#00A19B";
            }}
          >
            <Download size={24} className="me-2" />
            Descargar PDF
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default DownloadSection;