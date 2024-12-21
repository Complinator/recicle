import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Sprout, Banknote, Recycle } from 'lucide-react';
import ElectronicComponentCard from './Components/Card';
import { CartProvider } from '../../context/ShoppingCart';
import HeroSection from './Components/HeroMarketplace';
import BenefitsSection from './Components/BenefitsMarketplace';
import ProductForm from './Components/ProductFormMarketplace';
import Categories from './Components/CategoriesMarketplace';
import FeaturedItems from './Components/FeaturedMarketplace';
import ShoppingCartComp from './Components/ShoppingCart';

const Marketplace = () => {
  const components = [
    {
        image: 'Img/Components/resistor.png',
        title: 'Resistor',
        group: 'Componentes Pasivos',
        description: 'Un resistor es un componente eléctrico pasivo de dos terminales que se utiliza para controlar o limitar el flujo de corriente eléctrica en un circuito electrónico.',
    },
    {
        image: 'Img/Components/capacitor.jpg',
        title: 'Capacitor',
        group: 'Componentes Pasivos',
        description: 'Un capacitor es un componente eléctrico pasivo de dos terminales utilizado para almacenar energía eléctrica en un campo eléctrico.',
    },
    {
        image: 'Img/Components/inductor.webp',
        title: 'Inductor',
        group: 'Componentes Pasivos',
        description: 'Un inductor es un componente eléctrico pasivo de dos terminales que almacena energía en forma de un campo magnético cuando fluye corriente eléctrica a través de él.',
    },
    {
        image: 'Img/Components/transistor.jpg',
        title: 'Transistor',
        group: 'Componentes Activos',
        description: 'Un transistor es un dispositivo semiconductor utilizado para amplificar o conmutar señales electrónicas y energía eléctrica.',
    },
    {
        image: 'Img/Components/diode.jpg',
        title: 'Diodo',
        group: 'Componentes Activos',
        description: 'Un diodo es un componente electrónico de dos terminales que conduce corriente principalmente en una dirección (conducción asimétrica).',
    },
    {
        image: 'Img/Components/integratedcircuit.png',
        title: 'Circuito Integrado',
        group: 'Componentes Activos',
        description: 'Un circuito integrado (CI) es un conjunto de circuitos electrónicos en una pequeña pieza plana (o "chip") de material semiconductor que normalmente es silicio.',
    },
];

  const categories = [
    "Teléfonos móviles", "Computadoras y laptops", "Televisores y monitores",
    "Electrodomésticos pequeños", "Impresoras", "Tablets y e-readers",
    "Refrigeradores y congeladores", "Hornos microondas", "Electrodomésticos grandes",
    "Consolas de videojuegos", "Cámaras fotográficas", "Aires acondicionados"
  ];

  const featuredItems = [
    {
      title: "Laptop Lenovo ThinkPad Reacondicionada",
      price: "$150.000 CLP",
      status: "Batería nueva, ligero desgaste exterior",
      location: "Viña del Mar",
      contact: "María González",
      img: "Img/Market/lenovo.webp"
    },
    {
      title: "Celular iPhone 8 Usado",
      price: "$90.000 CLP",
      status: "Pantalla impecable, incluye cargador",
      location: "Valparaíso",
      contact: "Pedro Pérez",
      img: "Img/Market/Iphone.webp"
    }
  ];

  const benefits = [
    { icon: <Sprout size={64} className="text-success" />, text: "Reducción de residuos electrónicos" },
    { icon: <Banknote size={64} className="text-success" />, text: "Ahorro económico al comprar equipos reacondicionados" },
    { icon: <Recycle size={64} className="text-success" />, text: "Promoción de la reutilización y el reciclaje" }
  ];

  return (
    <CartProvider>
      <div className="min-vh-100 bg-light">
      <ShoppingCartComp />
      <HeroSection />
      <BenefitsSection benefits={benefits} />
      <Container className="my-5">
      <h2 className="text-center section-title mb-5">Componentes</h2>
      <Row xs={1} sm={2} md={3} className="g-4">
        {components.map((component, index) => (
          <Col key={index}>
            <ElectronicComponentCard
              image={component.image}
              title={component.title}
              group={component.group}
              description={component.description}
            />
          </Col>
        ))}
      </Row>
      </Container>
      <FeaturedItems items={featuredItems} />
      <ProductForm />
      <Categories categories={categories} />
    </div>
    </CartProvider>
  );
};

export default Marketplace;