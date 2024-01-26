import React from 'react';
import TemplateYoutube from '@/components/templates/TemplateYoutube';
import TemplateFeatures from '@/components/templates/TemplateFeatures';
import TemplateConfiguration from '@/components/templates/TemplateConfiguration';
import TemplateRelated from '@/components/templates/TemplateRelated';
import TemplateSeparator from '@/components/templates/TemplateSeparator';
import TemplateHero from '@/components/templates/templateHero/TemplateHero';
import TemplateFeaturesAnimation from '@/components/templates/templateFeaturesAnimation';
import PoseidonLogo from './PoseidonLogo';

const apolloFeatures2Data = [
    {
        title: 'Fully Responsive',
        description: 'Diamond is crafted to provide optimal viewing and interaction experience for a wide range of devices.',
        src: '/images/templates/diamond/diamond-features2-responsive.png'
    },
    {
        title: 'Cross Browser Compatible',
        description: 'First class support for Firefox, Safari, Chrome and Edge.',
        src: '/images/templates/apollo/apollo-features2-compatible.png'
    },
    {
        title: 'Lifetime Support',
        description: 'Diamond has a dedicated forum where lifetime support is delivered by engineers at PrimeTek in a timely manner.',
        src: '/images/templates/apollo/apollo-features2-lifetime.png'
    },
    {
        title: 'Customizable Design',
        description: 'Fully customizable with a mixture of Sass and CSS variables.',
        src: '/images/templates/apollo/apollo-features2-customizable.png'
    },
    {
        title: 'Ready to Use Pages',
        description: 'Landing, login, invoice, help, user management and error pages are provided as template pages to get started with building your app.',
        src: '/images/templates/diamond/diamond-features2-ready.png'
    },
    {
        title: 'Mobile Experience',
        description: 'Touch optimized enhanced mobile experience with responsive design.',
        src: '/images/templates/diamond/diamond-features2-mobile.png'
    }
];

const apolloRelatedData = [
    {
        src: '/images/templates/apollo-react.jpg',
        href: '/templates/apollo'
    },
    {
        src: '/images/templates/avalon-react.jpg',
        href: 'https://www.primefaces.org/layouts/avalon-react'
    },
    {
        src: '/images/templates/roma-react.jpg',
        href: 'https://www.primefaces.org/layouts/roma-react'
    }
];

const animationFeaturesData1 = [
    {
        id: 1,
        title: 'PrimeFlex CSS Utilities',
        description: 'PrimeFlex is a CSS utility library featuring various helpers such as a grid system, flexbox, spacing, elevation and more.',
        src: '/images/templates/apollo/features-animation-utilities.png'
    },
    {
        id: 2,
        title: 'PrimeBlocks',
        description: 'Fully compatible with PrimeBlocks, choose from the wide range of blocks and customize the way you like. Note that PrimeBlocks is not included in the template and requires a separate purchase.',
        src: '/images/templates/apollo/features-animation-blocks.png'
    },
    {
        id: 3,
        title: 'PrimeIcons',
        description: 'Diamond ships with PrimeIcons, PrimeTek’s modern icon library including a wide range of icons for your applications.',
        src: '/images/templates/apollo/features-animation-icons.png'
    },
    {
        id: 4,
        title: 'Figma File',
        description:
            'Diamond uses Figma as the design tool. It will be possible to download the Figma file after your purchase. You can preview the Figma file before the purchase. Note that PrimeVue UI components are excluded from the Diamond Figma file as they are available in PrimeOne for Figma only.',
        src: '/images/templates/diamond/features-animation-figma.png'
    }
];

