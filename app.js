// ListItem.js
import React from 'react';

const ListItem = ({ title, data, ordered }) => (
  <div>
    <h3>{title}</h3>
    {ordered ? (
      <ol>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    ) : (
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    )}
  </div>
);

export default ListItem;

// Section.js
import React from 'react';

const Section = ({ title, content }) => (
  <div>
    <h2>{title}</h2>
    {content}
  </div>
);

export default Section;

// Backlog.js
import React from 'react';
import ListItem from './ListItem';

const Backlog = ({ historias }) => {
  const historiaData = historias.map((historia) => ({
    title: `Historia de Usuario ${historia.id}`,
    data: [
      `Descripción: ${historia.descripcion}`,
      `Prioridad: ${historia.prioridad}`,
      `Estimación de Esfuerzo: ${historia.estimacion}`,
    ],
    ordered: false,
  }));

  return (
    <div>
      <h2>Backlog</h2>
      {historiaData.map((historia) => (
        <ListItem key={historia.title} {...historia} />
      ))}
    </div>
  );
};

export default Backlog;

// SprintPlanning.js
import React from 'react';
import ListItem from './ListItem';

const SprintPlanning = ({ sprints }) => {
  const sprintData = sprints.map((sprint) => ({
    title: `Sprint ${sprint.numero}`,
    data: [
      `Meta del Sprint: ${sprint.meta}`,
      `Duración: ${sprint.duracion} semanas`,
      `Recursos: ${sprint.recursos}`,
      'Tareas:',
      ...sprint.tareas.map((tarea, index) => `  ${index + 1}. ${tarea}`),
    ],
    ordered: true,
  }));

  return (
    <div>
      <h2>Sprint Planning</h2>
      {sprintData.map((sprint) => (
        <ListItem key={sprint.title} {...sprint} />
      ))}
    </div>
  );
};

export default SprintPlanning;

// App.js
import React from 'react';
import Section from './Section';
import Backlog from './Backlog';
import SprintPlanning from './SprintPlanning';

const App = () => {
  const historias = [
    {
      id: 1,
      descripcion: 'Navegar por categorías de productos',
      prioridad: 'Alta',
      estimacion: '5 puntos',
    },
    {
      id: 2,
      descripcion: 'Ver detalles de un producto (imágenes, descripción, precio)',
      prioridad: 'Alta',
      estimacion: '8 puntos',
    },
    {
      id: 3,
      descripcion: 'Agregar productos al carrito de compras',
      prioridad: 'Alta',
      estimacion: '6 puntos',
    },
    {
      id: 4,
      descripcion: 'Guardar productos en lista de deseos (usuario registrado)',
      prioridad: 'Alta',
      estimacion: '7 puntos',
    },
    {
      id: 5,
      descripcion: 'Realizar pago seguro al finalizar la compra',
      prioridad: 'Alta',
      estimacion: '10 puntos',
    },
    {
      id: 6,
      descripcion: 'Gestionar y actualizar inventario (administrador)',
      prioridad: 'Alta',
      estimacion: '12 puntos',
    },
    {
      id: 7,
      descripcion: 'Recibir confirmaciones por correo electrónico',
      prioridad: 'Alta',
      estimacion: '8 puntos',
    },
  ];

  const sprints = [
     {
      numero: 1,
      meta: 'Navegación por categorías de productos y Lista de Deseos',
      tareas: [
        'Crear esquema de diseño',
        'Desarrollar interfaz de usuario',
        'Implementar sistema de navegación',
        'Implementar funcionalidad de lista de deseos', // Movido al primer sprint
      ],
      Duracion: 2,
      Recursos: 'Desarrollador Frontend,Diseñador UI',
    },
    {
      numero: 2,
      meta: 'Detalles del Producto',
      tareas: [
        'Adaptar diseño para dispositivos móviles',
        'Implementar funcionalidad de registro e inicio de sesión',
        'Diseñar y desarrollar vista de detalles del producto',
      ],
      Duracion: 3,
      Recursos : 'Desarrollador Frontend, Desarrollador Backend, Diseñador UI',
    },
    {
      numero: 3,
      meta: 'Carrito de Compras',
      tareas: [
        'Desarrollar sección de productos/servicios',
        'Configurar blog y permitir publicación de contenido',
        'Integrar formulario de contacto',
        'Implementar funcionalidad de agregar productos al carrito',
      ],
      Duracion: 4,
      Recursos: 'Desarrollador Frontend, Desarrollador Backend, Diseñador UI, Especialista en Marketing',
    },
    {
      numero: 4,
      meta: 'Usuario Registrado',
      tareas: [
        'Crear página de registro de usuarios',
        'Desarrollar funcionalidad de inicio de sesión',
        'Integrar sistema de pago seguro',
      ],
      duracion: 3,
    recursos: 'Desarrollador Frontend, Desarrollador Backend, Diseñador UI, Especialista en Seguridad',
    },
    {
      numero: 5,
      meta: 'Administración del Inventario y Confirmaciones por Correo Electrónico',
      tareas: [
        'Crear interfaz de administrador para gestionar inventario',
        'Implementar funciones de actualización y gestión de inventario',
        'Configurar sistema de envío de correos electrónicos para confirmaciones de compra',
      ],
      duracion: 5,
    recursos: 'Desarrollador Frontend, Desarrollador Backend, Diseñador UI, Especialista en Logística',
  },
  ];

  return (
    <div>
      <h1>Gestión de Proyecto</h1>
      <Backlog historias={historias} />
      <SprintPlanning sprints={sprints} />
    </div>
  );
};


export default App;
