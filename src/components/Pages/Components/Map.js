import React, { useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import { Card, CloseButton } from 'react-bootstrap';
import L from 'leaflet';

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const ZoomHandler = ({ position, shouldZoom }) => {
    const map = useMap();
    
    React.useEffect(() => {
        if (shouldZoom && position) {
            map.setView([position[0], position[1] + 0.0035], 16, {
                animate: true,
                duration: 1
            });
        }
    }, [shouldZoom, position, map]);
    
    return null;
};

const Map = () => {
    const [selectedPoint, setSelectedPoint] = useState(null);
    const mapRef = useRef(null);

    // Custom icons based on type
    const icons = {
        "Centro de Reciclaje": L.icon({
            iconUrl: 'Img/Markers/locationr.png',
            iconSize: [41, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
            shadowSize: [70, 41],
        }),
        "Servicio Técnico": L.icon({
            iconUrl: 'Img/Markers/locationts.png',
            iconSize: [41, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
            shadowSize: [70, 41],
        }),
        "Punto Verde": L.icon({
            iconUrl: 'Img/Markers/locationcp.png',
            iconSize: [41, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
            shadowSize: [70, 41],
        })
    };

    const collectionPoints = [
        { 
            id: 1, 
            name: 'PC Factory', 
            position: [-33.024336611570924, -71.55611514685],
            description: 'Central de reciclaje de productos electrónicos que recibe todo tipo de producto electrónico',
            location: "Av. Valparaíso 459, Viña del Mar, Valparaíso",
            type: "Centro de Reciclaje"
        },
        { 
            id: 2, 
            name: 'Homecenter Sodimac Reñaca', 
            position: [-32.99743245108269, -71.51319894417719], 
            description: 'Central de reciclaje de productos electrónicos que recibe todo tipo de producto electrónico',
            location: "Av. Alessandri 5, Viña del Mar, Valparaíso",
            type: "Centro de Reciclaje"
        },
        { 
            id: 3, 
            name: 'Departamento de servicios del ambiente', 
            position: [-33.015741257679984, -71.54335208957312], 
            description: 'Central de reciclaje de productos electrónicos que recibe todo tipo de producto electrónico',
            location: "5 Ote. 736, Viña del Mar, Valparaíso",
            type: "Centro de Reciclaje"
        },
        { 
            id: 4, 
            name: 'Tienda Samsung Marina Arauco', 
            position: [-33.01017512294319, -71.54585244724423], 
            description: 'Central de reciclaje de productos electrónicos que recibe todo tipo de producto electrónico',
            location: "Boulevard Marina Arauco - 14 Nte. 880, Loc 22, 2530901 Viña del Mar, Valparaíso",
            type: "Centro de Reciclaje"
        },
        { 
            id: 5, 
            name: 'Entel Viña del Mar Arlegui', 
            position: [-33.023286897259275, -71.55433668528056], 
            description: 'Central de reciclaje de productos electrónicos que recibe todo tipo de producto electrónico',
            location: "Arlegui 561, Viña del Mar, Valparaíso",
            type: "Centro de Reciclaje"
        },
        { 
            id: 6, 
            name: 'Entel Nueva Libertad', 
            position: [-33.00760620119089, -71.54874696176122], 
            description: 'Central de reciclaje de productos electrónicos que recibe todo tipo de producto electrónico',
            location: "Nueva Libertad 1405, Loc 1 y 2, Viña del Mar, Valparaíso",
            type: "Centro de Reciclaje"
        },
        { 
            id: 7, 
            name: 'Movistar', 
            position: [-33.008077078586915, -71.54811203332629], 
            description: 'Central de reciclaje de productos electrónicos que recibe todo tipo de producto electrónico',
            location: "Av. Libertad 1410, Esq. 15 Norte, 2530900 Viña del Mar, Valparaíso",
            type: "Centro de Reciclaje"
        },
        { 
            id: 8, 
            name: 'MacOnline', 
            position: [-33.01012620453635, -71.54659127251652], 
            description: 'Central de reciclaje de productos electrónicos que recibe todo tipo de producto electrónico',
            location: "14 Nte. 880, Viña del Mar, Valparaíso",
            type: "Centro de Reciclaje"
        },
        { 
            id: 9, 
            name: 'Ripley Viña del Mar', 
            position: [-33.02570562231086, -71.55253276202815], 
            description: 'Central de reciclaje de productos electrónicos que recibe todo tipo de producto electrónico',
            location: "Pl. Sucre 290, Viña del Mar, Valparaíso",
            type: "Centro de Reciclaje"
        },
        { 
            id: 10, 
            name: 'Falabella Viña del Mar', 
            position: [-33.025273792219316, -71.55267223702185], 
            description: 'Central de reciclaje de productos electrónicos que recibe todo tipo de producto electrónico',
            location: "Pl. Sucre 250, Viña del Mar, Valparaíso",
            type: "Centro de Reciclaje"
        },
        { 
            id: 11, 
            name: 'Paris Marina Arauco', 
            position: [-33.008493877718166, -71.54822346809773], 
            description: 'Central de reciclaje de productos electrónicos que recibe todo tipo de producto electrónico',
            location: "Av. Libertad 1390, Viña del Mar, Valparaíso",
            type: "Centro de Reciclaje"
        },
        { 
            id: 12, 
            name: 'WOM Viña del Mar', 
            position: [-33.00564970584708, -71.54542298166186], 
            description: 'Central de reciclaje de productos electrónicos que recibe todo tipo de producto electrónico',
            location: "Av. Benidorm 961, Local 121, Viña del Mar, Valparaíso",
            type: "Centro de Reciclaje"
        },
        { 
            id: 13, 
            name: 'SERVTEC Viña del Mar', 
            position: [-33.03812373070881, -71.57911961593973], 
            description: 'Servicio técnico especializado en todo tipo de productos electrónicos portátiles',
            location: "21 de Mayo 18D Recreo Alto, Viña del Mar, Valparaíso",
            type: "Servicio Técnico"
        },
        { 
            id: 14, 
            name: 'Sertecvina', 
            position: [-33.024888228589866, -71.55398600412022], 
            description: 'Servicio técnico especializado en todo tipo de productos electrónicos portátiles',
            location: "Calle quinta 209, Viña del mar, Chile",
            type: "Servicio Técnico"
        },
        { 
            id: 15, 
            name: 'Labtronic SPA', 
            position: [-33.012810433975886, -71.54335299062797], 
            description: 'Servicio técnico especializado en todo tipo de productos electrónicos portátiles',
            location: "San Antonio 1001 Segundo, piso oficina 45, Viña del Mar, Valparaíso",
            type: "Servicio Técnico"
        },
        { 
            id: 16, 
            name: 'Electrónica Villanelo', 
            position: [-33.02495827931351, -71.55707393480589], 
            description: 'Servicio técnico especializado en todo tipo de productos electrónicos portátiles',
            location: "Villanelo 271, 2571538 Valparaíso, Viña del Mar, Valparaíso",
            type: "Servicio Técnico"
        },
        { 
            id: 17, 
            name: 'st5 serv electronicos', 
            position: [-33.023646471760856, -71.55351424459876], 
            description: 'Servicio técnico especializado en todo tipo de productos electrónicos domésticos',
            location: "Arlegui 610, Viña del Mar, Valparaíso",
            type: "Servicio Técnico"
        },
        { 
            id: 18, 
            name: 'Global Chile Electronica', 
            position: [-33.01682866779645, -71.54493193480639], 
            description: 'Servicio técnico especializado en todo tipo de productos electrónicos domésticos',
            location: "7 Nte. 1097, Viña del Mar, Valparaíso",
            type: "Servicio Técnico"
        },
        { 
            id: 19, 
            name: 'Punto verde de reciclaje Lapislazuli', 
            position: [-32.957230080964806, -71.54807860278564], 
            description: 'Punto verde ubicado en Lapislázuli, recibe diferentes tipos de deshechos incuídos deshechos electrónicos',
            location: "Lapislázuli 1593, Viña del Mar, Valparaíso",
            type: "Punto Verde"
        },
        { 
            id: 20, 
            name: 'Punto verde de reciclaje Miraflores', 
            position: [-33.03150608904094, -71.53087332872262], 
            description: 'Punto verde ubicado en la plaza de Miraflores, recibe diferentes tipos de deshechos incuídos deshechos electrónicos',
            location: "Pl. Miraflores 51, 2562060 Viña del Mar, Valparaíso",
            type: "Punto Verde"
        },
        { 
            id: 21, 
            name: 'Punto verde de reciclaje Chorrillos', 
            position: [-33.03753576422761, -71.52800680050386], 
            description: 'Punto verde ubicado en Chorrillos, recibe diferentes tipos de deshechos incuídos deshechos electrónicos',
            location: "Pje. 13 7-10, Viña del Mar, Valparaíso",
            type: "Punto Verde"
        },
        { 
            id: 22, 
            name: 'Punto verde de reciclaje 6 Norte', 
            position: [-33.01756635541957, -71.54976313482886], 
            description: 'Punto verde ubicado en 6 norte, entre 1 poniente y libertad, recibe diferentes tipos de deshechos incuídos deshechos electrónicos',
            location: "6 Nte. 760, Viña del Mar, Valparaíso",
            type: "Punto Verde"
        },
        { 
            id: 23, 
            name: 'Punto verde de reciclaje Las Loicas', 
            position: [-33.00531542078547, -71.52948383960256], 
            description: 'Punto verde ubicado en las loicas, recibe diferentes tipos de deshechos incuídos deshechos electrónicos',
            location: "Las Loicas 4, Viña del Mar, Valparaíso",
            type: "Punto Verde"
        },
    ];
    
    const handleMarkerClick = (point) => {
        setSelectedPoint(point);
    };

    const handleClose = (point) => {
        setSelectedPoint(null);
        // Reset zoom and center when closing the panel
        mapRef.current.setView(point.position, 12, {
            animate: true,
            duration: 1
        });
    };

    const InfoPanel = ({ point, onClose }) => {
        const [isVisible, setIsVisible] = useState(false);

        React.useEffect(() => {
            if (point) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }, [point]);

        if (!point) return null;
        
        return (
            <div 
                className="position-absolute top-0 h-100" 
                style={{ 
                    width: window.innerWidth > 768? '30%' : '100%',
                    right: isVisible ? '0' : '-30%',
                    zIndex: 1000,
                    backgroundColor: 'white',
                    boxShadow: '-2px 0 5px rgba(0,0,0,0.1)',
                    transition: 'right 0.3s ease-in-out',
                    overflowY: 'auto', // Enable vertical scrolling
                }}
            >
                <Card className="h-100 border-0">
                    <Card.Header className="bg-white border-bottom">
                        <div className="d-flex justify-content-between align-items-center">
                            <Card.Title className="mb-0">{point.name}</Card.Title>
                            <CloseButton onClick={() => {onClose(point)}} />
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <div className="mb-4">
                            <h6 className="fw-bold mb-2">Tipo</h6>
                            <p className="text-muted mb-0">{point.type}</p>
                        </div>
                        <div className="mb-4">
                            <h6 className="fw-bold mb-2">Descripción</h6>
                            <p className="text-muted mb-0">{point.description}</p>
                        </div>
                        <div className="mb-4">
                            <h6 className="fw-bold mb-2">Ubicación</h6>
                            <p className="text-muted mb-0">{point.location}</p>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        );
    };

    return (
        <div className="position-relative" style={{ height: '400px' }}>
            <MapContainer 
                center={[-33.000093877718166, -71.54822346809773]} 
                zoom={12} 
                style={{ height: '100%', width: '100%' }}
                ref={mapRef}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {collectionPoints.map(point => (
                    <Marker 
                        key={point.id} 
                        position={point.position}
                        icon={icons[point.type]}
                        eventHandlers={{
                            click: () => handleMarkerClick(point)
                        }}
                    />
                ))}
                <ZoomHandler 
                    position={selectedPoint?.position} 
                    shouldZoom={!!selectedPoint}
                />
            </MapContainer>
            <InfoPanel 
                point={selectedPoint} 
                onClose={handleClose} 
            />
        </div>
    );

};

export default Map;