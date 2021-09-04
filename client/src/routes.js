import React from 'react';


const DashboardDefault = React.lazy(() => import('./App/components/Dashboard/Default'));
const Noeuds = React.lazy(() => import('./App/components/Noeuds'));
const DetailsNoeud = React.lazy(() => import('./App/components/Noeuds/details'));
const Gateways = React.lazy(() => import('./App/components/Gateways'));
const DetailsGateway = React.lazy(() => import('./App/components/Gateways/details'));
const Maps = React.lazy(() => import('./App/components/Maps/MapView'));

// const UIBasicButton = React.lazy(() => import('./App/components/UIElements/Basic/Button'));
// const UIBasicBadges = React.lazy(() => import('./App/components/UIElements/Basic/Badges'));
// const UIBasicBreadcrumbPagination = React.lazy(() => import('./App/components/UIElements/Basic/BreadcrumbPagination'));

// const UIBasicCollapse = React.lazy(() => import('./App/components/UIElements/Basic/Collapse'));
// const UIBasicTabsPills = React.lazy(() => import('./App/components/UIElements/Basic/TabsPills'));
// const UIBasicBasicTypography = React.lazy(() => import('./App/components/UIElements/Basic/Typography'));

// const FormsElements = React.lazy(() => import('./App/components/Forms/FormsElements'));

// const BootstrapTable = React.lazy(() => import('./App/components/Tables/BootstrapTable'));

// const Nvd3Chart = React.lazy(() => import('./App/components/Charts/Nvd3Chart/index'));

// const GoogleMap = React.lazy(() => import('./App/components/Maps/GoogleMap/index'));

// const OtherSamplePage = React.lazy(() => import('./App/components/Other/SamplePage'));
// const OtherDocs = React.lazy(() => import('./App/components/Other/Docs'));

const routes = [
    { path: '/', exact: true, name: 'Default', component: DashboardDefault },
    { path: '/noeuds', exact: true, name: 'Noeuds', component: Noeuds },
    { path: '/noeuds/details/:id', exact: true, name: 'Noeud', component: DetailsNoeud },
    { path: '/gateways', exact: true, name: 'Gateways', component: Gateways },
    { path: '/gateways/details/:id', exact: true, name: 'Gateway', component: DetailsGateway },
    { path: '/maps/gateway', exact: true, name: 'Maps', component: Maps },
    // { path: '/basic/button', exact: true, name: 'Basic Button', component: UIBasicButton },
    // { path: '/basic/badges', exact: true, name: 'Basic Badges', component: UIBasicBadges },
    // { path: '/basic/breadcrumb-paging', exact: true, name: 'Basic Breadcrumb Pagination', component: UIBasicBreadcrumbPagination },
    // { path: '/basic/collapse', exact: true, name: 'Basic Collapse', component: UIBasicCollapse },
    // { path: '/basic/tabs-pills', exact: true, name: 'Basic Tabs & Pills', component: UIBasicTabsPills },
    // { path: '/basic/typography', exact: true, name: 'Basic Typography', component: UIBasicBasicTypography },
    // { path: '/forms/form-basic', exact: true, name: 'Forms Elements', component: FormsElements },
    // { path: '/tables/bootstrap', exact: true, name: 'Bootstrap Table', component: BootstrapTable },
    // { path: '/charts/nvd3', exact: true, name: 'Nvd3 Chart', component: Nvd3Chart },
    // { path: '/maps/google-map', exact: true, name: 'Google Map', component: GoogleMap },
    // { path: '/sample-page', exact: true, name: 'Sample Page', component: OtherSamplePage },
    // { path: '/docs', exact: true, name: 'Documentation', component: OtherDocs },
];

export default routes;