const animationFeaturesData2 = [
    {
        id: 1,
        title: 'Light and Dark Modes',
        description: 'The stunning dark and light modes will impress your users.',
        src: '/images/templates/diamond/features-animation-darkmode.png'
    },
    {
        id: 2,
        title: 'Component Themes',
        description: 'Verona offers 20 built-in component themes with dark and light options. You are also free to create you own theme by defining couple SASS variables.',
        src: '/images/templates/diamond/features-animation-component-themes.png'
    },
    {
        id: 3,
        title: '7 Menu Orientations',
        description: 'Choose from Static and Slim menu orientations.',
        src: '/images/templates/diamond/features-animation-orientations.png',
        type: 'inline-animation',
        inlineFeaturesData: [
            {
                id: 1,
                title: 'Static',
                src: '/images/templates/diamond/Static.png'
            },
            {
                id: 2,
                title: 'Slim',
                src: '/images/templates/diamond/Slim.png'
            },
            {
                id: 3,
                title: 'Horizontal',
                src: '/images/templates/diamond/Horizontal.png'
            },
            {
                id: 4,
                title: 'Drawer',
                src: '/images/templates/diamond/Drawer.png'
            },
            {
                id: 5,
                title: 'Overlay',
                src: '/images/templates/diamond/Overlay.png'
            },
            {
                id: 6,
                title: 'Compact',
                src: '/images/templates/diamond/Compact.png'
            },
            {
                id: 7,
                title: 'Reveal',
                src: '/images/templates/diamond/Reveal.png'
            }
        ]
    },
    {
        id: 4,
        title: 'Layout Themes',
        description: 'Verona offers 23 special layout themes featuring gorgeous gradients.',
        src: '/images/templates/diamond/features-animation-orientations.png'
    }
];

const PoseidonSeparator = () => {
    return (
        <TemplateSeparator
            separatorLogo={
                <svg width="24" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.0876 0L13.9043 2.1136L12.6009 3.85069L12.0386 3.42929L12.0363 13.583L16.231 15.1112L19.1018 1.34789L22.1539 4.382L21.3935 6.14085L20.4104 5.71186L17.8451 18.0106L12.0363 15.8953L12.0345 24H10.134L10.1358 15.886L4.30245 18.0106L1.74345 5.71186L0.450113 6.14085L0 4.382L3.05322 1.34691L5.91759 15.1112L10.1358 13.5737L10.1382 3.42619L9.57319 3.85069L8.26983 2.1136L11.0876 0Z" fill="url(#paint0_linear_1894_9038)" />
                    <defs>
                        <linearGradient id="paint0_linear_1894_9038" x1="1107.7" y1="0" x2="1107.7" y2="2400" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#5CACF4" />
                            <stop offset="1" stop-color="#1B74C5" />
                        </linearGradient>
                    </defs>
                </svg>
            }
        />
    );
};

const templateHeroData = {
    logo: <PoseidonLogo />,
    pattern: '/images/templates/poseidon/poseidon-hero-pattern.png',
    dashboard1: '/images/templates/poseidon/poseidon-hero-dashboard1.png',
    dashboard2: '/images/templates/poseidon/poseidon-hero-dashboard2.png',
    description: 'Diamond is a beautiful Vue.js admin template with a modern look and feel optimized for creating Vue apps.',
    liveHref: 'https://diamond.primereact.org',
    docHref: 'https://diamond.primereact.org/documentation'
};

const PoseidonPage = () => {
    const featuresAnimationTitle = (
        <h2>
            Features that the <br />
            Diamond template gives you
        </h2>
    );

    return (
        <div className="poseidon template">
            <TemplateHero {...templateHeroData} />
            <PoseidonSeparator />
            <TemplateFeaturesAnimation featuresData={animationFeaturesData2} title={featuresAnimationTitle} />
            <PoseidonSeparator />
            <TemplateConfiguration
                title="Vue.js App with No Configuration"
                description="Diamond is powered by Angular CLI to get started in no time following the best practices like service based component interaction modular design and strict mode support"
            />
            <PoseidonSeparator />
            <TemplateFeaturesAnimation featuresData={animationFeaturesData1} />
            <PoseidonSeparator />
            <TemplateFeatures featuresData={apolloFeatures2Data} displayType="vertical" />
            <PoseidonSeparator />
            <TemplateRelated relatedData={apolloRelatedData} />
        </div>
    );
};

export default PoseidonPage;